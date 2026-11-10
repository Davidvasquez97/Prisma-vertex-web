'use client';

import Image, { type StaticImageData } from 'next/image';
import { useId, useRef } from 'react';
import estilos from './PerfilIntegrante.module.css';

/**
 * «Saber más» de un integrante: un botón que abre una ventana con su foto
 * completa y su hoja de vida. Es lo único de la sección del equipo que
 * necesita JavaScript; la tarjeta compacta se queda en el servidor.
 */
export default function PerfilIntegrante({
  nombre,
  cargo,
  sigla,
  rol,
  trayectoria,
  foto,
  credito,
}: {
  nombre: string;
  cargo: string;
  sigla: string;
  rol: string;
  trayectoria: string[];
  foto: StaticImageData | null;
  credito: string;
}) {
  const ventana = useRef<HTMLDialogElement>(null);
  const boton = useRef<HTMLButtonElement>(null);
  const titulo = useId();
  // El nombre sin el apellido: «David», «Juan David», «Sebastián».
  const partes = nombre.split(' ');
  const nombreCorto = partes.length > 1 ? partes.slice(0, -1).join(' ') : nombre;

  return (
    <>
      <button
        ref={boton}
        type="button"
        aria-haspopup="dialog"
        onClick={() => ventana.current?.showModal()}
        className="group text-menudo text-azul mt-4 inline-flex items-center gap-1.5 py-1 font-semibold"
      >
        Saber más de {nombreCorto}
        <span
          className="inline-block transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </button>

      <dialog
        ref={ventana}
        aria-labelledby={titulo}
        // Sin foto (Sebastián) la ventana es angosta y de una sola columna.
        className={`${estilos.dialogo} ${foto ? '' : estilos.angosto}`}
        // Al cerrar, el foco vuelve al botón que la abrió (Safari no lo hace solo).
        onClose={() => boton.current?.focus()}
        // Un clic fuera de la tarjeta (sobre el velo) la cierra.
        onClick={(e) => {
          if (e.target === ventana.current) ventana.current?.close();
        }}
      >
        <div className={foto ? 'grid md:grid-cols-[0.95fr_1.05fr]' : ''}>
          {foto && (
            <div className="relative">
              <Image
                src={foto}
                alt={`${nombre}, ${cargo.toLowerCase()} de Prisma Vertex.`}
                sizes="(min-width: 768px) 440px, 100vw"
                placeholder="blur"
                className={estilos.foto}
              />
              {credito && (
                <p className="absolute right-3 bottom-3 rounded bg-black/55 px-2 py-0.5 text-[0.75rem] text-white">
                  Foto: {credito}
                </p>
              )}
            </div>
          )}

          <div className="relative px-6 py-7 md:px-9 md:py-10">
            <button
              type="button"
              onClick={() => ventana.current?.close()}
              aria-label="Cerrar"
              className="text-gris hover:text-tinta hover:bg-perla absolute top-3 right-3 flex h-11 w-11 items-center justify-center rounded-full transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <p className="text-menudo">
              <span className="text-azul font-semibold">{sigla}</span>
              <span className="text-gris"> · {cargo}</span>
            </p>
            <h3 id={titulo} className="text-d2 mt-2 pr-10">
              {nombre}
            </h3>
            <p className="text-cuerpo mt-3">{rol}</p>

            <div className="filete mt-6 pt-6">
              <p className="text-menudo font-semibold">Trayectoria</p>
              <ul className="text-cuerpo text-gris mt-3 space-y-2.5">
                {trayectoria.map((linea) => (
                  <li key={linea} className="flex gap-3">
                    <span
                      className="bg-azul mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full"
                      aria-hidden="true"
                    />
                    {linea}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
