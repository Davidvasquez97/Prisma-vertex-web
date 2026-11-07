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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.6-.3z" />
      </svg>
    </a>
  );
}
