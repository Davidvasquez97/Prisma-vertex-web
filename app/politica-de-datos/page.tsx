// Política de tratamiento de datos personales.
// Redactada sobre la Ley 1581 de 2012 y el Decreto 1377 de 2013 (hoy en el
// Decreto 1074 de 2015, arts. 2.2.2.25.*), con los contenidos mínimos del
// art. 13 del Decreto 1377. ← REVISAR con un abogado antes de lanzar.
// Lo que se dice de cookies y almacenamiento se verificó el 12 de noviembre
// de 2026: el sitio no crea cookies ni llama a servicios externos.
import Link from 'next/link';
import { Apartado, Correo, Identidad, Lista } from '@/components/Legal';
import { ALOJAMIENTO, ANALITICA_ACTIVA, CONTACTO, EMPRESA, SITE, VERSION_LEGAL } from '@/lib/config';
import { metaDe, migasJsonLd } from '@/lib/seo';

export const metadata = metaDe({
  titulo: 'Política de tratamiento de datos',
  descripcion:
    'Cómo trata Prisma Vertex los datos personales que recibe por este sitio, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.',
  ruta: '/politica-de-datos',
});

const migas = migasJsonLd([{ nombre: 'Política de datos', ruta: '/politica-de-datos' }]);

const correo = <Correo />;

