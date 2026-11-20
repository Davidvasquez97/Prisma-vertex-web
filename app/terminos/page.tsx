// Términos y condiciones.
// Redactados sobre la Ley 1480 de 2011 (Estatuto del Consumidor: arts. 26,
// 29, 30, 47 y 50), la Ley 527 de 1999 (mensajes de datos) y la Ley 2300 de
// 2023. Se escriben como si el cliente pudiera ser consumidor, porque una
// clínica que compra consultoría podría serlo. ← REVISAR con un abogado.
// La garantía (plazo de 30 días, ahorros a 12 meses, devolución en 15 días)
// la aprobó David el 12 de noviembre de 2026.
import Link from 'next/link';
import { Apartado, Correo, Identidad, Lista } from '@/components/Legal';
import { CONTACTO, EMPRESA, SITE, VERSION_LEGAL } from '@/lib/config';
import { metaDe, migasJsonLd } from '@/lib/seo';

export const metadata = metaDe({
  titulo: 'Términos y condiciones',
  descripcion:
    'Condiciones bajo las que Prisma Vertex presta sus servicios: precios, pagos, garantía, retracto, entregables, confidencialidad y reclamos.',
  ruta: '/terminos',
});

const migas = migasJsonLd([{ nombre: 'Términos', ruta: '/terminos' }]);

const SIC = (
  <a
    href="https://www.sic.gov.co"
    target="_blank"
    rel="noopener"
    className="text-azul underline underline-offset-4"
  >
    Superintendencia de Industria y Comercio
  </a>
);

