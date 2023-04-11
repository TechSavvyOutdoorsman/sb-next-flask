/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        100: '#83ECBB',
        200: '#22D37D',
        700: '#178C54',
        900: '#0B462A',
      },
      mono: {
        100: '#EBEAEB',
        200: '#B9B6B9',
        800: '#363537',
        825: '#403340',
        850: '#423F44',
        900: '#1F1E1F'
      },
      highlight: {
        green: '#72FF75',
        yellow: '#FFD449',
        blue: '#A8D5E2',
        turquoise: '#A8D5E2',
        maroon: '#5D2A42',
        red: '#DB162F'
      }
    }
  },
  fontFamily: {
    serif: ['Rubik', 'sans-serif']
  },
  plugins: [],
}
