import { heroData } from '../../data/gameData';
import Button from '../ui/Button';

/**
 * Full-viewport Hero section with atmospheric medieval visualization.
 * Features:
 * - Dark stone gradient background with burgundy/gold highlights
 * - Atmospheric fog/particles effect using CSS
 * - Game title "JESKIS" in Cinzel font with gold glow
 * - Tagline and subtitle text
 * - Primary CTA button with hover glow effect
 */
export function Hero() {
  const { title, subtitle, tagline, ctaText, ctaHref } = heroData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient - atmospheric medieval feel */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Atmospheric fog layers - subtle animated effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fog layer 1 - slow drift */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 20% 80%, rgba(139, 26, 58, 0.4) 0%, transparent 60%),
                         radial-gradient(ellipse 60% 40% at 80% 20%, rgba(166, 124, 40, 0.2) 0%, transparent 50%)`,
            animation: 'fog-drift 20s ease-in-out infinite alternate',
          }}
        />
        {/* Fog layer 2 - counter drift */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 70% 70%, rgba(139, 26, 58, 0.3) 0%, transparent 55%),
                         radial-gradient(ellipse 50% 30% at 30% 40%, rgba(212, 168, 83, 0.15) 0%, transparent 50%)`,
            animation: 'fog-drift-reverse 25s ease-in-out infinite alternate',
          }}
        />
        {/* Subtle particle/ember effect using CSS dots */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 10% 20%, rgba(212, 168, 83, 0.6), transparent),
                              radial-gradient(1px 1px at 30% 60%, rgba(212, 168, 83, 0.4), transparent),
                              radial-gradient(1px 1px at 50% 30%, rgba(139, 26, 58, 0.5), transparent),
                              radial-gradient(1px 1px at 70% 70%, rgba(212, 168, 83, 0.3), transparent),
                              radial-gradient(1px 1px at 90% 40%, rgba(166, 124, 40, 0.4), transparent),
                              radial-gradient(2px 2px at 25% 80%, rgba(212, 168, 83, 0.5), transparent),
                              radial-gradient(1px 1px at 85% 15%, rgba(139, 26, 58, 0.4), transparent),
                              radial-gradient(1px 1px at 45% 55%, rgba(212, 168, 83, 0.3), transparent)`,
            animation: 'ember-float 15s ease-in-out infinite',
          }}
        />
      </div>

      {/* Vignette overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(12, 10, 9, 0.4) 100%)',
        }}
      />

      {/* Content container - centered */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Subtitle - subtle, elegant */}
        <p
          className="font-heading text-gold-500/80 tracking-[0.3em] uppercase text-sm sm:text-base mb-4 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          {subtitle}
        </p>

        {/* Main title - large Cinzel with gold glow */}
        <h1
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gold-400 tracking-wider mb-6 text-shadow-gold animate-slide-up"
          style={{
            textShadow: '0 0 40px rgba(212, 168, 83, 0.4), 0 0 80px rgba(212, 168, 83, 0.2)',
            animationDelay: '0.4s',
          }}
        >
          {title}
        </h1>

        {/* Tagline - atmospheric medieval copy */}
        <p
          className="font-body text-parchment-300/90 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          {tagline}
        </p>

        {/* CTA Button - primary variant with glow */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button variant="primary" href={ctaHref}>
            {ctaText}
          </Button>
        </div>
      </div>

      {/* Decorative bottom corner flourishes */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-48 h-24"
          style={{
            background: 'linear-gradient(to top, rgba(12, 10, 9, 0.8) 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-48 h-24"
          style={{
            background: 'linear-gradient(to top, rgba(12, 10, 9, 0.8) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Scroll indicator - subtle arrow at bottom */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ animationDelay: '1.2s' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-gold-500/40"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* CSS animations for atmospheric effects */}
      <style>{`
        @keyframes fog-drift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(30px) translateY(-20px); }
        }
        @keyframes fog-drift-reverse {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-25px) translateY(15px); }
        }
        @keyframes ember-float {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

export default Hero;