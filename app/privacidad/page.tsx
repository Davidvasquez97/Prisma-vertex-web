// BORRADOR LEGAL — pendiente de revisión por David Vásquez antes de publicar.
// Redactado sobre la Ley 1581 de 2012 y el Decreto 1377 de 2013.
import type { Metadata } from 'next';
import { CONTACTO, SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Política de privacidad — Prisma Vertex',
  description:
    'Política de tratamiento de datos personales de Prisma Vertex, conforme a la Ley 1581 de 2012.',
  alternates: { canonical: '/privacidad' },
};

const ACTUALIZADO = '13 de septiembre de 2026';

const apartados = [
  {
    titulo: '2. Qué datos recogemos',
    texto:
      'Este sitio no usa formularios ni cookies de analítica o publicidad. Solo tratamos los datos que usted nos entrega voluntariamente cuando nos escribe por WhatsApp o por correo: su nombre, su número de teléfono, su correo electrónico y la información sobre su negocio que decida compartir en la conversación.',
  },
  {
    titulo: '3. Para qué los usamos',
    texto:
      'Para responder su solicitud, agendar y prestar la consultoría, elaborar los documentos contratados, emitir la facturación correspondiente y mantener el contacto comercial. No vendemos, arrendamos ni compartimos sus datos con terceros para fines publicitarios.',
  },
  {
    titulo: '5. Conservación y seguridad',
    texto:
      'Conservamos los datos mientras dure la relación comercial y durante el término necesario para cumplir las obligaciones legales y contables aplicables. Adoptamos medidas técnicas y administrativas razonables para proteger la información contra acceso o uso no autorizado.',
  },
  {
    titulo: '6. Servicios de terceros',
    texto:
      'Las conversaciones iniciadas desde este sitio se realizan a través de WhatsApp, servicio operado por un tercero y sujeto a sus propias políticas de privacidad. El alojamiento del sitio está a cargo de un proveedor de infraestructura que puede registrar datos técnicos de la conexión, como la dirección IP, con fines de seguridad y disponibilidad.',
  },
  {
    titulo: '7. Cambios',
    texto:
      'Cualquier cambio en esta política se publicará en esta misma página con la fecha de actualización correspondiente.',
  },
];

export default function Privacidad() {
  return (
    <section className="bloque">
      <div className="lienzo max-w-[68ch]">
        <h1 className="text-d1">Política de privacidad</h1>
        <p className="text-menudo text-gris mt-4">
          Última actualización: {ACTUALIZADO}
        </p>

        <div className="text-cuerpo mt-10 space-y-8">
          <div>
            <h2 className="text-d3">1. Responsable del tratamiento</h2>
            <p className="text-gris mt-3">
              {SITE.nombre}, con domicilio en {CONTACTO.ciudad},{' '}
              {CONTACTO.departamento}, {CONTACTO.pais}, correo{' '}
              <a href={`mailto:${CONTACTO.correo}`} className="text-azul">
                {CONTACTO.correo}
              </a>
              , es responsable del tratamiento de los datos personales
              recolectados a través de este sitio y de los canales de contacto
              asociados.
            </p>
          </div>

          {apartados.slice(0, 2).map((a) => (
            <div key={a.titulo}>
              <h2 className="text-d3">{a.titulo}</h2>
              <p className="text-gris mt-3">{a.texto}</p>
            </div>
          ))}

          <div>
            <h2 className="text-d3">4. Sus derechos</h2>
            <p className="text-gris mt-3">
              Conforme a la Ley 1581 de 2012, usted puede conocer, actualizar y
              rectificar sus datos personales; solicitar prueba de la
              autorización otorgada; ser informado sobre el uso que se ha dado a
              sus datos; presentar quejas ante la Superintendencia de Industria
              y Comercio; y revocar la autorización o solicitar la supresión de
              sus datos cuando no exista un deber legal o contractual que lo
              impida.
            </p>
            <p className="text-gris mt-3">
              Para ejercer cualquiera de estos derechos, escriba a{' '}
              <a href={`mailto:${CONTACTO.correo}`} className="text-azul">
                {CONTACTO.correo}
              </a>
              . Respondemos las consultas en un plazo máximo de diez días
              hábiles y los reclamos en un plazo máximo de quince días hábiles.
            </p>
          </div>

          {apartados.slice(2).map((a) => (
            <div key={a.titulo}>
              <h2 className="text-d3">{a.titulo}</h2>
              <p className="text-gris mt-3">{a.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
