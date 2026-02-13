/**
 * Design Token System
 * Centralized visual design constants for consistent styling
 */

export const colors = {
  background: {
    primary: '#0B0F14',
    navy: '#0F172A',
    elevated: '#1F2937',
  },
  accent: {
    primary: '#3B82F6',
    hover: '#2563EB',
    light: '#60A5FA',
  },
  text: {
    primary: '#E5E7EB',
    secondary: '#9CA3AF',
    muted: '#6B7280',
  },
  border: {
    subtle: '#1F2937',
    default: '#374151',
  },
} as const;

export const spacing = {
  section: {
    small: '3rem',    // 48px
    medium: '5rem',   // 80px
    large: '6.25rem', // 100px
    xlarge: '8rem',   // 128px
  },
  container: {
    padding: '1.5rem', // 24px
    paddingLg: '2rem', // 32px
  },
} as const;

export const radius = {
  small: '0.5rem',   // 8px
  medium: '0.75rem', // 12px
  large: '1rem',     // 16px
  full: '9999px',
} as const;

export const shadows = {
  subtle: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  default: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  medium: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  large: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  glow: '0 0 20px rgba(59, 130, 246, 0.3)',
  glowStrong: '0 0 30px rgba(59, 130, 246, 0.5)',
} as const;

export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export const typography = {
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const layout = {
  maxWidth: {
    content: '1200px',
    reading: '800px',
  },
} as const;
