import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        frog: {
          white: "#FFFFFF",
          cream: "#F7F3E3",
          ink: "#262626",
          green: "#39F604",
          navy: "#142A3C",
          teal: "#45767D",
          orange: "#FF4000",
          blue: "#347FD5",
          yellow: "#FFB30F",
          aqua: "#17BEBB",
          pink: "#A4036F",
          purple: "#542E71",
          // acentos por modelo (confirmar nos logos reais):
          hellfish: "#3E8E7E",
          wildtwin: "#C5612C",
          msv: "#262626",
        },
      },
      fontFamily: {
        display: ["var(--font-oswald)", "Impact", "sans-serif"],
        sans: ["var(--font-opensans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
