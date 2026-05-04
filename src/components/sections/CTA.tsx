import { ctaData, socialLinks } from '../../data/gameData';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { FaGithub, FaDiscord } from 'react-icons/fa';

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
                aria-label={`Visita nuestra página de ${social.platform}`}
              >
{/* Social icons */}
                {social.platform === 'discord' && (
                  <FaDiscord className="w-5 h-5 text-stone-400 group-hover:text-gold-400 transition-colors" />
                )}
                {social.platform === 'github' && (
                  <FaGithub className="w-5 h-5 text-stone-400 group-hover:text-gold-400 transition-colors" />
                )}
                {social.platform === 'x' && (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-stone-400 group-hover:text-gold-400 transition-colors" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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