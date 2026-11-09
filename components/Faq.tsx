import Pendiente from './Pendiente';
import Revelar from './Revelar';
import { PREGUNTAS, type Pregunta } from '@/lib/contenido';
import estilos from './Faq.module.css';

/**
 * Acordeón de preguntas frecuentes. Sin argumentos muestra las del inicio;
 * las páginas de nicho le pasan las suyas. Quien lo usa se encarga de su
 * JSON-LD de FAQPage, con las mismas preguntas.
 */
export default function Faq({
  preguntas = PREGUNTAS,
  titulo = 'Preguntas frecuentes',
}: {
  preguntas?: readonly Pregunta[];
  titulo?: string;
}) {
  return (
    <section id="preguntas" className="bloque">
      <div className="lienzo">
        <Revelar>
          <h2 className="text-d1">{titulo}</h2>
        </Revelar>

        <Revelar retraso={60}>
          <div className="mt-9 max-w-[52rem] md:mt-11">
            {preguntas.map((q) => (
              <details key={q.p} className={`${estilos.acordeon} filete`}>
                <summary>
                  <span className="text-d3 leading-snug">{q.p}</span>
                  <span className={estilos.signo} aria-hidden="true" />
                </summary>
                <div className="pr-10 pb-6">
                  <p className="text-cuerpo text-gris">{q.r}</p>
                  {q.pendiente && (
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