export default function Terminos() {
  const n = SITE.nombre;

  return (
    <section className="bloque">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migas) }}
      />
      <div className="lienzo max-w-[68ch]">
        <h1 className="text-d1">Términos y condiciones</h1>
        <p className="text-menudo text-gris mt-4">Vigentes desde el {VERSION_LEGAL}.</p>

        <div className="text-cuerpo mt-10 space-y-9">
          <Apartado titulo="1. Quiénes somos">
            <Identidad />
            <p>
              Prestamos servicios de consultoría en procesos, desarrollo de software
              a la medida, automatizaciones e implementación de soluciones con
              inteligencia artificial. La autoridad de protección al consumidor en
              Colombia es la {SIC}.
            </p>
          </Apartado>

          <Apartado titulo="2. Uso de este sitio">
            <p>
              Los textos, diseños, logos e imágenes de este sitio son de {n} o de
              quienes nos autorizaron a usarlos, y no se pueden copiar ni usar con
              fines comerciales sin permiso. La calculadora da estimaciones
              orientativas con los valores que usted mueve; no es una cotización.
            </p>
          </Apartado>

          <Apartado titulo="3. El diagnóstico y su alcance">
            <p>
              Las horas de cada plan son el tiempo de sesión con usted. El análisis
              y el informe están incluidos en el precio y se entregan entre una y
              dos semanas después de la sesión, según el tamaño de la operación.
              El informe incluye las oportunidades encontradas, cuánto estimamos
              que valen y la propuesta de solución con su cotización.
            </p>
            <p>
              La implementación de las soluciones se cotiza aparte y se rige por
              un contrato propio, que define alcance, plazos, precio y propiedad
              del software.
            </p>
          </Apartado>

          <Apartado id="precios" titulo="4. Precios y pagos">
            <p>
              El precio que publicamos es el precio final en pesos colombianos:
              no se le suma nada al pagar. El valor en dólares aparece solo como
              referencia. Antes de pagar le confirmamos el valor por escrito.
            </p>
            <p>
              {EMPRESA.responsableIva
                ? 'Somos responsables del IVA: el precio publicado ya lo incluye y le entregamos factura electrónica.'
                : 'Prestamos el servicio como persona natural no responsable del IVA (artículo 437 del Estatuto Tributario), por eso nuestros precios no llevan IVA. Le entregamos el documento de cobro y el soporte de pago que corresponden a ese régimen.'}
            </p>
            <p>
              El diagnóstico se paga antes de la sesión, por transferencia o por el
              medio que acordemos, salvo que pactemos otra cosa por escrito.
            </p>
          </Apartado>

          <Apartado id="garantia" titulo="5. Garantía de devolución">
            <p>
              Si el diagnóstico no encuentra oportunidades de ahorro cuyo valor
              estimado en los primeros 12 meses supere lo que usted pagó por él,{' '}
              {n} le devuelve el 100 % de ese pago.
            </p>
            <Lista
              items={[
                'Cómo se mide: el informe del diagnóstico dice, por escrito, cuánto vale cada oportunidad y con qué supuestos lo calculamos (horas ahorradas por su costo, ingresos recuperados o costos evitados). Esos supuestos los revisamos con usted.',
                'Plazo para pedirla: hasta 30 días calendario después de recibir el informe, escribiendo a nuestro correo o WhatsApp.',
                'Si no estamos de acuerdo en el cálculo, lo revisamos juntos con los mismos supuestos del informe.',
                'Devolución: dentro de los 15 días calendario siguientes a su solicitud, por el mismo medio con que pagó.',
                'Si contrata la implementación, lo que pagó por el diagnóstico se descuenta de ella.',
                'La garantía cubre el precio del diagnóstico. No cubre costos de terceros, licencias ni servicios que usted contrate directamente.',
              ]}
            />
          </Apartado>

          <Apartado titulo="6. Derecho de retracto">
            <p>
              Si contrató a distancia (por este sitio, WhatsApp o correo), puede
              retractarse dentro de los 5 días hábiles siguientes a la contratación,
              siempre que la sesión del diagnóstico no haya empezado con su
              acuerdo. Le devolvemos todo lo pagado en máximo 30 días calendario.
            </p>
          </Apartado>

          <Apartado titulo="7. Cambios de fecha y cancelaciones">
            <p>
              Puede cambiar la fecha de la sesión sin costo avisando con al menos
              24 horas de anticipación. Si nosotros necesitamos moverla, le
              ofrecemos una nueva fecha o le devolvemos lo pagado, como usted
              prefiera.
            </p>
          </Apartado>

          <Apartado titulo="8. Entregables">
            <p>
              Los documentos del diagnóstico son suyos: puede ejecutarlos con {n},
              con otro proveedor o con su propio equipo. La propiedad del software
              desarrollado se define en el contrato de implementación.
            </p>
          </Apartado>

          <Apartado titulo="9. Confidencialidad y datos de pacientes">
            <p>
              Toda la información de su negocio que conozcamos durante el
              diagnóstico o la implementación es confidencial. Si para instalar un
              sistema necesitamos acceder a datos de sus pacientes, firmamos antes
              un contrato de transmisión de datos: usted sigue siendo el
              responsable y nosotros solo los tratamos según sus instrucciones. Más
              detalles en la{' '}
              <Link href="/politica-de-datos" className="text-azul underline underline-offset-4">
                política de datos
              </Link>
              .
            </p>
          </Apartado>

          <Apartado titulo="10. Casos de éxito">
            <p>
              Solo publicamos el nombre, el logo y los resultados de un cliente con
              su autorización escrita. Los resultados de cada caso son de esa
              empresa y no garantizan resultados iguales en otras.
            </p>
          </Apartado>

          <Apartado titulo="11. Inteligencia artificial">
            <p>
              Los agentes de WhatsApp y las automatizaciones con inteligencia
              artificial que instalamos se presentan ante sus usuarios como
              asistentes automáticos, no como personas. Usted revisa y aprueba su
              configuración antes de ponerlos en marcha.
            </p>
          </Apartado>

          <Apartado titulo="12. Responsabilidad">
            <p>
              Respondemos por los servicios que prestamos hasta por el valor pagado
              por ellos, salvo dolo o culpa grave y sin perjuicio de los derechos
              que la ley le reconoce como consumidor, que no se pueden renunciar.
            </p>
          </Apartado>

          <Apartado titulo="13. Acuerdos por WhatsApp o correo">
            <p>
              Las cotizaciones, aceptaciones y acuerdos que hagamos por WhatsApp o
              por correo valen como mensajes de datos (Ley 527 de 1999). Guardamos
              copia de ellos.
            </p>
          </Apartado>

          <Apartado id="pqr" titulo="14. Peticiones, quejas y reclamos">
            <p>
              Escríbanos a <Correo /> o al WhatsApp {CONTACTO.whatsappVisible}.
              Respondemos en máximo 15 días hábiles. Si no queda satisfecho, puede
              acudir a la {SIC}.
            </p>
          </Apartado>

          <Apartado titulo="15. Ley aplicable">
            <p>
              Estos términos se rigen por las leyes de Colombia. Si hay una
              controversia, primero buscamos resolverla directamente con usted.
              Nada de lo dicho aquí limita su derecho a acudir a la
              Superintendencia de Industria y Comercio o a los jueces que la ley
              señale.
            </p>
          </Apartado>
        </div>
      </div>
    </section>
  );
}
