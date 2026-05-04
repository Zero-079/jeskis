import type { SocialLink } from '../../types';
import { Container } from './Container';
import { FaDiscord, FaGithub } from 'react-icons/fa';

interface FooterProps {
  socialLinks: SocialLink[];
  gameTitle?: string;
  tagline?: string;
}

/**
 * Medieval-styled footer with game info, social links, and copyright.
 */
export function Footer({
  socialLinks,
  gameTitle = 'Jeskis',
  tagline = 'Un relato de sombras y acero',
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 border-t border-stone-800/50">
      {/* Ornamental Divider */}
      <div className="relative h-8 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Center ornament */}
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-gold-500/60"
            fill="currentColor"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        {/* Gradient lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      <Container className="py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Game Info */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold text-gold-400 text-shadow-gold">
              {gameTitle}
            </h3>
            <p className="mt-2 text-stone-400 text-sm">
              {tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visita nuestra página de ${social.platform}`}
                className="
                  p-2 rounded-lg border border-stone-700
                  text-stone-400 hover:text-gold-400
                  hover:border-gold-500/50 hover:bg-gold-500/5
                  transition-all duration-300
                "
              >
                {social.platform === 'discord' && (
                  <FaDiscord className="w-5 h-5" />
                )}
                {social.platform === 'github' && (
                  <FaGithub className="w-5 h-5" />
                )}
                {social.platform === 'x' && (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-stone-500 text-xs">
              © {currentYear} {gameTitle}. Todos los derechos reservados.
            </p>
            <p className="text-stone-600 text-xs mt-1">
              Forjado con acero y sombras.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;