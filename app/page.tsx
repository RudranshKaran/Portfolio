import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import FeaturedProject from '@/components/sections/FeaturedProject';
import Skills from '@/components/sections/Skills';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Home',
  description: 'Rudransh Karan - GenAI + Python Backend Engineer building intelligent AI systems powered by LLMs, RAG, and scalable backend architecture.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProject />
      <Skills />
      <CTA />
    </>
  );
}
