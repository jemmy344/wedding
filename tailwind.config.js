/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: "#C8A2C8",
        "rose-gold": "#B76E79",
        "chocolate-brown": "#5C3317",
        // Additional accent colors can be defined here
        // e.g., 'light-lilac': '#E9D0E9', 'dark-chocolate': '#3F210D'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 80% 80%, var(--tw-gradient-stops))",
        topImage: "url('/top-section.jpeg')",
      },
      backgroundColor: {
        primary: "#C8A2C8",
        secondary: "#5C3317",
        outline: "#C8A2C8",
      },
      textColor: {
        primary: "#B76E79",
        secondary: "#5C3317",
        outline: "#C8A2C8",
      },
      fontFamily: {
        primary: ["Lily Script One", "sans-serif"],
        secondary: ["Sen", "sans-serif"],
        marhey: ["Marhey", "sans-serif"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
  darkMode: "class",
};
