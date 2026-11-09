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
      {/* Una sola columna: el titular tiene todo el protagonismo. El ancho
          máximo mantiene «Tu empresa puede / ganar más.» en dos líneas. */}
      <div className="lienzo pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="max-w-[44rem]">
          <div className={`${estilos.entra} ${estilos.d1}`}>
            <p
              className="text-tinta text-[0.8125rem] font-semibold uppercase sm:text-[0.875rem]"
              style={{ letterSpacing: '0.12em' }}
            >
              {HERO.lugar}
            </p>
            <p className={`${estilos.rotulo} mt-1.5`}>{HERO.rotulo}</p>
          </div>

          <h1 className={`text-d0 titular-suelto mt-6 ${estilos.entra} ${estilos.d2}`}>
            {inicio}
            <span className="whitespace-nowrap">
              {final}
              <PrismaLuz />
            </span>
          </h1>

          <div className={`${estilos.riel} mt-8 max-w-[22rem]`} aria-hidden="true" />

          <div className={`${estilos.entra} ${estilos.d3}`}>
            <p className="text-guia text-gris medida mt-7">{HERO.subtitulo}</p>
            <p className="text-cuerpo mt-4 flex items-start gap-2.5 font-semibold">
              {/* El punto se alinea con el primer renglón, no con el centro
                  del párrafo, para que en celular no quede entre dos líneas. */}
              <span
                className="bg-azul mt-[0.6em] size-2 shrink-0 rounded-full"
                aria-hidden="true"
              />
              {HERO.especialidad}
            </p>
          </div>

          <div className={`mt-9 ${estilos.entra} ${estilos.d4}`}>
            <Boton href="/diagnostico" variante="calma">
              {HERO.boton}
            </Boton>
            <p className="text-menudo text-gris mt-4">{HERO.bajoBoton}</p>
          </div>
        </div>

        {/* Franja compacta con las personas reales detrás de la empresa: da
            autoridad sin quitarle espacio al titular. La altura va fija en
            CSS, así que la foto no empuja nada al cargar (sin salto de
            diseño). El encuadre al 22 % vertical deja las caras y el prisma. */}
        <figure
          className={`${estilos.foto} mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5`}
        >
          <Image
            src={foto}
            alt={HERO.alt}
            sizes="(min-width: 640px) 360px, 100vw"
            placeholder="blur"
            priority
            fetchPriority="high"
            className="h-[180px] w-full rounded-xl object-cover sm:h-[220px] sm:w-[360px] sm:shrink-0"
            style={{ objectPosition: '50% 22%' }}
          />
          <figcaption className="text-menudo text-gris max-w-[34ch]">{HERO.pie}</figcaption>
        </figure>
      </div>
    </section>
  );
}
