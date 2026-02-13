'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SkillTag from './SkillTag';

interface ProjectCardProps {
  title: string;
  summary: string;
  techStack: string[];
  slug: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  summary,
  techStack,
  slug,
  image,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-navy/50 border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-glow transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-navy overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-text-primary mb-3">
          {title}
        </h3>
        <p className="text-text-secondary mb-4 line-clamp-2">
          {summary}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.slice(0, 4).map((tech) => (
            <SkillTag key={tech} name={tech} />
          ))}
          {techStack.length > 4 && (
            <span className="text-text-secondary text-sm self-center">
              +{techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between">
          <Link
            href={`/projects/${slug}`}
            className="text-accent hover:underline font-medium"
          >
            View Details →
          </Link>
          <div className="flex items-center space-x-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
