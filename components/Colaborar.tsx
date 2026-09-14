import Image from 'next/image';
import foto from '@/assets/equipo-prisma.jpg';
import Faq from './Faq';
import Planes from './Planes';
import { CONTACTO, MENSAJES, wa } from '@/lib/config';

const proyectos = [
  {
    titulo: 'Restaurante de alta cocina, Popayán',
    texto: 'Reservas con asistente de IA en WhatsApp, sin ampliar el equipo de sala.',
  },
  {
    titulo: 'Consultorio odontológico',
    texto: 'Historia clínica digital. Reemplazó cuadernos y hojas sueltas.',
  },
  {
    titulo: 'Centro de imagenología',
    texto: 'IA diagnóstica y contrato de desarrollo a la medida.',
  },
];

export default function Colaborar() {
  return (
    <section id="colaborar" className="bloque bg-perla">
      <div className="lienzo">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
          <Image
            src={foto}
            alt="David Vásquez y Juan David Chaves sosteniendo un prisma de vidrio atravesado por un haz de luz."
            sizes="(min-width: 768px) 40vw, 100vw"
            placeholder="blur"
            className="h-auto w-full"
          />

          <div>
            <h2 className="text-d1">Quiénes estamos detrás</h2>

            <div className="text-guia text-gris medida mt-7 space-y-5">
              <p>
                Somos David Vásquez y Juan David Chaves. Fundamos Prisma Vertex
                porque nos cansamos de ver negocios buenos frenados por procesos
                malos.
              </p>
              <p>
                David viene del derecho; Juan David, del desarrollo. Esa mezcla
                nos obligó a entender primero cómo funciona un negocio de verdad
                —con sus contratos, su gente y sus costos— y solo después traer
                tecnología. Hoy dirigimos un equipo de cuatro personas que
                diseña e implementa sistemas a la medida para empresas del
                Cauca.
              </p>
            </div>

            <div className="mt-10">
              {proyectos.map((p) => (
                <div key={p.titulo} className="filete text-cuerpo py-4">
                  <span className="font-semibold">{p.titulo}</span>{' '}
                  <span className="text-gris">{p.texto}</span>
                </div>
              ))}
              <p className="text-menudo text-gris mt-5">
                Los nombres de nuestros clientes se comparten en la primera
                conversación, con su autorización.
              </p>
            </div>
          </div>
        </div>

        <Planes />

        <Faq />

        <div className="filete mt-16 flex flex-col items-center pt-14 text-center md:mt-20 md:pt-20">
          <h3 className="text-d1 max-w-[18ch]">Hablemos de su operación.</h3>

          <p className="text-guia text-gris mt-6 max-w-[54ch]">
            Una conversación de treinta minutos alcanza para saber si tenemos
            algo que aportarle. Si no lo tenemos, se lo decimos.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={wa(MENSAJES.diagnostico)}
              target="_blank"
              rel="noopener"
              className="boton boton-solido"
            >
              Quiero mi diagnóstico
            </a>
            <a href={`mailto:${CONTACTO.correo}`} className="boton boton-linea">
              Escribir por correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
