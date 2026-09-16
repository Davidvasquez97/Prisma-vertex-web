/**
 * Iconos de línea, dibujados a mano en el mismo trazo de 1,5 px sobre una
 * rejilla de 24. Todos comparten grosor, remates redondos y densidad, que es
 * lo que hace que se lean como una familia y no como un paquete descargado.
 *
 * El brief proponía emoji; en un sitio que quiere verse serio los emoji se
 * leen como plantilla. Estos dicen lo mismo y pesan unos cientos de bytes.
 */

const comun = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

/* ---- Lo que ganas ------------------------------------------------- */

export function IconoTiempo() {
  return (
    <svg {...comun}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconoDinero() {
  return (
    <svg {...comun}>
      <path d="M3.5 16.5 9 11l3.5 3.5L20.5 6.5" />
      <path d="M15.5 6.5h5v5" />
    </svg>
  );
}

export function IconoClaridad() {
  return (
    <svg {...comun}>
      <path d="M4 20h16" />
      <path d="M7 20v-6M12 20V8M17 20v-9" />
    </svg>
  );
}

/* ---- Con qué lo hacemos -------------------------------------------- */

/** Una conversación: consultoría es preguntar antes de tocar nada. */
export function IconoConsultoria() {
  return (
    <svg {...comun}>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H9l-5 4z" />
      <path d="M8.5 8.5h7M8.5 12h4.5" />
    </svg>
  );
}

/** Cabeza de robot. Minúscula, sin gracia de dibujo animado. */
export function IconoIa() {
  return (
    <svg {...comun}>
      <rect x="4" y="8" width="16" height="11.5" rx="2.5" />
      <path d="M12 8V5.5" />
      <circle cx="12" cy="4" r="1.2" />
      <path d="M2 12.5v2.5M22 12.5v2.5" />
      <path d="M9 13h.01M15 13h.01" />
      <path d="M9.5 16.5h5" />
    </svg>
  );
}

export function IconoSoftware() {
  return (
    <svg {...comun}>
      <path d="M8.5 7.5 4 12l4.5 4.5" />
      <path d="M15.5 7.5 20 12l-4.5 4.5" />
      <path d="M13.5 5.5l-3 13" />
    </svg>
  );
}

/** Un ciclo que se repite solo. */
export function IconoAutomatizacion() {
  return (
    <svg {...comun}>
      <path d="M4.5 11.2a7.5 7.5 0 0 1 12.7-5L20 8.5" />
      <path d="M20 4.8v3.7h-3.7" />
      <path d="M19.5 12.8a7.5 7.5 0 0 1-12.7 5L4 15.5" />
      <path d="M4 19.2v-3.7h3.7" />
    </svg>
  );
}

/** Tres nodos unidos: sistemas distintos que se hablan. */
export function IconoIntegraciones() {
  return (
    <svg {...comun}>
      <circle cx="6" cy="6" r="2.3" />
      <circle cx="18" cy="6" r="2.3" />
      <circle cx="12" cy="18" r="2.3" />
      <path d="M8.3 6h7.4M7.2 8.1l3.6 7.8M16.8 8.1l-3.6 7.8" />
    </svg>
  );
}

/** Un medidor con aguja: optimizar es mover una cifra que se mide. */
export function IconoOptimizacion() {
  return (
    <svg {...comun}>
      <path d="M3.8 17.5a8.2 8.2 0 1 1 16.4 0" />
      <path d="M12 17.5l4.3-4.6" />
      <circle cx="12" cy="17.5" r="1.1" />
    </svg>
  );
}

export const ICONOS = {
  tiempo: IconoTiempo,
  dinero: IconoDinero,
  claridad: IconoClaridad,
  consultoria: IconoConsultoria,
  ia: IconoIa,
  software: IconoSoftware,
  automatizacion: IconoAutomatizacion,
  integraciones: IconoIntegraciones,
  optimizacion: IconoOptimizacion,
} as const;
