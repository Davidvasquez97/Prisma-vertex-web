import estilos from './Faq.module.css';

const preguntas = [
  {
    p: '¿Tengo que cambiar los programas que ya uso?',
    r: 'Casi nunca. Preferimos conectar lo que ya tiene antes que reemplazarlo. Cambiar todo es caro y su equipo lo resiente.',
  },
  {
    p: '¿Esto sirve para un negocio pequeño?',
    r: 'Sí. De hecho es donde más se nota, porque cada hora que se libera es una hora de alguien que hace tres cosas a la vez.',
  },
  {
    p: '¿Qué diferencia hay entre el Plan Básico y el Pro?',
    r: 'Los entregables son los mismos. Lo que cambia es cuánto de su negocio revisamos: el Básico se enfoca en un área o proceso puntual, el Pro cubre toda la operación. En ambos casos los documentos se entregan entre una y dos semanas después de la sesión.',
  },
  {
    p: '¿Mi equipo va a tener que aprender algo complicado?',
    r: 'No. Si una solución necesita capacitación larga, es que está mal diseñada. Entregamos las cosas funcionando y acompañamos los primeros 60 días.',
  },
  {
    p: '¿Van a reemplazar a mi gente?',
    r: 'No es la idea. Automatizamos tareas repetitivas para que su gente haga lo que una máquina no puede: vender, atender bien y resolver.',
  },
  {
    p: '¿Atienden fuera de Popayán?',
    r: 'Sí. El diagnóstico presencial lo hacemos en el Cauca; el resto del país lo atendemos de forma remota.',
  },
];

export default function Faq() {
  return (
    <div id="preguntas" className="filete mt-16 pt-14 md:mt-20 md:pt-16">
      <h3 className="text-d2">Preguntas frecuentes</h3>

      <div className="mt-8 max-w-[820px]">
        {preguntas.map((q) => (
          <details key={q.p} className={`${estilos.acordeon} filete`}>
            <summary>
              <span className="text-d3 leading-snug">{q.p}</span>
              <span className={estilos.signo} aria-hidden="true" />
            </summary>
            <p className="text-cuerpo text-gris pr-10 pb-6">{q.r}</p>
          </details>
        ))}
        <div className="filete" />
      </div>
    </div>
  );
}
