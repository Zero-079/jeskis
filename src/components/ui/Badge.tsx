import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small label/tag component with medieval styling.
 * Parchment background with dark text for high contrast.
 */
export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1
        text-xs font-heading font-medium
        uppercase tracking-wider
        bg-parchment-300 text-stone-800
        border border-parchment-400
        rounded-sm
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;