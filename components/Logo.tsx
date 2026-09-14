/**
 * Marca Prisma Vertex, redibujada en vector para que quede nítida a 24px.
 * Monocroma a propósito: el espectro aparece una sola vez en toda la página
 * y ese lugar es el hero. Aquí el prisma va en un solo color.
 */
export default function Logo({ conTexto = true }: { conTexto?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width="28"
        height="28"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <g
          stroke="currentColor"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path d="M60 12 L14 88 L60 110 L106 88 Z" />
          <path d="M60 12 L60 110" />
          <path d="M14 88 L60 78 L106 88" opacity="0.45" />
        </g>
      </svg>
      {conTexto && (
        <span
          className="text-[0.875rem] font-semibold whitespace-nowrap uppercase sm:text-[0.9375rem]"
          style={{ fontVariationSettings: "'wdth' 115", letterSpacing: '0.13em' }}
        >
          Prisma Vertex
        </span>
      )}
    </span>
  );
}
