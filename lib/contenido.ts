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
 * Las especialidades. Cada nicho tiene una tarjeta en el inicio y su propia
 * página. Para agregar o quitar uno basta con tocar este arreglo (y crear
 * la carpeta de su ruta en app/, que solo llama a PaginaNicho).
 */
export const NICHOS_SECCION = {
  titulo: 'Especialistas en',
  verMas: 'Ver cómo lo hacemos',
  otros: '¿Tu empresa no está aquí? Mira los otros sectores →',
  otrosRuta: '/otros-sectores',
} as const;

export type IconoNicho = 'radiologia' | 'laboratorio' | 'estetica' | 'odontologia';

/** Textos que comparten todas las páginas de nicho. */
export const NICHO_TEXTOS = {
  agendar: 'Agendar diagnóstico',
  calcular: 'Calcula cuánto pierdes',
  dolores: '¿Te pasa esto?',
  comoFunciona: 'Cómo funciona',
  comoFuncionaTexto: 'Así se ve el sistema atendiendo a un paciente real, de principio a fin.',
  instalamos: 'Lo que instalamos',
  turnero: 'Turnero inteligente',
  agente: 'Agente de WhatsApp con IA',
  conectamos: 'No reemplazamos tu facturador ni tu historia clínica: los conectamos.',
  casoPreparacion: 'Caso en preparación',
  casoPreparacionTexto:
    'Estamos documentando los resultados con un cliente de este sector. No publicamos cifras hasta poder sostenerlas.',
  revisar: 'textos de esta página por revisar con David',
} as const;

/**
 * Caso publicado en una página de nicho. Los campos vacíos se muestran como
 * PENDIENTE: no se publica ninguna cifra que David no haya entregado.
 */
export type CasoNicho = {
  cliente: string;
  resultado: string;
  problema: string;
  hicimos: string;
  cifras: string;
  cita: string;
};

export type Nicho = {
  slug: string;
  ruta: string;
  icono: IconoNicho;
  nombre: string;
  /** El dolor en una línea, para la tarjeta del inicio. */
  dolor: string;
  /** Mientras sea true, la página muestra el aviso de textos por revisar. */
  revisar: boolean;
  meta: { titulo: string; descripcion: string };
  titular: string;
  subtitulo: string;
  dolores: string[];
  /** Ruta del video demo dentro de /public. Vacío = marcador PENDIENTE. */
  video: string;
  turnero: string;
  agente: string;
  /** null = «Caso en preparación». */
  caso: CasoNicho | null;
  calculadora: DatosCalculadora;
  preguntas: Pregunta[];
  /** Mensaje prellenado de WhatsApp: dice de qué nicho viene la persona. */
  mensaje: string;
  cierre: string;
};

/** Pregunta de instalación, igual en los cuatro nichos hasta tener tiempos reales. */
const PREGUNTA_INSTALACION: Pregunta = {
  p: '¿Cuánto tarda la instalación?',
  r: 'Depende del tamaño de tu operación y de lo que haya que conectar; lo definimos con fecha en el diagnóstico.',
  pendiente: 'tiempo real de instalación',
};

const PREGUNTA_SISTEMAS: Pregunta = {
  p: '¿Tengo que cambiar mi facturador o mi historia clínica?',
  r: 'No. No reemplazamos tu facturador ni tu historia clínica: los conectamos. En el diagnóstico revisamos qué usas y cómo integrarlo.',
};

/** Supuestos que comparten las calculadoras de los nichos. */
const DIAS_HABILES = 22;
const NOTA_INASISTENCIA = (unidad: string, valor: string) =>
  `Estimación: ${unidad} al día × ${DIAS_HABILES} días hábiles × porcentaje que no llega × ${valor}. Los valores iniciales son de ejemplo: pon los de tu negocio.`;

