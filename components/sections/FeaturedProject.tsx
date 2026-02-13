'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import SkillTag from '@/components/ui/SkillTag';
import Button from '@/components/ui/Button';
import { getFeaturedProject } from '@/data/projects';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function FeaturedProject() {
  const project = getFeaturedProject();

  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Featured Project
          </h2>
          <p className="text-text-secondary mb-12 text-lg">
            Deep-dive into production-ready AI systems
          </p>

          {/* Featured Card */}
          <div className="bg-gradient-to-br from-navy to-background border-2 border-accent/50 rounded-2xl overflow-hidden shadow-glowStrong">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto bg-navy">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent border border-accent/30 mb-4">
                  {project.category}
                </span>

                <h3 className="text-3xl font-bold text-text-primary mb-4">
                  {project.title}
                </h3>

                <p className="text-text-secondary mb-6 leading-relaxed">
                  {project.summary}
                </p>

                {/* Problem Statement */}
                <div className="mb-6">
                  <h4 className="text-accent font-semibold mb-2">The Challenge</h4>
                  <p className="text-text-secondary text-sm">
                    {project.problem.substring(0, 200)}...
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-text-primary font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 6).map((tech) => (
                      <SkillTag key={tech} name={tech} />
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Button href={`/projects/${project.slug}`} variant="primary">
                    View Full Case Study
                  </Button>
                  <div className="flex items-center space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                      >
                        <FaGithub size={20} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                      >
                        <FaExternalLinkAlt size={18} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
