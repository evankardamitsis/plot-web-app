// Tailwind configuration file
// Defines theme customization, plugins, and content paths
// Includes animation utilities and custom styling

import { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  // Content paths for Tailwind to scan for classes
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [animate],
}

export default config
