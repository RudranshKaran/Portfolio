import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Rudransh Karan | GenAI + Python Backend Engineer',
    template: '%s | Rudransh Karan',
  },
  description: 'Building intelligent AI systems powered by LLMs, RAG, and scalable backend architecture. Portfolio of GenAI and Backend Engineering projects.',
  keywords: ['GenAI', 'AI Engineer', 'Backend Developer', 'Python', 'LLM', 'RAG', 'FastAPI', 'Machine Learning'],
  authors: [{ name: 'Rudransh Karan' }],
  creator: 'Rudransh Karan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rudranshkaran.com',
    title: 'Rudransh Karan | GenAI + Python Backend Engineer',
    description: 'Building intelligent AI systems powered by LLMs, RAG, and scalable backend architecture.',
    siteName: 'Rudransh Karan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rudransh Karan | GenAI + Python Backend Engineer',
    description: 'Building intelligent AI systems powered by LLMs, RAG, and scalable backend architecture.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
