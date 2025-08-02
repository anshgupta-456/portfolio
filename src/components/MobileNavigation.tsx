import React, { useState } from 'react';
import { useBreakpoint } from '../hooks/useResponsive';
import HoverLinks from './HoverLinks';
import './styles/MobileNavigation.css';

interface MobileNavigationProps {
  className?: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const breakpoint = useBreakpoint();

  // Don't render on desktop
  if (breakpoint.isDesktop) {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: '#about', text: 'ABOUT' },
    { href: '#work', text: 'WORK' },
    { href: '#contact', text: 'CONTACT' },
  ];

  return (
    <div className={`mobile-navigation ${className}`}>
      {/* Hamburger Button */}
      <button
        className={`hamburger ${isOpen ? 'hamburger--active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__content">
          <nav className="mobile-menu__nav">
            <ul className="mobile-menu__list">
              {navItems.map((item, index) => (
                <li key={item.href} className="mobile-menu__item">
                  <a
                    href={item.href}
                    className="mobile-menu__link"
                    onClick={() => setIsOpen(false)}
                    style={{ '--animation-delay': `${index * 0.1}s` } as React.CSSProperties}
                  >
                    <HoverLinks text={item.text} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="mobile-menu__contact">
            <a
              href="mailto:anshgupta456ansh@gmail.com"
              className="mobile-menu__email"
              onClick={() => setIsOpen(false)}
            >
              anshgupta456ansh@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="mobile-menu__backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default MobileNavigation;