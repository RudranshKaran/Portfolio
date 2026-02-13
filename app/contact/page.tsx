'use client';

import Container from '@/components/layout/Container';
import ContactForm from '@/features/contact/ContactForm';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'rudransh.karan@gmail.com',
    href: 'mailto:rudransh.karan@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'rudransh-karan',
    href: 'https://linkedin.com/in/rudransh-karan',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'RudranshKaran',
    href: 'https://github.com/RudranshKaran',
  },
  {
    icon: FaFileAlt,
    label: 'Resume',
    value: 'Download PDF',
    href: '/resume.pdf',
  },
];

export default function ContactPage() {
  return (
    <div className="py-20">
      <Container maxWidth="reading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Let&apos;s Build Something Meaningful
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Open to internships, backend roles, and AI system collaborations. 
              If you&apos;re building production-ready systems, let&apos;s connect.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-navy/50 border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg text-center"
                >
                  <Icon className="text-accent mx-auto mb-3" size={32} />
                  <h3 className="text-text-primary font-semibold mb-1">
                    {item.label}
                  </h3>
                  <p className="text-text-secondary text-sm break-all">
                    {item.value}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-navy to-background border-2 border-accent/30 rounded-2xl p-8 lg:p-12 shadow-glowStrong"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4 text-center">
              Send a Message
            </h2>
            <p className="text-text-secondary mb-8 text-center">
              Or reach out directly at{' '}
              <a 
                href="mailto:rudransh.karan@gmail.com" 
                className="text-accent hover:underline"
              >
                rudransh.karan@gmail.com
              </a>
            </p>
            
            <ContactForm />
          </motion.div>

          {/* Bottom Note */}
          <div className="mt-12 text-center text-text-secondary">
            <p>
              Interested in discussing AI systems, backend architecture, or potential collaborations? 
              I typically respond within 24-48 hours.
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
