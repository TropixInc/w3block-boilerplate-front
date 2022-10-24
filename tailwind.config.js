const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/modules/**/*.{js,ts,tsx,jsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {    
    screens: {
      sm: '768px',
      lg: '1024px',
      xl: '1306px',
      x2l: '1440px',
    },
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        21: '5.25rem',
        23: '5.75rem',
        29: '7.25rem',
        51: '12.75rem',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        roboto: ["Roboto", 'sans-serif'],
        arefRuqaa: ["Aref Ruqaa", 'serif'],
        inter: ['Inter', 'sans-serif'],
        visby: ['VisbyCF', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors:{
        'brand-primary' : 'rgb(var(--colors-brand-primary))',
      }
    },
    colors: {
      ...colors,
      dark: {
        0: '#E6E8EC',
        25: '#7A7A7A',
        50: '#777E8F',
        75: '#353945',
        100: '#202528',
      },
    }
  },
  plugins: [require('@mertasan/tailwindcss-variables')],
}
