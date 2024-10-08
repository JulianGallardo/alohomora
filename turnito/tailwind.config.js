import {colors, nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    defaultMode: 'light',
    darkMode: 'false',
    extend: {
      colors:{
        alohomoraOrange: '#FF8C00',
        alohomoraGray: '#F0F3F4',
      }
    },
  },
  plugins: [nextui()],
}
