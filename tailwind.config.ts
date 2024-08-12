import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'grained': 'url("/bg.svg")',
        'box': 'url("/boxes.svg")',
        'dot': 'url("/dot.svg")',
      },
      colors: {
        background: '#0D1321',
        primaryBackground: '#0D1321',
        secondaryBackground: '#1D2D44',
        tertiaryBackground: '#3E5C76',
        primary: '#F0EBD8',
        secondary: '#748CAB',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
    }
  },
  plugins: [],
};
export default config;
