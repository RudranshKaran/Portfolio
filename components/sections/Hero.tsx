'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="relative lg:min-h-screen flex items-center bg-gradient-to-b from-navy/50 to-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-16 lg:py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-text-primary mb-4 sm:mb-6">
              Rudransh Karan
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-accent font-semibold mb-4 sm:mb-6">
              GenAI + Python Backend Engineer
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              Building intelligent AI systems powered by LLMs, RAG, and scalable backend architecture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/projects" variant="primary">
                View Projects
              </Button>
              <Button href="/resume.pdf" variant="secondary">
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-md lg:max-w-lg mx-auto">
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-2xl blur-3xl" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl">
                <Image
                  src="/images/hero-rudransh.jpg"
                  alt="Rudransh Karan"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-text-secondary hover:text-accent transition-colors cursor-pointer"
          >
            <HiArrowDown size={32} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
