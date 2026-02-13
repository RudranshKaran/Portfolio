import { Skill } from '@/types';

export const skills: Skill[] = [
  // Programming
  { name: 'Python', category: 'Programming' },
  { name: 'TypeScript', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'SQL', category: 'Programming' },
  { name: 'C++', category: 'Programming' },

  // AI & GenAI
  { name: 'LLM Integration', category: 'AI & GenAI' },
  { name: 'Prompt Engineering', category: 'AI & GenAI' },
  { name: 'LangChain', category: 'AI & GenAI' },
  { name: 'CrewAI', category: 'AI & GenAI' },
  { name: 'RAG Systems', category: 'AI & GenAI' },
  { name: 'Embeddings', category: 'AI & GenAI' },
  { name: 'Gemini API', category: 'AI & GenAI' },
  { name: 'Groq API', category: 'AI & GenAI' },

  // Backend
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'REST API Design', category: 'Backend' },
  { name: 'Authentication (JWT)', category: 'Backend' },
  { name: 'Async Programming', category: 'Backend' },

  // Databases
  { name: 'MySQL', category: 'Databases' },
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'Supabase', category: 'Databases' },
  { name: 'Vector Databases (Chroma)', category: 'Databases' },

  // Frontend & Tools
  { name: 'Next.js', category: 'Tools' },
  { name: 'Tailwind CSS', category: 'Tools' },
  { name: 'Streamlit', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
  { name: 'Vercel', category: 'Tools' },
  { name: 'Render', category: 'Tools' }
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
