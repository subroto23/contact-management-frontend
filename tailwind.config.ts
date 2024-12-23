import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "md-range": { min: "763px", max: "1023px" },
      },
      colors: {
        bodyColor: "#0f0426",
        // bodyColor: "#1E1E1E",
        primaryColor: "#DC02D5",
        secondaryColor: "#0FFBF9",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
export default config;
