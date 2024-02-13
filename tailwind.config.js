/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  darkMode:'class',
  theme: {
    fontFamily:{
       monospace:["IBM Plex Mono", "monospace"]
    },
    colors:{
      'dark':'#19303d',
      'white':'#fff'
    },
    backgroundColor:{
      light:'#c6ffe0',
      dark:'#19303d',
      white:'#fff'
    },
    extend: {},
  },
  plugins: [],
}

