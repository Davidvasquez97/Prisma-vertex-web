import { MODO_VISTA_PREVIA } from '@/lib/config';

/**
 * Franja superior que deja claro que esto es una maqueta y no un sitio en
 * operación. Va en perla y no en azul profundo a propósito: el único bloque
 * oscuro de la página sigue siendo el de las garantías.
 * Desaparece sola al poner MODO_VISTA_PREVIA en false.
 */
export default function AvisoVistaPrevia() {
  if (!MODO_VISTA_PREVIA) return null;

  return (
    <div className="bg-perla border-linea border-b">
      <p className="lienzo text-menudo text-gris py-2.5 text-center">
        <span className="text-azul font-semibold">Vista previa de diseño.</span>{' '}
        Esta página está en construcción y no presta servicios todavía. Los
        canales de contacto se habilitan con el lanzamiento.
      </p>
    </div>
  );
}
