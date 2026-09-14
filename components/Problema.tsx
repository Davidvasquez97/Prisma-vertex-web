const sintomas = [
  'Su equipo contesta los mismos mensajes de WhatsApp todo el día.',
  'Pierde pedidos y reservas porque nadie contestó a las nueve de la noche.',
  'Alguien pasa horas pasando datos de una plataforma a otra.',
  'La información vive en cuadernos y chats, no en un sistema.',
];

const hoy = [
  'Tres horas diarias respondiendo lo mismo',
  'Clientes que se van porque nadie contestó',
  'Nadie sabe cuánto se está perdiendo',
];

const conPrisma = [
  'Un asistente responde solo, las 24 horas',
  'Cada cliente atendido en segundos',
  'Los números a la vista en una sola pantalla',
];

export default function Problema() {
  return (
    <section id="problema" className="bloque bg-perla">
      <div className="lienzo">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div>
            <h2 className="text-d1">
              Usted no tiene un problema de ventas. Tiene un problema de
              operación.
            </h2>

            <div className="text-guia mt-8 space-y-5">
              <p className="text-gris">
                Cada hora que su equipo gasta contestando lo mismo, copiando
                datos de un lado a otro o buscando información en un cuaderno es
                una hora que nadie está usando para hacer crecer el negocio. No
                aparece en ningún estado financiero, pero se paga todos los
                meses.
              </p>
              <p className="text-gris">
                Hoy esas tareas ya no necesitan una persona: lo que hace cinco
                años costaba una nómina completa lo resuelve un sistema bien
                diseñado. El problema es saber cuál de sus procesos vale la pena
                automatizar y cuál no.
              </p>
              <p className="text-azul font-semibold">Ahí entramos nosotros.</p>
            </div>
          </div>

          <div className="md:pt-2">
            <h3 className="text-d3">¿Le suena esto?</h3>
            <ul className="mt-5">
              {sintomas.map((s) => (
                <li key={s} className="filete text-cuerpo py-4">
                  {s}
                </li>
              ))}
              <li className="filete text-cuerpo py-4">
                Usted trabaja <em>en</em> el negocio en vez de trabajar{' '}
                <em>para hacerlo crecer</em>.
              </li>
            </ul>
          </div>
        </div>

        {/* Orden del DOM por columnas: en móvil se apila "Hoy" completo y
            debajo "Con Prisma"; en escritorio el grid los reparte en dos
            columnas con las filas alineadas. */}
        <div className="relative mt-16 md:mt-20 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-[auto_repeat(3,1fr)] md:gap-x-16">
          <span
            aria-hidden="true"
            className="bg-linea absolute top-0 bottom-0 left-1/2 hidden w-px md:block"
          />

          <p className="text-cuerpo pb-3 font-semibold">Hoy</p>
          {hoy.map((t) => (
            <p
              key={t}
              className="filete text-d3 text-gris flex items-center py-5 leading-snug"
            >
              {t}
            </p>
          ))}

          <p className="text-cuerpo mt-10 pb-3 font-semibold md:mt-0">
            Con Prisma
          </p>
          {conPrisma.map((t) => (
            <p
              key={t}
              className="text-d3 flex items-center border-t border-[color-mix(in_srgb,var(--color-azul)_22%,var(--color-linea))] py-5 leading-snug"
            >
              {t}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
