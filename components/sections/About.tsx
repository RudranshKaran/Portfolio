'use client';

import Container from '@/components/layout/Container';
import { motion } from 'framer-motion';

export default function About() {
  const currentlyBuilding = [
    'AI Agent systems with multi-tool orchestration',
    'Scalable RAG pipelines with hybrid search',
    'Backend automation tools with API design',
  ];

  return (
    <section className="py-20 bg-navy/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-12">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Bio */}
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m a GenAI and Backend Engineer focused on building production-ready AI systems 
                that combine the power of Large Language Models with robust backend architecture.
              </p>
              <p>
                My work centers on <span className="text-accent font-semibold">LLM system design</span>, 
                <span className="text-accent font-semibold"> RAG pipelines</span>, and 
                <span className="text-accent font-semibold"> scalable backend infrastructure</span>. 
                I care deeply about system reliability, performance optimization, and engineering 
                systems that work at scale—not just demos.
              </p>
              <p>
                From semantic search to async processing, I build with a production mindset: 
                monitoring, error handling, cost optimization, and maintainability are non-negotiable.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me contributing to open source, writing technical 
                deep-dives, or experimenting with the latest LLM capabilities.
              </p>
            </div>

            {/* Right: Currently Building Card */}
            <div className="bg-gradient-to-br from-navy to-background border border-accent/30 rounded-xl p-8 shadow-glow hover:shadow-glowStrong transition-all duration-300">
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center">
                <span className="text-accent mr-3">⚡</span>
                Currently Building
              </h3>
              <ul className="space-y-4">
                {currentlyBuilding.map((item, index) => (
                  <li key={index} className="flex items-start text-text-secondary">
                    <span className="text-accent mr-3 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