/*
 * ← REVISAR con David: los textos de los cuatro nichos los redactó Claude a
 *   partir del encargo, salvo el titular de radiología, que dio David.
 *   Ninguno tiene cifras ni testimonios; los datos que faltan van como
 *   PENDIENTE.
 */
export const NICHOS: Nicho[] = [
  {
    slug: 'centros-radiologicos',
    ruta: '/centros-radiologicos',
    icono: 'radiologia',
    nombre: 'Centros radiológicos y de imágenes diagnósticas',
    dolor: 'Turnos, remisiones de odontólogos y entrega de resultados sin filas.',
    revisar: true,
    meta: {
      titulo: 'Turnos y WhatsApp para centros radiológicos',
      descripcion:
        'Turnero inteligente y agente de WhatsApp con IA para centros radiológicos: turnos ordenados, remisiones de odontólogos y resultados sin filas.',
    },
    titular: 'Tu centro radiológico con turnos ordenados y WhatsApp atendido 24/7',
    subtitulo:
      'Organizamos los turnos, las remisiones y la entrega de resultados para que tu equipo deje de vivir pegado al teléfono.',
    dolores: [
      'La sala de espera se llena a ciertas horas y se vacía en otras.',
      'Las remisiones de los odontólogos llegan por WhatsApp, en fotos y a cualquier hora.',
      'Los pacientes llaman a preguntar si ya están sus resultados.',
      'La recepción responde todo el día lo mismo: precios, preparación y horarios.',
    ],
    video: '',
    turnero:
      'Asigna turnos por tipo de estudio y por equipo, reparte la demanda a lo largo del día y le avisa a cada paciente a qué hora llegar.',
    agente:
      'Atiende el WhatsApp de día y de noche: recibe la remisión del odontólogo, agenda el estudio, explica la preparación y avisa cuando el resultado está listo.',
    caso: { cliente: 'Panorex', resultado: '', problema: '', hicimos: '', cifras: '', cita: '' },
    calculadora: {
      tipo: 'inasistencia',
      titulo: '¿Cuánto pierde tu centro por los pacientes que no llegan?',
      subtitulo: 'Mueve las barras con los números de tu centro. El cálculo no pide datos tuyos.',
      campos: [
        { etiqueta: 'Estudios agendados al día', min: 5, max: 200, paso: 5, inicial: 40, formato: 'conteo', unidad: ['estudio', 'estudios'] },
        { etiqueta: 'Porcentaje que no llega', min: 0, max: 40, paso: 1, inicial: 15, formato: 'porcentaje' },
        { etiqueta: 'Valor promedio del estudio', min: 20_000, max: 500_000, paso: 5_000, inicial: 120_000, formato: 'pesos' },
      ],
      diasAlMes: DIAS_HABILES,
      resultado: 'Tu centro pierde cerca de',
      sufijo: 'al mes en estudios que no se hacen',
      metrica: 'Estudios perdidos al mes',
      boton: 'Quiero recuperar esos estudios',
      nota: NOTA_INASISTENCIA('estudios', 'valor del estudio'),
    },
    preguntas: [
      PREGUNTA_SISTEMAS,
      {
        p: '¿El agente responde de noche y los fines de semana?',
        r: 'Sí. Atiende el WhatsApp a cualquier hora, y cuando una consulta necesita a una persona se la pasa a tu equipo.',
      },
      {
        p: '¿Cómo recibe las remisiones de los odontólogos?',
        r: 'Por el mismo WhatsApp: el odontólogo o el paciente envía la orden, el agente la registra y ofrece un turno.',
      },
      PREGUNTA_INSTALACION,
    ],
    mensaje:
      'Hola, vengo de la página de Prisma Vertex para centros radiológicos. Quiero agendar un diagnóstico para mi centro.',
    cierre: '¿Cuántos estudios se le están quedando sin hacer a tu centro?',
  },
  {
    slug: 'laboratorios-clinicos',
    ruta: '/laboratorios-clinicos',
    icono: 'laboratorio',
    nombre: 'Laboratorios clínicos',
    dolor: 'Preguntas de ayuno, preparación y resultados respondidas por WhatsApp.',
    revisar: true,
    meta: {
      titulo: 'Turnos y WhatsApp para laboratorios clínicos',
      descripcion:
        'Agente de WhatsApp con IA para laboratorios clínicos: responde preguntas de ayuno y preparación, ordena las tomas de muestra y avisa los resultados.',
    },
    titular: 'Tu laboratorio con pacientes que llegan preparados y resultados avisados por WhatsApp',
    subtitulo:
      'Respondemos por WhatsApp lo que hoy se pregunta en la ventanilla, y repartimos las tomas de muestra para que no se acumulen a primera hora.',
    dolores: [
      'Todos llegan a primera hora y la fila sale a la calle.',
      'Pacientes que llegan sin ayuno o sin la preparación correcta, y hay que reprogramar.',
      'El teléfono no para con la misma pregunta: ¿ya están mis resultados?',
      'El WhatsApp se llena de órdenes médicas en foto que alguien tiene que leer una por una.',
    ],
    video: '',
    turnero:
      'Reparte las tomas de muestra en franjas para que no se concentren a primera hora, y le recuerda a cada paciente su turno y su preparación.',
    agente:
      'Responde a cualquier hora las preguntas de ayuno y preparación según el examen, recibe la orden médica y avisa por WhatsApp cuando el resultado está listo.',
    caso: null,
    calculadora: {
      tipo: 'inasistencia',
      titulo: '¿Cuánto pierde tu laboratorio en tomas que se reprograman?',
      subtitulo: 'Mueve las barras con los números de tu laboratorio. El cálculo no pide datos tuyos.',
      campos: [
        { etiqueta: 'Pacientes agendados al día', min: 5, max: 300, paso: 5, inicial: 60, formato: 'conteo', unidad: ['paciente', 'pacientes'] },
        { etiqueta: 'Porcentaje que no llega o llega sin preparación', min: 0, max: 40, paso: 1, inicial: 10, formato: 'porcentaje' },
        { etiqueta: 'Valor promedio de la orden', min: 20_000, max: 400_000, paso: 5_000, inicial: 80_000, formato: 'pesos' },
      ],
      diasAlMes: DIAS_HABILES,
      resultado: 'Tu laboratorio pierde cerca de',
      sufijo: 'al mes en tomas que no se hacen',
      metrica: 'Tomas perdidas al mes',
      boton: 'Quiero recuperar esas tomas',
      nota: NOTA_INASISTENCIA('pacientes', 'valor de la orden'),
    },
    preguntas: [
      PREGUNTA_SISTEMAS,
      {
        p: '¿El agente interpreta los resultados?',
        r: 'No. Avisa que están listos y cómo recogerlos o descargarlos; cualquier pregunta médica pasa a tu equipo.',
      },
      {
        p: '¿Cómo sabe qué preparación necesita cada examen?',
        r: 'La configuramos con tu laboratorio, examen por examen, y tu equipo la revisa antes de encenderla.',
      },
      PREGUNTA_INSTALACION,
    ],
    mensaje:
      'Hola, vengo de la página de Prisma Vertex para laboratorios clínicos. Quiero agendar un diagnóstico para mi laboratorio.',
    cierre: '¿Cuántas tomas se le están cayendo a tu laboratorio?',
  },
  {
    slug: 'clinicas-esteticas',
    ruta: '/clinicas-esteticas',
    icono: 'estetica',
    nombre: 'Clínicas de estética y cirugía plástica',
    dolor: 'Cada lead de Instagram y WhatsApp atendido al instante, también en inglés.',
    revisar: true,
    meta: {
      titulo: 'WhatsApp con IA para clínicas estéticas',
      descripcion:
        'Agente de WhatsApp con IA para clínicas de estética y cirugía plástica: atiende cada lead de Instagram y WhatsApp al instante, en español y en inglés.',
    },
    titular: 'Tu clínica estética atendiendo cada lead al instante, en español y en inglés',
    subtitulo:
      'Quien escribe por Instagram o WhatsApp a las once de la noche está decidiendo. Si nadie le responde, sigue buscando.',
    dolores: [
      'Los mensajes de Instagram y WhatsApp se acumulan y se responden horas después.',
      'Pacientes del exterior que escriben en inglés y nadie les contesta a tiempo.',
      'Valoraciones agendadas a las que el paciente no llega.',
      'No sabes cuántos leads llegan ni cuántos terminan en procedimiento.',
    ],
    video: '',
    turnero:
      'Agenda las valoraciones según la disponibilidad de cada especialista, confirma la cita y la recuerda el día anterior.',
    agente:
      'Responde al instante en Instagram y WhatsApp, en español y en inglés: resuelve dudas de los procedimientos y agenda la valoración.',
    caso: null,
    calculadora: {
      tipo: 'inasistencia',
      titulo: '¿Cuánto pierde tu clínica en valoraciones que no se cumplen?',
      subtitulo: 'Mueve las barras con los números de tu clínica. El cálculo no pide datos tuyos.',
      campos: [
        { etiqueta: 'Valoraciones agendadas al día', min: 1, max: 60, paso: 1, inicial: 8, formato: 'conteo', unidad: ['valoración', 'valoraciones'] },
        { etiqueta: 'Porcentaje que no llega', min: 0, max: 50, paso: 1, inicial: 20, formato: 'porcentaje' },
        { etiqueta: 'Valor de la valoración', min: 30_000, max: 500_000, paso: 10_000, inicial: 150_000, formato: 'pesos' },
      ],
      diasAlMes: DIAS_HABILES,
      resultado: 'Tu clínica pierde cerca de',
      sufijo: 'al mes en valoraciones que no se cumplen',
      metrica: 'Valoraciones perdidas al mes',
      boton: 'Quiero recuperar esas valoraciones',
      nota: NOTA_INASISTENCIA('valoraciones', 'valor de la valoración'),
    },
    preguntas: [
      {
        p: '¿Responde en inglés?',
        r: 'Sí. Atiende en español y en inglés, y contesta en el idioma en que escribe el paciente.',
      },
      {
        p: '¿Funciona en Instagram además de WhatsApp?',
        r: 'Sí. La idea es que cada mensaje se atienda donde llegue, sin que tu equipo tenga que estar pendiente de dos bandejas.',
      },
      {
        p: '¿El agente da precios?',
        r: 'Da los rangos que tu clínica defina y agenda la valoración; el precio final lo da el especialista.',
      },
      PREGUNTA_INSTALACION,
    ],
    mensaje:
      'Hola, vengo de la página de Prisma Vertex para clínicas estéticas. Quiero agendar un diagnóstico para mi clínica.',
    cierre: '¿Cuántos pacientes se te están yendo sin respuesta?',
  },
  {
    slug: 'clinicas-odontologicas',
    ruta: '/clinicas-odontologicas',
    icono: 'odontologia',
    nombre: 'Clínicas odontológicas',
    dolor: 'Citas confirmadas y tratamientos con seguimiento.',
    revisar: true,
    meta: {
      titulo: 'Citas y WhatsApp para odontología',
      descripcion:
        'Turnero inteligente y agente de WhatsApp con IA para clínicas odontológicas: citas confirmadas, recordatorios y seguimiento de cada tratamiento.',
    },
    titular: 'Tu clínica odontológica con citas confirmadas y tratamientos que no se abandonan',
    subtitulo:
      'Confirmamos cada cita por WhatsApp y hacemos seguimiento a los tratamientos largos, para que el sillón no quede vacío.',
    dolores: [
      'Citas a las que el paciente no llega y nadie avisó.',
      'Tratamientos de ortodoncia o rehabilitación que el paciente abandona a la mitad.',
      'La recepción pasa el día confirmando citas por teléfono.',
      'Pacientes que hace meses no vuelven a control y nadie los llama.',
    ],
    video: '',
    turnero:
      'Organiza la agenda por profesional y por sillón, confirma cada cita el día anterior y llena los huecos con pacientes en lista de espera.',
    agente:
      'Confirma y reprograma citas por WhatsApp, recuerda los controles de cada tratamiento y responde las dudas frecuentes a cualquier hora.',
    caso: null,
    calculadora: {
      tipo: 'inasistencia',
      titulo: '¿Cuánto pierde tu clínica por las citas que no se cumplen?',
      subtitulo: 'Mueve las barras con los números de tu clínica. El cálculo no pide datos tuyos.',
      campos: [
        { etiqueta: 'Citas agendadas al día', min: 2, max: 100, paso: 1, inicial: 20, formato: 'conteo', unidad: ['cita', 'citas'] },
        { etiqueta: 'Porcentaje que no llega', min: 0, max: 40, paso: 1, inicial: 15, formato: 'porcentaje' },
        { etiqueta: 'Valor promedio de la cita', min: 20_000, max: 400_000, paso: 5_000, inicial: 90_000, formato: 'pesos' },
      ],
      diasAlMes: DIAS_HABILES,
      resultado: 'Tu clínica pierde cerca de',
      sufijo: 'al mes en citas que no se cumplen',
      metrica: 'Citas perdidas al mes',
      boton: 'Quiero recuperar esas citas',
      nota: NOTA_INASISTENCIA('citas', 'valor de la cita'),
    },
    preguntas: [
      PREGUNTA_SISTEMAS,
      {
        p: '¿Sirve para tratamientos largos como la ortodoncia?',
        r: 'Sí. El agente recuerda cada control y le avisa a tu equipo cuando un paciente deja de venir.',
      },
      {
        p: '¿Qué pasa si el paciente quiere cambiar la cita?',
        r: 'La reprograma por WhatsApp con los espacios disponibles, sin pasar por la recepción.',
      },
      PREGUNTA_INSTALACION,
    ],
    mensaje:
      'Hola, vengo de la página de Prisma Vertex para clínicas odontológicas. Quiero agendar un diagnóstico para mi clínica.',
    cierre: '¿Cuántos sillones vacíos tiene tu clínica cada semana?',
  },
];

