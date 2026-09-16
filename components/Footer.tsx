import Link from 'next/link';
import Logo from './Logo';
import { CONTACTO, MODO_VISTA_PREVIA, SITE } from '@/lib/config';

const legal = [
  { texto: 'Política de datos', href: '/politica-de-datos' },
  { texto: 'Términos y condiciones', href: '/terminos' },
];

const canales = [
  { texto: `WhatsApp ${CONTACTO.whatsappVisible}`, href: `https://wa.me/${CONTACTO.whatsapp}` },
  { texto: CONTACTO.correo, href: `mailto:${CONTACTO.correo}` },
  { texto: `Instagram ${CONTACTO.instagramVisible}`, href: CONTACTO.instagram },
  ...(CONTACTO.linkedin ? [{ texto: 'LinkedIn', href: CONTACTO.linkedin }] : []),
];

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="filete">
      <div className="lienzo grid gap-9 py-12 md:grid-cols-[1fr_auto] md:items-start md:gap-16">
        <div>
          <span className="text-tinta">
            <Logo alto={32} />
          </span>
          <p className="text-menudo text-gris mt-4">
            {SITE.ciudad}, {SITE.pais}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:gap-16">
          <div>
            <p className="text-menudo font-semibold">Contacto</p>
            <ul className="text-menudo text-gris mt-3 space-y-2">
              {canales.map((c) => (
                <li key={c.texto}>
                  {MODO_VISTA_PREVIA ? (
                    <span>{c.texto}</span>
                  ) : (
                    <a href={c.href} className="hover:text-azul inline-block py-1" target="_blank" rel="noopener">
                      {c.texto}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            {MODO_VISTA_PREVIA && (
              <p className="text-menudo text-gris mt-3 max-w-[30ch]">
                Datos de referencia. Los canales se abren con el lanzamiento.
              </p>
            )}
          </div>

          <div>
            <p className="text-menudo font-semibold">Legal</p>
            <ul className="text-menudo text-gris mt-3 space-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-azul inline-block py-1">
                    {l.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="filete">
        <div className="lienzo py-6">
          <p className="text-menudo text-gris">
            &copy; {anio} {SITE.nombre} · {SITE.ciudad}, {SITE.pais}
            {MODO_VISTA_PREVIA && ' · Sitio en construcción'}
          </p>
        </div>
      </div>
    </footer>
  );
}
