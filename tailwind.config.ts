import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/assets/images/desktop/image-header.jpg')",
        'cereja-image': "url('/assets/images/desktop/image-graphic-design.jpg')",
        'photography-image': "url('/assets/images/desktop/image-photography.jpg')"
      },
      colors: {"top-blue": "#3dbeff",
        "light-black": "#202738",
        "weird-grey": "#827f8f",
        "yellow-shadow": "#fef1b9",
        "pink-shadow": "#f8dcd8",
        "cute-green": '#7fc7b9',
        "dark-green": "#4c897b",
        "darker-green": "#23534a"
      },
        
      fontFamily: {
        'capellina-caps-bold': ['capellina-caps-bold', 'Arial']
      }
    },
  },
  plugins: [],
} satisfies Config;
