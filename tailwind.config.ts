import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1E3A5F", // Lighter town navy blue
        "navy-dark": "#0B1E3B", // Original darker navy
        gold: "#D4AF37", // Chromic gold
        "gold-light": "#E8C878", // Lighter gold
        cream: "#F5F1E8",
      },
    },
  },
  plugins: [],
};
export default config;
