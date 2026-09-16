import Image from 'next/image';
import foto from '@/assets/equipo-prisma.jpg';
import Boton from './Boton';
import { HERO } from '@/lib/contenido';
import { SITE } from '@/lib/config';
import estilos from './Hero.module.css';

export default function Hero() {
  return (
    <section className="border-linea border-b">
      <div className="lienzo grid items-center gap-11 pt-12 pb-14 md:grid-cols-[1.06fr_0.94fr] md:gap-14 md:pt-20 md:pb-24">
        <div>
          <p
            className={`text-menudo text-gris ${estilos.entra} ${estilos.d1}`}
            style={{ letterSpacing: '0.12em' }}
          >
            <span className="uppercase">Consultoría de procesos empresariales</span>
            <span className="hidden sm:inline">
              <span className="text-gris"> · </span>
              <span className="uppercase">
                {SITE.ciudad}, {SITE.pais}
              </span>
            </span>
          </p>

          <h1 className={`text-d0 mt-5 ${estilos.entra} ${estilos.d2}`}>
            {HERO.titulo}
          </h1>

          <div className={`${estilos.riel} mt-8 max-w-[22rem]`} aria-hidden="true" />

          <p
            className={`text-guia text-gris medida mt-7 ${estilos.entra} ${estilos.d3}`}
          >
            {HERO.subtitulo}
          </p>

          <div className={`mt-9 ${estilos.entra} ${estilos.d4}`}>
            <Boton href="/diagnostico" variante="solido">
              {HERO.boton}
            </Boton>
            <p className="text-menudo text-gris mt-4">{HERO.bajoBoton}</p>
          </div>
        </div>

        <figure className={estilos.foto}>
          <Image
            src={foto}
            alt="David Vásquez y Juan David Chaves, consultores de Prisma Vertex, sosteniendo un prisma atravesado por un haz de luz."
            sizes="(min-width: 768px) 44vw, 100vw"
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
