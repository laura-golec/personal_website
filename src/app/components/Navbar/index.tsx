import React from 'react';
import './Navbar.module.css';
import { Text, ThemeSwitch } from '@components'
import { BiLogoLinkedin } from 'react-icons/bi';

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
            <a href={link.href} className="navbar-link">
              <Text preset="caption" hover={link.hoverColor}>
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
