import Boton from '@/components/Boton';
import CasoDestacado from '@/components/CasoDestacado';
import Revelar from '@/components/Revelar';
import { CASOS } from '@/lib/contenido';
import { metaDe, migasJsonLd } from '@/lib/seo';

export const metadata = metaDe({
  titulo: 'Casos de éxito en el sector salud',
  descripcion:
    'Casos de éxito de Prisma Vertex: el sistema de gestión y el turnero de Panorex Radiología Oral y el gestor de historias clínicas de Lucas Vázquez.',
  ruta: '/casos',
});

const migas = migasJsonLd([{ nombre: 'Casos', ruta: '/casos' }]);

export default function Casos() {
  return (
    <section className="bloque">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migas) }}
      />

      <div className="lienzo">
        <h1 className="text-d1">Casos de éxito</h1>
        <p className="text-guia text-gris medida mt-6">
          Lo que construimos con nuestros clientes y lo que cambió en su día a día.
        </p>

        <div className="mt-11 grid gap-6 md:mt-14 md:gap-8">
          {CASOS.map((c, i) => (
            <Revelar key={c.id} retraso={i * 80}>
              <CasoDestacado caso={c} completo Titulo="h2" enlaceNicho />
            </Revelar>
          ))}
        </div>

        <div className="mt-10">
          <Boton href="/diagnostico" variante="calma">
            Quiero mi diagnóstico
          </Boton>
        </div>
      </div>
    </section>
  );
}
