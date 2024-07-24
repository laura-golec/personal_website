import { Text, ThemeSwitch } from "@components";
import styles from './styles.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.innerContainer}>
        <ThemeSwitch/>
        <Text type="heading">
          Hello, World
        </Text>
        <Text color="primary">
          Hi, I am primary
        </Text>
        <Text color="secondary">
          Hi, I am secondary
        </Text>
        <Text color="accent">
          Hi, I am accent
        </Text>
        <Text>
          This is an experimental text component
        </Text>
      </div>
    </main>
  );
}
