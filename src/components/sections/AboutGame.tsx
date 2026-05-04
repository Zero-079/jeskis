import { gameData } from '../../data/gameData';
import Container from '../layout/Container';
import SectionTitle from '../layout/SectionTitle';

/**
 * AboutGame section displaying game premise and medieval lore.
 * Features:
 * - Parchment/stone background with subtle texture
 * - SectionTitle component for atmospheric heading
 * - Description + lore text blocks with ornamental dividers
 * - Medieval storytelling tone
 * - Responsive layout
 */
export function AboutGame() {
  const { about } = gameData;

  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background - parchment with stone overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, var(--color-stone-900) 0%, var(--color-stone-800) 100%)
          `,
        }}
      />
      {/* Subtle parchment texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, transparent 0%, rgba(12, 10, 9, 0.2) 100%)',
        }}
      />

      <Container className="relative z-10">
        {/* Section Title - medieval styled */}
        <SectionTitle
          title={about.title}
          subtitle="Descubre la historia detrás del trono roto"
        />

        {/* Content blocks */}
        <div className="max-w-3xl mx-auto">
          {/* First text block - description */}
          <div className="text-center mb-10">
            <p className="text-lg sm:text-xl text-parchment-300 leading-relaxed font-body">
              {about.description}
            </p>
          </div>

          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-burgundy-500 to-transparent opacity-50" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gold-500 opacity-60"
            >
              <path
                d="M12 2L9 9H2l6 5-2 9 7-5 7 5-2-9 6-5h-7z"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-burgundy-500 to-transparent opacity-50" />
          </div>

          {/* Second text block - lore */}
          <div className="text-center">
            <p className="text-lg sm:text-xl text-parchment-400/80 leading-relaxed font-body italic">
              {about.lore}
            </p>
          </div>

          {/* Bottom ornamental divider */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-600 to-transparent opacity-40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-gold-500 opacity-50" />
            <div className="w-3 h-3 rotate-45 border border-gold-500/60 opacity-50" />
            <div className="w-1.5 h-1.5 rotate-45 border border-gold-500 opacity-50" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-600 to-transparent opacity-40" />
          </div>
        </div>

        {/* Key premise highlight - optional feature highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-stone-900/60 border border-gold-500/30 rounded-sm">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gold-500"
            >
              <path
                d="M12 2l3 7h7l-5.5 5 2 7.5L12 17l-6.5 4.5 2-7.5L2 9h7l3-7z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            <span className="text-parchment-300 text-sm font-heading tracking-wide">
              La Era de las Sombras Comienza
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutGame;