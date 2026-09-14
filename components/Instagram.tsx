import Image from 'next/image';
import marca from '@/assets/logo-marca.jpg';
import Boton from './Boton';
import { CONTACTO } from '@/lib/config';

export default function Instagram() {
  return (
    <div className="filete mt-16 pt-14 md:mt-20 md:pt-16">
      <div className="bg-base border-linea grid items-center gap-8 border px-7 py-10 md:grid-cols-[1.25fr_0.75fr] md:gap-12 md:px-12 md:py-12">
        <div>
          <div className="flex items-center gap-3">
            {/* Marca de Instagram dibujada a mano: sin librería de íconos. */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="shrink-0"
            >
              <rect
                x="2.75"
                y="2.75"
                width="18.5"
                height="18.5"
                rx="5.25"
                stroke="#1E5BD6"
                strokeWidth="1.6"
              />
              <circle
                cx="12"
                cy="12"
                r="4.35"
                stroke="#1E5BD6"
                strokeWidth="1.6"
              />
              <circle cx="17.4" cy="6.6" r="1.25" fill="#1E5BD6" />
            </svg>
            <p className="text-d3">{CONTACTO.instagramVisible}</p>
          </div>

          <h3 className="text-d2 mt-5 max-w-[20ch]">
            Lo que encontramos, publicado.
          </h3>

          <p className="text-cuerpo text-gris mt-4 max-w-[54ch]">
            En Instagram mostramos cuellos de botella reales de operaciones
            reales: qué estaba pasando, cómo se resolvió y cuántas horas
            recuperó el negocio. Sin vender nada.
          </p>

          <Boton
            href={CONTACTO.instagram}
            variante="linea"
            className="mt-7"
          >
            Ver en Instagram
          </Boton>
        </div>

        <div className="hidden justify-self-center md:block">
          <Image
            src={marca}
            alt=""
            width={200}
            height={156}
            sizes="200px"
            className="mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
}
