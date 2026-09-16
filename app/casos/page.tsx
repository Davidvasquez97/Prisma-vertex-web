import Boton from '@/components/Boton';
import Pendiente from '@/components/Pendiente';
import Revelar from '@/components/Revelar';
import { CASOS } from '@/lib/contenido';
import { metaDe, migasJsonLd } from '@/lib/seo';

export const metadata = metaDe({
  titulo: 'Casos de optimización de procesos',
  descripcion:
    'Resultados medidos en empresas que optimizaron sus procesos con Prisma Vertex: cuánto tiempo y cuánto dinero ganaron.',
  ruta: '/casos',
});

const migas = migasJsonLd([{ nombre: 'Casos', ruta: '/casos' }]);

/* El orden de la ficha no es decorativo: primero el resultado, porque es lo
   único que le interesa a quien está decidiendo. Después el contexto. */
const RANURAS = [
  { clave: 'resultado', etiqueta: 'Resultado' },
  { clave: 'problema', etiqueta: 'El problema' },
  { clave: 'hicimos', etiqueta: 'Qué hicimos' },
  { clave: 'cifras', etiqueta: 'Las cifras' },
] as const;

export default function Casos() {
  return (
    <section className="bloque">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migas) }}
      />

      <div className="lienzo">
        <h1 className="text-d1">Resultados reales</h1>
        <p className="text-guia text-gris medida mt-6">
          Cada caso empieza por el resultado y termina por las cifras con las que
          lo medimos.
        </p>

        {CASOS.length === 0 ? (
          <Revelar retraso={60}>
            <div className="mt-11 md:mt-14">
              <div className="tarjeta px-6 py-9 md:px-10 md:py-11">
                <p className="text-d3">Los casos están en preparación.</p>
                <p className="text-cuerpo text-gris mt-3 max-w-[58ch]">
                  No publicamos cifras que no podamos sostener, y los nombres de
                  nuestros clientes solo se divulgan con su autorización escrita.
                  Esta es la estructura que va a tener cada ficha:
                </p>

                <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                  {RANURAS.map((r) => (
                    <div key={r.clave}>
                      <dt className="text-menudo font-semibold">{r.etiqueta}</dt>
                      <dd className="mt-2">
                        <Pendiente>{r.etiqueta.toLowerCase()} del caso</Pendiente>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-9">
                <Boton href="/diagnostico" variante="solido">
                  Quiero mi diagnóstico
                </Boton>
              </div>
            </div>
          </Revelar>
        ) : (
          <div className="mt-11 grid gap-6 md:mt-14">
            {CASOS.map((c, i) => (
              <Revelar key={c.resultado} retraso={i * 80}>
                <article className="tarjeta px-6 py-9 md:px-10 md:py-11">
                  <h2 className="text-d2 text-azul">{c.resultado}</h2>
                  <p className="text-menudo text-gris mt-2">{c.sector}</p>

                  <dl className="mt-7 grid gap-6 sm:grid-cols-3">
                    <div>
                      <dt className="text-menudo font-semibold">El problema</dt>
                      <dd className="text-cuerpo text-gris mt-2">{c.problema}</dd>
                    </div>
                    <div>
                      <dt className="text-menudo font-semibold">Qué hicimos</dt>
                      <dd className="text-cuerpo text-gris mt-2">{c.hicimos}</dd>
                    </div>
                    <div>
                      <dt className="text-menudo font-semibold">Las cifras</dt>
                      <dd className="text-cuerpo text-gris mt-2">{c.cifras}</dd>
                    </div>
                  </dl>
                </article>
              </Revelar>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
