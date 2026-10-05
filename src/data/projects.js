export const DOMO_APP_URL = "https://1fa9e747-b6aa-4ae1-8d85-38f47a1119f6.domoapps.prod5.domo.com/?USER_ID=1039909993&USER_GROUP=gwcteq-partner&USER_FULLNAME=Ganithala+Praneeth&USER_NAME=ganithala.praneeth%40gwcdata.ai&DEFAULT_PAGE=1436968545&USER_ROLE=Privileged&USER_ROLE_ID=2&USER_LOCALE=en-US&USER_RIGHTS=31&USER_PAGESETTING_KPISIZE=%7B%7D&UNIQUE_VISITOR_ID=D5CD9FA17D6AE255A4742801CA9A58C66992DBAC&DAYS_SINCE_USER_CREATED=29&userId=1039909993&userEmail=ganithala.praneeth%40gwcdata.ai&userName=ganithala.praneeth%40gwcdata.ai&customer=gwcteq-partner&locale=en-US&platform=desktop&pageId=#/manage";

export const projects = [
  {
    id: "personal-portfolio",
    number: "01",
    week: "Week 01",
    weekNumber: 1,
    title: "Personal Portfolio",
    category: "Frontend / Portfolio",
    shortCategory: "Portfolio",
    url: "https://praneeth-portfolio-beta-nine.vercel.app/",
    description: "My initial portfolio project showcasing my frontend development skills, personal profile, projects, and web development journey.",
    highlightBadge: "Foundation Milestone",
    whatIBuilt: [
      "Structured responsive personal developer profile and showcase layout",
      "Handcrafted CSS layouts, navigation, and portfolio sections",
      "Continuous deployment pipeline hooked up with Vercel and Git"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive UI", "Git", "Vercel"],
    developmentFocus: ["Frontend", "UI/UX Layout", "Deployment"],
    featured: false,
    visualType: "portfolio",
    stats: {
      pages: "Multi-section",
      styling: "Custom CSS",
      deploy: "Vercel Live"
    }
  },
  {
    id: "gwc-tracker",
    number: "02",
    week: "Week 02",
    weekNumber: 2,
    title: "GWC Tracker",
    category: "Full Stack / Tracking Application",
    shortCategory: "Tracker",
    url: "https://gwc-tracker.vercel.app/",
    description: "A tracker application built during the training journey to practice application structure, UI development, data handling, and user-focused workflows.",
    highlightBadge: "State & Workflow",
    whatIBuilt: [
      "Interactive milestone and task progress tracker interface",
      "Modular React state transitions for real-time status updates",
      "Dynamic user-focused workflow visualizations and metrics"
    ],
    technologies: ["React", "JavaScript", "CSS", "State Management", "Vercel"],
    developmentFocus: ["Frontend", "State Management", "UI Workflows", "Deployment"],
    featured: false,
    visualType: "tracker",
    stats: {
      architecture: "React State",
      focus: "Activity Tracking",
      deploy: "Vercel Live"
    }
  },
  {
    id: "gp-tech-solutions",
    number: "03",
    week: "Week 03",
    weekNumber: 3,
    title: "GP Tech Solutions",
    category: "Business Website",
    shortCategory: "Business",
    url: "https://gp-tech-solutions.vercel.app/#services",
    description: "A professional business website focused on responsive UI, service presentation, structured layouts, and modern frontend development.",
    highlightBadge: "Product UI Architecture",
    whatIBuilt: [
      "High-conversion enterprise service landing pages and offerings grid",
      "Responsive multi-section navigation with smooth anchor scrolling",
      "Structured technology solutions showcase with reusable UI components"
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "Component Architecture", "Vercel"],
    developmentFocus: ["Frontend", "Responsive Layouts", "Service Presentation", "Component Reusability"],
    featured: false,
    visualType: "business",
    stats: {
      type: "B2B Solutions",
      layout: "Modular Grid",
      deploy: "Vercel Live"
    }
  },
  {
    id: "sellspot",
    number: "04",
    week: "Week 04",
    weekNumber: 4,
    title: "SellSpot",
    category: "Marketplace / MERN",
    shortCategory: "Marketplace",
    url: "https://sell-spot-frontend.vercel.app/",
    description: "A marketplace-style application involving product management, user interactions, backend APIs, authentication, and full-stack application architecture.",
    highlightBadge: "First MERN Stack Milestone",
    whatIBuilt: [
      "End-to-end marketplace interface with product catalog and listings",
      "Secure JWT-based user authentication and session management",
      "RESTful backend services connected to MongoDB for product data"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API", "Tailwind CSS"],
    developmentFocus: ["Frontend", "Backend", "Database", "Authentication", "REST APIs"],
    featured: false,
    visualType: "marketplace",
    stats: {
      stack: "Full MERN",
      security: "JWT Auth",
      deploy: "Vercel Live"
    }
  },
  {
    id: "inventory-management",
    number: "05",
    week: "Week 05",
    weekNumber: 5,
    title: "Inventory Management System",
    category: "Management System",
    shortCategory: "Management",
    url: "https://inventory-management-frontend-alpha-one.vercel.app/regions",
    description: "An inventory management application designed to manage operational data through structured interfaces, dashboards, and management workflows.",
    highlightBadge: "Operational Dashboard",
    whatIBuilt: [
      "Regional inventory monitoring and stock tracking control panel",
      "Structured tables, operational filters, and data manipulation workflows",
      "Backend APIs for updating item levels, SKUs, and distribution points"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS"],
    developmentFocus: ["Frontend", "Backend", "Database", "Operations Dashboard", "Region Management"],
    featured: false,
    visualType: "inventory",
    stats: {
      scope: "Multi-Region",
      data: "Real-time Stock",
      deploy: "Vercel Live"
    }
  },
  {
    id: "domo-application",
    number: "06",
    week: "Week 09",
    weekNumber: 9,
    title: "Domo Application",
    category: "Data / Dashboard Application",
    shortCategory: "Enterprise Dashboard",
    url: DOMO_APP_URL,
    requiresAuth: true,
    authNote: "Requires authorized access.",
    buttonLabel: "Open Domo Application",
    description: "A Domo-based application demonstrating dashboard-oriented development, data visualization, management interfaces, and enterprise application workflows.",
    highlightBadge: "Enterprise Analytics",
    whatIBuilt: [
      "Enterprise dashboard views with KPI metrics and data cards",
      "Custom Domo app management interface tailored to role privileges",
      "Data visual widgets delivering operational clarity for stakeholders"
    ],
    technologies: ["Domo", "JavaScript", "Data Visualization", "Enterprise Workflows", "Dashboards"],
    developmentFocus: ["Frontend", "Data Visualization", "Management Interfaces", "Enterprise Dashboards"],
    featured: false,
    visualType: "domo",
    stats: {
      platform: "Domo Cloud",
      role: "Privileged Access",
      type: "Enterprise KPIs"
    }
  },
  {
    id: "devasetu",
    number: "07",
    week: "Week 12",
    weekNumber: 12,
    title: "DevaSetu",
    category: "MERN / SaaS / Temple Services Platform",
    shortCategory: "Temple SaaS",
    url: "https://frontend-temple-saas.vercel.app/",
    description: "A full-stack temple service platform connecting devotees, temple authorities, and administrators through a centralized digital experience.",
    highlightBadge: "Capstone Full-Stack SaaS",
    whatIBuilt: [
      "Multi-role architecture serving Devotees, Temple Authorities, and Admins",
      "End-to-end darshan and pooja service booking workflows",
      "Role-based authorization guardrails and secure JWT authentication",
      "Comprehensive administrative control panel and service management"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "REST APIs", "Tailwind CSS", "Cloud Deployment"],
    developmentFocus: ["Frontend", "Backend", "Database", "Authentication", "Deployment", "Role-Based Access", "Bookings", "Dashboards"],
    featured: true,
    visualType: "devasetu",
    stats: {
      architecture: "Multi-Role SaaS",
      auth: "Role-Based JWT",
      deploy: "Vercel Live"
    }
  },
  {
    id: "ai-prescription-scanner",
    number: "08",
    week: "AI Milestone",
    weekNumber: null,
    isAiProject: true,
    aiTag: "AI-assisted prototype",
    title: "Prescription Scanner & Medicine Suggestion System",
    category: "AI / Healthcare Application",
    shortCategory: "AI Healthcare",
    url: "https://frontend-ai-assessment-project.vercel.app/login",
    description: "An AI-powered application designed to analyze prescriptions and provide medicine-related suggestions through an intelligent workflow.",
    disclaimer: "AI-assisted prototype. For training assessment demo only; does not provide medical advice or clinical validation.",
    highlightBadge: "AI & OCR Integration",
    whatIBuilt: [
      "Prescription upload and intelligent document OCR analysis workflow",
      "Structured medicine data extraction and dosage schedule suggestions",
      "Clean, accessible user portal with disclaimer-oriented health UX"
    ],
    technologies: ["React", "AI APIs", "OCR Analysis", "Node.js", "Express", "Intelligent Processing"],
    developmentFocus: ["AI Workflow", "OCR Processing", "Frontend UX", "Backend Integration"],
    featured: false,
    visualType: "ai",
    stats: {
      pipeline: "OCR + LLM",
      output: "Structured Rx",
      deploy: "Vercel Live"
    }
  },
  {
    id: "capstone-portfolio-hub",
    number: "09",
    week: "Week 12",
    weekNumber: 12,
    title: "Full-Stack Portfolio Showcase",
    category: "Creative Engineering / 3D Hub",
    shortCategory: "Portfolio Capstone",
    url: "#hero",
    isSelf: true,
    description: "The synthesis platform representing the complete 12-week Full Stack Development Trainee assessment at GWC Data.ai, featuring 3D visuals and engineering timeline.",
    highlightBadge: "12-Week Synthesis",
    whatIBuilt: [
      "Interactive 3D node universe and camera parallax with Three.js",
      "Digital engineering timeline traversing Weeks 01 through 12",
      "Technology constellation graph connecting all project dependencies"
    ],
    technologies: ["React", "Vite", "Three.js", "Tailwind CSS", "Framer Motion", "Lucide React"],
    developmentFocus: ["3D Visualization", "Timeline Architecture", "Component Engineering", "Performance"],
    featured: false,
    visualType: "capstone",
    stats: {
      experience: "Interactive 3D",
      scope: "9 Projects",
      deploy: "Live Application"
    }
  }
];

export const getProjectById = (id) => projects.find((p) => p.id === id);
