const defaultTheme = require('tailwindcss/defaultTheme');
import preline from 'preline/plugin.js';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#00FFC2',
        'dark-green': '#061B0B',
        'slate-blue': '#4E8098',
        yellow: '#FFFC31',
        red: '#F2545B',
      },
      fontFamily: {
        sans: ['Rubik Variable', ...defaultTheme.fontFamily.sans],
        body: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [preline],
};