/**
 * /otros-sectores: los sectores que atendemos sin página propia todavía.
 * No se muestran en el inicio; solo el botón discreto de «Especialistas en»
 * y el pie de página llevan aquí.
 *
 * ← REVISAR con David: lo que se instala en cada sector sale del encargo; los
 *   dolores los redactó Claude.
 */
export const OTROS_SECTORES_PAGINA = {
  titulo: 'También trabajamos con estos sectores',
  subtitulo:
    'Usamos los mismos sistemas (agenda, turnos, recordatorios y agentes de WhatsApp) adaptados a tu operación.',
  dolor: 'El problema',
  instalamos: 'Lo que instalamos',
  boton: 'Agendar diagnóstico',
  meta: {
    titulo: 'Turnos y WhatsApp para otros sectores',
    descripcion:
      'Agenda, turnos, recordatorios y agentes de WhatsApp para concesionarios, centros de diagnóstico automotor, inmobiliarias y notarías.',
  },
} as const;

export type OtroSector = {
  slug: string;
  nombre: string;
  /** Vacíos en la tarjeta «Otra empresa», que lleva solo `texto`. */
  dolor: string;
  instalamos: string;
  texto?: string;
  /** Mensaje prellenado de WhatsApp: dice de qué sector viene la persona. */
  mensaje: string;
};

