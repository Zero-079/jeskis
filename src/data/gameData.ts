import type { GameData } from '../types';

export const gameData: GameData = {
hero: {
    title: 'Jeskis',
    subtitle: 'Un mundo oscuro entre humo, hierro y risas rotas',
    tagline: 'Adéntrate en una ciudad surrealista de la era industrial y recorre sus ruinas con un bufón trágico que nunca debió sobrevivir',
    ctaText: 'Entrar al Reino',
    ctaHref: '#about',
  },

  about: {
    title: 'Una ciudad que crea monstruos',
    description:
      'Jeski no es un héroe, y la ciudad que recorre tampoco busca redención. ' +
      'Alguna vez fue parte de su espectáculo; ahora regresa transformado por la pérdida, la furia y una oscuridad que ya no puede ocultar. ',
    lore:
      'Ambientado en una ciudad decadente donde fábricas humeantes, torres medievales y callejones enfermos conviven bajo un mismo cielo de ceniza,'
      + 'Jeskis es un metroidvania oscuro y surreal sobre duelo, violencia y memoria rota. Cada distrito, cada puerta sellada y cada atajo olvidado'
      + 'acerca a Jeski a la verdad detrás de la tragedia que lo convirtió en algo más temido que humano.',
  },

  features: [
    {
      id: 'exploration',
      icon: 'sword',
      title: 'Exploración metroidvania',
      description:
        'Recorre una ciudad interconectada repletea de rutas ocultas, puertas selladas y ' +
        'caminos que solo se abren cuando descubres nuevas habilidades.',
    },
    {
      id: 'prota',
      icon: 'crown',
      title: 'Un protagonista oscuro',
      description:
        'Juega como Jeski, un bufón trágico y violenta cuya historia se mueve entre el dolor, ' +
        'la obsesión y la necesidad de descubrir la verdad.',
    },
    {
      id: 'combat',
      icon: 'anvil',
      title: 'Combate ágil y brutal',
      description:
        'Salta, esquiva y ataca con precisión en enfrentamientos que mezclan movilidad, ritmo y peligro constante.',
    },
    {
      id: 'world',
      icon: 'eye',
      title: 'Mundo surrealista',
      description:
        'Explora una ciudad donde la arquitectura medieval y la maquinaria industrial conviven con pesadillas, ' +
        'símbolos rotos y escenarios imposibles.',
    },
    {
      id: 'envioroment',
      icon: 'scale',
      title: 'Narrativa ambiental',
      description:
        'Descubre la historia a través de escenarios, ruinas, objetos y fragmentos del pasado dispersos por cada distrito.',
    },
    {
      id: 'secrets',
      icon: 'castle',
      title: 'Secretos y memoria rota',
      description:
        'Vuelve sobre tus pasos, abre nuevos accesos y desentierra lo que la ciudad intentó ocultar bajo hierro, ceniza y sangre.',
    },
  ],

  screenshots: [
    {
      id: 'screenshot-1',
      src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop',
      alt: 'Ruinas del Castillo Blackmere al atardecer',
      caption: 'Las Ruinas de Blackmere',
    },
    {
      id: 'screenshot-2',
      src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=450&fit=crop',
      alt: 'Armadura y armas medievales',
      caption: 'La Armería de los Reyes Caídos',
    },
    {
      id: 'screenshot-3',
      src: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=450&fit=crop',
      alt: 'Camino forestado neblinoso',
      caption: 'Los Bosques Susurrantes',
    },
    {
      id: 'screenshot-4',
      src: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&h=450&fit=crop',
      alt: 'Sala del trono medieval',
      caption: 'El Trono Vacío',
    },
    {
      id: 'screenshot-5',
      src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=450&fit=crop',
      alt: 'Fortaleza montana al amanecer',
      caption: 'El Nido del Águila',
    },
    {
      id: 'screenshot-6',
      src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=450&fit=crop',
      alt: 'Campo de batalla nevado',
      caption: 'Los Campos Helados',
    },
  ],

  team: [
    {
      id: 'team-1',
      name: 'El Arquitecto',
      role: 'Director del Juego',
      description: 'Arquitecto de mundos, tejedor de destinos.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Architect&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-2',
      name: 'El Artesano',
      role: 'Director de Diseño',
      description: 'Forjando mecánica desde el caos.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Artisan&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-3',
      name: 'El Cronista',
      role: 'Director Narrativo',
      description: 'Guardián de historias por contar.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Chronicler&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-4',
      name: 'El Herrero',
      role: 'Director Técnico',
      description: 'Golpeando código con precisión.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Smith&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-5',
      name: 'El Bardo',
      role: 'Director de Arte',
      description: 'Pintando relatos en sombra y luz.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Bard&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-6',
      name: 'El Alquimista',
      role: 'Diseño de Sonido',
      description: 'Destilando sonidos desde el vacío.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=Alchemist&backgroundColor=722f37&textColor=f5e6c8',
    },
  ],

  cta: {
    headline: 'Tu Leyenda Comienza Ahora',
    subheadline:
      'Únete a la hermandad de los primeros Jeskis. Séamong los primeros en reclamar tu trono.',
    buttonText: 'Unirse a la Orden',
    buttonHref: '#',
  },

  nav: [
    { label: 'Historia', href: '#about' },
    { label: 'Características', href: '#features' },
    { label: 'Galería', href: '#gallery' },
    { label: 'La Orden', href: '#team' },
    { label: 'Únete', href: '#cta' },
  ],

  socials: [
    { platform: 'bluesky', url: 'https://bsky.app/profile/jeskis.game', iconId: 'bluesky' },
    { platform: 'discord', url: 'https://discord.gg/jeskis', iconId: 'discord' },
    { platform: 'github', url: 'https://github.com/jeskis', iconId: 'github' },
    { platform: 'x', url: 'https://x.com/jeskisgame', iconId: 'x' },
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