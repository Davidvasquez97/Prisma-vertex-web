/**
 * Los textos del inicio, en un solo archivo.
 *
 * Las preguntas frecuentes viven aquí y no dentro del componente porque las
 * consumen dos sitios: el acordeón que se ve y el JSON-LD de FAQPage que lee
 * Google. Teniéndolas en un solo lugar no pueden desincronizarse.
 */

export const HERO = {
  rotulo: 'Consultoría en automatización e inteligencia artificial para empresas',
  lugar: 'Colombia',
  // El titular se corta en el punto: la promesa sola, sin nada detrás.
  titulo: 'Tu empresa puede ganar más.',
  subtitulo:
    'Te mostramos cómo. Ganas más tiempo y más dinero optimizando tus procesos.',
  boton: 'Quiero mi diagnóstico',
  bajoBoton: 'Si no encontramos cómo ahorrarte, no pagas.',
} as const;

/**
 * Con qué trabajamos. Va debajo de los tres pasos, en una franja que cruza la
 * página de lado a lado: después de leer el método, el cliente ve con qué se
 * hace. Seis y no más, porque la lista es para entenderse de un vistazo.
 */
export type Herramienta = {
  icono: 'consultoria' | 'ia' | 'software' | 'automatizacion' | 'integraciones' | 'optimizacion';
  titulo: string;
  texto: string;
};

export const HERRAMIENTAS: Herramienta[] = [
  { icono: 'consultoria', titulo: 'Consultoría', texto: 'Diagnóstico y plan' },
  { icono: 'ia', titulo: 'Inteligencia artificial', texto: 'Tareas que se resuelven solas' },
  { icono: 'software', titulo: 'Desarrollo de software', texto: 'Herramientas a la medida' },
  { icono: 'automatizacion', titulo: 'Automatización', texto: 'Menos trabajo repetitivo' },
  { icono: 'integraciones', titulo: 'Integraciones', texto: 'Que tus sistemas se hablen' },
  { icono: 'optimizacion', titulo: 'Optimización', texto: 'Medir, ajustar, repetir' },
];

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

/**
 * Precios de la consultoría. Van al final de la página, después de las
 * preguntas: quien llega hasta ahí ya sabe qué recibe.
 *
 * `usd` en null significa que el plan no tiene precio de lista.
 */
export type Plan = {
  nombre: string;
  para: string;
  usd: number | null;
  destacado: boolean;
  etiqueta?: string;
  items: string[];
};

export const PLANES: Plan[] = [
  {
    nombre: 'Pequeña empresa o negocio',
    para: 'Un área o un proceso puntual',
    usd: 65,
    destacado: false,
    items: [
      '1 hora de consultoría',
      'Diagnóstico de lo que revisamos',
      'Propuesta de solución',
      'Cotización cerrada de esa solución',
    ],
  },
  {
    nombre: 'Mediana empresa',
    para: 'Pymes que quieren revisar toda su operación',
    usd: 120,
    destacado: true,
    etiqueta: 'El más pedido',
    items: [
      '2 horas de consultoría',
      'Diagnóstico de toda la operación',
      'Propuesta con los cuellos de botella priorizados',
      'Cotización cerrada de esa solución',
    ],
  },
  {
    nombre: 'Empresa grande',
    para: 'Varias áreas, sedes o equipos',
    usd: null,
    destacado: false,
    items: [
      'Más de tres horas de consultoría',
      'Diagnóstico por área',
      'Propuesta y cotización de cada frente',
      'Acompañamiento continuo',
    ],
  },
];

export const NOTA_PRECIOS =
  'Estos precios son solo el costo de la consultoría: la sesión contigo, el diagnóstico, la propuesta de solución y su cotización. Implementar esa solución se cobra aparte, y siempre sabrás cuánto vale antes de decidir.';
