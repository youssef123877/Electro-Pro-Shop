module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFAFCC",
          foreground: "#1B263B",
        },
        secondary: {
          DEFAULT: "#F0F1F3",
          foreground: "#1B263B",
        },
        accent: {
          DEFAULT: "#E0C09E",
          foreground: "#1B263B",
        },
        background: "#FAFAFB",
        foreground: "#1B263B",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1B263B",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1B263B",
        },
        muted: {
          DEFAULT: "#F0F1F3",
          foreground: "#E0C09E",
        },
        destructive: {
          DEFAULT: "#FF4C4C",
          foreground: "#FFFFFF",
        },
        border: "#E0E0E0",
        input: "#E0E0E0",
        ring: "#FFAFCC",
        chart: {
          1: "#FF6F61",
          2: "#4CAF50",
          3: "#03A9F4",
          4: "#FFC107",
          5: "#8E44AD",
        },
      },
      borderRadius: {
        sm: "0.125rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        heading: "28px",
        body: "16px",
      },
      fontWeight: {
        heading: "600",
        body: "400",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
    