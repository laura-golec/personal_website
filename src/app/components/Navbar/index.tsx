import React from 'react';
import './Navbar.module.css';
import { Text, ThemeSwitch } from '@components'

type NavbarHoverColors = 'primary' | 'secondary' | 'accent' | 'foreground';

export interface NavbarProps {
  links: { name: string, href: string, hoverColor?: NavbarHoverColors }[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        {links.map((link, index) => (
          <li key={index} className='navbar-item'>
            <a href={link.href} className="navbar-link" style={{ '--hover-color': `var(--${link.hoverColor})` } as React.CSSProperties}>
              <Text preset="caption">
                {link.name}
              </Text>
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar-item">
        <ThemeSwitch/>
      </div>
    </nav>
  );
};