export default function PoliticaDeDatos() {
  return (
    <section className="bloque">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migas) }}
      />
      <div className="lienzo max-w-[68ch]">
        <h1 className="text-d1">Política de tratamiento de datos personales</h1>
        <p className="text-menudo text-gris mt-4">
          Vigente desde el {VERSION_LEGAL}. Esta es la versión que acepta quien
          envía el formulario de diagnóstico.
        </p>

        <div className="text-cuerpo mt-10 space-y-9">
          <Apartado titulo="1. Quién es el responsable">
            <Identidad />
            <p>
              Somos responsables de los datos personales que recibimos por este
              sitio ({SITE.dominio.replace('https://', '')}) y por los canales de
              contacto que aparecen en él.
            </p>
          </Apartado>

          <Apartado titulo="2. Qué datos tratamos">
            <Lista
              items={[
                'Los que usted escribe en el formulario de diagnóstico: nombre, empresa, número de WhatsApp y la descripción de lo que le quita tiempo a su equipo.',
                'Los que comparta al escribirnos por WhatsApp o por correo, y los que necesitemos para contratar y facturar si se vuelve cliente.',
                'Datos técnicos de la conexión, como la dirección IP, que el servicio de alojamiento registra por seguridad.',
              ]}
            />
            <p>
              <span className="text-tinta font-semibold">
                Por favor no incluya datos de pacientes ni información de salud
              </span>{' '}
              en el formulario ni en el primer mensaje: no los necesitamos para
              el diagnóstico. Si llega a incluirlos, entregarlos es facultativo y
              los eliminaremos.
            </p>
            <p>
              Este sitio está dirigido a empresas y a sus representantes. No
              recogemos a sabiendas datos de niños, niñas ni adolescentes.
            </p>
          </Apartado>

          <Apartado titulo="3. Para qué los usamos">
            <Lista
              items={[
                'Responder su solicitud y agendar la llamada o el diagnóstico.',
                'Hacer el diagnóstico, preparar la propuesta y su cotización.',
                'Contratar, facturar y cumplir nuestras obligaciones legales y contables.',
                'Enviarle información de nuestros servicios. Puede pedirnos que no lo hagamos más en cualquier momento.',
                'Proteger el sitio contra usos indebidos.',
              ]}
            />
            <p>
              No vendemos, arrendamos ni entregamos sus datos a terceros para
              publicidad.
            </p>
          </Apartado>

          <Apartado titulo="4. Su autorización">
            <p>
              Usted nos autoriza al marcar la casilla del formulario. Al enviarlo,
              el mensaje que recibimos por WhatsApp incluye la aceptación de esta
              política con su fecha de versión: así queda constancia de cuándo y
              cómo la dio. Nunca entendemos el silencio como autorización.
            </p>
          </Apartado>

          <Apartado titulo="5. Sus derechos">
            <p>Conforme al artículo 8 de la Ley 1581 de 2012, usted puede:</p>
            <Lista
              items={[
                'Conocer, actualizar y rectificar sus datos.',
                'Pedir prueba de la autorización que nos dio.',
                'Saber qué uso le hemos dado a sus datos.',
                'Revocar la autorización o pedir que borremos sus datos, cuando no haya un deber legal o contractual de conservarlos.',
                'Consultar sus datos de forma gratuita.',
                'Presentar quejas ante la Superintendencia de Industria y Comercio, después de haber acudido primero a nosotros.',
              ]}
            />
          </Apartado>

          <Apartado id="consultas" titulo="6. Cómo ejercerlos">
            <p>
              Escríbanos a {correo} o al WhatsApp {CONTACTO.whatsappVisible}. Atiende
              estas solicitudes {EMPRESA.responsableDatos}. Incluya su nombre, su
              número de identificación, qué pide y cómo le respondemos.
            </p>
            <Lista
              items={[
                <>
                  <span className="text-tinta font-semibold">Consultas</span> (qué
                  datos tenemos y cómo los usamos): respondemos en máximo 10 días
                  hábiles. Si no alcanzamos, le avisamos el motivo y respondemos en
                  máximo 5 días hábiles más.
                </>,
                <>
                  <span className="text-tinta font-semibold">Reclamos</span>{' '}
                  (corregir, actualizar o borrar, o un incumplimiento): respondemos
                  en máximo 15 días hábiles, prorrogables 8 más avisándole. Si falta
                  información, se la pedimos dentro de los 5 días siguientes; si no
                  llega en 2 meses, entendemos que desistió. Mientras se resuelve,
                  marcamos el dato como «reclamo en trámite».
                </>,
              ]}
            />
          </Apartado>

          <Apartado titulo="7. Quién nos ayuda a tratarlos">
            <p>
              Usamos proveedores que guardan o transportan los datos por nosotros,
              como encargados. Están en Estados Unidos y en la Unión Europea, que
              la Superintendencia de Industria y Comercio reconoce con un nivel
              adecuado de protección.
              Sus contratos de procesamiento de datos los obligan a seguir nuestras
              instrucciones, a proteger la información y a guardar
              confidencialidad (artículo 25 del Decreto 1377 de 2013 y Circular
              Externa 003 de 2025 de la SIC):
            </p>
            <Lista
              items={[
                `${ALOJAMIENTO}: aloja este sitio.`,
                'Cloudflare: administra el dominio y protege el sitio contra ataques; ve los datos técnicos de cada visita, como la dirección IP.',
                'WhatsApp (Meta): el formulario y nuestras conversaciones pasan por WhatsApp, sujeto también a sus propias políticas de privacidad.',
                'Google (Gmail): recibe los correos que nos escribe.',
              ]}
            />
            <p>Si sumamos otro proveedor, lo informaremos aquí antes de usarlo.</p>
          </Apartado>

          <Apartado id="cookies" titulo="8. Cookies y almacenamiento en su navegador">
            <p>
              <span className="text-tinta font-semibold">Este sitio no usa cookies</span>{' '}
              ni herramientas de publicidad o de seguimiento de terceros (como Google
              Analytics o el píxel de Meta). Por eso no le mostramos un aviso de
              cookies.
            </p>
            <p>
              Solo guardamos una marca técnica en el almacenamiento de la pestaña
              (sessionStorage), llamada <code className="text-tinta">pv-entrada</code>,
              para que la animación de entrada no se repita mientras navega. No lo
              identifica y se borra sola al cerrar la pestaña.
            </p>
            <p>
              {ANALITICA_ACTIVA
                ? 'Para saber qué páginas se visitan usamos Vercel Web Analytics, que no usa cookies: cuenta visitas de forma agregada (página, país, navegador y tipo de dispositivo) y no permite identificarlo.'
                : 'Si más adelante medimos las visitas, usaremos una herramienta que no use cookies y solo cuente visitas de forma agregada, y la nombraremos aquí antes de activarla.'}{' '}
              La calculadora funciona en su propio navegador: las cifras que mueve
              no se envían a ningún lado.
            </p>
            <p>
              Si algún día usamos cookies que no sean estrictamente necesarias, le
              pediremos su autorización antes de activarlas.
            </p>
          </Apartado>

          <Apartado titulo="9. Cuánto tiempo los guardamos">
            <Lista
              items={[
                'Solicitudes que no terminan en contrato: hasta 12 meses después del último contacto.',
                'Clientes: mientras dure la relación y, después, el tiempo que exigen las normas contables y tributarias para los documentos de soporte.',
              ]}
            />
            <p>
              Protegemos la información con medidas técnicas y administrativas
              razonables contra el acceso, el uso o la pérdida no autorizados.
            </p>
          </Apartado>

          <Apartado titulo="10. Datos de los pacientes de nuestros clientes">
            <p>
              Cuando instalamos sistemas en centros de salud podemos tener acceso a
              datos de sus pacientes. En ese caso el centro es el responsable y
              nosotros actuamos como encargados: solo tratamos esos datos según sus
              instrucciones, con un contrato de transmisión de datos firmado,
              guardando la reserva de la historia clínica y sin usarlos para nada
              más.
            </p>
          </Apartado>

          <Apartado titulo="11. Cómo y cuándo lo contactamos">
            <p>
              Le respondemos por el canal que usted eligió. Los mensajes de
              seguimiento comercial los enviamos de lunes a viernes de 7:00 a. m. a
              7:00 p. m. y los sábados de 8:00 a. m. a 3:00 p. m., nunca en
              domingos ni festivos, y como máximo una vez al día (Ley 2300 de 2023).
              Basta con que nos diga «no quiero más mensajes» para dejar de
              enviarlos.
            </p>
          </Apartado>

          <Apartado titulo="12. Cambios y vigencia">
            <p>
              Si cambiamos algo importante de esta política, se lo avisaremos por
              el canal que tengamos registrado antes de aplicarlo, y publicaremos
              aquí la nueva versión con su fecha. Esta política rige desde el{' '}
              {VERSION_LEGAL}, y las bases de datos se mantienen mientras la
              empresa esté en operación.
            </p>
            <p>
              Consulte también nuestros{' '}
              <Link href="/terminos" className="text-azul underline underline-offset-4">
                términos y condiciones
              </Link>
              .
            </p>
          </Apartado>
        </div>
      </div>
    </section>
  );
}
