interface SkillTagProps {
  name: string;
  category?: string;
}

export default function SkillTag({ name, category }: SkillTagProps) {
  const categoryColors: Record<string, string> = {
    'Programming': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    'AI & GenAI': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    'Backend': 'bg-green-500/10 text-green-400 border-green-500/30',
    'Databases': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    'Tools': 'bg-gray-500/10 text-gray-400 border-gray-500/30',
  };

  const colorClass = category ? categoryColors[category] : 'bg-accent/10 text-accent border-accent/30';

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${colorClass}`}>
      {name}
    </span>
  );
}
