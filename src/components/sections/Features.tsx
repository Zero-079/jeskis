import { Container, SectionTitle } from '../layout';
import { features } from '../../data/gameData';
import type { Feature } from '../../types';
import { FaMap, FaTheaterMasks, FaCrosshairs, FaFortAwesome, FaBook, FaKey } from 'react-icons/fa';

/**
 * Icon mapping for features
 */
const iconMap: Record<string, React.ReactNode> = {
  exploration: <FaMap className="w-10 h-10" />,
  prota: <FaTheaterMasks className="w-10 h-10" />,
  combat: <FaCrosshairs className="w-10 h-10" />,
  world: <FaFortAwesome className="w-10 h-10" />,
  envioroment: <FaBook className="w-10 h-10" />,
  secrets: <FaKey className="w-10 h-10" />,
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
          title="El Camino de los Jeskis"
          subtitle="Seis pilares de poder esperan a los assez valientes para tomarlos"
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