import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { projects } from '../data/projects';
import FallbackHeroScene from './FallbackHeroScene';

const checkWebGL = () => {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
};

export default function HeroScene({ onSelectProject }) {
  const mountRef = useRef(null);
  const [webGlSupported] = useState(checkWebGL);

  useEffect(() => {
    if (!webGlSupported) return;

    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070D, 0.035);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for entire interactive universe
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // Central Core Sphere & Icosahedron Wireframe
    const coreGeo = new THREE.IcosahedronGeometry(1.3, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x7C3AED,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    worldGroup.add(coreMesh);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(0.75, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      wireframe: false,
      transparent: true,
      opacity: 0.18,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    worldGroup.add(innerMesh);

    // Central core particle halo
    const haloCount = 60;
    const haloGeo = new THREE.BufferGeometry();
    const haloPositions = new Float32Array(haloCount * 3);
    for (let i = 0; i < haloCount; i++) {
      const angle = (i / haloCount) * Math.PI * 2;
      haloPositions[i * 3] = Math.cos(angle) * 1.6;
      haloPositions[i * 3 + 1] = (Math.random() - 0.5) * 0.4;
      haloPositions[i * 3 + 2] = Math.sin(angle) * 1.6;
    }
    haloGeo.setAttribute('position', new THREE.BufferAttribute(haloPositions, 3));
    const haloMat = new THREE.PointsMaterial({
      color: 0x06B6D4,
      size: 0.08,
      transparent: true,
      opacity: 0.7,
    });
    const haloPoints = new THREE.Points(haloGeo, haloMat);
    worldGroup.add(haloPoints);

    // Background ambient particle field
    const particleCount = 200;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pPos[i] = (Math.random() - 0.5) * 22;
      pPos[i + 1] = (Math.random() - 0.5) * 14;
      pPos[i + 2] = (Math.random() - 0.5) * 12;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x94A3B8,
      size: 0.045,
      transparent: true,
      opacity: 0.35,
    });
    const backgroundParticles = new THREE.Points(pGeo, pMat);
    scene.add(backgroundParticles);

    // 9 Project Nodes in orbit around the core
    const nodeCount = 9;
    const nodeRadius = 3.6;
    const nodeMeshes = [];
    const nodeData = [];

    const nodeColors = [
      0x38BDF8, // 01 Portfolio
      0x06B6D4, // 02 Tracker
      0x7C3AED, // 03 GP Tech
      0x8B5CF6, // 04 SellSpot
      0x38BDF8, // 05 Inventory
      0x06B6D4, // 09 Domo
      0xA855F7, // 12 DevaSetu
      0x10B981, // AI Project
      0x6366F1, // 12 Capstone Hub
    ];

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const yOffset = Math.sin(i * 1.5) * 0.9;
      const x = Math.cos(angle) * nodeRadius;
      const z = Math.sin(angle) * nodeRadius;

      const isFeatured = i === 6;
      const nSize = isFeatured ? 0.22 : 0.15;
      const nGeo = new THREE.SphereGeometry(nSize, 16, 16);
      const nMat = new THREE.MeshBasicMaterial({
        color: nodeColors[i % nodeColors.length],
      });
      const node = new THREE.Mesh(nGeo, nMat);
      node.position.set(x, yOffset, z);

      const ringGeo = new THREE.RingGeometry(nSize + 0.05, nSize + 0.12, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color: nodeColors[i % nodeColors.length],
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      node.add(ring);

      worldGroup.add(node);
      nodeMeshes.push(node);
      nodeData.push({
        baseAngle: angle,
        baseY: yOffset,
        speed: 0.003 + (i % 3) * 0.001,
        radius: nodeRadius + (i % 2 === 0 ? 0.3 : -0.2),
        project: projects[i] || projects[0],
      });
    }

    // Dynamic Connection Lines
    const connectionLines = [];
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x7C3AED,
      transparent: true,
      opacity: 0.22,
    });

    for (let i = 0; i < nodeCount; i++) {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        nodeMeshes[i].position.clone(),
      ]);
      const line = new THREE.Line(lineGeo, lineMat);
      worldGroup.add(line);
      connectionLines.push(line);
    }

    const perimeterPoints = [];
    for (let i = 0; i <= nodeCount; i++) {
      perimeterPoints.push(nodeMeshes[i % nodeCount].position.clone());
    }
    const perimeterGeo = new THREE.BufferGeometry().setFromPoints(perimeterPoints);
    const perimeterMat = new THREE.LineBasicMaterial({
      color: 0x06B6D4,
      transparent: true,
      opacity: 0.15,
    });
    const perimeterLine = new THREE.Line(perimeterGeo, perimeterMat);
    worldGroup.add(perimeterLine);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      targetMouseX = ((clientX / width) - 0.5) * 2;
      targetMouseY = ((clientY / height) - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handleClick = (e) => {
      if (!onSelectProject) return;
      const rect = container.getBoundingClientRect();
      mouseVector.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseVector.y = -((e.clientY - rect.top) / height) * 2 + 1;
      raycaster.setFromCamera(mouseVector, camera);

      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const index = nodeMeshes.indexOf(intersects[0].object);
        if (index !== -1 && nodeData[index]) {
          onSelectProject(nodeData[index].project);
        }
      }
    };

    container.addEventListener('click', handleClick);

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      camera.position.x = mouseX * 0.6;
      camera.position.y = 1.2 - mouseY * 0.4;
      camera.lookAt(0, 0, 0);

      coreMesh.rotation.y = elapsed * 0.12;
      coreMesh.rotation.x = elapsed * 0.06;
      innerMesh.rotation.y = -elapsed * 0.15;
      haloPoints.rotation.y = elapsed * 0.08;

      const currentPerimeter = [];
      for (let i = 0; i < nodeCount; i++) {
        const d = nodeData[i];
        const currentAngle = d.baseAngle + elapsed * 0.18;
        const curX = Math.cos(currentAngle) * d.radius;
        const curZ = Math.sin(currentAngle) * d.radius;
        const curY = d.baseY + Math.sin(elapsed * 1.5 + i) * 0.15;

        nodeMeshes[i].position.set(curX, curY, curZ);

        const posAttr = connectionLines[i].geometry.attributes.position;
        posAttr.setXYZ(0, 0, 0, 0);
        posAttr.setXYZ(1, curX, curY, curZ);
        posAttr.needsUpdate = true;

        currentPerimeter.push(new THREE.Vector3(curX, curY, curZ));
      }

      currentPerimeter.push(currentPerimeter[0].clone());
      perimeterLine.geometry.setFromPoints(currentPerimeter);

      backgroundParticles.rotation.y = elapsed * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('click', handleClick);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [webGlSupported, onSelectProject]);

  if (!webGlSupported) {
    return <FallbackHeroScene onSelectProject={onSelectProject} />;
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Project Universe"
    />
  );
}
