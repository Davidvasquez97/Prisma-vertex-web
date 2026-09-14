import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();
  return [
    { url: SITE.dominio, lastModified: ahora, priority: 1 },
    { url: `${SITE.dominio}/terminos`, lastModified: ahora, priority: 0.3 },
    { url: `${SITE.dominio}/privacidad`, lastModified: ahora, priority: 0.3 },
  ];
}
