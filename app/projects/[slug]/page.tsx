import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import SkillTag from '@/components/ui/SkillTag';
import Button from '@/components/ui/Button';
import { projects, getProjectBySlug } from '@/data/projects';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-20">
      <Container maxWidth="reading">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <FaArrowLeft />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent border border-accent/30 mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-text-secondary">
            {project.summary}
          </p>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-96 rounded-xl overflow-hidden border border-border mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="secondary">
              <FaGithub className="mr-2" />
              View Code
            </Button>
          )}
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="primary">
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </Button>
          )}
        </div>

        {/* Case Study Sections */}
        <div className="prose prose-invert max-w-none">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Overview</h2>
            <p className="text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Problem */}
          <section className="mb-12 bg-navy/50 border border-border rounded-lg p-6">
            <h2 className="text-3xl font-bold text-text-primary mb-4">The Problem</h2>
            <p className="text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </section>

          {/* Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Architecture</h2>
            <p className="text-text-secondary leading-relaxed">
              {project.architecture}
            </p>
          </section>

          {/* Backend Design */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Backend Design Decisions</h2>
            <p className="text-text-secondary leading-relaxed">
              {project.backendDesign}
            </p>
          </section>

          {/* LLM Integration */}
          {project.llmIntegration && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">LLM Integration</h2>
              <p className="text-text-secondary leading-relaxed">
                {project.llmIntegration}
              </p>
            </section>
          )}

          {/* Database Structure */}
          {project.databaseStructure && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">Database Structure</h2>
              <p className="text-text-secondary leading-relaxed">
                {project.databaseStructure}
              </p>
            </section>
          )}

          {/* Tradeoffs */}
          <section className="mb-12 bg-navy/50 border border-accent/30 rounded-lg p-6">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Technical Tradeoffs</h2>
            <p className="text-text-secondary leading-relaxed">
              {project.tradeoffs}
            </p>
          </section>

          {/* Improvements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Future Improvements</h2>
            <p className="text-text-secondary leading-relaxed">
              {project.improvements}
            </p>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <SkillTag key={tech} name={tech} />
              ))}
            </div>
          </section>

          {/* Timeline */}
          {project.startDate && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">Timeline</h2>
              <p className="text-text-secondary">
                {new Date(project.startDate + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                {project.endDate && ` - ${new Date(project.endDate + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`}
              </p>
            </section>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            <FaArrowLeft />
            <span>View All Projects</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
