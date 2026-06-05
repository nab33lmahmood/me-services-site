import type { Config } from 'tailwindcss'
import meTheme from './me-brand-tokens'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: meTheme.colors,
      fontFamily: meTheme.fontFamily,
      borderRadius: meTheme.borderRadius,
      spacing: meTheme.spacing,
      boxShadow: meTheme.boxShadow,
    },
  },
  plugins: [],
}

export default config
