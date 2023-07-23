/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        topImage: "url('/top-image.jpg')",
      },
      backgroundColor: {
        primary: "#7b3f00",
        secondary: "#b76e79",
        outline: "#C8A2C8",
      },
      textColor: {
        primary: "#7b3f00",
        secondary: "#b76e79",
        outline: "#C8A2C8",
      },
      fontFamily: {
        primary: ["Lily Script One", "sans-serif"],
        secondary: ["Sen", "sans-serif"],
        marhey: ["Marhey", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
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
