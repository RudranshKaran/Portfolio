import Container from '@/components/layout/Container';
import { philosophyPrinciples } from '@/data/philosophy';

export default function PhilosophyPage() {
  return (
    <div className="py-20">
      <Container>
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Engineering Philosophy
          </h1>
          <p className="text-text-secondary text-lg mb-12 max-w-3xl">
            Six principles that guide how I build systems, write code, and approach technical challenges
          </p>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophyPrinciples.map((principle) => (
              <div
                key={principle.id}
                className="bg-navy/50 border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-glow"
              >
                {/* Icon */}
                <div className="text-5xl mb-4">
                  {principle.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-br from-navy to-background border border-accent/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Let&apos;s Build With These Principles
            </h2>
            <p className="text-text-secondary mb-6">
              If these resonate with you, let&apos;s collaborate on production-ready AI systems
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-accent text-white hover:bg-accent/90 shadow-lg hover:shadow-glow transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
