import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#192646',
          light: '#243154',
          muted: '#2d3d66',
        },
        gold: {
          DEFAULT: '#e5b449',
          muted: '#c49a3c',
          soft: '#f0d78c',
        },
        brand: {
          50: '#f4f6fa',
          100: '#e8ecf4',
          200: '#d1d9e8',
          300: '#a8b6d0',
          400: '#7c8fb0',
          500: '#5a6d8f',
          600: '#475a7a',
          700: '#3d4d66',
          800: '#2d3d66',
          900: '#192646',
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(25, 38, 70, 0.08)',
        'card-hover': '0 8px 32px rgba(25, 38, 70, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config
