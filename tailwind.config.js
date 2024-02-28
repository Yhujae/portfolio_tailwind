module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
        secondary: "#2E9CCA",
        success: "#4CAF50",
        danger: "#FF5252",
        warning: "#FFC107",
        info: "#2196F3",
      },
      backgroundImage: {
        site: "url('./assets/background.jpg')",
        about: "url('./assets/profile1.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
