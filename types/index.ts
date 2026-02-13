/**
 * Type Definitions
 * Core TypeScript interfaces for the portfolio application
 */

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  problem: string;
  architecture: string;
  backendDesign: string;
  llmIntegration?: string;
  databaseStructure?: string;
  tradeoffs: string;
  improvements: string;
  techStack: string[];
  category: 'GenAI' | 'Backend' | 'Full Stack';
  featured: boolean;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  startDate: string;
  endDate?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  type: 'Internship' | 'Leadership' | 'Club' | 'Project';
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies?: string[];
  impact?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: 'AI/ML' | 'Backend' | 'System Design' | 'Tutorial';
  published: boolean;
}

export interface Skill {
  name: string;
  category: 'Programming' | 'AI & GenAI' | 'Backend' | 'Databases' | 'Tools';
}

export interface PhilosophyPrinciple {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}
