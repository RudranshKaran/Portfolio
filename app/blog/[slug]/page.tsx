import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { getBlogPost, getAllBlogSlugs } from '@/lib/mdx';
import { FaArrowLeft, FaClock, FaCalendar } from 'react-icons/fa';
import { compileMDX } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/mdx-components';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  // Compile MDX content with custom components and plugins
  const { content: MDXContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          rehypePrism,
        ],
      },
    },
    components: mdxComponents,
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="py-20">
      <Container maxWidth="reading">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <FaArrowLeft />
          <span>Back to Blog</span>
        </Link>

        {/* Post Header */}
        <article>
          <header className="mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent border border-accent/30 mb-4">
              {frontmatter.category}
            </span>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              {frontmatter.title}
            </h1>

            <p className="text-xl text-text-secondary mb-6">
              {frontmatter.excerpt}
            </p>

            <div className="flex items-center gap-6 text-text-secondary text-sm">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <time>{formatDate(frontmatter.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{frontmatter.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            {frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {frontmatter.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-navy border border-border text-text-secondary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post Content */}
          <article className="prose prose-invert prose-slate max-w-none mt-8">
            {MDXContent}
          </article>
        </article>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            <FaArrowLeft />
            <span>View All Posts</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
