/**
 * Único archivo que hay que tocar para cambiar datos de contacto.
 * Todo el sitio lee de aquí.
 */

/**
 * Interruptor único del modo vista previa.
 *
 * En `true` el sitio no ofrece ningún canal de contacto: los botones quedan
 * inertes, la página se marca como no indexable y aparece un aviso arriba.
 * Es el estado en el que se publica mientras vive en un dominio de pruebas.
 *
 * Al pasar a `false`, todos los enlaces de WhatsApp, correo e Instagram
 * vuelven a funcionar y la página se deja indexar. No hay que tocar nada más.
 */
export const MODO_VISTA_PREVIA = true;

export const SITE = {
  nombre: 'Prisma Vertex',
  dominio: 'https://prismavertex.com', // ← REEMPLAZAR con el dominio final
  titulo: 'Prisma Vertex — Consultoría en optimización de procesos | Popayán',
  descripcion:
    'Diagnosticamos su operación, calculamos en pesos dónde pierde tiempo y dinero, y lo arreglamos con agentes de IA, software a la medida y automatizaciones. Popayán, Cauca.',
} as const;

export const CONTACTO = {
  whatsapp: '573177359686',
  whatsappVisible: '+57 317 735 9686',
  correo: 'roboticlab6@gmail.com',
  instagram: 'https://instagram.com/prismavertex', // ← REEMPLAZAR
  instagramVisible: '@prismavertex',
  instagramUsuario: 'prismavertex', // ← REEMPLAZAR
  ciudad: 'Popayán',
  departamento: 'Cauca',
  pais: 'Colombia',
} as const;

/** Construye un enlace de WhatsApp con mensaje prellenado. */
export function wa(mensaje: string): string {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

/** Mensaje distinto según desde dónde se hace clic. */
export const MENSAJES = {
  general:
    'Hola, vengo de la página de Prisma Vertex. Quisiera agendar una consultoría para mi negocio.',
  basico:
    'Hola, vengo de la página de Prisma Vertex. Me interesa el Plan Básico (USD 65) y quisiera agendar la hora de consultoría.',
  pro: 'Hola, vengo de la página de Prisma Vertex. Me interesa el Plan Pro (USD 120) y quisiera agendar las dos horas de consultoría.',
  empresa:
    'Hola, vengo de la página de Prisma Vertex. Quisiera hablar del Plan Empresa para mi operación.',
  casos:
    'Hola, vengo de la página de Prisma Vertex. Quiero postular mi empresa al programa de casos documentados.',
  diagnostico:
    'Hola, vengo de la página de Prisma Vertex. Quiero mi diagnóstico: me gustaría una conversación de treinta minutos sobre mi operación.',
} as const;

export const SECTORES = [
  'Restaurantes',
  'Salud y diagnóstico',
  'Odontología',
  'Marketing digital',
  'Retail deportivo',
  'Documentación legal',
] as const;
