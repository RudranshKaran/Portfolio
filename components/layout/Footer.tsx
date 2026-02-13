import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { 
    platform: 'GitHub', 
    url: 'https://github.com/RudranshKaran', 
    icon: FaGithub 
  },
  { 
    platform: 'LinkedIn', 
    url: 'https://linkedin.com/in/rudransh-karan', 
    icon: FaLinkedin 
  },
  { 
    platform: 'Email', 
    url: 'mailto:rudransh.karan@gmail.com', 
    icon: FaEnvelope 
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-text-secondary text-sm">
            © {currentYear} Rudransh Karan. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors duration-300"
                  aria-label={link.platform}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Built with */}
          <p className="text-text-secondary text-sm">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
