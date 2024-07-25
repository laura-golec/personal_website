'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${className} ${isActive ? 'active' : ''}`}>
        {children}
    </Link>
  );
};