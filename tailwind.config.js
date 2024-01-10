/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  darkMode: 'class',
  content: [
    ".index.html",
    "./src/**/*.{html,js,vue,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        //
        primary: '#32689a',
        secondary: '#6b7280',
        bg_dark: '#0c1323',
        bg: "#ffffff",
        //
        bgdark: '#24292d',
        pdark: '#4ca4a4',
        tdark: "#000000",
        plight: "#447ffa",
        tlight: "#ffffff",
        //
        dbg: "#0d0f14",
        dsurface: "#1f2937",
        dcard: "#2f353a",
        dtext1: "#ffffff",
        dtext2: "#cdcdcd",
        dtext3: "#b7b7b7",
        dprimary: "#447ffa",
        dsecondary: "#fdae03",
        daccent: "#da5c49",
        //

        lsurface: "#fafbfb",
        ltext1: "#101010",
        ltext2: "#303030",
        ltext3: "#606060",
        lprimary: "#3245ff",
        lsecondary: "#c5c7ca",
        laccent: "#ff4081",
      },
      fontFamily: {
        display: ['Expletus Sans Variable', 'sans-serif'],
        mono: ['Source Code Pro Variable', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

