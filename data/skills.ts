import { Skill } from '@/types';

export const skills: Skill[] = [
  // Programming
  { name: 'Python', category: 'Programming' },
  { name: 'TypeScript', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'Go', category: 'Programming' },
  { name: 'SQL', category: 'Programming' },

  // AI & GenAI
  { name: 'LangChain', category: 'AI & GenAI' },
  { name: 'OpenAI API', category: 'AI & GenAI' },
  { name: 'RAG Systems', category: 'AI & GenAI' },
  { name: 'Vector Databases', category: 'AI & GenAI' },
  { name: 'LangGraph', category: 'AI & GenAI' },
  { name: 'Prompt Engineering', category: 'AI & GenAI' },
  { name: 'LLM Fine-tuning', category: 'AI & GenAI' },
  { name: 'Hugging Face', category: 'AI & GenAI' },
  { name: 'Embeddings', category: 'AI & GenAI' },

  // Backend
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'Microservices', category: 'Backend' },
  { name: 'WebSockets', category: 'Backend' },
  { name: 'Celery', category: 'Backend' },
  { name: 'RabbitMQ', category: 'Backend' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'Redis', category: 'Databases' },
  { name: 'Pinecone', category: 'Databases' },
  { name: 'Qdrant', category: 'Databases' },
  { name: 'Chroma', category: 'Databases' },
  { name: 'SQLAlchemy', category: 'Databases' },

  // Tools & Platforms
  { name: 'Docker', category: 'Tools' },
  { name: 'Kubernetes', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
  { name: 'AWS', category: 'Tools' },
  { name: 'Linux', category: 'Tools' },
  { name: 'NGINX', category: 'Tools' },
  { name: 'Prometheus', category: 'Tools' },
  { name: 'Grafana', category: 'Tools' },
  { name: 'CI/CD', category: 'Tools' },
];

export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};

export const skillCategories: Skill['category'][] = [
  'Programming',
  'AI & GenAI',
  'Backend',
  'Databases',
  'Tools',
];
