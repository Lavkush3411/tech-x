import React from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "SaaS" | "Backend" | "Frontend" | "Mobile" | "Desktop";
  features: string[];
  imageUrl: string;
  link?: string;
  stats?: { label: string; value: string };
  status?: string;
  techHighlights: string[];
  clientSector: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  extendedDescription: string;
  pillars: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  level: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface MethodologyStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}
