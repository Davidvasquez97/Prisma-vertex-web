import Revelar from './Revelar';
import { GARANTIA } from '@/lib/contenido';

/** El único bloque oscuro de todo el sitio. Por eso pesa. */
export default function Garantia() {
  return (
    <section id="garantia" className="bloque">
      <div className="lienzo">
        <Revelar>
          <div className="bg-hondo rounded-xl px-7 py-12 md:px-14 md:py-16">
            <h2 className="text-d1 max-w-[24ch] text-white">{GARANTIA.titulo}</h2>
            <p className="text-guia mt-6 max-w-[52ch] text-white/75">
              {GARANTIA.texto}
            </p>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
