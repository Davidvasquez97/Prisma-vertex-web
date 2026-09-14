import { MENSAJES, wa } from '@/lib/config';

const planes = [
  {
    nombre: 'Plan Básico',
    precio: 'USD 65',
    destacado: false,
    items: [
      '1 hora de consultoría',
      'Revisamos un área o proceso de su negocio',
      'Los cinco entregables del informe, completos',
      'Cotización cerrada de la implementación',
    ],
    boton: 'Agendar por WhatsApp',
    mensaje: MENSAJES.basico,
  },
  {
    nombre: 'Plan Pro',
    precio: 'USD 120',
    destacado: true,
    etiqueta: 'El más pedido',
    items: [
      '2 horas de consultoría',
      'Revisamos toda su operación',
      'Los cinco entregables, con los cuellos de botella priorizados',
      'Cotización cerrada de la implementación',
    ],
    boton: 'Agendar por WhatsApp',
    mensaje: MENSAJES.pro,
  },
  {
    nombre: 'Plan Empresa',
    precio: 'Hablemos',
    destacado: false,
    items: [
      'Más de dos horas de consultoría',
      'Para varias áreas, sedes o equipos',
      'Todos los entregables anteriores',
      'Acompañamiento continuo',
    ],
    boton: 'Escribir por WhatsApp',
    mensaje: MENSAJES.empresa,
  },
];

export default function Planes() {
  return (
    <div id="planes" className="filete mt-16 pt-14 md:mt-20 md:pt-16">
      <h3 className="text-d2">Elija cómo empezar</h3>

      <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-7">
        {planes.map((p) => (
          <article
            key={p.nombre}
            className={`bg-base relative flex flex-col border px-6 py-8 md:px-7 ${
              p.destacado
                ? 'border-azul order-first md:order-none'
                : 'border-linea'
            }`}
          >
            {p.etiqueta && (
              <span className="bg-base text-azul ring-azul absolute -top-[11px] left-6 px-3 py-[3px] text-[0.8125rem] font-semibold ring-1 md:left-1/2 md:-translate-x-1/2">
                {p.etiqueta}
              </span>
            )}

            <p className="text-cuerpo font-semibold">{p.nombre}</p>
            <p className="text-d1 cifra mt-1 leading-none">{p.precio}</p>

            <ul className="mt-7 mb-8">
              {p.items.map((i) => (
                <li key={i} className="filete text-cuerpo text-gris py-3.5">
                  {i}
                </li>
              ))}
            </ul>

            <a
              href={wa(p.mensaje)}
              target="_blank"
              rel="noopener"
              className={`boton mt-auto w-full ${
                p.destacado ? 'boton-solido' : 'boton-linea'
              }`}
            >
              {p.boton}
            </a>
          </article>
        ))}
      </div>

      <p className="text-menudo text-gris mt-7 max-w-[76ch]">
        Las horas corresponden al tiempo de sesión con usted. El análisis y la
        elaboración de los documentos se hacen después y están incluidos en el
        precio. La implementación se cotiza aparte.
      </p>

      {/* El único bloque oscuro de toda la página. */}
      <div className="bg-hondo mt-14 px-7 py-10 md:px-14 md:py-14">
        <p className="text-d2 max-w-[26ch] text-white">
          Si no encontramos cómo ahorrarle tiempo o dinero, no le cobramos la
          consultoría.
        </p>
        <p className="text-guia mt-5 max-w-[52ch] text-white/75">
          Y si implementamos una solución que no le resulta rentable, tampoco le
          cobramos la implementación.
        </p>
      </div>

      <p className="text-cuerpo text-gris mt-8 max-w-[68ch]">
        ¿Su sector todavía no tiene caso publicado? Hacemos el diagnóstico
        completo sin costo a cambio de poder publicarlo.{' '}
        <a
          href={wa(MENSAJES.casos)}
          target="_blank"
          rel="noopener"
          className="text-azul font-semibold underline underline-offset-4"
        >
          Postular mi empresa
        </a>
      </p>
    </div>
  );
}
