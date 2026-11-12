import { IconoWhatsapp } from './Iconos';
import { MENSAJES, MODO_VISTA_PREVIA, wa } from '@/lib/config';

/**
 * Botón flotante de WhatsApp, abajo a la derecha en todas las páginas.
 *
 * En Colombia el 84,1 % de las tiendas en línea usa WhatsApp para vender
 * (NubeCommerce Colombia 2026): es el canal donde el cliente ya está. Va en
 * el verde de WhatsApp y no en el azul de la marca porque se reconoce de un
 * vistazo, sin leer nada.
 *
 * Mientras el sitio esté en vista previa no existe: es un canal de contacto
 * y la maqueta no ofrece ninguno. Se enciende solo al apagar el interruptor.
 */
export default function WhatsappFlotante() {
  if (MODO_VISTA_PREVIA) return null;

  return (
    <a
      href={wa(MENSAJES.general)}
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-10px_rgb(0_0_0/0.45)] transition-transform duration-200 hover:scale-105 active:scale-95"
      style={{
        right: 'max(1.25rem, env(safe-area-inset-right))',
        bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
      }}
    >
      <IconoWhatsapp tam={28} />
    </a>
  );
}
