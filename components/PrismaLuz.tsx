import estilos from './PrismaLuz.module.css';

/**
 * Un prisma pequeño que acompaña al titular: la luz entra por la izquierda,
 * cruza el vidrio y sale abierta en arcoíris. Es la idea de la marca en
 * miniatura —Prisma Vertex ordena lo que entra revuelto— y por eso va al
 * lado de la promesa.
 *
 * Se mide en `em`: crece y se encoge con el titular, sin reglas propias
 * por pantalla. Es decorativo; el titular ya dice todo en texto.
 */
export default function PrismaLuz() {
  return (
    <svg className={estilos.marca} viewBox="0 0 64 44" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="pl-vidrio" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1E5BD6" stopOpacity="0.1" />
          <stop offset="1" stopColor="#1E5BD6" stopOpacity="0.26" />
        </linearGradient>

        <linearGradient id="pl-luz" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#9AA6B6" stopOpacity="0" />
          <stop offset="1" stopColor="#9AA6B6" />
        </linearGradient>

        <linearGradient id="pl-arcoiris" x1="0" y1="11" x2="0" y2="37" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E8452B" />
          <stop offset="0.2" stopColor="#F08A1E" />
          <stop offset="0.38" stopColor="#EFC521" />
          <stop offset="0.55" stopColor="#3EAE55" />
          <stop offset="0.72" stopColor="#1E7FE0" />
          <stop offset="0.87" stopColor="#3F3FAF" />
          <stop offset="1" stopColor="#8B3AA6" />
        </linearGradient>

        {/* El espectro se desvanece hacia la derecha en vez de cortarse. */}
        <linearGradient id="pl-desvanece" x1="38" y1="0" x2="64" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0.8" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="pl-mascara">
          <rect x="36" y="0" width="30" height="44" fill="url(#pl-desvanece)" />
        </mask>

        <radialGradient id="pl-chispa">
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.5" stopColor="#BFD6FF" stopOpacity="0.7" />
          <stop offset="1" stopColor="#BFD6FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Haz de luz blanca que llega a la cara izquierda */}
      <path
        className={estilos.haz}
        d="M0 27.5 L21.2 23.8"
        pathLength={100}
        stroke="url(#pl-luz)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* El pulso que corre por el haz en cada latido */}
      <path
        className={estilos.pulso}
        d="M0 27.5 L21.2 23.8"
        pathLength={100}
        stroke="#1E5BD6"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Espectro que sale por la cara derecha */}
      <g className={estilos.abanico} mask="url(#pl-mascara)">
        <path className={estilos.espectro} d="M38 22 L64 11 L64 37 Z" fill="url(#pl-arcoiris)" />
      </g>

      {/* El prisma */}
      <path
        d="M30 4 L14 40 L46 40 Z"
        fill="url(#pl-vidrio)"
        stroke="#1E5BD6"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* El rayo cruzando el vidrio */}
      <path
        className={estilos.rayo}
        d="M21.2 23.8 L38 22"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Destello en el punto de salida */}
      <circle className={estilos.chispa} cx="38" cy="22" r="5.5" fill="url(#pl-chispa)" />
    </svg>
  );
}
