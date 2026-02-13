import { Experience } from '@/types';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + '-01');
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const getTypeColor = (type: Experience['type']) => {
    const colors = {
      'Internship': 'bg-blue-500',
      'Leadership': 'bg-purple-500',
      'Club': 'bg-green-500',
      'Project': 'bg-yellow-500',
    };
    return colors[type] || 'bg-accent';
  };

  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Vertical Line */}
      {index !== 0 && (
        <div className="absolute left-2 top-0 w-0.5 h-full bg-border -translate-x-1/2" />
      )}

      {/* Glowing Dot */}
      <div className={`absolute left-0 top-2 w-4 h-4 rounded-full ${getTypeColor(experience.type)} shadow-glow`} />

      {/* Content */}
      <div className="bg-navy/50 border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
          <div>
            <h3 className="text-xl font-semibold text-text-primary">
              {experience.title}
            </h3>
            <p className="text-accent font-medium">
              {experience.organization}
            </p>
          </div>
          <div className="text-text-secondary text-sm mt-2 md:mt-0">
            {formatDate(experience.startDate)} - {experience.current ? 'Present' : formatDate(experience.endDate!)}
          </div>
        </div>

        <p className="text-text-secondary mb-3">
          {experience.location} • {experience.type}
        </p>

        <p className="text-text-secondary mb-4">
          {experience.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-2 mb-4">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="text-text-secondary flex items-start">
              <span className="text-accent mr-2">▹</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span 
                key={tech}
                className="text-xs px-2 py-1 rounded bg-accent/10 text-accent border border-accent/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Impact */}
        {experience.impact && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-text-secondary italic">
              <span className="text-accent font-semibold">Impact:</span> {experience.impact}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
