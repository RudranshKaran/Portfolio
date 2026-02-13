import Container from '@/components/layout/Container';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Projects
          </h1>
          <p className="text-text-secondary text-lg mb-12 max-w-3xl mx-auto">
            Production-ready AI systems and backend infrastructure. Each project showcases 
            architecture decisions, technical tradeoffs, and real-world problem solving.
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id}>
                <ProjectCard
                  title={project.title}
                  summary={project.summary}
                  techStack={project.techStack}
                  slug={project.slug}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
