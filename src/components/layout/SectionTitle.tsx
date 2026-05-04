interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * Medieval-styled section heading with Cinzel font, gold color,
 * and decorative ornamental divider element.
 */
export function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {/* Decorative top divider - ornamental line */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-60" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-gold-500 opacity-80"
        >
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-60" />
      </div>

      {/* Title - Cinzel font with gold color */}
      <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gold-400 tracking-wider text-shadow-gold">
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="mt-3 text-lg text-parchment-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Decorative bottom divider */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-burgundy-500 to-transparent opacity-40" />
        <div className="w-2 h-2 rotate-45 border border-gold-500 opacity-60" />
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-burgundy-500 to-transparent opacity-40" />
      </div>
    </div>
  );
}

export default SectionTitle;