export const OTROS_SECTORES: OtroSector[] = [
  {
    slug: 'concesionarios',
    nombre: 'Concesionarios de motos y carros, y su posventa',
    dolor: 'Leads de WhatsApp que se enfrían sin respuesta y clientes que no vuelven al taller.',
    instalamos:
      'Agente que atiende los leads de WhatsApp y pre-califica el crédito, más agenda de taller con recordatorios de mantenimiento.',
    mensaje:
      'Hola, vengo de la página de Prisma Vertex. Tengo un concesionario de motos o carros y quiero agendar un diagnóstico.',
  },
  {
    slug: 'cda',
    nombre: 'Centros de diagnóstico automotor (CDA)',
    dolor: 'Días de filas y días vacíos, y clientes que olvidan cuándo vence su revisión.',
    instalamos:
      'Turnero y recordatorio automático del vencimiento de la revisión técnico-mecánica.',
    mensaje:
      'Hola, vengo de la página de Prisma Vertex. Tengo un centro de diagnóstico automotor y quiero agendar un diagnóstico.',
  },
  {
    slug: 'inmobiliarias',
    nombre: 'Inmobiliarias',
    dolor: 'Las mismas preguntas por los mismos inmuebles a toda hora, visitas difíciles de coordinar y cánones atrasados.',
    instalamos:
      'Agente que agenda visitas y responde por los inmuebles, más seguimiento de cobranza de cánones.',
    mensaje:
      'Hola, vengo de la página de Prisma Vertex. Tengo una inmobiliaria y quiero agendar un diagnóstico.',
  },
  {
    slug: 'notarias',
    nombre: 'Notarías',
    dolor: 'Filas para preguntar requisitos y trámites que se devuelven por un documento faltante.',
    instalamos: 'Turnos y respuestas a preguntas frecuentes de trámites por WhatsApp.',
    mensaje:
      'Hola, vengo de la página de Prisma Vertex. Trabajo en una notaría y quiero agendar un diagnóstico.',
  },
  {
    slug: 'otra',
    nombre: 'Otra empresa',
    dolor: '',
    instalamos: '',
    texto: '¿Tu sector no aparece? Hagamos un diagnóstico y te decimos si podemos ayudarte.',
    mensaje:
      'Hola, vengo de la página de Prisma Vertex. Mi sector no aparece en la página y quiero saber si pueden ayudarme.',
  },
];

