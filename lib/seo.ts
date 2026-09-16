import type { Metadata } from 'next';
import { MODO_VISTA_PREVIA, SITE } from './config';

/**
 * Metadatos de una página. Centralizado para que ninguna se quede sin
 * canónica, sin Open Graph o sin la marca en el título.
 *
 * `titulo` se escribe sin la marca: aquí se le añade « | Prisma Vertex ».
 * Hay que mantenerlo por debajo de 60 caracteres en total y la descripción
 * por debajo de 155; el build avisa si alguno se pasa.
 */
export function metaDe({
  titulo,
  descripcion,
  ruta,
}: {
  titulo: string;
  descripcion: string;
  ruta: string;
}): Metadata {
  const titleCompleto = `${titulo} | ${SITE.nombre}`;
  const url = ruta === '/' ? SITE.dominio : `${SITE.dominio}${ruta}`;

  if (process.env.NODE_ENV !== 'production') {
    if (titleCompleto.length > 60) {
      console.warn(`[seo] título largo (${titleCompleto.length}): ${titleCompleto}`);
    }
    if (descripcion.length > 155) {
      console.warn(`[seo] descripción larga (${descripcion.length}) en ${ruta}`);
    }
  }

  return {
    title: titleCompleto,
    description: descripcion,
    alternates: { canonical: ruta },
    robots: MODO_VISTA_PREVIA ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'website',
      siteName: SITE.nombre,
      locale: 'es_CO',
      title: titleCompleto,
      description: descripcion,
      url,
      images: [{ url: '/img/og.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleCompleto,
      description: descripcion,
      images: ['/img/og.jpg'],
    },
  };
}

/** Migas de pan en JSON-LD para las páginas internas. */
export function migasJsonLd(items: { nombre: string; ruta: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ nombre: 'Inicio', ruta: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.nombre,
      item: it.ruta === '/' ? SITE.dominio : `${SITE.dominio}${it.ruta}`,
    })),
  };
}
