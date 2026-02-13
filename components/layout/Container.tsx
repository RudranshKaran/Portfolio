import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'default' | 'reading';
}

export default function Container({ 
  children, 
  className = '', 
  maxWidth = 'default' 
}: ContainerProps) {
  const maxWidthClass = maxWidth === 'reading' ? 'max-w-4xl' : 'max-w-7xl';
  
  return (
    <div className={`${maxWidthClass} mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
