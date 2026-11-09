import Boton from '@/components/Boton';
import Pendiente from '@/components/Pendiente';
import Revelar from '@/components/Revelar';
import { OTROS_SECTORES, OTROS_SECTORES_PAGINA as P } from '@/lib/contenido';
import { wa } from '@/lib/config';
import { metaDe, migasJsonLd } from '@/lib/seo';

export const metadata = metaDe({
  titulo: P.meta.titulo,
  descripcion: P.meta.descripcion,
  ruta: '/otros-sectores',
});

const migas = migasJsonLd([{ nombre: 'Otros sectores', ruta: '/otros-sectores' }]);

/**
 * Página aparte, no sección del inicio. Cada tarjeta lleva a WhatsApp con un
 * mensaje que dice el sector; no hay páginas individuales todavía.
 */
export default function OtrosSectores() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migas) }}
      />

      <section className="border-linea border-b">
        <div className="lienzo pt-12 pb-14 md:pt-16 md:pb-16">
          <p className="mb-6">
            <Pendiente>textos de esta página por revisar con David</Pendiente>
          </p>
          <h1 className="text-d1 max-w-[22ch]">{P.titulo}</h1>
          <p className="text-guia text-gris medida mt-6">{P.subtitulo}</p>
        </div>
      </section>

      <section className="bloque">
        <div className="lienzo">
          <ul className="grid gap-5 md:grid-cols-2 md:gap-6">
            {OTROS_SECTORES.map((s, i) => {
              const otra = Boolean(s.texto);
              return (
                <li key={s.slug} className={otra ? 'md:col-span-2' : ''}>
                  <Revelar retraso={(i % 2) * 80} className="h-full">
                    <article
                      className={`tarjeta flex h-full flex-col px-6 py-7 md:px-8 md:py-8 ${
                        otra ? 'border-azul border-dashed' : ''
                      }`}
                    >
                      <h2 className="text-d3">{s.nombre}</h2>

                      {otra ? (
                        <p className="text-guia text-gris mt-3 max-w-[56ch]">{s.texto}</p>
                      ) : (
                        <dl className="mt-5 space-y-4">
                          <div>
                            <dt className="text-menudo font-semibold">{P.dolor}</dt>
                            <dd className="text-cuerpo text-gris mt-1">{s.dolor}</dd>
                          </div>
                          <div>
                            <dt className="text-menudo text-azul font-semibold">{P.instalamos}</dt>
                            <dd className="text-cuerpo mt-1">{s.instalamos}</dd>
                          </div>
                        </dl>
                      )}

                      <div className="mt-auto pt-7">
                        <Boton href={wa(s.mensaje)} variante={otra ? 'calma' : 'linea'}>
                          {P.boton}
                        </Boton>
                      </div>
                    </article>
                  </Revelar>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
