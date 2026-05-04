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
      'Ambientado en una ciudad decadente donde fábricas humeantes, torres medievales y callejones enfermos conviven bajo un mismo cielo de ceniza, '
      + 'Jeskis es un metroidvania oscuro y surreal sobre duelo, violencia y memoria rota. Cada distrito, cada puerta sellada y cada atajo olvidado '
      + 'acerca a Jeski a la verdad detrás de la tragedia que lo convirtió en algo más temido que humano.',
  },

features: [
    {
      id: 'exploration',
      icon: 'exploration',
      title: 'Exploración metroidvania',
      description:
        'Recorre una ciudad interconectada repletea de rutas ocultas, puertas selladas y ' +
        'caminos que solo se abren cuando descubres nuevas habilidades.',
    },
    {
      id: 'prota',
      icon: 'prota',
      title: 'Un protagonista oscuro',
      description:
        'Juega como Jeski, un bufón trámite y violento cuya historia se mueve entre el dolor, ' +
        'la obsesión y la necesidad de descubrir la verdad.',
    },
    {
      id: 'combat',
      icon: 'combat',
      title: 'Combate ágil y brutal',
      description:
        'Salta, esquiva y ataca con precisión en enfrentamientos que mezclan movilidad, ritmo y peligro constante.',
    },
    {
      id: 'world',
      icon: 'world',
      title: 'Mundo surrealista',
      description:
        'Explora una ciudad donde la arquitectura medieval y la maquinaria industrial conviven con pesadillas, ' +
        'símbolos rotos y escenarios imposibles.',
    },
    {
      id: 'envioroment',
      icon: 'envioroment',
      title: 'Narrativa ambiental',
      description:
        'Descubre la historia a través de escenarios, ruinas, objetos y fragmentos del pasado dispersos por cada distrito.',
    },
    {
      id: 'secrets',
      icon: 'secrets',
      title: 'Secretos y memoria rota',
      description:
        'Vuelve sobre tus pasos, abre nuevos accesos y desentierra lo que la ciudad intentó ocultar bajo hierro, ceniza y sangre.',
    },
  ],

  screenshots: [
    {
      id: 'screenshot-1',
      src: 'https://res.cloudinary.com/dizwnyqfy/image/upload/v1777936800/WhatsApp_Image_2026-05-04_at_2.19.16_PM_h1kcd7.jpg',
      alt: 'Ruinas del Castillo Blackmere al atardecer',
      caption: 'Las Ruinas de Blackmere',
    },
    {
      id: 'screenshot-2',
      src: 'https://res.cloudinary.com/dizwnyqfy/image/upload/v1777937059/WhatsApp_Image_2026-05-04_at_2.19.16_PM_1_lgc5qh.jpg',
      alt: 'Armadura y armas medievales',
      caption: 'La Armería de los Reyes Caídos',
    },
    {
      id: 'screenshot-3',
      src: 'https://res.cloudinary.com/dizwnyqfy/image/upload/v1777937064/WhatsApp_Image_2026-05-04_at_2.19.16_PM_2_pj4e2v.jpg',
      alt: 'Camino forestado neblinoso',
      caption: 'Los Bosques Susurrantes',
    },
    {
      id: 'screenshot-4',
      src: 'https://res.cloudinary.com/dizwnyqfy/image/upload/v1777937175/WhatsApp_Image_2026-05-04_at_2.09.04_PM_agynjz.jpg',
      alt: 'Sala del trono medieval',
      caption: 'El Trono Vacío',
    },
    {
      id: 'screenshot-5',
      src: 'https://res.cloudinary.com/dizwnyqfy/image/upload/v1777937176/WhatsApp_Image_2026-05-04_at_2.09.04_PM_2_lwbbwu.jpg',
      alt: 'Fortaleza montana al amanecer',
      caption: 'El Nido del Águila',
    },
    {
      id: 'screenshot-6',
      src: 'https://res.cloudinary.com/dizwnyqfy/image/upload/v1777937176/WhatsApp_Image_2026-05-04_at_2.09.04_PM_1_aeenfq.jpg',
      alt: 'Campo de batalla nevado',
      caption: 'Los Campos Helados',
    },
  ],

  team: [
    {
      id: 'team-1',
      name: 'Carlos Gil',
      role: 'Director del Juego',
      description: 'El Arquitecto. Decide el camino del reino.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=CG&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-2',
      name: 'Miguel Murillo',
      role: 'Programador de Gameplay',
      description: 'El Herrero. Forja las armas que usas.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=MM&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-3',
      name: 'Fredy Ortiz',
      role: 'Programador de UI y Herramientas',
      description: 'El Cartógrafo. Dibuja los mapas del mundo.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=FO&backgroundColor=722f37&textColor=f5e6c8',
    },
    {
      id: 'team-4',
      name: 'German Castellanos',
      role: 'Producción Técnica y QA',
      description: 'El Guarda. Detecta las grietas en la armadura.',
      avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=GC&backgroundColor=722f37&textColor=f5e6c8',
    },
  ],

  cta: {
    headline: 'Tu Leyenda Comienza Ahora',
    subheadline:
      'Únete a la aventura y sé entre los primeros en descubrir la verdad.',
    buttonText: 'Unirse',
    buttonHref: '#',
  },

  nav: [
    { label: 'Historia', href: '#about' },
    { label: 'Características', href: '#features' },
    { label: 'Galería', href: '#gallery' },
    { label: 'El Equipo', href: '#team' },
    { label: 'Únete', href: '#cta' },
  ],

  socials: [
    { platform: 'discord', url: 'https://discord.gg/hRyhUkDxv', iconId: 'discord' },
    { platform: 'github', url: 'https://github.com/Zero-079/jeskis', iconId: 'github' },
    { platform: 'x', url: 'https://x.com/Jeskis22', iconId: 'x' },
  ],
};

// Exports de conveniencia
export const heroData = gameData.hero;
export const features = gameData.features;
export const teamMembers = gameData.team;
export const screenshots = gameData.screenshots;
export const navItems = gameData.nav;
export const socialLinks = gameData.socials;
export const ctaData = gameData.cta;