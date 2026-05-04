import type { GameData } from '../types';

export const gameData: GameData = {
  hero: {
    title: 'Jeskis',
    subtitle: 'A Tale of Shadows & Steel',
    tagline: 'Forge your legend in a crumbling kingdom where every choice echoes through eternity.',
    ctaText: 'Enter the Realm',
    ctaHref: '#about',
  },

  about: {
    title: 'The Kingdom Awaits',
    description:
      'In the twilight age of the Fifth Era, the once-great Kingdom of Valdris lies in ruin. ' +
      'The Iron Throne sits empty, watched over by the hollow eyes of dead kings. ' +
      'Now, from the shadows of forgotten taverns and the torch-lit halls of exiled lords, ' +
      'a new power rises—will you be the one to reclaim the throne, or let the darkness consume all?',
    lore:
      'Centuries before the fall, the Jeskis—warriors bound by ancient blood oaths—were ' +
      'the kingdom\'s first defenders. Their rituals forbidden, their names erased from history. ' +
      'But the old stones remember, and the blood remembers too. The time of the Jeskis has come again.',
  },

  features: [
    {
      id: 'combat',
      icon: 'sword',
      title: 'Blade & Bond',
      description:
        'Master the art of steel through a deep combat system that rewards patience, precision, and cunning. ' +
        'Every swing tells a story—every parry a poem.',
    },
    {
      id: 'factions',
      icon: 'crown',
      title: 'Factions of Fate',
      description:
        'Choose your allegiance among warring houses, mysterious cults, and forgotten orders. ' +
        'Your allegiances shape the world—and the world remembers.',
    },
    {
      id: 'crafting',
      icon: 'anvil',
      title: 'The Artisan\'s Path',
      description:
        'Forged in fire, tempered in blood. Craft legendary weapons, brew elixirs of power, ' +
        'and bind your soul to the steel you create.',
    },
    {
      id: 'shadows',
      icon: 'eye',
      title: 'Whispers in the Dark',
      description:
        'A shadow network woven into every corner of the kingdom. Gather secrets, ' +
        'uncover conspiracies, and become the whisper that topples empires.',
    },
    {
      id: 'consequences',
      icon: 'scale',
      title: 'The Weight of Choices',
      description:
        'No deed goes unrecorded. The people remember your mercy—and your cruelty. ' +
        'Build your legacy, or watch it crumble to ash.',
    },
    {
      id: 'world',
      icon: 'castle',
      title: 'A Living Kingdom',
      description:
        'From the fog-shrouded coasts to the burning plains, every corner breathes with ' +
        'history, danger, and opportunity. Explore, or conquer.',
    },
  ],

  screenshots: [
    {
      id: 'screenshot-1',
      src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop',
      alt: 'Dark castle ruins at twilight',
      caption: 'The Ruins of Blackmere Keep',
    },
    {
      id: 'screenshot-2',
      src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=450&fit=crop',
      alt: 'Medieval armor and weapons display',
      caption: 'The Armory of Lost Kings',
    },
    {
      id: 'screenshot-3',
      src: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=450&fit=crop',
      alt: 'Foggy forest path',
      caption: 'The Whispering Woods',
    },
    {
      id: 'screenshot-4',
      src: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&h=450&fit=crop',
      alt: 'Medieval throne room',
      caption: 'The Empty Throne',
    },
    {
      id: 'screenshot-5',
      src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=450&fit=crop',
      alt: 'Mountain fortress at dawn',
      caption: 'The Eagle\'s Nest',
    },
    {
      id: 'screenshot-6',
      src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=450&fit=crop',
      alt: 'Snow-covered battlefield',
      caption: 'The Frozen Fields',
    },
  ],

  team: [
    {
      id: 'team-1',
      name: 'The Architect',
      role: 'Game Director',
      description: 'Architect of worlds, weaver of fates.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Architect&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-2',
      name: 'The Artisan',
      role: 'Lead Designer',
      description: 'Forging mechanics from chaos.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Artisan&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-3',
      name: 'The Chronicler',
      role: 'Narrative Lead',
      description: 'Keeper of stories untold.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Chronicler&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-4',
      name: 'The Smith',
      role: 'Technical Lead',
      description: 'Striking code with precision.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Smith&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-5',
      name: 'The Bard',
      role: 'Art Director',
      description: 'Painting tales in shadow and light.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Bard&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-6',
      name: 'The Alchemist',
      role: 'Sound Design',
      description: 'Brewing soundscapes from the void.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Alchemist&backgroundColor=722f37&textColor=f5e6c8',
    },
  ],

  cta: {
    headline: 'Your Legend Begins Now',
    subheadline:
      'Join the fellowship of the first Jeskis. Be among the first to claim your throne.',
    buttonText: 'Join the Order',
    buttonHref: '#',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'The Order', href: '#team' },
    { label: 'Join Us', href: '#cta' },
  ],

  socials: [
    { platform: 'bluesky', url: 'https://bsky.app/profile/jeskis.game', iconId: 'bluesky' },
    { platform: 'discord', url: 'https://discord.gg/jeskis', iconId: 'discord' },
    { platform: 'github', url: 'https://github.com/jeskis', iconId: 'github' },
    { platform: 'x', url: 'https://x.com/jeskisgame', iconId: 'x' },
  ],
};

// Hero data export for convenience
export const heroData = gameData.hero;

// Features export
export const features = gameData.features;

// Team export
export const teamMembers = gameData.team;

// Screenshots export
export const screenshots = gameData.screenshots;

// Nav items export
export const navItems = gameData.nav;

// Social links export
export const socialLinks = gameData.socials;

// CTA data export
export const ctaData = gameData.cta;