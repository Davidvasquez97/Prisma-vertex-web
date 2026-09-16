/**
 * Único archivo que hay que tocar para cambiar datos, textos de contacto
 * y el estado de publicación. Todo el sitio lee de aquí.
 */

/**
 * Interruptor único del modo vista previa.
 *
 * En `true` el sitio no abre ningún canal de contacto: WhatsApp, correo y
 * redes quedan como texto, el formulario no envía y la página se marca como
 * no indexable. La navegación interna sigue funcionando: se puede recorrer
 * el sitio entero, pero nadie puede contratar nada.
 *
 * Al pasar a `false` todo se activa solo. No hay que tocar ningún componente.
 */
export const MODO_VISTA_PREVIA = true;

export const SITE = {
  nombre: 'Prisma Vertex',
  // ← REEMPLAZAR con el dominio final. sitemap, robots, canónicas y Open
  //   Graph leen de aquí; cambiando esta línea se actualizan todos.
  dominio: 'https://prisma-vertex.vercel.app',
  ciudad: 'Popayán',
  departamento: 'Cauca',
  pais: 'Colombia',
} as const;

export const CONTACTO = {
  whatsapp: '573177359686',
  whatsappVisible: '+57 317 735 9686',
  correo: 'roboticlab6@gmail.com',
  instagram: 'https://instagram.com/prismavertex', // ← REEMPLAZAR
  instagramVisible: '@prismavertex',
  /** ← PENDIENTE: URL del perfil de LinkedIn de la empresa. */
  linkedin: '',
} as const;

/**
 * Destino del formulario de diagnóstico.
 * ← PENDIENTE: pegar aquí el endpoint de Formspree (o equivalente).
 * Mientras esté vacío, el formulario valida y avisa que el envío no está
 * conectado, en vez de mentirle a quien lo llena.
 */
export const FORMULARIO_ENDPOINT = '';

/** ← PENDIENTE: código de verificación de Google Search Console. */
export const GOOGLE_SEARCH_CONSOLE = '';

/**
 * Tasa para mostrar los precios en pesos. Es referencia, no cotización:
 * por eso las cifras salen redondeadas y con un «aprox.» al lado.
 *
 * TRM del Banco de la República, 14 de septiembre de 2026: 3.072,27.
 * ← ACTUALIZAR de vez en cuando. Los dos precios en pesos se recalculan
 *   solos: no hay ningún número escrito a mano en el sitio.
 */
export const TASA_COP = 3072;

/** Dólares a pesos, redondeado a la decena de miles más cercana. */
export function enPesos(usd: number): string {
  const redondeado = Math.round((usd * TASA_COP) / 10000) * 10000;
  return '$' + redondeado.toLocaleString('es-CO');
}

/** Construye un enlace de WhatsApp con mensaje prellenado. */
export function wa(mensaje: string): string {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

/** Mensaje distinto según desde dónde se hace clic. */
export const MENSAJES = {
  general:
    'Hola, vengo de la página de Prisma Vertex. Quiero agendar mi diagnóstico.',
  diagnostico:
    'Hola, vengo de la página de Prisma Vertex. Quiero mi diagnóstico: saber cuánto tiempo y dinero está perdiendo mi empresa.',
  casos:
    'Hola, vengo de la página de Prisma Vertex. Quiero saber más sobre sus resultados.',
} as const;

/**
 * Todo lo que falta por definir, en un solo lugar.
 * Se lista en el README y se marca en pantalla con el componente Pendiente.
 */
export const PENDIENTES = [
  'Cifras reales de los dos resultados del inicio.',
  'Casos completos para /casos.',
  'Tiempos reales de implementación (pregunta 2 del acordeón).',
  'URL de LinkedIn.',
  'Endpoint del formulario de diagnóstico.',
  'Texto legal de /politica-de-datos revisado por David.',
  'Código de verificación de Google Search Console.',
  'Dominio propio y apagar MODO_VISTA_PREVIA.',
  'Logo en SVG (hoy es JPG con fondo blanco).',
  'Revisar la tasa TASA_COP cada tanto: los precios en pesos salen de ahí.',
] as const;