/** El nicho de una ruta. Si el slug está mal escrito, el build falla aquí. */
export function nichoPorSlug(slug: string): Nicho {
  const nicho = NICHOS.find((n) => n.slug === slug);
  if (!nicho) throw new Error(`No existe el nicho «${slug}» en NICHOS`);
  return nicho;
}

/**
 * Calculadoras. Hay dos cálculos y los dos usan tres barras:
 *
 * - 'horas' (inicio): personas × horas a la semana × costo de la hora.
 *   El costo de una hora se calcula como lo hace la ley colombiana: salario
 *   mensual ÷ 210, el divisor vigente desde el 15 de julio de 2026 con la
 *   jornada de 42 horas (Ley 2101 de 2021), más un 52 % estimado de
 *   prestaciones y aportes del empleador.
 * - 'inasistencia' (nichos): citas al día × días hábiles × porcentaje que
 *   no llega × valor de la cita.
 *
 * Los dos dan una estimación, y la calculadora lo dice.
 */
export type CampoCalculadora = {
  etiqueta: string;
  min: number;
  max: number;
  paso: number;
  inicial: number;
  formato: 'conteo' | 'pesos' | 'porcentaje';
  /** Para 'conteo': la palabra en singular y en plural. */
  unidad?: [string, string];
};

