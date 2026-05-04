import { ctaData, socialLinks } from '../../data/gameData';
import Container from '../layout/Container';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-b from-burgundy-900 to-burgundy-950 relative overflow-hidden">
      {/* Stone texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stone-texture" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="40" height="40" fill="currentColor" className="text-stone-800" />
              <rect x="0" y="0" width="18" height="18" className="text-stone-900" />
              <rect x="22" y="22" width="18" height="18" className="text-stone-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stone-texture)" />
        </svg>
      </div>

      {/* Ornamental top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      
      <Container>
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Medallion decoration */}
          <div className="flex justify-center mb-8">
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <circle
                  cx="40"
                  cy="40"
                  r="38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gold-500/40"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gold-500/20"
                />
                <path
                  d="M40 8 L44 24 L40 20 L36 24 Z"
                  fill="currentColor"
                  className="text-gold-400"
                />
                <path
                  d="M40 72 L44 56 L40 60 L36 56 Z"
                  fill="currentColor"
                  className="text-gold-400"
                />
                <path
                  d="M8 40 L24 44 L20 40 L24 36 Z"
                  fill="currentColor"
                  className="text-gold-400"
                />
                <path
                  d="M72 40 L56 44 L60 40 L56 36 Z"
                  fill="currentColor"
                  className="text-gold-400"
                />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-heading text-gold-400 mb-4 text-shadow-gold">
            {ctaData.headline}
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-parchment-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {ctaData.subheadline}
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button
              href={ctaData.buttonHref}
              variant="primary"
              className="text-lg px-10 py-4"
            >
              {ctaData.buttonText}
            </Button>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/50" />
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-gold-500/50">
              <path
                d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
                fill="currentColor"
              />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-stone-600 hover:border-gold-500/50 bg-stone-900/50 hover:bg-stone-800/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,83,0.2)]"
                aria-label={`Visit our ${social.platform} page`}
              >
                {/* Social icons - medieval styled shields/symbols */}
                {social.platform === 'bluesky' && (
                  <svg className="w-5 h-5 text-stone-400 group-hover:text-gold-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-2c-2.33 0-4.32-.9-5.76-2.33l1.7-1.71c.68.47 1.5.77 2.4.77.93 0 1.79-.32 2.47-.87l1.71 1.71c-.88.72-1.82 1.28-2.52 1.43zm1 2.12c-.95-.32-1.87-.79-2.73-1.43l-1.71 1.71c-.69.55-1.54.87-2.47.87-.9 0-1.72-.3-2.4-.77l-1.7 1.71C5.68 17.6 7.67 18.5 10 18.5v-2.02c-1.44 1.43-3.41 2.12-5.37 1.86-.97-.13-1.87-.49-2.63-1.06L0 17.38c1.14.97 2.57 1.62 4.13 1.75 2.49.2 4.84-.87 6.32-2.7l1.55 1.55c-1.8 2.11-4.35 3.42-7.1 3.42-3.31 0-6.17-1.93-7.56-4.7l-2.08.87c1.75 3.49 5.47 6.03 9.64 6.03 4.17 0 7.88-2.54 9.64-6.03l-2.08-.87c-1.39 2.77-4.25 4.7-7.56 4.7z"/>
                  </svg>
                )}
                {social.platform === 'discord' && (
                  <svg className="w-5 h-5 text-stone-400 group-hover:text-gold-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                )}
                {social.platform === 'github' && (
                  <svg className="w-5 h-5 text-stone-400 group-hover:text-gold-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                )}
                {social.platform === 'x' && (
                  <svg className="w-5 h-5 text-stone-400 group-hover:text-gold-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </Container>

      {/* Ornamental bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
    </section>
  );
};

export default CTA;