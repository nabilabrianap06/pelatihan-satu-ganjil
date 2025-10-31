// File: postcss.config.mjs

const config = {
  plugins: {
    // Pastikan ini tertulis '@tailwindcss/postcss'
    // BUKAN '@tailkndcss/postcss'
    '@tailwindcss/postcss': {}, 
    'autoprefixer': {},
  },
};

export default config;