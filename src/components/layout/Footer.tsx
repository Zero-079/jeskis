import type { SocialLink } from '../../types';
import { Container } from './Container';

interface FooterProps {
  socialLinks: SocialLink[];
  gameTitle?: string;
  tagline?: string;
}

const SOCIAL_ICONS: Record<string, string> = {
  bluesky: 'M1.5 1.5h18l-1.5 16.5-7.5 3-7.5-3L1.5 1.5z',
  discord: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z',
  github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  x: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
};

/**
 * Medieval-styled footer with game info, social links, and copyright.
 */
export function Footer({
  socialLinks,
  gameTitle = 'Jeskis',
  tagline = 'A Tale of Shadows & Steel',
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
                aria-label={`Visit our ${social.platform} page`}
                className="
                  p-2 rounded-lg border border-stone-700
                  text-stone-400 hover:text-gold-400
                  hover:border-gold-500/50 hover:bg-gold-500/5
                  transition-all duration-300
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                >
                  <path d={SOCIAL_ICONS[social.platform] || ''} />
                </svg>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-stone-500 text-xs">
              © {currentYear} {gameTitle}. All rights reserved.
            </p>
            <p className="text-stone-600 text-xs mt-1">
              Crafted with steel and shadow.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;