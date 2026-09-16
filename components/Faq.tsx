import Pendiente from './Pendiente';
import Revelar from './Revelar';
import { PREGUNTAS } from '@/lib/contenido';
import estilos from './Faq.module.css';

export default function Faq() {
  return (
    <section id="preguntas" className="bloque bg-perla">
      <div className="lienzo">
        <Revelar>
          <h2 className="text-d1">Preguntas frecuentes</h2>
        </Revelar>

        <Revelar retraso={60}>
          <div className="mt-9 max-w-[52rem] md:mt-11">
            {PREGUNTAS.map((q) => (
              <details key={q.p} className={`${estilos.acordeon} filete`}>
                <summary>
                  <span className="text-d3 leading-snug">{q.p}</span>
                  <span className={estilos.signo} aria-hidden="true" />
                </summary>
                <div className="pr-10 pb-6">
                  <p className="text-cuerpo text-gris">{q.r}</p>
                  {'pendiente' in q && q.pendiente && (
                    <p className="mt-3">
                      <Pendiente>{q.pendiente}</Pendiente>
                    </p>
                  )}
                </div>
              </details>
            ))}
            <div className="filete" />
          </div>
        </Revelar>
      </div>
    </section>
  );
}
