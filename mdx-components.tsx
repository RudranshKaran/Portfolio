import type { MDXComponents } from 'mdx/types';

// Minimal custom components - @tailwindcss/typography handles most styling
export const mdxComponents: MDXComponents = {
  // Ensure external links open in new tab
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http');
    return (
      <a 
        href={href} 
        {...(isExternal && {
          target: '_blank',
          rel: 'noopener noreferrer'
        })}
      >
        {children}
      </a>
    );
  },
};

// Hook version for client components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
