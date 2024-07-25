import type { Metadata } from "next";
import { Providers } from './providers'
import "./globals.css";
import { Navbar, NavbarProps } from '@components'

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links: NavbarProps['links'] = [
    { name: 'Home', href: '/', hoverColor: 'primary' },
    { name: 'About', href: '/about', hoverColor: 'secondary' },
    { name: 'Projects', href: '/projects', hoverColor: 'accent' },
    { name: 'Contact', href: '/contact', hoverColor: 'foreground' },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <main className='container'>
            <Navbar links={links} />
            <div className='innerContainer'>
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
