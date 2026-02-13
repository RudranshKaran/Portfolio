# Portfolio Website - GenAI + Python Backend Engineer

A production-ready, multi-page personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features pure Static Site Generation (SSG), native MDX blog integration, and a custom contact API route with Resend.

**Live Demo**: [URL Coming Soon]

---

## 🎯 Features

- **Pure Static Generation (SSG)** - All pages pre-rendered for maximum performance
- **TypeScript** - Type-safe codebase with strict type checking
- **Tailwind CSS** - Custom design system with dark theme
- **Framer Motion** - Subtle, professional animations
- **Native MDX** - Blog with React component support
- **Contact API** - Custom backend route using Resend for email delivery
- **Responsive Design** - Mobile-first, fully responsive across all devices
- **SEO Optimized** - Metadata, OpenGraph tags, and semantic HTML
- **Performance Focused** - next/image optimization, code splitting, lazy loading

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Content**: Native `@next/mdx` with gray-matter
- **Email**: [Resend](https://resend.com)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

---

## 📁 Project Structure

```
Portfolio/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── projects/            # Projects pages
│   ├── experience/          # Experience timeline
│   ├── blog/                # Blog listing and posts
│   ├── philosophy/          # Engineering principles
│   ├── contact/             # Contact page with form
│   └── api/                 # API routes
│       └── contact/         # Contact form endpoint
├── components/              # Reusable React components
│   ├── layout/              # Layout components (Navbar, Footer, Container)
│   ├── ui/                  # UI primitives (Button, Card, Tags)
│   └── sections/            # Home page sections
├── features/                # Feature-specific components
│   ├── projects/            # Project detail components
│   ├── blog/                # Blog-specific components
│   ├── experience/          # Timeline components
│   └── contact/             # Contact form component
├── content/                 # Content files
│   └── blog/                # MDX blog posts
├── data/                    # TypeScript data files
│   ├── projects.ts          # Project case studies
│   ├── experience.ts        # Work & leadership experience
│   ├── skills.ts            # Technical skills
│   └── philosophy.ts        # Engineering principles
├── types/                   # TypeScript type definitions
│   └── index.ts             # Shared interfaces
├── lib/                     # Utility functions
│   ├── design-tokens.ts     # Design system tokens
│   └── mdx.ts               # MDX parsing utilities
├── public/                  # Static assets
│   ├── images/              # Image assets
│   └── resume.pdf           # Resume file
└── [config files]           # Next, TypeScript, Tailwind configs
```

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- A [Resend](https://resend.com) account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RudranshKaran/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=your.email@example.com
   ```

4. **Add placeholder images**
   
   Add these images to `public/images/`:
   - `hero-rudransh.jpg` (1200x1200px) - Your professional photo
   - `project-rag.jpg` (1200x675px) - RAG project visualization
   - `project-agents.jpg` (1200x675px) - AI agents visualization
   - `project-backend.jpg` (1200x675px) - Backend project visualization

5. **Add your resume**
   
   Place your resume PDF at `public/resume.pdf`

---

## 🧪 Development

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production

```bash
npm run build
```

This generates optimized static files in `.next/`.

### Preview production build

```bash
npm run build
npm start
```

### Lint code

```bash
npm run lint
```

---

## 📝 Customization Guide

### 1. Update Personal Information

Edit these files with your information:

- **`data/projects.ts`** - Your project case studies
- **`data/experience.ts`** - Work experience and achievements
- **`data/skills.ts`** - Technical skills
- **`data/philosophy.ts`** - Engineering principles
- **`components/layout/Footer.tsx`** - Social links
- **`app/layout.tsx`** - Site metadata

### 2. Update Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  background: "#0B0F14",  // Dark background
  navy: "#0F172A",        // Navy overlay
  accent: "#3B82F6",      // Primary accent color
  // ... add more colors
}
```

### 3. Add Blog Posts

Create new `.mdx` files in `content/blog/`:

```mdx
---
title: 'Your Post Title'
excerpt: 'A brief summary'
date: '2026-02-15'
readTime: '8 min read'
category: 'AI/ML'
tags: ['tag1', 'tag2']
published: true
---

Your content here with MDX support!
```

### 4. Update Projects

Edit `data/projects.ts` to add/modify projects. Each project should include:

- Detailed problem statement
- Architecture decisions
- Backend design rationale
- Tech stack
- Tradeoffs and improvements

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy!

Vercel automatically detects Next.js and configures everything.

### Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next folder
```

#### AWS Amplify
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `.next`

---

## 🎨 Design System

### Colors

- **Background**: #0B0F14 (Deep dark)
- **Navy**: #0F172A (Elevated surfaces)
- **Accent**: #3B82F6 (Electric blue)
- **Text Primary**: #E5E7EB (High contrast)
- **Text Secondary**: #9CA3AF (Muted)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, 32-72px
- **Body**: Regular, 16-18px
- **Hierarchy**: Clear h1-h6 structure

### Spacing

- **Section Padding**: 80-128px vertical
- **Container Max Width**: 1200px
- **Grid Gap**: 32px

---

## ⚡ Performance Targets

- **Lighthouse Performance**: 95+
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Cumulative Layout Shift**: <0.1

### Optimization Techniques

- Static generation (no runtime data fetching)
- next/image for automatic image optimization
- Code splitting and lazy loading
- Minimal client-side JavaScript
- Font optimization with next/font

---

## 🏗️ Architecture Decisions

### Why Pure SSG?

- Fastest load times (pre-rendered HTML)
- Better SEO (fully indexable)
- Simpler deployment (static hosting)
- Lower hosting costs

### Why Native MDX?

- Cleaner integration with App Router
- Better performance than runtime solutions
- React component support in blog posts
- Simpler configuration

### Why Custom Contact API?

- Demonstrates backend engineering skills
- Full control over email delivery
- No third-party embed dependencies
- Professional signal to employers

### Why Feature-Based Structure?

- Scales better than flat components folder
- Domain logic stays together
- Easier to find and maintain code
- Mirrors production codebases

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [MDX Documentation](https://mdxjs.com)
- [Resend Documentation](https://resend.com/docs)

---

## 🐛 Known Issues

- Images return 404 until you add actual files to `public/images/`
- Contact form requires Resend API key to function
- Blog page shows "coming soon" if no MDX files exist

---

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

---

## 🤝 Contributing

This is a personal portfolio, but suggestions for improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📧 Contact

**Rudransh Karan**
- Email: rudransh.karan@gmail.com
- LinkedIn: [linkedin.com/in/rudransh-karan](https://linkedin.com/in/rudransh-karan)
- GitHub: [github.com/RudranshKaran](https://github.com/RudranshKaran)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
