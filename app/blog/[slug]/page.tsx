import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articulo, articulos, fechaLarga } from '@/lib/blog';
import { SITE } from '@/lib/config';
import { metaDe, migasJsonLd } from '@/lib/seo';

/**
 * Una página estática por archivo .md.
 *
 * El build estático de Cloudflare exige al menos una ruta: mientras no haya
 * artículos se genera /blog/sin-articulos, que muestra la página de «no
 * encontrada». Nadie la enlaza y no está en el sitemap. Desaparece sola con
 * el primer artículo.
 */
export function generateStaticParams() {
  const lista = articulos().map((a) => ({ slug: a.slug }));
  return lista.length > 0 ? lista : [{ slug: 'sin-articulos' }];
}

/** Solo existen las rutas de los artículos; cualquier otra es 404. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articulo(slug);
  if (!a) return {};

  return metaDe({
    titulo: a.titulo,
    descripcion: a.descripcion,
    ruta: `/blog/${a.slug}`,
  });
}

export default async function Articulo({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articulo(slug);
  if (!a) notFound();

  const migas = migasJsonLd([
    { nombre: 'Blog', ruta: '/blog' },
    { nombre: a.titulo, ruta: `/blog/${a.slug}` },
  ]);

  const articuloJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.titulo,
    description: a.descripcion,
    datePublished: a.fecha || undefined,
    url: `${SITE.dominio}/blog/${a.slug}`,
    publisher: { '@id': `${SITE.dominio}/#negocio` },
  };

  return (
    <article className="bloque">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articuloJsonLd) }}
      />

      <div className="lienzo max-w-[68ch]">
        <p className="text-menudo text-gris">
          <Link href="/blog" className="hover:text-azul">
            Blog
          </Link>
        </p>

        <h1 className="text-d1 mt-4">{a.titulo}</h1>

        {a.fecha && (
          <p className="text-menudo text-gris mt-4">
            <time dateTime={a.fecha}>{fechaLarga(a.fecha)}</time>
          </p>
        )}

        <div
          className="prosa mt-10"
          dangerouslySetInnerHTML={{ __html: a.cuerpoHtml }}
        />

        <p className="filete text-menudo text-gris mt-14 pt-8">
          ¿Quieres saber cuánto está perdiendo tu empresa?{' '}
          <Link href="/diagnostico" className="text-azul underline underline-offset-4">
            Agenda tu diagnóstico
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
