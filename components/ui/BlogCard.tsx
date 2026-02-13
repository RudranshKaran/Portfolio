import Link from 'next/link';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <article className="bg-navy/50 border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
          {post.category}
        </span>
        <span className="text-sm text-text-secondary">
          {post.readTime}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-text-primary mb-3 hover:text-accent transition-colors">
        <Link href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h3>

      {/* Excerpt */}
      <p className="text-text-secondary mb-4 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <time className="text-sm text-text-secondary">
          {formatDate(post.date)}
        </time>
        <Link
          href={`/blog/${post.slug}`}
          className="text-accent hover:underline font-medium"
        >
          Read More →
        </Link>
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs text-text-secondary"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
