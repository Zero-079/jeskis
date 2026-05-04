import { Container, SectionTitle } from '../layout';
import { screenshots } from '../../data/gameData';
import type { Screenshot } from '../../types';

/**
 * Generates a medieval-themed CSS gradient pattern for placeholder images.
 * Each screenshot gets a unique gradient combination.
 */
function getGradientPlaceholder(index: number): string {
  const gradients = [
    'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1c1917 100%)',
    'linear-gradient(180deg, #0c0a09 0%, #292524 50%, #1c1917 100%)',
    'linear-gradient(45deg, #1c1917 0%, #3d3d3d 40%, #292524 100%)',
    'radial-gradient(ellipse at center, #292524 0%, #0c0a09 100%)',
    'linear-gradient(225deg, #1a1a1a 0%, #44403c 30%, #292524 100%)',
    'linear-gradient(135deg, #292524 0%, #1c1917 30%, #0c0a09 100%)',
  ];
  return gradients[index % gradients.length];
}

/**
 * Decorative pattern overlay for placeholder images.
 * Creates a subtle medieval stone/fog effect.
 */
function PatternOverlay({ index }: { index: number }) {
  const patterns = [
    /* Foggy ruins pattern */
    'radial-gradient(circle at 30% 70%, rgba(212,168,83,0.05) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(114,47,55,0.05) 0%, transparent 50%)',
    /* Castle shadows */
    'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%), radial-gradient(circle at 50% 100%, rgba(212,168,83,0.03) 0%, transparent 60%)',
    /* Forest mist */
    'radial-gradient(ellipse at 20% 80%, rgba(68,64,60,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(114,47,55,0.03) 0%, transparent 40%)',
    /* Throne room */
    'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.2) 100%), linear-gradient(0deg, rgba(0,0,0,0.4) 0%, transparent 60%)',
    /* Mountain fortress */
    'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212,168,83,0.04) 0%, transparent 30%)',
    /* Frozen battlefield */
    'linear-gradient(180deg, rgba(200,180,150,0.02) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(255,255,255,0.03) 0%, transparent 40%)',
  ];
  return patterns[index % patterns.length];
}

/**
 * Individual gallery item with ornate medieval frame.
 * Uses CSS gradient placeholder with caption overlay on hover.
 */
function GalleryItem({ screenshot, index }: { screenshot: Screenshot; index: number }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      {/* Ornate medieval frame - outer border */}
      <div className="absolute inset-0 border-2 border-stone-700 rounded-lg pointer-events-none z-10 group-hover:border-gold-500/40 transition-colors duration-300" />

      {/* Inner frame accent */}
      <div className="absolute inset-1 border border-stone-800 rounded-md pointer-events-none" />

      {/* Corner flourishes - visible on hover */}
      <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-300 rounded-tl-sm z-20" />
      <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-300 rounded-tr-sm z-20" />
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-300 rounded-bl-sm z-20" />
      <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-300 rounded-br-sm z-20" />

      {/* Image placeholder with gradient */}
      <div
        className="aspect-video relative overflow-hidden"
        style={{ background: getGradientPlaceholder(index) }}
      >
        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: PatternOverlay({ index }) }}
        />

        {/* Subtle fog effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />

        {/* Placeholder icon - decorative medieval motif */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-16 h-16 text-stone-700/30 group-hover:scale-110 group-hover:text-gold-500/20 transition-all duration-500"
          >
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Caption overlay - appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="text-center">
            <p className="text-gold-400 font-heading text-sm tracking-wide text-shadow-gold">
              {screenshot.caption || screenshot.alt}
            </p>
          </div>
        </div>
      </div>

      {/* Scale effect on hover */}
      <div className="absolute inset-0 bg-transparent group-hover:bg-transparent transition-transform duration-300 pointer-events-none" />
    </div>
  );
}

/**
 * Gallery section displaying game screenshots with ornate medieval frames.
 * Uses CSS gradient placeholders with caption overlay on hover.
 */
export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-stone-900 relative">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative">
        <SectionTitle
          title="Destellos del Reino"
          subtitle="Contempla las sombras y el acero que esperan tu llegada"
        />

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <GalleryItem key={screenshot.id} screenshot={screenshot} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;