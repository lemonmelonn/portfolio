import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1DB954",
          greenHover: "#1ed760",
          black: "#121212",
          pureBlack: "#000000",
          darkGray: "#181818",
          lightGray: "#282828",
          hover: "#282828",
          textMuted: "#b3b3b3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        equalize: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out",
        equalize: "equalize 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
