import Boton from './Boton';
import Revelar from './Revelar';
import { CIERRE } from '@/lib/contenido';
import { MODO_VISTA_PREVIA } from '@/lib/config';

export default function Cierre() {
  return (
    <section id="cierre" className="bloque">
      <div className="lienzo">
        <Revelar>
          <div className="flex flex-col items-center py-4 text-center md:py-10">
            <h2 className="text-d1 max-w-[26ch]">{CIERRE.titulo}</h2>
            <div className="mt-9">
              <Boton href="/diagnostico" variante="solido">
                {CIERRE.boton}
              </Boton>
            </div>
            {MODO_VISTA_PREVIA && (
              <p className="text-menudo text-gris mt-5 max-w-[46ch]">
                El sitio está en vista previa: puedes recorrerlo completo, pero
                todavía no recibe solicitudes.
              </p>
            )}
          </div>
        </Revelar>
      </div>
    </section>
  );
}
