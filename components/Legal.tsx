import Pendiente from './Pendiente';
import { CONTACTO, EMPRESA, MODO_VISTA_PREVIA, SITE } from '@/lib/config';

/** Un apartado de una página legal: título con ancla y su contenido. */
export function Apartado({
  id,
  titulo,
  children,
}: {
  id?: string;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-d3">{titulo}</h2>
      <div className="text-gris mt-3 space-y-3">{children}</div>
    </section>
  );
}

/** Lista con viñeta azul, igual en las dos páginas legales. */
export function Lista({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className="bg-azul mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full" aria-hidden="true" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/** El correo: enlace al lanzar; texto mientras el sitio sea una vista previa. */
export function Correo() {
  if (MODO_VISTA_PREVIA) return <span className="text-tinta">{CONTACTO.correo}</span>;
  return (
    <a href={`mailto:${CONTACTO.correo}`} className="text-azul">
      {CONTACTO.correo}
    </a>
  );
}

/** Un dato legal de la empresa; si todavía no está, lo dice. */
export function Dato({ valor, falta }: { valor: string; falta: string }) {
  return valor ? <>{valor}</> : <Pendiente>{falta}</Pendiente>;
}

/** Quién es el responsable, con todos los datos que pide la ley. */
export function Identidad() {
  return (
    <p>
      <span className="text-tinta font-semibold">
        <Dato valor={EMPRESA.razonSocial} falta="razón social como aparece en el RUT" />
      </span>{' '}
      ({SITE.nombre}), NIT <Dato valor={EMPRESA.nit} falta="NIT" />, con domicilio en{' '}
      {SITE.ciudad}, {SITE.departamento}, {SITE.pais}. Dirección:{' '}
      <Dato valor={EMPRESA.direccion} falta="dirección de notificación" />. Teléfono y WhatsApp:{' '}
      {CONTACTO.whatsappVisible}. Correo:{' '}
      <Correo />.
    </p>
  );
}
