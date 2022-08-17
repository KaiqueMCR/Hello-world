/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'pixel': "'Silkscreen', cursive",
        'sans': "'Roboto', sans-serif",
        'puff': "'DynaPuff', cursive"
      },
      animation: {
        'typing': 'typing 2s steps(12, end), blink-caret .75s step-end infinite',
      }
    },
  },
  plugins: [],
}
