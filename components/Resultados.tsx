import Boton from './Boton';
import CasoDestacado from './CasoDestacado';
import Revelar from './Revelar';
import { CASOS, CASOS_SECCION } from '@/lib/contenido';

/** Casos de éxito destacados del inicio: tarjetas compactas que llevan a /casos. */
export default function Resultados() {
  return (
    <section id="resultados" className="bloque">
      <div className="lienzo">
        <Revelar>
          <h2 className="text-d1">{CASOS_SECCION.titulo}</h2>
          <p className="text-guia text-gris medida mt-5">{CASOS_SECCION.texto}</p>
        </Revelar>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {CASOS.map((c, i) => (
            <Revelar key={c.id} retraso={i * 90} className="h-full">
              <CasoDestacado caso={c} />
            </Revelar>
          ))}
        </div>

        <Revelar retraso={120}>
          <div className="mt-9">
            <Boton href="/casos">{CASOS_SECCION.boton}</Boton>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
