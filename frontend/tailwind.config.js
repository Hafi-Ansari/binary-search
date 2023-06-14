/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // this line enables dark mode
  theme: {
    extend: {
      colors: {
        "dark-primary": "#29263c",
        "dark-secondary": "#282a36",
        "dark-accent": "#15141b",
        "dark-accent-2": "#44475a",
      },
    },
  },
  plugins: [],
};
