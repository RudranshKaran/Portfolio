import type { MDXComponents } from 'mdx/types';

// Export components directly for use in server components
export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-6 mt-8 text-text-primary">{children}</h1>
  ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-4 mt-12 text-text-primary border-b border-border pb-3 first:mt-0">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-8 text-text-primary">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mb-3 mt-6 text-text-primary">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="mb-5 text-text-secondary leading-[1.8] text-[15px]">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-6 text-text-secondary space-y-2.5 list-none pl-0 ml-0">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal mb-6 text-text-secondary space-y-2.5 ml-0 pl-5">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="relative pl-5 li-item text-[15px] leading-[1.7] ml-0">{children}</li>
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-accent hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    code: ({ children, className }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="bg-navy/90 px-2 py-1 rounded text-accent font-mono text-[13px] border border-accent/20 whitespace-nowrap">
            {children}
          </code>
        );
      }
      return <code className={className}>{children}</code>;
    },
    pre: ({ children }) => (
      <pre className="bg-navy/90 border border-border p-6 rounded-lg mb-6 mt-6 overflow-x-auto text-sm leading-relaxed shadow-lg">
        <code className="text-text-secondary font-mono">{children}</code>
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent bg-navy/40 pl-6 py-4 my-6 text-text-secondary rounded-r">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-text-primary">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-text-secondary">{children}</em>
    ),
    hr: () => (
      <hr className="border-border my-8" />
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-border rounded-lg">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border bg-navy/50 px-4 py-2 text-left text-text-primary font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2 text-text-secondary">
        {children}
      </td>
    ),
};

// Hook version for client components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
