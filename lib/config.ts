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

/**
 * Identidad legal de quien vende. La Ley 1480 de 2011 (art. 50) obliga a
 * publicarla en todo sitio que ofrece servicios: sale en el pie de página,
 * en los términos y en la política de datos.
 * ← PENDIENTE: copiarlos tal cual del RUT y del certificado de Cámara de
 *   Comercio. Mientras estén vacíos, las páginas legales lo marcan.
 */
export const EMPRESA = {
  /** Nombre o razón social exacta del RUT. */
  razonSocial: '',
  nit: '',
  /** Dirección de notificación judicial del certificado de Cámara de Comercio. */
  direccion: '',
  /** Quién atiende consultas y reclamos de datos personales. */
  responsableDatos: 'David Alejandro Vásquez, fundador y CEO',
} as const;

/** Fecha de la versión vigente de la política de datos y de los términos. */
export const VERSION_LEGAL = '12 de noviembre de 2026';

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
 * Copia de respaldo del formulario de diagnóstico (opcional).
 * La solicitud ya llega por WhatsApp: el formulario abre el chat con los
 * datos escritos. Si aquí se pone un endpoint (Formspree, Notion, correo…),
 * además se le envía una copia en JSON por POST. Vacío = solo WhatsApp.
 */
export const FORMULARIO_ENDPOINT = '';

/**
 * Analítica de Vercel (visitas sin cookies).
 * ← Ponerlo en `true` DESPUÉS de activar Web Analytics en el panel del
 *   proyecto en Vercel. Antes de eso el script que carga no existe, el
 *   navegador registra un error 404 y Lighthouse lo descuenta.
 */
export const ANALITICA_ACTIVA = false;

/** ← PENDIENTE: código de verificación de Google Search Console. */
export const GOOGLE_SEARCH_CONSOLE = '';

/**
 * Tasa para mostrar los precios en pesos. Es referencia, no cotización:
 * por eso las cifras salen redondeadas y con un «aprox.» al lado.
 *
 * TRM del 7 de noviembre de 2026: 3.237,83 (dolarhoy.co).
 * ← ACTUALIZAR de vez en cuando. Los dos precios en pesos se recalculan
 *   solos: no hay ningún número escrito a mano en el sitio.
 */
export const TASA_COP = 3238;

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
  'Tiempos reales de implementación (pregunta 2 del acordeón).',
  'URL del LinkedIn de Prisma Vertex (CONTACTO.linkedin). Los integrantes no llevan LinkedIn propio.',
  'Activar Web Analytics en el panel de Vercel y después poner ANALITICA_ACTIVA en true.',
  // Legal (ver /politica-de-datos y /terminos, versión VERSION_LEGAL)
  'Razón social, NIT y dirección de notificación en EMPRESA, copiados del RUT y de la Cámara de Comercio.',
  'Revisar en el RUT si son responsables de IVA: los precios publicados deben ser el valor final con impuestos.',
  'Habilitarse como facturadores electrónicos ante la DIAN antes de cobrar, si el régimen lo exige (consultar con un contador).',
  'Revisión de /politica-de-datos y /terminos por un abogado.',
  'Autorización escrita de Lucas Vázquez para su caso.',
  'Plantilla de contrato de transmisión de datos para clientes de salud.',
  'Cambiar la fecha VERSION_LEGAL cada vez que cambien la política o los términos.',
  'Código de verificación de Google Search Console.',
  'Dominio propio y apagar MODO_VISTA_PREVIA.',
  'Logo en SVG (hoy es JPG con fondo blanco).',
  'Revisar la tasa TASA_COP cada tanto: los precios en pesos salen de ahí.',
  // Nichos y otros sectores (lib/contenido.ts → NICHOS, OTROS_SECTORES)
  'Videos demo de los cuatro nichos: poner la ruta en `video` de cada uno en NICHOS.',
  'Autorización escrita de Panorex para usar su nombre y su logo (lib/contenido.ts → CASOS).',
  'Frase de Panorex y de Lucas Vázquez para sus casos (campo cita, opcional).',
  // Equipo (lib/contenido.ts → EQUIPO)
  'Permiso de Ciclismo en Línea para publicar la foto de David en la etapa (ya lleva su crédito).',
] as const;
