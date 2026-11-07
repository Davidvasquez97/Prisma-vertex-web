import Image from 'next/image';
import retratoIzquierda from '@/assets/retrato-izquierda.jpg';
import retratoDerecha from '@/assets/retrato-derecha.jpg';
import Revelar from './Revelar';
import { EQUIPO } from '@/lib/contenido';
import estilos from './Equipo.module.css';

const RETRATOS = { izquierda: retratoIzquierda, derecha: retratoDerecha } as const;

/** Silueta para quien prefiere no salir en foto. */
function Silueta() {
  return (
    <svg viewBox="0 0 200 220" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      <defs>
        <linearGradient id="eq-silueta" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1E3A8A" stopOpacity="0.92" />
          <stop offset="0.7" stopColor="#0A2A6B" stopOpacity="0.85" />
          <stop offset="1" stopColor="#0A2A6B" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="72" r="38" fill="url(#eq-silueta)" />
      <path
        d="M100 120c-46 0-78 26-86 64-2 10-3 22-3 36h178c0-14-1-26-3-36-8-38-40-64-86-64z"
        fill="url(#eq-silueta)"
      />
    </svg>
  );
}

export default function Equipo() {
  return (
    <section id="equipo" className="bloque bg-perla">
      <div className="lienzo">
        <Revelar>
          <h2 className="text-d1">Las personas detrás</h2>
          <p className="text-guia text-gris medida mt-6">
            Tres personas, una sola responsabilidad: que tu empresa gane más de
            lo que invierte en nosotros.
          </p>
        </Revelar>

        <div className="mt-11 grid gap-8 sm:grid-cols-2 md:mt-14 md:grid-cols-3 md:gap-7">
          {EQUIPO.map((p, i) => (
            <Revelar key={p.nombre} retraso={i * 90}>
              <article className={estilos.tarjeta}>
                <div
                  className={`${estilos.marco} ${p.foto ? '' : estilos.silueta}`}
                >
                  {p.foto ? (
                    <Image
                      src={RETRATOS[p.foto]}
                      alt={`${p.nombre}, ${p.cargo.toLowerCase()} y ${p.sigla} de Prisma Vertex.`}
                      sizes="(min-width: 768px) 30vw, (min-width: 640px) 45vw, 100vw"
                      placeholder="blur"
                    />
                  ) : (
                    <Silueta />
                  )}
                </div>

                <div className="mt-5">
                  <p className="text-d3">{p.nombre}</p>
                  <p className="text-menudo mt-1.5">
                    <span className="text-azul font-semibold">{p.sigla}</span>
                    <span className="text-gris"> · {p.cargo}</span>
                  </p>
                  <p className="text-cuerpo text-gris mt-3">{p.rol}</p>
                </div>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
