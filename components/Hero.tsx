import Boton from './Boton';
import Revelar from './Revelar';
import { NODOS_X, NODO_Y, TRAZO } from '@/lib/circuito';
import { MENSAJES, SECTORES, wa } from '@/lib/config';
import estilos from './Hero.module.css';

export default function Hero() {
  return (
    <section className="border-linea relative overflow-hidden border-b">
      <div className="lienzo grid items-center gap-12 pt-14 pb-16 md:grid-cols-[1.12fr_1fr] md:gap-8 md:pt-24 md:pb-24">
        <div className="relative z-10">
          <h1 className="text-d0">
            Su empresa pierde dinero en cosas que la tecnología ya puede hacer
            sola.
          </h1>

          <p className="text-guia text-gris medida mt-8">
            Nosotros encontramos exactamente dónde, lo calculamos en pesos, y lo
            arreglamos. Sin cambiar su equipo y sin palabras raras.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Boton href={wa(MENSAJES.general)} variante="solido">
              Agendar por WhatsApp
            </Boton>
            <p className="text-menudo text-gris">Consultoría desde USD 65</p>
          </div>
        </div>

        {/* El haz entra por el borde izquierdo de la pantalla, cruza por detrás
            del titular y se refracta en espectro al salir por el prisma. */}
        <div className={estilos.caja}>
          <div className={estilos.haz} aria-hidden="true" />

          <svg
            viewBox="0 0 440 360"
            className="relative z-[1] mx-auto block w-full max-w-[290px] md:max-w-none"
            role="img"
            aria-label="Un haz de luz blanca atraviesa un prisma y se abre en un espectro de colores."
          >
            <defs>
              <linearGradient id="caraIzq" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#1E5BD6" stopOpacity="0.2" />
                <stop offset="1" stopColor="#0A2A6B" stopOpacity="0.32" />
              </linearGradient>
              <linearGradient id="caraDer" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#1E5BD6" stopOpacity="0.1" />
                <stop offset="1" stopColor="#1E5BD6" stopOpacity="0.24" />
              </linearGradient>
              <linearGradient id="caraBase" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#0A2A6B" stopOpacity="0.3" />
                <stop offset="1" stopColor="#0A2A6B" stopOpacity="0.14" />
              </linearGradient>

              <linearGradient id="arcoiris" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#E8452B" />
                <stop offset="0.17" stopColor="#F08A1E" />
                <stop offset="0.33" stopColor="#EFC521" />
                <stop offset="0.5" stopColor="#3EAE55" />
                <stop offset="0.67" stopColor="#1E7FE0" />
                <stop offset="0.84" stopColor="#3F3FAF" />
                <stop offset="1" stopColor="#8B3AA6" />
              </linearGradient>

              <linearGradient id="desvanece" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
                <stop offset="0.18" stopColor="#fff" stopOpacity="1" />
                <stop offset="0.62" stopColor="#fff" stopOpacity="0.62" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>

              <mask id="mascaraEspectro">
                <rect
                  x="196"
                  y="70"
                  width="250"
                  height="240"
                  fill="url(#desvanece)"
                />
              </mask>

              <clipPath id="abanico">
                <path d="M198 186 L446 104 L446 276 Z" />
              </clipPath>

              <filter id="suave" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.2" />
              </filter>

              <radialGradient id="destello">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="0.55" stopColor="#BFD6FF" stopOpacity="0.5" />
                <stop offset="1" stopColor="#BFD6FF" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Espectro: se abre desde el punto exacto de salida del prisma */}
            <g className={estilos.espectro} mask="url(#mascaraEspectro)">
              <g clipPath="url(#abanico)" filter="url(#suave)">
                <rect
                  x="196"
                  y="80"
                  width="252"
                  height="220"
                  fill="url(#arcoiris)"
                  opacity="0.9"
                />
              </g>
            </g>

            {/* Prisma */}
            <g>
              <path d="M150 34 L58 278 L150 320 Z" fill="url(#caraIzq)" />
              <path d="M150 34 L150 320 L242 278 Z" fill="url(#caraDer)" />
              <path
                d="M58 278 L150 320 L242 278 L150 246 Z"
                fill="url(#caraBase)"
              />
              <g
                fill="none"
                stroke="#1E5BD6"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
              >
                <path d="M150 34 L58 278 L150 320 L242 278 Z" />
                <path d="M150 34 L150 320" />
                <path d="M58 278 L150 246 L242 278" opacity="0.45" />
              </g>
            </g>

            {/* Destello donde el haz golpea la cara izquierda */}
            <circle
              className={estilos.destello}
              cx="112"
              cy="180"
              r="34"
              fill="url(#destello)"
            />
          </svg>
        </div>
      </div>

      {/* Los seis sectores, sobre una pista de circuito impreso. */}
      <Revelar className={estilos.circuito}>
        <div className="lienzo filete pt-10 pb-4 md:pt-12 md:pb-6">
          <p className="text-menudo text-gris">Seis sectores. Un mismo método.</p>

          <div className="mt-6 hidden md:block">
            <svg
              viewBox="0 0 1120 88"
              className="block w-full"
              role="img"
              aria-label={`Pista de circuito que conecta seis sectores: ${SECTORES.join(', ')}.`}
            >
              <path
                d={TRAZO}
                fill="none"
                stroke="#C9D3E0"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
              <path
                className="pulso"
                d={TRAZO}
                pathLength={1000}
                fill="none"
                stroke="#1E5BD6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <g>
                {NODOS_X.map((x) => (
                  <rect
                    key={x}
                    x={x - 4.5}
                    y={NODO_Y - 4.5}
                    width="9"
                    height="9"
                    fill="#1E5BD6"
                  />
                ))}
              </g>
            </svg>

            <ul className="grid grid-cols-6">
              {SECTORES.map((s) => (
                <li key={s} className="text-menudo text-gris px-2 text-center">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* En móvil el circuito se voltea a vertical. */}
          <ul className={`${estilos.rail} mt-4 md:hidden`}>
            {SECTORES.map((s) => (
              <li key={s} className="relative flex items-center gap-4 py-3 pl-6">
                <span className={estilos.nodo} aria-hidden="true" />
                <span className="text-cuerpo">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </Revelar>
    </section>
  );
}
