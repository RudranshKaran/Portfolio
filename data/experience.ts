import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: '0',
    title: 'AI Engineer Intern',
    organization: 'Agentyne Technologies Pvt Ltd',
    type: 'Internship',
    location: 'Bengaluru, India (Remote)',
    startDate: '2026-04',
    current: true,
    description: 'Working on building and scaling AI-driven systems, contributing to backend development, integrations, and intelligent automation within a fast-paced startup environment.',
    achievements: [
      'Developing and integrating AI-powered features into production systems using Python and backend frameworks',
      'Collaborating with the engineering team on real-world product modules, testing, and deployment workflows',
      'Implementing scalable backend logic and supporting system integrations across platform components',
      'Participating in code reviews, standups, and agile development cycles in a startup environment'
    ],
    technologies: ['Python', 'Django', 'AI/ML', 'Backend Development', 'API Integration', 'System Design'],
    impact: 'Gaining hands-on experience in building production-grade AI systems while contributing to real-world product development in a startup ecosystem.'
  },
  {
    id: '1',
    title: 'PR & Sponsorship Head',
    organization: 'Nexora: Vibe Coding Club, Nitte Meenakshi Institute of Technology',
    type: 'Leadership',
    location: 'Bengaluru, India',
    startDate: '2026-02',
    current: true,
    description: 'Leading public relations and sponsorship initiatives for Nexora, a vibe coding club focused on modern AI-powered development tools and emerging technologies.',
    achievements: [
      'Managed external communications and industry outreach for AI-focused workshops and technical events',
      'Engaged with startup founders and industry professionals for collaborations and internship opportunities',
      'Structured sponsorship proposals and coordinated partnerships for club initiatives',
      'Contributed to branding and positioning the club around modern AI tooling and developer workflows'
    ],
    technologies: ['Communication Strategy', 'Sponsorship Management', 'Industry Outreach', 'Event Coordination'],
    impact: 'Strengthened industry engagement for the club and helped expand its external network within the AI and startup ecosystem.'
  }
,
  {
    id: '2',
    title: 'GenAI Developer Intern',
    organization: 'HiDevs',
    type: 'Internship',
    location: 'Bengaluru, India',
    startDate: '2024-11',
    endDate: '2025-01',
    current: false,
    description: 'Worked on building AI-powered tools using LLMs and backend systems, focusing on practical Generative AI applications in production-like environments.',
    achievements: [
      'Developed AI-driven tools using LLMs, LangChain, and CrewAI for real-world use cases',
      'Implemented automated interview reporting systems that convert structured transcripts into formatted reports',
      'Built reminder agents capable of sending scheduled notifications through integrated communication channels',
      'Collaborated with cross-functional teams to design and deploy Generative AI solutions with API integrations'
    ],
    technologies: ['Python', 'LangChain', 'CrewAI', 'LLMs', 'FastAPI', 'API Integration'],
    impact: 'Strengthened hands-on experience in production-oriented GenAI development, prompt engineering, and system integration within a collaborative team environment.'
  }
,
];
