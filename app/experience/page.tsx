import Container from '@/components/layout/Container';
import TimelineItem from '@/components/ui/TimelineItem';
import { experiences } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <div className="py-20">
      <Container maxWidth="reading">
        <div>
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Experience
            </h1>
            <p className="text-text-secondary text-lg">
              Building production systems, leading teams, and contributing to meaningful projects
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={experience.id} 
                experience={experience} 
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
