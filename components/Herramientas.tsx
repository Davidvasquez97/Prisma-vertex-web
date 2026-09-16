import Revelar from './Revelar';
import { ICONOS } from './Iconos';
import { HERRAMIENTAS } from '@/lib/contenido';

/**
 * Franja de capacidades, justo después de los tres pasos del método.
 *
 * Cruza la página de lado a lado a propósito: es la única pieza del sitio que
 * rompe el ancho del lienzo, y ese corte es lo que la separa del método sin
 * necesidad de un título grande. Responde la pregunta que queda después de
 * leer «cómo trabajamos»: con qué.
 */
export default function Herramientas() {
  return (
    <div className="border-linea bg-perla mt-14 border-y md:mt-20">
      <div className="lienzo py-9 md:py-11">
        <Revelar>
          <h3
            className="text-menudo text-gris text-center uppercase"
            style={{ letterSpacing: '0.1em' }}
          >
            Con qué lo hacemos
          </h3>
        </Revelar>

        <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 md:mt-9 md:grid-cols-6 md:gap-x-4">
          {HERRAMIENTAS.map((h, i) => {
            const Icono = ICONOS[h.icono];
            return (
              <li key={h.titulo}>
                <Revelar retraso={i * 60} className="flex flex-col items-center text-center">
                  <span className="text-azul">
                    <Icono />
                  </span>
                  <p className="text-menudo mt-3 font-semibold">{h.titulo}</p>
                  <p className="text-menudo text-gris mt-1 max-w-[18ch] leading-snug">
                    {h.texto}
                  </p>
                </Revelar>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
