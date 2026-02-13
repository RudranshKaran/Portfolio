'use client';

import Container from '@/components/layout/Container';
import SkillTag from '@/components/ui/SkillTag';
import { skillCategories, getSkillsByCategory } from '@/data/skills';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section className="py-20 bg-navy/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-text-secondary mb-12 text-lg">
            Technologies I work with to build production systems
          </p>

          <div className="space-y-10">
            {skillCategories.map((category) => {
              const skills = getSkillsByCategory(category);
              return (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <SkillTag 
                        key={skill.name} 
                        name={skill.name} 
                        category={skill.category}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
