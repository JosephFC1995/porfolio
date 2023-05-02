/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A6F210',
        primary50: '#F9FFE5',
        silver: '#BDC3C5',
        gray: '#969596',
        background: '#F2F3F6',
      },
      boxShadow: {
        black: '0px 16px 64px -18px #000',
        green: '0px 16px 64px -18px #A6F210',
      },
      fontFamily: {
        jost: ['var(--font-jost)'],
        inter: ['var(--font-inter)'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
  },
  variants: {
    scrollbar: ['rounded'],
  },
  plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
