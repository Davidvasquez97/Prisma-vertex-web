import Boton from './Boton';
import Garantia from './Garantia';
import LoQueGanas from './LoQueGanas';
import Proceso from './Proceso';
import Revelar from './Revelar';
import { HERO } from '@/lib/contenido';

/**
 * Versión local del inicio. Los bloques de valor, método y garantía son los
 * mismos; lo que cambia —y lo que hace que la página no sea contenido
 * duplicado— es la entrada y el párrafo de contexto de cada ciudad.
 */
export default function PaginaCiudad({
  h1,
  entrada,
  parrafos,
  migas,
}: {
  h1: string;
  entrada: string;
  parrafos: string[];
  migas: object;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migas) }}
      />

      <section className="border-linea border-b">
        <div className="lienzo pt-12 pb-14 md:pt-16 md:pb-20">
          <h1 className="text-d1 max-w-[34ch]">{h1}</h1>
          <p className="text-guia text-gris medida mt-6">{entrada}</p>

          <div className="text-cuerpo text-gris medida mt-7 space-y-4">
            {parrafos.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="mt-9">
            <Boton href="/diagnostico" variante="solido">
              {HERO.boton}
            </Boton>
            <p className="text-menudo text-gris mt-4">{HERO.bajoBoton}</p>
          </div>
        </div>
      </section>

      <LoQueGanas />
      <Proceso />
      <Garantia />

      <section className="bloque">
        <div className="lienzo">
          <Revelar>
            <div className="flex flex-col items-center py-2 text-center md:py-8">
              <h2 className="text-d2 max-w-[28ch]">
                Empecemos por saber cuánto estás perdiendo.
              </h2>
              <div className="mt-8">
                <Boton href="/diagnostico" variante="solido">
                  Agendar diagnóstico
                </Boton>
              </div>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  );
}
