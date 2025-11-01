// File: tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Path ini memindai folder 'app/' (untuk halaman)
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 

    // TAMBAHKAN/PASTIKAN PATH INI ADA:
    // Path ini memindai folder 'src/' (untuk komponen seperti Navbar)
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;