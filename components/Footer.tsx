import Logo from './Logo';
import { CONTACTO, MODO_VISTA_PREVIA, SITE } from '@/lib/config';

const contacto = [
  { texto: CONTACTO.correo, href: `mailto:${CONTACTO.correo}`, externo: false },
  {
    texto: `WhatsApp ${CONTACTO.whatsappVisible}`,
    href: `https://wa.me/${CONTACTO.whatsapp}`,
    externo: true,
  },
  {
    texto: `Instagram ${CONTACTO.instagramVisible}`,
    href: CONTACTO.instagram,
    externo: true,
  },
];

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="filete">
      <div className="lienzo grid gap-10 py-14 md:grid-cols-[1fr_auto] md:items-start md:gap-16">
        <div>
          <span className="text-tinta">
            <Logo alto={34} />
          </span>
          <p className="text-menudo text-gris mt-4">
            {CONTACTO.ciudad}, {CONTACTO.departamento}, {CONTACTO.pais}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:gap-16">
          <div>
            <p className="text-menudo font-semibold">Contacto</p>
            <ul className="text-menudo text-gris mt-3 space-y-2">
              {contacto.map((c) => (
                <li key={c.texto}>
                  {MODO_VISTA_PREVIA ? (
                    <span>{c.texto}</span>
                  ) : (
                    <a
                      href={c.href}
                      className="hover:text-azul"
                      {...(c.externo
                        ? { target: '_blank', rel: 'noopener' }
                        : {})}
                    >
                      {c.texto}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            {MODO_VISTA_PREVIA && (
              <p className="text-menudo text-gris/70 mt-3 max-w-[30ch]">
                Datos de referencia. Los canales se abren con el lanzamiento.
              </p>
            )}
          </div>

          <div>
            <p className="text-menudo font-semibold">Legal</p>
            <ul className="text-menudo text-gris mt-3 space-y-2">
              <li>
                <a href="/terminos" className="hover:text-azul">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="/privacidad" className="hover:text-azul">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/terminos#aviso" className="hover:text-azul">
                  Aviso legal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="filete">
        <div className="lienzo py-6">
          <p className="text-menudo text-gris">
            &copy; {anio} {SITE.nombre}. Todos los derechos reservados.
            {MODO_VISTA_PREVIA && ' Sitio en construcción.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
