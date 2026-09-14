import Logo from './Logo';
import { CONTACTO, SITE } from '@/lib/config';

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="filete">
      <div className="lienzo grid gap-10 py-14 md:grid-cols-[1fr_auto] md:items-start md:gap-16">
        <div>
          <span className="text-tinta">
            <Logo />
          </span>
          <p className="text-menudo text-gris mt-4">
            {CONTACTO.ciudad}, {CONTACTO.departamento}, {CONTACTO.pais}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:gap-16">
          <div>
            <p className="text-menudo font-semibold">Contacto</p>
            <ul className="text-menudo text-gris mt-3 space-y-2">
              <li>
                <a href={`mailto:${CONTACTO.correo}`} className="hover:text-azul">
                  {CONTACTO.correo}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACTO.whatsapp}`}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-azul"
                >
                  WhatsApp {CONTACTO.whatsappVisible}
                </a>
              </li>
              <li>
                <a
                  href={CONTACTO.instagram}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-azul"
                >
                  Instagram {CONTACTO.instagramVisible}
                </a>
              </li>
            </ul>
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
          </p>
        </div>
      </div>
    </footer>
  );
}
