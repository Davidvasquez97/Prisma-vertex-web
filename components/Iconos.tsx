/**
 * Tres iconos de línea, dibujados a mano en el mismo trazo de 1,5 px.
 * El brief los proponía como emoji; en un sitio que quiere verse serio los
 * emoji se leen como plantilla. Estos dicen lo mismo y pesan 300 bytes.
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

export const ICONOS = {
  tiempo: IconoTiempo,
  dinero: IconoDinero,
  claridad: IconoClaridad,
} as const;
