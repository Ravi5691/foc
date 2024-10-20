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
        Green: {
          50: '#e6fff0',  // Very light green
          100: '#ccffdf', // Lighter green
          200: '#99ffbf', // Light green
          300: '#66ff9f', // Custom green lighter
          400: '#33ff80', // Slightly lighter than original
          500: '#83FF97', // Original custom green
          600: '#33cc66', // Slightly darker
          700: '#28a653', // Dark green
          800: '#1f8040', // Darker green
          900: '#146633', // Very dark green
        },
      },
      backgroundImage: {
        'elliptical-gradient': 'radial-gradient(ellipse 60% 100% at center, #3C5557 0%, #1D2B2C 70%)',

      },
    },
  },
  plugins: [],
}

