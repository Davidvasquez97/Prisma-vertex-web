import Billetes, { cuantosBilletes } from './Billetes';
import Boton from './Boton';
import Revelar from './Revelar';
import { enPesos, TASA_COP } from '@/lib/config';
import { LLAMADA_INICIAL, NOTA_PRECIOS, PLANES } from '@/lib/contenido';

/* Los billetes se cuentan de a 50 dólares y de a 100.000 pesos. Con los
   precios de noviembre de 2026, contados de a 50.000 los dos planes llegaban
   al tope y se veían iguales; de a 100.000 quedan en 4 y 6. */
const BILLETE_USD = 50;
const BILLETE_COP = 100000;

export default function Precios() {
  return (
    <section id="precios" className="bloque bg-perla">
      <div className="lienzo">
        <Revelar>
          <h2 className="text-d1">Cuánto cuesta</h2>
          <p className="text-guia text-gris medida mt-6">
            El precio depende del tamaño de lo que hay que revisar, no del
            tamaño de tu empresa.
          </p>
        </Revelar>

        {/* El primer paso no cuesta: así nadie paga antes de saber si
            encajamos. */}
        <Revelar retraso={60}>
          <div className="tarjeta mt-10 flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:mt-12 md:px-8">
            <div>
              <p className="text-d3">
                <span className="text-azul font-semibold">Gratis · </span>
                {LLAMADA_INICIAL.titulo}
              </p>
              <p className="text-cuerpo text-gris mt-1">{LLAMADA_INICIAL.texto}</p>
            </div>
            <Boton href="/diagnostico" variante="suave" className="shrink-0">
              Agendar la llamada
            </Boton>
          </div>
        </Revelar>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3 md:gap-6">
          {PLANES.map((p, i) => (
            <Revelar key={p.nombre} retraso={i * 80}>
              <article
                className={`tarjeta relative flex h-full flex-col px-6 py-8 md:px-7 ${
                  p.destacado ? 'border-azul' : ''
                }`}
              >
                {p.etiqueta && (
                  <span className="bg-base text-azul ring-azul absolute -top-[11px] left-6 rounded-full px-3 py-[3px] text-[0.8125rem] font-semibold ring-1 md:left-1/2 md:-translate-x-1/2">
                    {p.etiqueta}
                  </span>
                )}

                <p className="text-cuerpo font-semibold">{p.nombre}</p>
                <p className="text-menudo text-gris mt-1 max-w-[30ch]">{p.para}</p>

                <div className="mt-6 min-h-[72px]">
                  {p.usd === null ? (
                    <>
                      <p className="text-d3 text-azul">Más información</p>
                      <p className="text-menudo text-gris mt-1.5">
                        Lo cotizamos según el alcance
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="flex items-center gap-2.5">
                        <span className="text-azul">
                          <Billetes n={cuantosBilletes(p.usd, BILLETE_USD)} />
                        </span>
                        <span className="text-d2 cifra leading-none">
                          USD {p.usd}
                        </span>
                      </p>
                      <p className="text-menudo text-gris mt-2.5 flex items-center gap-2">
                        <span className="text-trazo">
                          <Billetes
                            n={cuantosBilletes(p.usd * TASA_COP, BILLETE_COP)}
                            escala={0.72}
                          />
                        </span>
                        <span className="cifra">
                          {enPesos(p.usd)} COP aprox.
                        </span>
                      </p>
                    </>
                  )}
                </div>

                <ul className="mt-7 mb-8">
                  {p.items.map((it) => (
                    <li key={it} className="filete text-cuerpo text-gris py-3.5">
                      {it}
                    </li>
                  ))}
                </ul>

                <Boton
                  href="/diagnostico"
                  variante={p.usd === null ? 'galaxia' : p.destacado ? 'calma' : 'suave'}
                  className="mt-auto w-full"
                >
                  {p.usd === null ? 'Hablemos' : 'Quiero este'}
                </Boton>
              </article>
            </Revelar>
          ))}
        </div>

        <Revelar retraso={120}>
          <p className="text-cuerpo text-gris mt-9 max-w-[74ch]">{NOTA_PRECIOS}</p>
        </Revelar>
      </div>
    </section>
  );
}
