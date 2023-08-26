import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        header: "0px 2px 8px 0px rgba(172, 172, 172, 0.15)",
      },
      colors: {
        primary: "#2a60f1",
        warning: " #db3069",
        plain: "#ececec",
        myAsh: "#8c8c8c",
        myGrey: "#acacac",
        myGray: "#f6f6f6",
        blackGray: "#505050",
        graySeven: "#717171",
        grayEight: "#a8a8a8",
        success: "#1DD3B0",
        yellowBg: "#D2B6311A",
        pinkBg: "#FFDBD433",
        blueBg: "#EAEFFE",
        greyF2: "#F2F2F2",
        dropdownBg: "#F5F8FE",
        dropdownText: "#ABABAB",
        yellowText: "#E6B323",
        grey9A: "#9A9A9A",
      },
    },
  },
  plugins: [],
};
export default config;
