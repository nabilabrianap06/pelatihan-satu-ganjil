// File: postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'autoprefixer': {}, // <-- Ini penting
  },
};

export default config;