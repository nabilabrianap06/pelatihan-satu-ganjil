// File: tailwind.config.ts
// Pastikan isinya seperti ini:

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Pastikan path ini sesuai dengan struktur proyek Anda
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ini penting untuk folder src/components
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