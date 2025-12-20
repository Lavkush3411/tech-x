import React from "react";
import {
  Project,
  Service,
  SkillGroup,
  Testimonial,
  MethodologyStep,
} from "./types";
import {
  Smartphone,
  Server,
  Zap,
  Layout,
  Database,
  Search,
  ShieldCheck,
  Workflow,
  Cloud,
} from "lucide-react";

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Web Development",
    description: "Highly interactive, state-heavy React.js applications.",
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    extendedDescription:
      "At TechX, we build modern, responsive, and scalable web applications using a robust tech stack that includes React, Next.js, Node.js, NestJS, PostgreSQL, and MongoDB. Whether you're looking for dynamic single-page applications or complex server-side rendered websites, we leverage these technologies to create fast, secure, and reliable solutions.",
    pillars: [
      "React / Nextjs",
      "Tailwind CSS & AntD Components",
      "Complex Form & Data Validation",
      "Micro-Frontend Orchestration",
    ],
  },
  {
    id: "s2",
    title: "App Development",
    description: "High-performance mobile applications using React Native.",
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    extendedDescription:
      "At TechX, we specialize in building high-performance mobile applications using React Native, a powerful framework that enables us to develop cross-platform apps for both iOS and Android. Our approach ensures your app reaches a wider audience while maintaining native-level performance.",
    pillars: [
      "React Native & Expo",
      "IOS / Android",
      "Cross-Platform Delivery",
      "Seamless Navigation",
    ],
  },

  {
    id: "s3",
    title: "High-Scale Backend Systems",
    description:
      "Enterprise-grade server logic with NestJS, Express, and Node.",
    icon: <Server className="w-8 h-8 text-emerald-400" />,
    extendedDescription:
      "Designing resilient backends capable of handling millions of requests. We specialize in microservices, CQRS patterns, and event-driven architectures using Kafka and RabbitMQ.",
    pillars: [
      "NestJS / Express.js / Fastify",
      "Rust / Axum (High Frequency)",
      "RESTful & GraphQL API Design",
      "Scalable WebSocket Clusters",
    ],
  },
  {
    id: "s4",
    title: "AWS & Cloud Engineering",
    description: "Serverless and managed infrastructure expertise.",
    icon: <Cloud className="w-8 h-8 text-cyan-400" />,
    extendedDescription:
      "Leveraging the full power of AWS to ensure your application is highly available and cost-effective. Expertise in Lambda serverless, DynamoDB modeling, and RDS scaling.",
    pillars: [
      "AWS Lambda & Serverless Framework",
      "AWS EC2",
      "DynamoDB / Postgres / MongoDB",
      "S3 & CloudFront Distribution",
      "IAM & VPC Security Hardening",
      "Cognito",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p-staffsync",
    title: "StaffSync Workforce Platform",
    description:
      "End-to-end workforce management SaaS for security agencies with live shift operations and multi-role control.",
    longDescription:
      "StaffSync is a scalable SaaS platform built to manage security guards, scheduling, real-time attendance, incident reporting, client sites, and workforce compliance. It supports multi-tenant organizations with role-based access, live activity dashboards, and automated operational workflows.",
    category: "SaaS",
    clientSector: "Security & Workforce Management",
    tags: [
      "React",
      "Node.js / NestJS",
      "PostgreSQL",
      "Redis",
      "AWS",
      "WebSockets",
    ],
    features: [
      "Real-time Shift Tracking",
      "Geo Fencing of Sites",
      "Google Maps Integration",
      "Multi-role Access Control",
      "Live Operations Dashboard",
      "Guard Attendance & Check-ins",
      "Incident & Report Management",
      "Multi-tenant Architecture",
    ],
    techHighlights: [
      "Mobile, Web and Backend",
      "Event-driven workflow handling",
      "Geo Fencing of Sites",
      "Google Maps Integration",
      "Real-time updates using WebSockets",
      "Optimized queries and caching for scale",
      "Secure authentication & authorization model",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&q=80&w=800",
    stats: { label: "Active Users Served", value: "10000+ Scalable" },
    status: "Live (Mobile App In Development)",
    link: "https://user.staffsync.ca",
  },
  {
    id: "p5",
    title: "MansionHub E-Commerce",
    description:
      "Fullstack MERN clothing platform with advanced inventory scaling.",
    longDescription:
      "This fullstack e-commerce application is built using the MERN stack. Seamlessly integrating MongoDB, Express.js, React.js, and Node.js, this platform empowers clothing brands to create, manage, and scale online stores with ease. Includes user authentication, product management, and optimized cart flows.",
    category: "SaaS",
    clientSector: "Retail / Fashion",
    tags: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
    features: ["User Auth", "Product Management", "Shopping Cart"],
    techHighlights: [
      "User Portal",
      "Admin Portal",
      "Dashboard Highlighting",
      "Inventory Mangement",
      "MERN Stack",
      "Scalable Schema Design",
      "Responsive UX",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    stats: { label: "Live Site", value: "mansionhub.in" },
    link: "https://mansionhub.in",
  },
  {
    id: "p6",
    title: "NoNotion Workspace",
    description:
      "Fullstack workspace clone with advanced block editing features.",
    longDescription:
      "This fullstack web application is designed to replicate Notion's iconic editor features. It supports a full range of editing capabilities and allows data to be saved and retrieved just like in Notion, featuring a complex hierarchical state management.",
    category: "Frontend",
    clientSector: "Productivity",
    tags: ["NextJs", "Node.js", "PostgreSQL", "Tailwind", "Zustand"],
    features: ["Block Editor", "Rich Text Sync", "Infinite Nesting"],
    techHighlights: [
      "Recursive Data Rendering",
      "Optimistic UI",
      "Persistence",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    stats: { label: "Clone", value: "nonotion.mansionhub.in" },
    link: "https://nonotion.mansionhub.in",
  },

  // {
  //   id: "p2",
  //   title: "SwiftLog Logistics Hub",
  //   description: "Real-time vehicle tracking and route optimization dashboard.",
  //   longDescription:
  //     "A sophisticated React dashboard for fleet management. Powered by an Express.js backend and a PostgreSQL database with PostGIS for location-based query optimization.",
  //   category: "Backend",
  //   clientSector: "Logistics",
  //   tags: ["React", "Express", "PostgreSQL", "Socket.io", "AWS EC2"],
  //   features: ["Live GPS Tracking", "Geofencing Alerts", "Route Optimization"],
  //   techHighlights: [
  //     "PostGIS indexing",
  //     "High-frequency WebSockets",
  //     "Redis-backed pub/sub",
  //   ],
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  //   stats: { label: "Fleet Size", value: "10,000+" },
  // },
  // {
  //   id: "p3",
  //   title: "BioLock FinTech App",
  //   description: "Digital banking mobile app with hardware-level security.",
  //   longDescription:
  //     "A secure mobile payment solution developed with React Native. It integrates deeply with AWS Cognito for authentication and uses a Lambda-based microservices mesh for transaction processing.",
  //   category: "Mobile",
  //   clientSector: "Finance",
  //   tags: ["React Native", "AWS Cognito", "Node.js", "DynamoDB", "Expo"],
  //   features: [
  //     "FaceID/Fingerprint Auth",
  //     "P2P Instant Payments",
  //     "Real-time Ledgers",
  //   ],
  //   techHighlights: [
  //     "Native Security Modules",
  //     "JWT Rotation",
  //     "Idempotent Transactions",
  //   ],
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  //   stats: { label: "Security Level", value: "Level 4" },
  // },
  // {
  //   id: "p4",
  //   title: "DataFlow Analytics CMS",
  //   description:
  //     "Enterprise content management with deep data analytics integration.",
  //   longDescription:
  //     "A custom CMS designed for heavy content workloads. It leverages MongoDB for flexible content modeling and React for a lightning-fast editorial experience.",
  //   category: "Frontend",
  //   clientSector: "Media / Publishing",
  //   tags: ["React", "Node.js", "MongoDB", "AWS S3", "Redis"],
  //   features: [
  //     "Dynamic Content Types",
  //     "Version History",
  //     "AI Tagging Pipeline",
  //   ],
  //   techHighlights: [
  //     "Rich Text Engine",
  //     "Optimistic UI Updates",
  //     "Multi-tenant Isolation",
  //   ],
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  //   stats: { label: "Monthly Traffic", value: "5M+" },
  // },
  {
    id: "p7",
    title: "High-Freq Opinion Trading Platform",
    description: "Ultra-low latency opinion trading platform similar to Probo.",
    longDescription:
      "A High Performance opinion trading platform built for extreme speed. Uses React for a fluid frontend and the Axum Framework (Rust) for the backend to handle high-frequency trading with sub-millisecond precision.",
    category: "Backend",
    clientSector: "FinTech / Trading",
    tags: ["Rust", "Axum", "React", "Redis", "WebSockets"],
    features: [
      "Real-time Order Matching",
      "Sub-ms Execution",
      "High Concurrency",
    ],
    techHighlights: [
      "Rust Memory Safety",
      "Axum Performance",
      "Atomic State Management",
    ],
    imageUrl:
      "https://www.shutterstock.com/shutterstock/photos/2586871813/display_1500/stock-vector-an-isometric-vector-illustration-of-an-ai-trading-robot-analyzing-stock-market-charts-surrounded-2586871813.jpg",
    stats: { label: "Backend", value: "Rust/Axum" },
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend Powerhouse",
    skills: [
      "React / React Native",
      "NextJs",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
    ],
    icon: <Layout className="w-5 h-5" />,
    level: "Expert",
  },
  {
    category: "Backend Excellence",
    skills: ["NestJS", "Node.js", "Express.js", "Rust (Axum)", "Serverless"],
    icon: <Server className="w-5 h-5" />,
    level: "Architect",
  },
  {
    category: "AWS Cloud Services",
    skills: [
      "Lambda / AWS SAM",
      "DynamoDB",
      "EC2 / ECS",
      "S3 / CloudFront",
      "RDS (Postgres)",
      "Cognito",
      "SQS",
      "SES",
      "Route 53",
    ],
    icon: <Cloud className="w-5 h-5" />,
    level: "Advanced",
  },
  {
    category: "Database Systems",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "Redis",
      "SQL Optimization",
      "ORM (Prisma / Mongoose)",
    ],
    icon: <Database className="w-5 h-5" />,
    level: "Expert",
  },
];

export const METHODOLOGY: MethodologyStep[] = [
  {
    title: "Requirements & Architecture",
    description:
      "We map out your AWS infrastructure and data models before a single line of code is written.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Development Sprints",
    description:
      "Iterative building with React and Node.js. Weekly updates and high-transparency pipelines.",
    icon: <Workflow className="w-6 h-6" />,
  },
  {
    title: "DevOps & Scaling",
    description:
      "Automated CI/CD using GitHub Actions or Jenkins, deploying to AWS ECS or Lambda.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Security & Optimization",
    description:
      "Rigorous performance auditing and security patching to ensure 99.99% reliability.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t3",
    name: "Mukul Jha",
    role: "Founder",
    company: "MansionHub",
    content:
      "Our entire e-commerce platform was engineered end-to-end, from product catalog to secure checkout and real-time inventory. The performance, reliability, and attention to detail have been incredible.",
    avatar: "https://i.pravatar.cc/150?u=fashion123",
  },
  // {
  //   id: "t1",
  //   name: " Aronson",
  //   role: "Product Lead",
  //   company: "FinSync Global",
  //   content:
  //     "TechX built our entire React-based banking portal and AWS Lambda backend. Their expertise in secure transactions is unmatched.",
  //   avatar: "https://i.pravatar.cc/150?u=daAAA",
  // },
  // {
  //   id: "t2",
  //   name: "Elena Rodriguez",
  //   role: "Founder",
  //   company: "LogiFlow",
  //   content:
  //     "The real-time logistics dashboard they built with Express and WebSockets allowed us to scale our fleet by 300% without adding overhead.",
  //   avatar: "https://i.pravatar.cc/150?u=elena",
  // },
];

import { Github, Linkedin, Mail, Globe } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "https://github.com/Lavkush3411",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lavkush-yadav-116b53205",
  },
  {
    icon: Mail,
    href: "mailto:lkyadav090@gmail.com",
  },
  // {
  //   icon: Globe,
  //   href: "https://your-portfolio.com",
  // },
];
