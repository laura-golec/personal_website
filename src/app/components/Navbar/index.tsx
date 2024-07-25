import React from 'react';
import './Navbar.module.css';
import { Text, ThemeSwitch } from '@components';
import { Colors } from '@types';
import { NavLink } from './NavLink';

export interface NavbarProps {
  links: { name: string, href: string, hoverColor?: Colors }[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        {links.map((link, index) => (
          <li key={index} className='navbar-item'>
            <NavLink href={link.href} className="navbar-link">
              <Text preset="caption" hover={link.hoverColor}>
                {link.name.toLowerCase()}
              </Text>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="navbar-item">
        <ThemeSwitch />
      </div>
    </nav>
  );
};
