import type { MetadataRoute } from 'next';
import { MODO_VISTA_PREVIA, SITE } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  // Mientras sea una maqueta no se deja rastrear nada, ni siquiera el sitemap.
  if (MODO_VISTA_PREVIA) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.dominio}/sitemap.xml`,
    host: SITE.dominio,
  };
}
