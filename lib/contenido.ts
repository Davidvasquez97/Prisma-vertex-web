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
  especialidad: 'Especialistas en centros de salud de alto volumen.',
  boton: 'Quiero mi diagnóstico',
  bajoBoton: 'Si no encontramos cómo ahorrarte, te devolvemos tu dinero.',
  // En la foto, Juan David está a la izquierda y David a la derecha: se
  // nombran en ese orden.
  pie: 'Juan David Chaves, cofundador, y David Vásquez, fundador de Prisma Vertex.',
  alt: 'Juan David Chaves, cofundador, a la izquierda, y David Vásquez, fundador de Prisma Vertex, a la derecha, sosteniendo un prisma atravesado por un haz de luz.',
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
 * La calculadora de cuánto pierde una empresa en tareas repetitivas.
 *
 * El costo de una hora se calcula como lo hace la ley colombiana: salario
 * mensual dividido entre 210 horas, el divisor vigente desde el 15 de julio
 * de 2026 con la jornada de 42 horas (Ley 2101 de 2021). A eso se le suma el
 * costo de prestaciones y aportes del empleador, estimado en un 52 % del
 * salario. El resultado es una estimación y la calculadora lo dice.
 */
export const CALCULADORA = {
  titulo: '¿Cuánto le cuestan a tu empresa las tareas repetitivas?',
  subtitulo: 'Mueve las tres barras. El cálculo es inmediato y no pide datos tuyos.',
  divisorHoras: 210,
  factorPrestacional: 1.52,
  semanasPorMes: 4.33,
  personas: { min: 1, max: 50, paso: 1, inicial: 5 },
  horas: { min: 1, max: 20, paso: 1, inicial: 6 },
  salario: { min: 1_500_000, max: 8_000_000, paso: 100_000, inicial: 2_500_000 },
  boton: 'Quiero recuperar ese dinero',
  nota:
    'Estimación con el valor legal de la hora (salario ÷ 210) más un 52 % de prestaciones y aportes del empleador.',
} as const;

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

/**
 * La garantía, dicha en concreto: una devolución del 100 % con una condición
 * que se puede verificar. Una garantía específica convence más que una
 * general («nuestro pago va ligado a tus resultados»).
 * ← APROBAR antes del lanzamiento: es un compromiso con dinero de por medio.
 */
export const GARANTIA = {
  titulo: 'Si tú no ganas, nosotros no cobramos.',
  texto:
    'Si el diagnóstico no encuentra ahorros que superen lo que pagaste, te devolvemos el 100 %. Y si contratas la implementación, el diagnóstico se descuenta.',
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
    r: 'Si el diagnóstico no encuentra ahorros que superen lo que pagaste, te devolvemos el 100 %.',
  },
  {
    p: '¿Por qué cobran el diagnóstico?',
    r: 'Porque es trabajo real: medimos tu operación y te entregamos un plan con cifras. Si después contratas la implementación, lo que pagaste se descuenta. La primera llamada, de 20 minutos, es gratis.',
  },
] as const;

export const CIERRE = {
  titulo: '¿Cuánto tiempo y dinero está perdiendo tu empresa?',
  boton: 'Agendar diagnóstico',
} as const;

/**
 * Casos publicados. Vacío a propósito: cuando David entregue los reales, se
 * agregan aquí y /casos deja de mostrar la plantilla sola.
 * Orden de la ficha: resultado primero, cifras al final. `tiempo` y `cita`
 * son opcionales, pero un caso con la frase del cliente convence más.
 */
export type Caso = {
  resultado: string;
  sector: string;
  problema: string;
  hicimos: string;
  cifras: string;
  tiempo?: string;
  cita?: string;
};

export const CASOS: Caso[] = [];

/** La conversación previa al diagnóstico. Filtra antes de cobrar. */
export const LLAMADA_INICIAL = {
  titulo: 'Primero, una llamada de 20 minutos sin costo',
  texto: 'Para ver si podemos ayudarte antes de que pagues nada.',
} as const;

/**
 * Precios del diagnóstico. Van después de la garantía y antes de las
 * preguntas: las objeciones aparecen al ver el precio.
 *
 * Revisados en noviembre de 2026 contra el mercado colombiano: un consultor
 * con experiencia cobra entre $200.000 y $400.000 la hora, y estos planes
 * incluyen además el diagnóstico, la propuesta y la cotización.
 * ← APROBAR antes del lanzamiento.
 *
 * `usd` en null significa que el plan no tiene precio de lista.
 * `etiqueta` dice «Recomendado» y no «El más pedido»: esa frase solo puede
 * volver cuando las ventas lo confirmen.
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
    usd: 95,
    destacado: false,
    items: [
      '1 hora de consultoría',
      'Diagnóstico de lo que revisamos',
      'Propuesta y cotización cerrada',
      'Se descuenta si implementas con nosotros',
    ],
  },
  {
    nombre: 'Mediana empresa',
    para: 'Pymes que quieren revisar toda su operación',
    usd: 190,
    destacado: true,
    etiqueta: 'Recomendado',
    items: [
      '2 horas de consultoría',
      'Diagnóstico de toda la operación',
      'Cuellos de botella priorizados por lo que valen',
      'Se descuenta si implementas con nosotros',
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
  'Estos precios son solo el costo del diagnóstico: la sesión contigo, el análisis, la propuesta de solución y su cotización. Implementar esa solución se cobra aparte, siempre sabrás cuánto vale antes de decidir, y si la contratas, el diagnóstico se descuenta.';

/**
 * Las personas detrás de Prisma Vertex.
 *
 * `foto` dice qué retrato lleva cada uno (ver RETRATOS en Equipo.tsx).
 * Confirmado por David el 7 de noviembre de 2026: en la foto de equipo
 * Juan David es el de la izquierda (gafas, barba) y David el de la derecha.
 * Juan David lleva además una foto suya aparte, que entregó David.
 *
 * `linkedin` ← PENDIENTE para los tres. Con la URL puesta, la tarjeta muestra
 * el enlace sola: una foto con credenciales al lado convence más que sola.
 *
 * Sebastián prefiere no aparecer: `foto: null` dibuja una silueta.
 */
export type Integrante = {
  nombre: string;
  cargo: string;
  sigla: string;
  rol: string;
  foto: 'david' | 'juan-david' | null;
  linkedin: string;
};

export const EQUIPO: Integrante[] = [
  {
    nombre: 'David Vásquez',
    cargo: 'Fundador',
    sigla: 'CEO',
    rol: 'Estrategia y relación con cada cliente.',
    foto: 'david',
    linkedin: '',
  },
  {
    nombre: 'Juan David Chaves',
    cargo: 'Cofundador',
    sigla: 'COO',
    rol: 'Operación y entrega de cada proyecto.',
    foto: 'juan-david',
    linkedin: '',
  },
  {
    nombre: 'Sebastián',
    cargo: 'Director de tecnología',
    sigla: 'CTO',
    rol: 'Arquitectura e implementación técnica.',
    foto: null,
    linkedin: '',
  },
];
