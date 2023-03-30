/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3.875rem',
    },
    extend: {
      colors: {
        'sand-brown': '#D1A479',
        'sand-brown-hov': '#9d734b',
      },      
      dropShadow: {
        'btn' : '4px 3px 4px rgba(0, 0, 0, 0.25)'
        
      },
    },
  },
  plugins: [],
}