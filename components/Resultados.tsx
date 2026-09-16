import Boton from './Boton';
import Pendiente from './Pendiente';
import Revelar from './Revelar';
import { RESULTADOS } from '@/lib/contenido';

export default function Resultados() {
  return (
    <section id="resultados" className="bloque bg-perla">
      <div className="lienzo">
        <Revelar>
          <h2 className="text-d1">Resultados reales</h2>
        </Revelar>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {RESULTADOS.map((r, i) => (
            <Revelar key={r.pendiente} retraso={i * 90}>
              <article className="tarjeta h-full px-6 py-8 md:px-9 md:py-10">
                {r.cifra ? (
                  <>
                    <p className="text-d0 cifra text-azul leading-none">{r.cifra}</p>
                    <p className="text-guia text-gris mt-4">{r.texto}</p>
                  </>
                ) : (
                  <Pendiente>{r.pendiente}</Pendiente>
                )}
              </article>
            </Revelar>
          ))}
        </div>

        <Revelar retraso={120}>
          <div className="mt-9">
            <Boton href="/casos">Ver casos</Boton>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
