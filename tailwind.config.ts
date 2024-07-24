import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)'
      },
      fontFamily:{
        body: ['var(--font-body)', ...fontFamily.sans],
        heading: ['var(--font-heading)', ...fontFamily.mono]
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
