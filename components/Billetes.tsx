/**
 * Una pilita de billetes, dibujada a mano.
 *
 * La gracia es que la pila crece con el monto: el plan de 65 dólares muestra
 * menos billetes que el de 120, y en pesos se cuentan de a 50.000. No es un
 * adorno, es información. Se lee de reojo antes de leer la cifra.
 *
 * Va topada en cinco billetes: más que eso deja de leerse como un montoncito
 * y empieza a parecer una baraja.
 */

const TOPE = 5;

/** Cuántos billetes dibujar para un monto, contando de a `denominacion`. */
export function cuantosBilletes(monto: number, denominacion: number): number {
  return Math.min(TOPE, Math.max(1, Math.ceil(monto / denominacion)));
}

export default function Billetes({
  n = 2,
  escala = 1,
}: {
  n?: number;
  escala?: number;
}) {
  const paso = 3;
  const ancho = 18;
  const alto = 11;

  const total = ancho + (n - 1) * paso;
  const totalAlto = alto + (n - 1) * paso;

  return (
    <svg
      width={total * escala}
      height={totalAlto * escala}
      viewBox={`0 0 ${total} ${totalAlto}`}
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {Array.from({ length: n }, (_, i) => {
        const alFrente = i === n - 1;
        const x = i * paso;
        const y = (n - 1 - i) * paso;

        return (
          <g key={i} opacity={alFrente ? 1 : 0.4}>
            <rect
              x={x + 0.5}
              y={y + 0.5}
              width={ancho - 1}
              height={alto - 1}
              rx="1.5"
              fill="var(--color-base)"
              stroke="currentColor"
              strokeWidth="1"
            />
            {alFrente && (
              <circle
                cx={x + ancho / 2}
                cy={y + alto / 2}
                r="2.2"
                stroke="currentColor"
                strokeWidth="1"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