export type DatosCalculadora = {
  tipo: 'horas' | 'inasistencia';
  titulo: string;
  subtitulo: string;
  campos: [CampoCalculadora, CampoCalculadora, CampoCalculadora];
  /** Solo 'horas'. */
  divisorHoras?: number;
  factorPrestacional?: number;
  semanasPorMes?: number;
  /** Solo 'inasistencia'. */
  diasAlMes?: number;
  resultado: string;
  sufijo: string;
  metrica: string;
  boton: string;
  nota: string;
};

export const CALCULADORA: DatosCalculadora = {
  tipo: 'horas',
  titulo: '¿Cuánto le cuestan a tu empresa las tareas repetitivas?',
  subtitulo: 'Mueve las tres barras. El cálculo es inmediato y no pide datos tuyos.',
  campos: [
    { etiqueta: 'Personas que hacen tareas repetitivas', min: 1, max: 50, paso: 1, inicial: 5, formato: 'conteo', unidad: ['persona', 'personas'] },
    { etiqueta: 'Horas a la semana que cada una les dedica', min: 1, max: 20, paso: 1, inicial: 6, formato: 'conteo', unidad: ['hora', 'horas'] },
    { etiqueta: 'Salario mensual promedio', min: 1_500_000, max: 8_000_000, paso: 100_000, inicial: 2_500_000, formato: 'pesos' },
  ],
  divisorHoras: 210,
  factorPrestacional: 1.52,
  semanasPorMes: 4.33,
  resultado: 'Tu empresa pierde cerca de',
  sufijo: 'al mes',
  metrica: 'Horas al mes',
  boton: 'Quiero recuperar ese dinero',
  nota:
    'Estimación con el valor legal de la hora (salario ÷ 210) más un 52 % de prestaciones y aportes del empleador.',
};

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

