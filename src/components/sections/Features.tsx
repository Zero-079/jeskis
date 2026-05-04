import { Container, SectionTitle } from '../layout';
import { features } from '../../data/gameData';
import type { Feature } from '../../types';

/**
 * Medieval icon mapping - inline SVG icons for each feature type
 */
const iconMap: Record<string, React.ReactNode> = {
  sword: (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
      <path
        d="M6.5 17.5L17.5 6.5M14 4.5L19.5 10M4.5 14L10 19.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8.5L8.5 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  crown: (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
      <path
        d="M2 17L4 7L8 10L12 5L16 10L20 7L22 17H2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  anvil: (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
      <path
        d="M3 16L6 10L18 10L21 16H3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6 10V7C6 5.5 7.5 4 9 4H15C16.5 4 18 5.5 18 7V10"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 16H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
      <path
        d="M12 3V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 5L7 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19 5L17 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 5V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 10L9 17H15L20 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  castle: (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
      <path
        d="M4 20H20V14L16 10L12 14L8 10L4 14V20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 20V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 20V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 10V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="10" y="14" width="4" height="6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

/**
 * Individual feature card with medieval styling
 */
function FeatureCard({ feature }: { feature: Feature }) {
  const icon = iconMap[feature.icon] || iconMap.sword;

  return (
    <div className="group relative p-6 bg-stone-900 border border-stone-700 rounded-lg transition-all duration-300 hover:border-gold-500/50 hover:shadow-[0_0_20px_rgba(212,168,83,0.15)] hover:-translate-y-1">
      {/* Corner accent decorations */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-300 rounded-tl-sm" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-300 rounded-tr-sm" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-300 rounded-bl-sm" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-300 rounded-br-sm" />

      {/* Icon */}
      <div className="mb-4 text-gold-400 group-hover:text-gold-300 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(212,168,83,0.5)]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-heading font-semibold text-gold-400 tracking-wide text-shadow-gold group-hover:text-gold-300 transition-colors duration-300">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-parchment-300 text-sm leading-relaxed">
        {feature.description}
      </p>

      {/* Decorative bottom line */}
      <div className="mt-4 h-px w-0 bg-gradient-to-r from-gold-500/0 via-gold-500/60 to-gold-500/0 group-hover:w-full transition-all duration-500" />
    </div>
  );
}

/**
 * Features section displaying game mechanics in a responsive grid.
 * Uses medieval card styling with dark stone backgrounds and gold accents.
 */
export function Features() {
  return (
    <section id="features" className="py-20 bg-stone-950 relative">
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative">
        <SectionTitle
          title="The Path of the Jeskis"
          subtitle="Six pillars of power await those brave enough to seize them"
        />

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;