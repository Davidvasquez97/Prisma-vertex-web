import Link from 'next/link';
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
            {/* Lo publicado obliga (Ley 1480, art. 29): las condiciones
                exactas están a un clic. */}
            <Link
              href="/terminos#garantia"
              className="text-menudo mt-7 inline-block py-1 font-semibold text-white underline underline-offset-4 hover:text-white/80"
            >
              Condiciones de la garantía
            </Link>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
