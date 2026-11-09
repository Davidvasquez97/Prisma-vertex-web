import Link from 'next/link';
import Boton from './Boton';
import Revelar from './Revelar';
import { ICONOS } from './Iconos';
import { NICHOS, NICHOS_SECCION } from '@/lib/contenido';

/**
 * «Especialistas en»: los cuatro nichos, cada uno con su página.
 *
 * Los demás sectores no se muestran aquí para no saturar el inicio: solo el
 * botón discreto de abajo lleva a /otros-sectores.
 *
 * Va en blanco con un filete arriba, y no en gris: la calculadora que sigue
 * ya va en gris, y dos bloques grises seguidos se funden.
 */
export default function Nichos() {
  return (
    <section id="especialidades" className="bloque filete">
      <div className="lienzo">
        <Revelar>
          <h2 className="text-d1">{NICHOS_SECCION.titulo}</h2>
        </Revelar>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-4 lg:gap-6">
          {NICHOS.map((n, i) => {
            const Icono = ICONOS[n.icono];
            return (
              <li key={n.slug}>
                <Revelar retraso={i * 80} className="h-full">
                  <Link
                    href={n.ruta}
                    className="tarjeta tarjeta-viva group flex h-full flex-col px-6 py-7"
                  >
                    <span className="text-azul">
                      <Icono />
                    </span>
                    <h3 className="text-d3 mt-5">{n.nombre}</h3>
                    <p className="text-cuerpo text-gris mt-2">{n.dolor}</p>
                    <span className="text-menudo text-azul mt-auto pt-6 font-semibold">
                      {NICHOS_SECCION.verMas}
                      <span
                        className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </Revelar>
              </li>
            );
          })}
        </ul>

        <Revelar retraso={120}>
          <div className="mt-9">
            <Boton href={NICHOS_SECCION.otrosRuta} variante="linea">
              {NICHOS_SECCION.otros}
            </Boton>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
