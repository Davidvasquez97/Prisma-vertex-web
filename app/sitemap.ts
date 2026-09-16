import type { MetadataRoute } from 'next';
import { articulos } from '@/lib/blog';
import { SITE } from '@/lib/config';

/* Una entrada por página. Los artículos del blog se añaden solos al crear el
   archivo .md; no hay que tocar esta lista. */
const paginas: { ruta: string; prioridad: number }[] = [
  { ruta: '/', prioridad: 1 },
  { ruta: '/diagnostico', prioridad: 0.9 },
  { ruta: '/casos', prioridad: 0.8 },
  { ruta: '/consultoria-procesos-popayan', prioridad: 0.8 },
  { ruta: '/consultoria-procesos-bogota', prioridad: 0.8 },
  { ruta: '/blog', prioridad: 0.5 },
  { ruta: '/terminos', prioridad: 0.2 },
  { ruta: '/politica-de-datos', prioridad: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  return [
    ...paginas.map((p) => ({
      url: p.ruta === '/' ? SITE.dominio : `${SITE.dominio}${p.ruta}`,
      lastModified: ahora,
      priority: p.prioridad,
    })),
    ...articulos().map((a) => ({
      url: `${SITE.dominio}/blog/${a.slug}`,
      lastModified: a.fecha ? new Date(`${a.fecha}T12:00:00`) : ahora,
      priority: 0.6,
    })),
  ];
}
