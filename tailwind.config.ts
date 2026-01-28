import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F2A44',
        gold: '#C9A24D',
        'off-white': '#F4F6F8',
        'text-dark': '#1B1B1B',
      },
    },
  },
  plugins: [],
}
export default config
