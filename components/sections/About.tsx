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
                I&apos;m a <span className="text-accent font-semibold">GenAI and backend engineer</span> focused 
                on building reliable AI systems that are designed with production in mind.
              </p>
              <p>
                I work primarily with <span className="text-accent font-semibold">LLM-powered applications</span> and 
                <span className="text-accent font-semibold"> scalable backend architecture</span>, paying close 
                attention to <span className="text-accent font-semibold">system design, performance, and maintainability</span>. 
                I&apos;m particularly interested in how AI systems move from experimentation to real-world usage — 
                where reliability and thoughtful engineering matter just as much as model capability.
              </p>
              <p>
                I previously worked as a <span className="text-accent font-semibold">GenAI Developer Intern at HiDevs</span>, 
                where I contributed to building and refining AI-driven systems, strengthening my understanding of 
                practical LLM applications and backend integration.
              </p>
              <p>
                Beyond coding, I enjoy exploring new ideas in AI, watching sitcoms, and listening to music — 
                a balance that keeps both my logic and creativity active.
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
