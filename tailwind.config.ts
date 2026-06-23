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
          // acentos por modelo (definitivos — cores de apoio da identidade visual):
          hellfish: "#17BEBB",
          wildtwin: "#FF4000",
          msv: "#262626",
          krypto: "#A4036F",
          libertyflow: "#347FD5",
          savage: "#542E71",
          kingfrog: "#FFB30F",
        },
      },
      fontFamily: {
        // --font-display aponta para Bebas Neue local (.otf). Para trocar de fonte de título
        // (ex: Bebas Neue Pro via Adobe Fonts), basta alterar a var CSS --font-display no
        // layout.tsx — nenhum componente precisa mudar.
        heading: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-opensans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
