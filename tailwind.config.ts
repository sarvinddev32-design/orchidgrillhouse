import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f1f0ee",
        primary: "#1f2933",
        accent: "#a54933",
        muted: "#4b5563",
        border: "#e5e7eb",
      },
    },
  },
  plugins: [],
};

export default config;
