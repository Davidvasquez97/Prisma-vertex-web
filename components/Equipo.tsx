import Image from 'next/image';
import retratoIzquierda from '@/assets/retrato-izquierda.jpg';
import retratoDerecha from '@/assets/retrato-derecha.jpg';
import Revelar from './Revelar';
import { EQUIPO } from '@/lib/contenido';
import { MODO_VISTA_PREVIA } from '@/lib/config';
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
                  {/* El perfil profesional al lado de la foto es lo que la
                      vuelve creíble. Como es un canal para escribirles, no
                      aparece mientras el sitio sea una vista previa. */}
                  {p.linkedin && !MODO_VISTA_PREVIA && (
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener"
                      className="text-menudo text-azul mt-3 inline-flex items-center gap-2 py-1 font-semibold hover:underline"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4z" />
                      </svg>
                      LinkedIn de {p.nombre.split(' ')[0]}
                    </a>
                  )}
                </div>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