/** Una pregunta frecuente. `pendiente` muestra un marcador bajo la respuesta. */
export type Pregunta = { p: string; r: string; pendiente?: string };

export const PREGUNTAS: Pregunta[] = [
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
];

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
 * Sebastián prefiere no aparecer: `foto: null` dibuja una silueta. Su
 * trayectoria queda vacía hasta que David la confirme con él.
 *
 * `trayectoria` es la hoja de vida en pocas líneas, tal como la dio David.
 * ← CONFIRMAR la escritura de «Fundetec Medellín» y el nombre exacto del
 *   título de Juan David en Unimayor.
 */
export type Integrante = {
  nombre: string;
  cargo: string;
  sigla: string;
  rol: string;
  foto: 'david' | 'juan-david' | null;
  trayectoria: string[];
  /** Crédito de la foto, cuando la tomó un tercero. */
  credito: string;
  linkedin: string;
};

export const EQUIPO_SECCION = {
  titulo: 'Las personas detrás',
  texto: 'Quiénes responden por tu proyecto, y de dónde vienen.',
} as const;

export const EQUIPO: Integrante[] = [
  {
    nombre: 'David Vásquez',
    cargo: 'Fundador',
    sigla: 'CEO',
    rol: 'Estrategia y relación con cada cliente.',
    foto: 'david',
    trayectoria: [
      'Ciclista profesional destacado, con 10 años de experiencia',
      'Asistente jurídico en Fundetec Medellín',
      'Infoproductor de marketing digital en Academia de Lanzamientos',
      'Formación en Claude Code e inteligencia artificial',
      'Bachiller del Colegio Champagnat',
    ],
    credito: '',
    linkedin: '',
  },
  {
    nombre: 'Juan David Chaves',
    cargo: 'Cofundador',
    sigla: 'COO',
    rol: 'Operación y entrega de cada proyecto.',
    foto: 'juan-david',
    trayectoria: [
      'Desarrollador de software graduado del Colegio Mayor (Unimayor)',
      'Experiencia en el uso y el desarrollo de inteligencia artificial',
      'Bachiller del Colegio Champagnat',
    ],
    credito: '',
    linkedin: '',
  },
  {
    nombre: 'Sebastián',
    cargo: 'Director de tecnología',
    sigla: 'CTO',
    rol: 'Arquitectura e implementación técnica.',
    foto: null,
    trayectoria: [],
    credito: '',
    linkedin: '',
  },
];
