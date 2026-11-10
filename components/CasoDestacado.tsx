import Image from 'next/image';
import Link from 'next/link';
import logoPanorex from '@/assets/logo-panorex.png';
import { CASOS_SECCION as T, NICHOS, type Caso, type PuntoCaso } from '@/lib/contenido';

/* Logos de los clientes, con su permiso. El fondo blanco del archivo se
   funde con la tarjeta gracias a mix-blend-mode: multiply. */
const LOGOS = {
  panorex: { src: logoPanorex, alt: 'Panorex Radiología Oral' },
} as const;

function iniciales(nombre: string) {
  return nombre
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('');
}

/** Logo del cliente, o sus iniciales en un círculo si no hay logo. */
function Cabecera({ caso }: { caso: Caso }) {
  if (caso.logo) {
    const logo = LOGOS[caso.logo];
    return (
      <div>
        <Image
          src={logo.src}
          alt={logo.alt}
          sizes="160px"
          className="h-11 w-auto mix-blend-multiply md:h-12"
        />
        <p className="text-menudo text-gris mt-3">{caso.sector}</p>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3.5">
      <span
        className="bg-azul/10 text-azul flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[1.05rem] font-semibold"
        aria-hidden="true"
      >
        {iniciales(caso.cliente)}
      </span>
      <div>
        <p className="text-cuerpo leading-snug font-semibold">{caso.cliente}</p>
        <p className="text-menudo text-gris">{caso.sector}</p>
      </div>
    </div>
  );
}

function Lista({ titulo, puntos }: { titulo: string; puntos: PuntoCaso[] }) {
  return (
    <div>
      <p className="text-menudo text-azul font-semibold">{titulo}</p>
      <ul className="mt-4 space-y-4">
        {puntos.map((p) => (
          <li key={p.titulo} className="flex gap-3">
            <span
              className="bg-azul mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full"
              aria-hidden="true"
            />
            <p className="text-cuerpo">
              <span className="font-semibold">{p.titulo}.</span>{' '}
              <span className="text-gris">{p.texto}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Un caso de éxito, en dos formatos:
 * - compacto: la tarjeta del inicio, con lo esencial y el enlace al caso.
 * - completo: /casos y las páginas de nicho, con todo lo que hicimos.
 */
export default function CasoDestacado({
  caso,
  completo = false,
  Titulo = 'h3',
  enlaceNicho = false,
}: {
  caso: Caso;
  completo?: boolean;
  Titulo?: 'h2' | 'h3';
  /** En /casos: enlace a la página de la especialidad. */
  enlaceNicho?: boolean;
}) {
  if (!completo) {
    return (
      <article className="tarjeta flex h-full flex-col px-6 py-7 md:px-8 md:py-9">
        <Cabecera caso={caso} />
        <Titulo className="text-d3 mt-6">{caso.titulo}</Titulo>
        <p className="text-cuerpo text-gris mt-3">{caso.resumen}</p>

        {/* Lo que más pesa del caso: la cifra si la hay; si no, su primer resultado. */}
        {caso.cifra ? (
          <p className="border-linea mt-6 flex items-baseline gap-3 border-t pt-5">
            <span className="text-d1 cifra text-azul shrink-0 leading-none">{caso.cifra.valor}</span>
            <span className="text-menudo text-gris">{caso.cifra.texto}</span>
          </p>
        ) : (
          caso.resultados[0] && (
            <p className="border-linea mt-6 border-t pt-5">
              <span className="text-d3 text-azul block">{caso.resultados[0].titulo}</span>
              <span className="text-menudo text-gris mt-1 block">{caso.resultados[0].texto}</span>
            </p>
          )
        )}

        <ul className="mt-6 flex flex-wrap gap-2">
          {caso.hicimos.slice(0, 4).map((p) => (
            <li
              key={p.titulo}
              className="bg-perla text-tinta rounded-full px-3 py-1 text-[0.8125rem] leading-snug"
            >
              {p.titulo}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <Link
            href={`/casos#${caso.id}`}
            className="group text-menudo text-azul inline-flex items-center gap-1.5 py-1 font-semibold"
          >
            {T.verCaso}
            <span className="sr-only"> de {caso.cliente}</span>
            <span
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </article>
    );
  }

  const nicho = enlaceNicho ? NICHOS.find((n) => n.slug === caso.nicho) : undefined;

  return (
    <article id={caso.id} className="tarjeta scroll-mt-28 px-6 py-8 md:px-10 md:py-11">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <Cabecera caso={caso} />
        {caso.cifra && (
          <p className="bg-perla rounded-xl px-5 py-4 md:max-w-[19rem]">
            <span className="text-d1 cifra text-azul block leading-none">{caso.cifra.valor}</span>
            <span className="text-menudo text-gris mt-2 block">{caso.cifra.texto}</span>
          </p>
        )}
      </div>

      <Titulo className="text-d2 mt-7 max-w-[32ch]">{caso.titulo}</Titulo>
      <p className="text-guia text-gris medida mt-4">{caso.resumen}</p>

      <div className="filete mt-8 grid gap-9 pt-8 md:grid-cols-[1.35fr_1fr] md:gap-12">
        <Lista titulo={T.hicimos} puntos={caso.hicimos} />
        <Lista titulo={T.resultados} puntos={caso.resultados} />
      </div>

      {caso.cita && (
        <blockquote className="text-guia border-azul mt-9 border-l-2 pl-5">«{caso.cita}»</blockquote>
      )}

      {nicho && (
        <Link
          href={nicho.ruta}
          className="group text-menudo text-azul mt-8 inline-flex items-center gap-1.5 py-1 font-semibold"
        >
          {T.verNicho} {nicho.corto.toLowerCase()}
          <span
            className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      )}
    </article>
  );
}
