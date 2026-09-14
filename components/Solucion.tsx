import estilos from './Solucion.module.css';

const fases = [
  {
    n: 'Fase 1',
    titulo: 'Diagnóstico',
    texto:
      'Recorremos su operación real, no la del organigrama. Salimos con las tres fugas más caras, medidas en horas y en pesos.',
  },
  {
    n: 'Fase 2',
    titulo: 'Diseño',
    texto:
      'Definimos qué se automatiza, qué se simplifica y qué se deja igual. Recibe una propuesta con alcance, tiempos y precio cerrado.',
  },
  {
    n: 'Fase 3',
    titulo: 'Implementación',
    texto:
      'Construimos, integramos y capacitamos a su gente. Lo acompañamos los primeros 60 días.',
  },
];

const entregas = [
  {
    titulo: 'El problema, en palabras simples.',
    texto:
      'Qué está pasando, en qué parte de su operación y por qué le está costando dinero. Sin tecnicismos.',
  },
  {
    titulo: 'Cuánto le cuesta hoy.',
    texto:
      'Horas al mes y pesos al mes, calculados con los datos de su propio negocio.',
  },
  {
    titulo: 'La solución, paso a paso.',
    texto:
      'Qué se construye, en qué orden y qué necesita usted poner de su lado.',
  },
  {
    titulo: 'Cuánto tiempo se recupera.',
    texto:
      'Cuántas horas al mes quedan libres y qué puede hacer su equipo con ellas.',
  },
  {
    titulo: 'Cuánto vale arreglarlo.',
    texto:
      'Precio cerrado por cada solución, por separado. Usted decide cuáles hace y cuándo.',
  },
];

const automatizaciones = [
  {
    titulo: 'Atención y ventas por WhatsApp.',
    texto: 'Un asistente que responde, cotiza y agenda solo, a cualquier hora.',
  },
  {
    titulo: 'Sistemas a la medida.',
    texto:
      'Historias clínicas, inventarios, reservas. Software suyo, sin mensualidades eternas.',
  },
  {
    titulo: 'Tareas repetitivas.',
    texto: 'Lo que hoy alguien hace copiando y pegando, lo hace el sistema.',
  },
  {
    titulo: 'Documentación y contratos.',
    texto:
      'Propuestas, contratos de desarrollo y respaldo legal, con criterio jurídico.',
  },
];

export default function Solucion() {
  return (
    <section id="solucion" className="bloque">
      <div className="lienzo">
        <h2 className="text-d1 max-w-[20ch]">
          Un prisma no crea la luz. La ordena.
        </h2>

        <p className="text-guia text-gris medida mt-8">
          En una o dos sesiones recorremos su operación, encontramos dónde se
          está yendo el dinero y salimos con un plan que usted puede ejecutar
          con nosotros o sin nosotros.
        </p>

        <ol className={`${estilos.secuencia} mt-12 md:mt-14`}>
          {fases.map((f) => (
            <li key={f.n} className={estilos.fase}>
              <p className="text-menudo text-azul font-semibold">{f.n}</p>
              <h3 className="text-d3 mt-1">{f.titulo}</h3>
              <p className="text-cuerpo text-gris mt-3">{f.texto}</p>
            </li>
          ))}
        </ol>

        {/* La pieza que más autoridad genera: el entregable real. */}
        <div className="filete mt-16 pt-14 md:mt-20 md:pt-16">
          <h3 className="text-d2 max-w-[24ch]">
            Al terminar no le entregamos un informe bonito. Le entregamos un
            plan que puede ejecutar.
          </h3>

          <p className="text-cuerpo text-gris medida mt-6">
            Cada cuello de botella de su operación queda escrito con nombre
            propio, explicado en palabras normales y resuelto paso a paso. Va
            incluido en cualquiera de los planes. Para cada uno usted recibe:
          </p>

          <dl className="mt-10">
            {entregas.map((e, i) => (
              <div
                key={e.titulo}
                className="filete gap-x-10 py-5 md:grid md:grid-cols-[minmax(0,26ch)_1fr]"
              >
                <dt className="font-semibold">
                  <span className="text-azul cifra mr-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {e.titulo}
                </dt>
                <dd className="text-gris mt-1 md:mt-0">{e.texto}</dd>
              </div>
            ))}
          </dl>

          <p className="text-cuerpo text-gris medida mt-10">
            Con ese documento en la mano puede implementarlo con nosotros, con
            otro proveedor, o con su propio equipo. Es suyo.
          </p>

          {/* Ejemplo real anonimizado, presentado como una ficha del informe.
              Es el único lugar del sitio donde algo parece un documento. */}
          <article className="border-azul bg-perla mt-12 max-w-[760px] border-l-2 px-7 py-8 md:px-10 md:py-10">
            <h4 className="text-d3">
              Cuello de botella 02 — Reservas fuera de horario
            </h4>

            <div className="text-cuerpo mt-6 space-y-4">
              <p>
                <em className="text-gris">El problema:</em> después de las 8
                p.m. nadie responde el WhatsApp del restaurante. Los mensajes se
                acumulan y al día siguiente ya es tarde para muchos.
              </p>
              <p>
                <em className="text-gris">Cuánto cuesta hoy:</em> 38 reservas
                perdidas al mes, en promedio.
              </p>
              <p>
                <em className="text-gris">La solución:</em> 1) Conectamos el
                WhatsApp del negocio a un asistente. 2) Le cargamos el menú, los
                horarios y las reglas de reserva. 3) El asistente confirma la
                mesa y la escribe directo en la agenda. 4) Si el caso es raro,
                avisa a una persona.
              </p>
              <p>
                <em className="text-gris">Tiempo que se recupera:</em> 14 horas
                al mes del equipo de sala.
              </p>
              <p>
                <em className="text-gris">Inversión:</em> cotizada aparte,
                precio cerrado.
              </p>
            </div>
          </article>
        </div>

        <div className="filete mt-16 pt-14 md:mt-20 md:pt-16">
          <h3 className="text-d2">Qué podemos construir</h3>

          <div className="mt-8 grid gap-x-16 md:grid-cols-2">
            {automatizaciones.map((a) => (
              <div key={a.titulo} className="filete text-cuerpo py-5">
                <span className="font-semibold">{a.titulo}</span>{' '}
                <span className="text-gris">{a.texto}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
