import Revelar from './Revelar';
import { PASOS } from '@/lib/contenido';
import estilos from './Proceso.module.css';

export default function Proceso() {
  return (
    <section id="como-trabajamos" className="bloque">
      <div className="lienzo">
        <Revelar>
          <h2 className="text-d1">Cómo trabajamos</h2>
        </Revelar>

        <Revelar className={estilos.zona} retraso={60}>
          <ol className={`${estilos.pista} mt-11 grid gap-9 md:mt-14 md:grid-cols-3 md:gap-8`}>
            {PASOS.map((p, i) => (
              <li key={p.titulo} className="relative">
                <span className={`${estilos.nodo} hidden md:block`} aria-hidden="true" />
                <p className="text-menudo cifra text-azul font-semibold md:mt-5">
                  0{i + 1}
                </p>
                <h3 className="text-d3 mt-2">{p.titulo}</h3>
                <p className="text-cuerpo text-gris mt-2 max-w-[34ch]">{p.texto}</p>
              </li>
            ))}
          </ol>
        </Revelar>
      </div>
    </section>
  );
}
