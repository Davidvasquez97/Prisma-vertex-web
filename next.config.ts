import type { NextConfig } from 'next';

/**
 * El sitio se publica en Cloudflare Pages como páginas estáticas: todas las
 * rutas se generan en el build y no hace falta un servidor.
 *
 * Cloudflare define CF_PAGES=1 (Pages) o WORKERS_CI=1 (Workers) mientras
 * compila; con eso el build sale a la carpeta `out/`. Para probarlo en este
 * computador: `npm run build:estatico`. En Vercel o con `npm run dev` todo
 * sigue igual que antes.
 */
const ESTATICO =
  process.env.CF_PAGES === '1' ||
  process.env.WORKERS_CI === '1' ||
  process.env.EXPORTAR_ESTATICO === '1';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(ESTATICO
    ? {
        output: 'export',
        images: {
          // Sin servidor no hay optimizador de imágenes: se sirven los
          // archivos de assets/, que ya van recortados y livianos.
          unoptimized: true,
        },
        // La redirección de /privacidad va en public/_redirects, que es
        // como la entiende Cloudflare.
      }
    : {
        images: {
          // AVIF primero: pesa entre un 30 % y un 50 % menos que WebP. El
          // navegador que no lo entienda recibe WebP, y el que tampoco, el JPG.
          formats: ['image/avif', 'image/webp'],
        },
        async redirects() {
          return [
            // La política vivía en /privacidad. Se movió para que la dirección
            // diga lo que dice la ley colombiana, y la vieja no se rompe.
            { source: '/privacidad', destination: '/politica-de-datos', permanent: true },
          ];
        },
      }),
};

export default nextConfig;
