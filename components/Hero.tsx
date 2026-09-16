import Image from 'next/image';
import foto from '@/assets/equipo-prisma.jpg';
import Boton from './Boton';
import PrismaLuz from './PrismaLuz';
import { HERO } from '@/lib/contenido';
import estilos from './Hero.module.css';

export default function Hero() {
  // La última palabra viaja pegada al prisma: así el dibujo nunca cae
  // solo en una línea nueva.
  const corte = HERO.titulo.lastIndexOf(' ');
  const inicio = HERO.titulo.slice(0, corte + 1);
  const final = HERO.titulo.slice(corte + 1);

  return (
    <section className="border-linea border-b">
      <div className="lienzo grid items-center gap-11 pt-12 pb-14 md:pt-20 md:pb-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div>
          <p
            className={`text-gris text-[0.8125rem] uppercase sm:text-[0.875rem] ${estilos.entra} ${estilos.d1}`}
            style={{ letterSpacing: '0.085em' }}
          >
            <span className="text-tinta font-semibold">{HERO.lugar}</span>
            <span className="text-gris"> · </span>
            {HERO.rotulo}
          </p>

          <h1 className={`text-d0 titular-suelto mt-5 ${estilos.entra} ${estilos.d2}`}>
            {inicio}
            <span className="whitespace-nowrap">
              {final}
              <PrismaLuz />
            </span>
          </h1>

          <div className={`${estilos.riel} mt-8 max-w-[22rem]`} aria-hidden="true" />

          <p
            className={`text-guia text-gris medida mt-7 ${estilos.entra} ${estilos.d3}`}
          >
            {HERO.subtitulo}
          </p>

          <div className={`mt-9 ${estilos.entra} ${estilos.d4}`}>
            <Boton href="/diagnostico" variante="calma">
              {HERO.boton}
            </Boton>
            <p className="text-menudo text-gris mt-4">{HERO.bajoBoton}</p>
          </div>
        </div>

        <figure className={estilos.foto}>
          <Image
            src={foto}
            alt="David Vásquez y Juan David Chaves, consultores de Prisma Vertex, sosteniendo un prisma atravesado por un haz de luz."
            sizes="(min-width: 1024px) 40vw, 100vw"
            placeholder="blur"
            priority
            fetchPriority="high"
            className="h-auto w-full rounded-xl"
          />
          <figcaption className="text-menudo text-gris mt-3">
            David Vásquez y Juan David Chaves, socios de Prisma Vertex.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
