/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color : {
        'main-green':'#1D2B2C',
        blendGreen: '#34484a',
        darkGreen: '#2b3c3d' ,
      },
      backgroundImage: {
        'elliptical-gradient': 'radial-gradient(ellipse 60% 100% at center, #3C5557 0%, #1D2B2C 70%)',

      },
    },
  },
  plugins: [],
}

