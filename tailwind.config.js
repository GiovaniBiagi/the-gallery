/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      commom: {
        black: "var(--commom-black)",
        white: "var(--commom-white)",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto-slab", "serif"],
    },
    extend: {},
  },
  plugins: [
    ({ addBase }) =>
      addBase({
        h1: { fontSize: "2rem", fontWeight: "700" },
        h2: { fontSize: "1.5rem", fontWeight: "600" },
        h3: { fontSize: "1.25rem", fontWeight: "600" },
        h4: { fontSize: "1rem", fontWeight: "600" },
        h5: { fontSize: "0.875rem", fontWeight: "600" },
        h6: { fontSize: "0.75rem", fontWeight: "600" },
        ":root": {
          "--commom-black": "#0E0E0E",
          "--commom-white": "#ffffff",
        },
      }),
  ],
};
