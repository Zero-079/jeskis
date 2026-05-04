/**
 * Hero section data
 */
export interface HeroData {
  title: string;
  subtitle: string;
  tagline: string;
  ctaText: string;
  ctaHref: string;
}

/**
 * Game feature (mechanic)
 */
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

/**
 * Team member / guild member
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
  description?: string;
}

/**
 * Gallery screenshot
 */
export interface Screenshot {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Navigation item (anchor link)
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * Social media link
 */
export interface SocialLink {
  platform: 'bluesky' | 'discord' | 'github' | 'x';
  url: string;
  iconId: string;
}

/**
 * Complete game data for the landing page
 */
export interface GameData {
  hero: HeroData;
  about: {
    title: string;
    description: string;
    lore: string;
  };
  features: Feature[];
  screenshots: Screenshot[];
  team: TeamMember[];
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    buttonHref: string;
  };
  nav: NavItem[];
  socials: SocialLink[];
}