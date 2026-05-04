import type { ReactNode, ElementType } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Max-width container with centered content and responsive padding.
 * Uses the medieval theme's max-w-7xl with consistent padding.
 */
export function Container({ children, className = '', as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  );
}

export default Container;