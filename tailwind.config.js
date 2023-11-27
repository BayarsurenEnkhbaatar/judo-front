// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '4rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'back': "url('../public/images/erkhmee.png')",
          'modern-back': "url('../public/images/moder-back.png')",
          'dojo': "url('../public/images/dojo.jpg')",
          'back1': "url('https://octagon.mn/assets/new/static/home-header.svg')",
          'patt': "url('../public/images/tsend.png')",
          'backtsogoo': "url('https://www.montsame.mn/files/644b3421666bc.jpeg')",
          'mongolia': "url('../public/images/Group.png')"
      },
    },

    fontFamily: {
      'Roboto': 'Roboto',
    },
    screens: {
      'xs': '100px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1380px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};