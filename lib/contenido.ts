/**
 * Los textos del inicio, en un solo archivo.
 *
 * Las preguntas frecuentes viven aquí y no dentro del componente porque las
 * consumen dos sitios: el acordeón que se ve y el JSON-LD de FAQPage que lee
 * Google. Teniéndolas en un solo lugar no pueden desincronizarse.
 */

export const HERO = {
  titulo: 'Tu empresa puede ganar más. Te mostramos cómo.',
  subtitulo:
    'Consultoría que te ayuda a ganar más tiempo y dinero optimizando tus procesos.',
  boton: 'Quiero mi diagnóstico',
  bajoBoton: 'Si no encontramos cómo ahorrarte, no pagas.',
} as const;

export type Ganancia = { icono: 'tiempo' | 'dinero' | 'claridad'; titulo: string; texto: string };

export const GANANCIAS: Ganancia[] = [
  { icono: 'tiempo', titulo: 'Más tiempo', texto: 'tu equipo deja las tareas repetitivas.' },
  { icono: 'dinero', titulo: 'Más dinero', texto: 'menos costos, más margen.' },
  { icono: 'claridad', titulo: 'Más claridad', texto: 'decisiones con cifras, no con intuición.' },
];

/**
 * Resultados. Las cifras van vacías a propósito: no se inventan.
 * Al llenar `cifra` y `texto`, la tarjeta deja de mostrar el marcador sola.
 */
export type Resultado = { cifra: string; texto: string; pendiente: string };

export const RESULTADOS: Resultado[] = [
  { cifra: '', texto: '', pendiente: '−XX horas por semana en empresa del sector X' },
  { cifra: '', texto: '', pendiente: '+XX % de margen en empresa del sector Y' },
];

export const PASOS = [
  { titulo: 'Diagnóstico', texto: 'encontramos dónde se va tu tiempo y tu dinero.' },
  { titulo: 'Plan', texto: 'te mostramos cuánto puedes ganar.' },
  { titulo: 'Implementación', texto: 'lo ponemos en marcha y medimos.' },
];

export const GARANTIA = {
  titulo: 'Si tú no ganas, nosotros no cobramos.',
  texto:
    'Medimos tu operación antes y después. Nuestro pago va ligado a tus resultados.',
} as const;

export const PREGUNTAS = [
  {
    p: '¿Para qué empresas es?',
    r: 'Para empresas medianas y grandes donde el equipo pierde horas en tareas repetitivas, reprocesos o información dispersa.',
  },
  {
    p: '¿Cuándo veo resultados?',
    r: 'El diagnóstico te muestra oportunidades concretas desde la primera semana.',
    pendiente: 'ajustar tiempos reales de implementación',
  },
  {
    p: '¿Cómo miden lo que gano?',
    r: 'Antes de empezar medimos horas, errores y costos del proceso. Al final comparamos con las mismas cifras.',
  },
  {
    p: '¿Y si no hay ahorro?',
    r: 'Si no encontramos cómo ahorrarte tiempo o dinero, no pagas el diagnóstico.',
  },
] as const;

export const CIERRE = {
  titulo: '¿Cuánto tiempo y dinero está perdiendo tu empresa?',
  boton: 'Agendar diagnóstico',
} as const;

/**
 * Casos publicados. Vacío a propósito: cuando David entregue los reales, se
 * agregan aquí y /casos deja de mostrar la plantilla sola.
 * Orden de la ficha: resultado primero, cifras al final.
 */
export type Caso = {
  resultado: string;
  sector: string;
  problema: string;
  hicimos: string;
  cifras: string;
};

export const CASOS: Caso[] = [];
