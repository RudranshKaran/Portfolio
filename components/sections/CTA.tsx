'use client';

import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-navy to-background border border-accent/30 rounded-2xl p-12 text-center shadow-glow"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Let&apos;s Build Something Meaningful
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Open to internships, backend roles, and AI system collaborations. 
            If you&apos;re building production AI systems or scalable infrastructure, let&apos;s connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Get In Touch
            </Button>
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
