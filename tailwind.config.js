/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'typewriter': 'typewriter 2s steps(61) forwards',
      },
      keyframes: {
        typewriter: {
          'to': { 
            left: '100%' 
          },
        },
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};