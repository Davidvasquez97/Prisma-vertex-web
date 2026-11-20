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
  dominio: 'https://prismavertex.com.co',
  ciudad: 'Popayán',
  departamento: 'Cauca',
  pais: 'Colombia',
} as const;

/**
 * Identidad legal de quien vende. La Ley 1480 de 2011 (art. 50) obliga a
 * publicarla en todo sitio que ofrece servicios: sale en el pie de página,
 * en los términos y en la política de datos.
 *
 * Datos del RUT que entregó David el 20 de noviembre de 2026: persona
 * natural (casilla 24), dueña del establecimiento de comercio Prisma Vertex,
 * actividad principal 6201 (desarrollo de sistemas informáticos) y
 * secundaria 6202 (consultoría informática). En responsabilidades solo
 * figura la 05 (renta, régimen ordinario): no la 48 (IVA) ni la 52
 * (facturador electrónico). Por eso el sitio dice que no se cobra IVA.
 * Si la DIAN agrega la 48, cambiar `responsableIva` a true.
 */
export const EMPRESA = {
  /** Nombre del titular como aparece en el RUT (casillas 31 a 34). */
  razonSocial: 'David Alejandro Vásquez Dorado',
  /** Persona natural o sociedad, dicho como se lee en la página. */
  tipo: 'persona natural',
  /** NIT con dígito de verificación (casillas 5 y 6). */
  nit: '1.059.237.407-8',
  /** Dirección principal del RUT (casilla 41), escrita completa. */
  direccion: 'Carrera 2 # 21 DN-100, Conjunto Portal del Cerro, casa C20',
  /** Casilla 53 del RUT: ¿aparece la responsabilidad 48 (IVA)? */
  responsableIva: false,
  /** Quién atiende consultas y reclamos de datos personales. */
  responsableDatos: 'David Alejandro Vásquez, fundador y CEO',
} as const;

/**
 * Quién aloja el sitio; la política de datos lo nombra como encargado.
 * Desde el 20 de noviembre de 2026 es Cloudflare Pages (EE. UU.).
 */
export const ALOJAMIENTO = 'Cloudflare';

/** Fecha de la versión vigente de la política de datos y de los términos. */
export const VERSION_LEGAL = '20 de noviembre de 2026';

export const CONTACTO = {
  whatsapp: '573177359686',
  whatsappVisible: '+57 317 735 9686',
  correo: 'roboticlab6@gmail.com',
  // Confirmado por David el 20 de noviembre de 2026.
  instagram: 'https://instagram.com/prismavertex',
  instagramVisible: '@prismavertex',
  /** URL del LinkedIn de la empresa. Vacío = no se muestra. */
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
 * Lo que queda por hacer después del 20 de noviembre de 2026. Ninguno se ve
 * en la página: el sitio ya no muestra marcadores PENDIENTE.
 */
export const PENDIENTES = [
  // Para publicar
  'Crear el proyecto en Cloudflare Pages y conectar prismavertex.com.co (pasos en el README, «Publicar»).',
  'Apagar MODO_VISTA_PREVIA el día del lanzamiento.',
  'Código de verificación de Google Search Console.',
  'Medición de visitas sin cookies (Vercel o Cloudflare Web Analytics) y luego ANALITICA_ACTIVA en true.',
  // Legal y tributario
  'Contador: confirmar que cumplen los requisitos de no responsable de IVA (art. 437 E.T.) y, si es así, pedir a la DIAN que agregue la responsabilidad 49 al RUT. Si pasan a ser responsables, poner EMPRESA.responsableIva en true y habilitar la factura electrónica.',
  'Revisión de /politica-de-datos y /terminos por un abogado.',
  'Plantilla de contrato de transmisión de datos para clientes de salud.',
  'Cambiar VERSION_LEGAL cada vez que cambien la política o los términos.',
  // Para sumar después
  'Videos demo de los nichos: al poner la ruta en video de NICHOS aparece la sección «Cómo funciona».',
  'Frases de Panorex y de Lucas Vázquez para sus casos (campo cita, opcional).',
  'URL del LinkedIn de Prisma Vertex (CONTACTO.linkedin).',
  'Revisar la tasa TASA_COP cada tanto: los precios en pesos salen de ahí.',
  'Logo en SVG (hoy es JPG con fondo blanco).',
] as const;
