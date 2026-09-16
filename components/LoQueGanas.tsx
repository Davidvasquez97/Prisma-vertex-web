import Revelar from './Revelar';
import { ICONOS } from './Iconos';
import { GANANCIAS } from '@/lib/contenido';

export default function LoQueGanas() {
  return (
    <section id="lo-que-ganas" className="bloque">
      <div className="lienzo">
        <Revelar>
          <h2 className="text-d1">Lo que ganas</h2>
        </Revelar>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {GANANCIAS.map((g, i) => {
            const Icono = ICONOS[g.icono];
            return (
              <Revelar key={g.titulo} retraso={i * 90}>
                <article className="tarjeta tarjeta-viva h-full px-6 py-7 md:px-7 md:py-8">
                  <span className="text-azul block">
                    <Icono />
                  </span>
                  <h3 className="text-d3 mt-5">{g.titulo}</h3>
                  <p className="text-cuerpo text-gris mt-2">{g.texto}</p>
                </article>
              </Revelar>
            );
          })}
        </div>
      </div>
    </section>
  );
}
