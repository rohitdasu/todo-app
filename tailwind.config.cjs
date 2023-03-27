/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        background: "var(--check-background)",
        "very-dark-grayish-blue-hover": "var(--very-dark-grayish-blue-hover)",
        "very-dark-grayish-blue": "var(--very-dark-grayish-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "light-grayish-blue": "var(--light-grayish-blue)",
        "light-grayish-blue-hover": "var(--light-grayish-blue-hover)",
        "very-dark-blue": "var(--very-dark-blue)",
        "very-dark-desaturated-blue": "var(--very-dark-desaturated-blue)",
        "very-light-gray": "var(--very-light-gray)",
        "very-light-grayish-blue": "var(--very-light-grayish-blue)",
        "light-grayish-blue": "var(--light-grayish-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "very-dark-grayish-blue": "var(--very-dark-grayish-blue)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
