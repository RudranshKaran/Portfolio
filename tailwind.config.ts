import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F14",
        navy: "#0F172A",
        accent: "#3B82F6",
        "text-primary": "#E5E7EB",
        "text-secondary": "#9CA3AF",
        border: "#1F2937",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "hover-lift": "hover-lift 0.3s ease-out",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        "hover-lift": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-4px)" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#9CA3AF',
            lineHeight: '1.8',
            a: {
              color: '#3B82F6',
              fontWeight: '500',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            strong: {
              color: '#E5E7EB',
              fontWeight: '700',
            },
            code: {
              color: '#3B82F6',
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              fontWeight: '400',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid #1F2937',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              border: 'none',
              color: 'inherit',
              fontSize: '0.875rem',
              lineHeight: '1.7',
            },
            h1: {
              color: '#E5E7EB',
              fontWeight: '700',
              marginTop: '2rem',
              marginBottom: '1.5rem',
            },
            h2: {
              color: '#E5E7EB',
              fontWeight: '700',
              marginTop: '3rem',
              marginBottom: '1rem',
              borderBottom: '1px solid #1F2937',
              paddingBottom: '0.75rem',
            },
            'h2:first-child': {
              marginTop: '0',
            },
            h3: {
              color: '#E5E7EB',
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            h4: {
              color: '#E5E7EB',
              fontWeight: '600',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginBottom: '1.25rem',
            },
            blockquote: {
              color: '#9CA3AF',
              borderLeftColor: '#3B82F6',
              borderLeftWidth: '4px',
              backgroundColor: 'rgba(15, 23, 42, 0.4)',
              paddingLeft: '1.5rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              borderRadius: '0 0.25rem 0.25rem 0',
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: '0',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.25rem',
            },
            'ul > li::before': {
              content: '"▹"',
              color: '#3B82F6',
              position: 'absolute',
              left: '0',
              fontWeight: '600',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
            },
            'ol > li': {
              paddingLeft: '0.25rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            th: {
              backgroundColor: 'rgba(15, 23, 42, 0.5)',
              border: '1px solid #1F2937',
              padding: '0.75rem 1rem',
              textAlign: 'left',
              color: '#E5E7EB',
              fontWeight: '600',
            },
            td: {
              border: '1px solid #1F2937',
              padding: '0.75rem 1rem',
              color: '#9CA3AF',
            },
            hr: {
              borderColor: '#1F2937',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
