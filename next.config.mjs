// File: next.config.mjs

import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hapus semua opsi 'experimental', 'reactCompiler', dan 'turbopack'
  // Biarkan kosong untuk saat ini
};

// Pastikan Anda tetap membungkusnya dengan withPayload
export default withPayload(nextConfig);