module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: "12px",
      base: "14px",
      md: "16px",
      lg: "18px",
      // xl: "20px",
      // "2xl": "24px",
      h1: "28px",
      h2: "24px",
      h3: "20px", },
    screens: {
      "2xl": { min: "1581px" },
      xl: { min: "1200px", max: "1580px" },
      lg: { min: "768px", max: "1199px" },
      md: { max: "767px" },
      // "md-min": { min: "768px" },
      sm: { max: "480px" },
      "sm-min": { min: "480px" },
      s: { min: "360px", max: "375px" },
      xs: { max: "320px" }
    },
    extend: {
      colors: {
        primary: "#691311",
        gray:"#F4F4F4",
        gray40: '#E8E8E8',
        gray50: '#DBD7C8',
        gray70: "#9C9990",
        gray90: "#4D4D4D",
        gray100: '#222222',
        gray400: "#E8E8E8",
        danger: '#FF2020',
        solid: '#F9F9F9',
        green: '#5BBA5F',
        sideBarColor: "#691311",
        
      },
    },
  },
  plugins: [],
};
