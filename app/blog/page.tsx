import Link from 'next/link';
import Boton from '@/components/Boton';
import Revelar from '@/components/Revelar';
import { articulos, fechaLarga } from '@/lib/blog';
import { metaDe, migasJsonLd } from '@/lib/seo';

export const metadata = metaDe({
  titulo: 'Blog',
  descripcion:
    'Notas sobre cómo las empresas ganan tiempo y dinero optimizando sus procesos, escritas desde el trabajo real con clientes.',
  ruta: '/blog',
});

const migas = migasJsonLd([{ nombre: 'Blog', ruta: '/blog' }]);

export default function Blog() {
  const lista = articulos();

  return (
    <section className="bloque">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migas) }}
      />

      <div className="lienzo">
        <h1 className="text-d1">Blog</h1>
        <p className="text-guia text-gris medida mt-6">
          Lo que aprendemos midiendo operaciones reales.
        </p>

        {lista.length === 0 ? (
          <Revelar retraso={60}>
            <div className="tarjeta mt-11 px-6 py-9 md:mt-14 md:px-10 md:py-11">
              <p className="text-d3">Todavía no hay artículos publicados.</p>
              <p className="text-cuerpo text-gris mt-3 max-w-[58ch]">
                La plantilla está lista y no inventamos contenido para llenarla.
                Para publicar el primero, se agrega un archivo{' '}
                <code className="text-tinta">.md</code> en{' '}
                <code className="text-tinta">contenido/blog/</code> y aparece acá
                solo, con su propia página y su entrada en el sitemap.
              </p>
              <div className="mt-8">
                <Boton href="/diagnostico">Quiero mi diagnóstico</Boton>
              </div>
            </div>
          </Revelar>
        ) : (
          <ul className="mt-11 md:mt-14">
            {lista.map((a, i) => (
              <li key={a.slug} className="filete py-7">
                <Revelar retraso={i * 70}>
                  <article>
                    <h2 className="text-d3">
                      <Link href={`/blog/${a.slug}`} className="hover:text-azul">
                        {a.titulo}
                      </Link>
                    </h2>
                    {a.descripcion && (
                      <p className="text-cuerpo text-gris mt-2 max-w-[62ch]">
                        {a.descripcion}
                      </p>
                    )}
                    {a.fecha && (
                      <p className="text-menudo text-gris mt-3">
                        <time dateTime={a.fecha}>{fechaLarga(a.fecha)}</time>
                      </p>
                    )}
                  </article>
                </Revelar>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
