// BORRADOR LEGAL — pendiente de revisión por David Vásquez antes de publicar.
import type { Metadata } from 'next';
import { CONTACTO, SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Términos y condiciones — Prisma Vertex',
  description:
    'Términos y condiciones de los servicios de consultoría y desarrollo de Prisma Vertex.',
  alternates: { canonical: '/terminos' },
};

const ACTUALIZADO = '13 de septiembre de 2026';

const apartados = [
  {
    titulo: '1. Quiénes somos',
    texto: `${SITE.nombre} presta servicios de consultoría en optimización de procesos, desarrollo de software a la medida, automatizaciones e implementación de agentes de inteligencia artificial, con domicilio en ${CONTACTO.ciudad}, ${CONTACTO.departamento}, ${CONTACTO.pais}.`,
  },
  {
    titulo: '2. Alcance de la consultoría',
    texto:
      'Las horas indicadas en cada plan corresponden al tiempo de sesión con el cliente. El análisis posterior y la elaboración de los documentos están incluidos en el precio del plan y se entregan entre una y dos semanas después de la sesión, según el tamaño de la operación. La implementación de las soluciones se cotiza por separado y se rige por un contrato independiente.',
  },
  {
    titulo: '3. Precios y pagos',
    texto:
      'Los precios publicados están expresados en dólares de los Estados Unidos y se facturan según la tasa de cambio vigente al momento del pago. El pago de la consultoría se realiza antes de la sesión, salvo acuerdo escrito distinto.',
  },
  {
    titulo: '4. Garantías',
    texto: `Si del diagnóstico no resulta ninguna oportunidad de ahorro de tiempo o dinero para el cliente, no se cobra la consultoría. Si una solución implementada por ${SITE.nombre} no resulta rentable para el cliente en los términos acordados por escrito antes de la implementación, tampoco se cobra dicha implementación. Estas garantías no cubren costos de terceros, licencias ni servicios contratados directamente por el cliente.`,
  },
  {
    titulo: '5. Propiedad de los entregables',
    texto: `Los documentos entregados al finalizar la consultoría son del cliente, quien puede ejecutarlos con ${SITE.nombre}, con otro proveedor o con su propio equipo. La titularidad del software desarrollado se define en el contrato de implementación correspondiente.`,
  },
  {
    titulo: '6. Confidencialidad',
    texto: `Toda la información del negocio a la que ${SITE.nombre} acceda durante el diagnóstico o la implementación es confidencial. Los nombres de los clientes solo se divulgan con autorización previa y expresa.`,
  },
  {
    id: 'aviso',
    titulo: '7. Aviso legal',
    texto:
      'El contenido de este sitio es informativo y no constituye una oferta comercial vinculante ni asesoría jurídica, contable o financiera. Los resultados descritos en los ejemplos corresponden a casos concretos y no garantizan resultados equivalentes en otras operaciones.',
  },
  {
    titulo: '8. Ley aplicable',
    texto: `Estos términos se rigen por la legislación de la República de Colombia. Cualquier controversia se someterá a los jueces competentes de ${CONTACTO.ciudad}, ${CONTACTO.departamento}.`,
  },
];

export default function Terminos() {
  return (
    <section className="bloque">
      <div className="lienzo max-w-[68ch]">
        <h1 className="text-d1">Términos y condiciones</h1>
        <p className="text-menudo text-gris mt-4">
          Última actualización: {ACTUALIZADO}
        </p>

        <div className="text-cuerpo mt-10 space-y-8">
          {apartados.map((a) => (
            <div key={a.titulo} id={a.id}>
              <h2 className="text-d3">{a.titulo}</h2>
              <p className="text-gris mt-3">{a.texto}</p>
            </div>
          ))}

          <div>
            <h2 className="text-d3">9. Contacto</h2>
            <p className="text-gris mt-3">
              Para cualquier consulta sobre estos términos, escríbanos a{' '}
              <a href={`mailto:${CONTACTO.correo}`} className="text-azul">
                {CONTACTO.correo}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
