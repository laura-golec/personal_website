'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import {IconContext} from "react-icons";
import Image from "next/image"
import styles from './ThemeSwitch.module.css'

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  const [xsFont, setXsFont] = useState(0);

  const updateXsFont = () => {
    const fontSizeBase = parseFloat(getComputedStyle(document.body).getPropertyValue('--font-size-base'));
    const scaleFactor = parseFloat(getComputedStyle(document.body).getPropertyValue('--scale-factor'));
    const fontSizeXs = fontSizeBase / scaleFactor;
    setXsFont(fontSizeXs);
  };

  useEffect(() => {
    updateXsFont();
    setMounted(true)

    window.addEventListener('resize', updateXsFont);
    return () => window.removeEventListener('resize', updateXsFont);
  }, [])

  if (!mounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={16}
        height={16}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
        className="toggle"
      />
    )
  }

  if (resolvedTheme === 'dark') {
    return (
        <FiSun className={styles.toggle} size={xsFont + "em"} onClick={() => setTheme('light')} />
    );
  }

  if (resolvedTheme === 'light') {
    return (
        <FiMoon className={styles.toggle} size={xsFont + "em"} onClick={() => setTheme('dark')} />
    );
  }

}