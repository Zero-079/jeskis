import type { ReactNode, MouseEventHandler } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

/**
 * Medieval-styled button component with primary and secondary variants.
 * - Primary: gold/amber background, dark stone text
 * - Secondary: outline with gold border
 * Includes hover effects with smooth transitions.
 */
export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    px-6 py-3
    font-heading font-semibold
    text-sm tracking-wider uppercase
    transition-all duration-300 ease-out
    border-2 border-transparent
    cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-gold-500 text-stone-900
      border-gold-500
      hover:bg-gold-400 hover:border-gold-400
      hover:shadow-[0_0_20px_rgba(212,168,83,0.4)]
      active:bg-gold-600 active:border-gold-600
    `,
    secondary: `
      bg-transparent text-gold-400
      border-gold-500
      hover:bg-gold-500/10 hover:text-gold-300
      hover:border-gold-400
      active:bg-gold-500/20
    `,
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;