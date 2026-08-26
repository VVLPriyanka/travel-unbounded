/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1B1730",       // deep indigo-plum, primary dark
        inkSoft: "#2E2748",
        sand: "#F8F4EA",      // warm paper background
        sandDeep: "#EFE7D6",
        marigold: "#F2A93B",  // signature accent
        marigoldDeep: "#D98C1F",
        teal: "#12514F",      // secondary accent, deep teal
        route: "#C97B3D",     // "route line" dashed path color
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "route-line":
          "repeating-linear-gradient(90deg, currentColor 0 10px, transparent 10px 20px)",
      },
    },
  },
  plugins: [],
};