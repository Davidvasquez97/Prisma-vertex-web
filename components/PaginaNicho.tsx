import Boton from './Boton';
import Calculadora from './Calculadora';
import CasoDestacado from './CasoDestacado';
import Cierre from './Cierre';
import Faq from './Faq';
import Garantia from './Garantia';
import Pendiente from './Pendiente';
import Precios from './Precios';
import Revelar from './Revelar';
import { ICONOS, IconoIa, IconoTiempo } from './Iconos';
import { NICHO_TEXTOS as T, casoDeNicho, type Nicho } from '@/lib/contenido';
import { wa } from '@/lib/config';
import { migasJsonLd } from '@/lib/seo';

/**
 * Página de un nicho. Todo lo que dice sale de su entrada en NICHOS; esta
 * plantilla solo decide el orden y la forma:
 *
 * 1. titular · 2. ¿te pasa esto? · 3. cómo funciona (video) ·
 * 4. lo que instalamos · 5. caso de éxito (si lo hay, de CASOS) · 6. calculadora · 7. preguntas ·
 * 8. garantía y precio · 9. cierre con WhatsApp que dice de qué nicho viene.
 */
export default function PaginaNicho({ nicho }: { nicho: Nicho }) {
  const Icono = ICONOS[nicho.icono];
  const whatsapp = wa(nicho.mensaje);
  const caso = casoDeNicho(nicho.slug);

  const migas = migasJsonLd([{ nombre: nicho.nombre, ruta: nicho.ruta }]);
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: nicho.preguntas.map((q) => ({
      '@type': 'Question',
      name: q.p,
      acceptedAnswer: { '@type': 'Answer', text: q.r },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Titular */}
      <section className="border-linea border-b">
        <div className="lienzo pt-12 pb-14 md:pt-16 md:pb-20">
          {nicho.revisar && (
            <p className="mb-6">
              <Pendiente>{T.revisar}</Pendiente>
            </p>
          )}
          <p className="text-azul text-menudo flex items-center gap-2.5 font-semibold">
            <Icono />
            {nicho.nombre}
          </p>
          <h1 className="text-d1 mt-5 max-w-[24ch]">{nicho.titular}</h1>
          <p className="text-guia text-gris medida mt-6">{nicho.subtitulo}</p>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Boton href={whatsapp} variante="calma">
              {T.agendar}
            </Boton>
            <Boton href="#calculadora" variante="linea">
              {T.calcular}
            </Boton>
          </div>
        </div>
      </section>

      {/* 2. ¿Te pasa esto? */}
      <section className="bloque">
        <div className="lienzo">
          <Revelar>
            <h2 className="text-d1">{T.dolores}</h2>
          </Revelar>
          <ul className="mt-9 grid gap-4 sm:grid-cols-2 md:mt-11 md:gap-5">
            {nicho.dolores.map((d, i) => (
              <li key={d}>
                <Revelar retraso={i * 70} className="h-full">
                  <p className="tarjeta text-cuerpo flex h-full gap-3.5 px-6 py-5">
                    <span
                      className="bg-azul mt-[0.55em] h-2 w-2 shrink-0 rounded-[2px]"
                      aria-hidden="true"
                    />
                    {d}
                  </p>
                </Revelar>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Cómo funciona */}
      <section className="bloque bg-perla">
        <div className="lienzo">
          <Revelar>
            <h2 className="text-d1">{T.comoFunciona}</h2>
            <p className="text-guia text-gris medida mt-6">{T.comoFuncionaTexto}</p>
          </Revelar>
          <Revelar retraso={80}>
            <div className="mt-10 max-w-[52rem] md:mt-12">
              {nicho.video ? (
                <video
                  src={nicho.video}
                  controls
                  preload="none"
                  playsInline
                  className="aspect-video w-full rounded-xl bg-black"
                />
              ) : (
                <div className="tarjeta flex aspect-video w-full flex-col items-center justify-center gap-4">
                  <span className="border-azul text-azul flex h-14 w-14 items-center justify-center rounded-full border">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5.5v13l10.5-6.5z" />
                    </svg>
                  </span>
                  <Pendiente>video demo</Pendiente>
                </div>
              )}
            </div>
          </Revelar>
        </div>
      </section>

      {/* 4. Lo que instalamos */}
      <section className="bloque">
        <div className="lienzo">
          <Revelar>
            <h2 className="text-d1">{T.instalamos}</h2>
          </Revelar>
          <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
            {[
              { titulo: T.turnero, texto: nicho.turnero, Icono: IconoTiempo },
              { titulo: T.agente, texto: nicho.agente, Icono: IconoIa },
            ].map((pieza, i) => (
              <Revelar key={pieza.titulo} retraso={i * 80} className="h-full">
                <article className="tarjeta h-full px-6 py-7 md:px-8 md:py-8">
                  <span className="text-azul">
                    <pieza.Icono />
                  </span>
                  <h3 className="text-d3 mt-5">{pieza.titulo}</h3>
                  <p className="text-cuerpo text-gris mt-2">{pieza.texto}</p>
                </article>
              </Revelar>
            ))}
          </div>
          <Revelar retraso={120}>
            <p className="text-d3 border-azul mt-9 max-w-[40ch] border-l-2 pl-5">
              {T.conectamos}
            </p>
          </Revelar>
        </div>
      </section>

      {/* 5. Caso de éxito: solo en las especialidades que lo tienen. */}
      {caso && (
        <section className="bloque filete">
          <div className="lienzo">
            <Revelar>
              <p className="text-azul text-menudo mb-5 font-semibold">{T.caso}</p>
              <CasoDestacado caso={caso} completo Titulo="h2" />
            </Revelar>
          </div>
        </section>
      )}

      {/* 6. Calculadora del nicho */}
      <Calculadora datos={nicho.calculadora} href={whatsapp} />

      {/* 7. Preguntas del nicho */}
      <Faq preguntas={nicho.preguntas} />

      {/* 8. Garantía y precio */}
      <Garantia />
      <Precios />

      {/* 9. Cierre */}
      <Cierre titulo={nicho.cierre} boton={T.agendar} href={whatsapp} />
    </>
  );
}
