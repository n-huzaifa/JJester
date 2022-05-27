module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: 'sans-serif',
      }
    }
  },
  plugins: [require("daisyui")],
}
