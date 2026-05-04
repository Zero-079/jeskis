import { useState, useEffect } from 'react';
import type { NavItem } from '../../types';
import { Container } from './Container';

interface NavbarProps {
  navItems: NavItem[];
}

/**
 * Fixed/sticky navigation bar with medieval styling.
 * Features: game logo, nav links, mobile hamburger menu, scroll-based transparency.
 */
export function Navbar({ navItems }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll state for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-out
        ${isScrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Game Title */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="font-heading text-2xl md:text-3xl font-bold text-gold-400 tracking-wider text-shadow-gold group-hover:text-gold-300 transition-colors">
              Jeskis
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="
                    font-heading text-sm tracking-wider uppercase
                    text-stone-300 hover:text-gold-400
                    relative after:absolute after:bottom-[-4px] after:left-0
                    after:w-0 after:h-[2px] after:bg-gold-500
                    hover:after:w-full after:transition-all after:duration-300
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`
                w-6 h-0.5 bg-gold-400 transition-all duration-300
                ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}
              `}
            />
            <span
              className={`
                w-6 h-0.5 bg-gold-400 transition-all duration-300
                ${isMobileMenuOpen ? 'opacity-0' : ''}
              `}
            />
            <span
              className={`
                w-6 h-0.5 bg-gold-400 transition-all duration-300
                ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}
              `}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-out
            ${isMobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'}
          `}
        >
          <ul className="flex flex-col gap-4 pt-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="
                    block font-heading text-sm tracking-wider uppercase
                    text-stone-300 hover:text-gold-400
                    py-2 border-b border-stone-800/50
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;