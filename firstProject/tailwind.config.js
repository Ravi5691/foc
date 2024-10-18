/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        BrightLightBlue : '#34D3F6' ,
        green : '#83FF97',
      },
      backgroundImage: {
        'grid-pattern': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"%3E%3Cpath stroke=\"rgba(0, 0, 0, 0.3)\" d=\"M 0 1 L 20 1 M 1 0 L 1 20\"/%3E%3C/svg%3E')",
        'elliptical-gradient': 'radial-gradient(ellipse 60% 80% at center, #3C5557 0%, #1D2B2C 80%)',
      },
      boxShadow: {
        'right-only': '4px 0 10px rgba(0, 0, 0, 0.3)', // Shadow on the right side
        'left-only': '-4px 0 10px rgba(0, 0, 0, 0.3)', // Shadow on the left side
        'top-only': '0 -4px 10px rgba(0, 0, 0, 0.3)', // Shadow on the top
        'bottom-only': '0 4px 10px rgba(0, 0, 0, 0.3)', // Shadow on the bottom
        'top-bottom': '0 -1px 10px #1D2B2C, 0 1px 10px #1D2B2C',
      },
      wordSpacing: {
        'tight': '-0.05em',
        'normal': '0em',
        'wide': '0.1em',
        'wider': '0.2em',
        'widest': '0.3em',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const wordSpacing = theme('wordSpacing');
      const utilities = Object.keys(wordSpacing).map(key => ({
        [`.word-spacing-${key}`]: { wordSpacing: wordSpacing[key] },
      }));
      addUtilities(utilities);
    },
  ],
}

