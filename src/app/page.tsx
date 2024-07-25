import { Text, ThemeSwitch, Navbar, NavbarProps } from "@components";
import styles from './styles.module.css'

export default function Home() {
  const links: NavbarProps['links'] = [
    { name: 'Home', href: '/', hoverColor: 'primary' },
    { name: 'About', href: '/about', hoverColor: 'secondary' },
    { name: 'Projects', href: '/projects', hoverColor: 'accent' },
    { name: 'Contact', href: '/contact', hoverColor: 'primary' },
  ];

  return (
    <main className={styles.container}>
      <Navbar links={links} />
      <div className={styles.innerContainer}>
        <Text preset="heading">
          Heading
        </Text>
        <Text preset="subheading">
          Subheading
        </Text>
        <Text preset="h3">
          Third heading
        </Text>
        <Text preset="h4">
          Fourth heading
        </Text>
        <Text preset="body">
          Body text
        </Text>
        <Text preset="caption">
          Caption text
        </Text>
      </div>
    </main>
  );
}
