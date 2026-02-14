import Container from '@/components/layout/Container';
import BlogCard from '@/components/ui/BlogCard';
import { getAllBlogPosts } from '@/lib/mdx';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="py-20">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Blog
          </h1>
          <p className="text-text-secondary text-lg mb-12 max-w-3xl mx-auto">
            Building with AI in public - experiments, systems, failures, and reflections along the way.
          </p>

          {/* Blog Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <div key={post.slug} className="h-full">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-navy/50 border border-border rounded-lg p-12 text-center">
              <p className="text-text-secondary text-lg">
                Blog posts coming soon. Check back later for technical deep-dives on AI systems and backend engineering.
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
