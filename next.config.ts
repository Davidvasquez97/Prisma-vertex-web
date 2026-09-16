import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF primero: pesa entre un 30 % y un 50 % menos que WebP. El navegador
    // que no lo entienda recibe WebP, y el que tampoco, el JPG original.
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // La política vivía en /privacidad. Se movió para que la dirección diga
      // lo que dice la ley colombiana, y la vieja no se rompe.
      { source: '/privacidad', destination: '/politica-de-datos', permanent: true },
    ];
  },
};

export default nextConfig;
