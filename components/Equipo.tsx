import Image from 'next/image';
import retratoDavid from '@/assets/retrato-david.jpg';
import retratoJuanDavid from '@/assets/retrato-juan-david-grado.jpg';
import perfilDavid from '@/assets/perfil-david-etapa.jpg';
import perfilJuanDavid from '@/assets/perfil-juan-david-grado.jpg';
import PerfilIntegrante from './PerfilIntegrante';
import Revelar from './Revelar';
import { EQUIPO, EQUIPO_SECCION } from '@/lib/contenido';
import { MODO_VISTA_PREVIA } from '@/lib/config';
import estilos from './Equipo.module.css';

/* Retratos del círculo, cada uno con su encuadre: el punto que queda en el
   centro es la cara. David: su retrato de estudio. Juan David: recortado de
   su ceremonia de grado en Unimayor. Para cambiar uno basta con el import. */
const RETRATOS = {
  david: { src: retratoDavid, encuadre: '50% 40%' },
  'juan-david': { src: retratoJuanDavid, encuadre: '48% 45%' },
} as const;

/* Fotos completas de «Saber más»: David en la etapa que ganó (de Ciclismo en
   Línea, con su crédito) y Juan David en su grado. */
const PERFILES = {
  'david-etapa': perfilDavid,
  'juan-david-grado': perfilJuanDavid,
} as const;

/** Cuántas líneas de la trayectoria se ven en la tarjeta; el resto, en «Saber más». */
const LINEAS_EN_TARJETA = 2;

/** Silueta para quien prefiere no salir en foto. */
function Silueta() {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="eq-silueta" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1E3A8A" stopOpacity="0.92" />
          <stop offset="1" stopColor="#0A2A6B" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="78" r="36" fill="url(#eq-silueta)" />
      <path
        d="M100 124c-42 0-70 24-76 60-1 6-1 11-1 16h154c0-5 0-10-1-16-6-36-34-60-76-60z"
        fill="url(#eq-silueta)"
      />
    </svg>
  );
}

/**
 * «Las personas detrás», en formato compacto: retrato pequeño en círculo,
 * cargo, rol y las dos primeras líneas de la trayectoria. «Saber más» abre
 * la hoja de vida completa con la foto grande, sin estirar la sección.
 */
export default function Equipo() {
  return (
    <section id="equipo" className="bloque bg-perla">
      <div className="lienzo">
        <Revelar>
          <h2 className="text-d2">{EQUIPO_SECCION.titulo}</h2>
          <p className="text-cuerpo text-gris mt-3">{EQUIPO_SECCION.texto}</p>
        </Revelar>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
          {EQUIPO.map((p, i) => {
            const retrato = p.foto ? RETRATOS[p.foto] : null;
            const destacadas = p.trayectoria.slice(0, LINEAS_EN_TARJETA);
            return (
              <Revelar key={p.nombre} retraso={i * 80} className="h-full">
                <article className={`tarjeta ${estilos.tarjeta} flex h-full flex-col px-5 py-5`}>
                  <div className="flex items-center gap-4">
                    <div className={`${estilos.marco} ${retrato ? '' : estilos.silueta}`}>
                      {retrato ? (
                        <Image
                          src={retrato.src}
                          alt={`${p.nombre}, ${p.cargo.toLowerCase()} y ${p.sigla} de Prisma Vertex.`}
                          sizes="80px"
                          placeholder="blur"
                          style={{ objectPosition: retrato.encuadre }}
                        />
                      ) : (
                        <Silueta />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-cuerpo leading-snug font-semibold">{p.nombre}</p>
                      <p className="text-menudo mt-0.5">
                        <span className="text-azul font-semibold">{p.sigla}</span>
                        <span className="text-gris"> · {p.cargo}</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-menudo text-tinta mt-4">{p.rol}</p>

                  {destacadas.length > 0 && (
                    <ul className="text-menudo text-gris mt-3 space-y-1.5">
                      {destacadas.map((linea) => (
                        <li key={linea} className="flex gap-2.5">
                          <span
                            className="bg-azul mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full"
                            aria-hidden="true"
                          />
                          {linea}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto">
                    {p.trayectoria.length > 0 && (
                      <PerfilIntegrante
                        nombre={p.nombre}
                        cargo={p.cargo}
                        sigla={p.sigla}
                        rol={p.rol}
                        trayectoria={p.trayectoria}
                        foto={p.perfil ? PERFILES[p.perfil] : null}
                        credito={p.credito}
                      />
                    )}

                    {/* El perfil profesional al lado de la foto es lo que la
                        vuelve creíble. Como es un canal para escribirles, no
                        aparece mientras el sitio sea una vista previa. */}
                    {p.linkedin && !MODO_VISTA_PREVIA && (
                      <a
                        href={p.linkedin}
                        target="_blank"
                        rel="noopener"
                        className="text-menudo text-azul mt-2 flex items-center gap-2 py-1 font-semibold hover:underline"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4z" />
                        </svg>
                        LinkedIn de {p.nombre.split(' ').slice(0, -1).join(' ') || p.nombre}
                      </a>
                    )}
                  </div>
                </article>
              </Revelar>
            );
          })}
        </div>
      </div>
    </section>
  );
}
