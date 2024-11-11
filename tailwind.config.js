/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];

const colors = require('tailwindcss/colors')

export const theme = {
  extend: {},
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  colors: {
   'green': {
        '50': '#effef4',
        '100': '#d9ffe7',
        '200': '#b5fdcf',
        '300': '#7cf9ab',
        '400': '#20e96d',
        '500': '#13d45e',
        '600': '#09b04a',
        '700': '#0b8a3c',
        '800': '#0f6c34',
        '900': '#0e592d',
        '950': '#013216',
    },
    'black': {
      '1000':'#000000',
      '900': '#181C14'
    },
   'white':{
    '1000':'#F5F7F8'
   }
  
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
};
export const plugins = [];