import Link from 'next/link';
import FormularioDiagnostico from '@/components/FormularioDiagnostico';
import Revelar from '@/components/Revelar';
import { GARANTIA, PASOS } from '@/lib/contenido';
import { metaDe, migasJsonLd } from '@/lib/seo';

export const metadata = metaDe({
  titulo: 'Agenda tu diagnóstico empresarial',
  descripcion:
    'Cuéntanos qué le quita tiempo a tu equipo y te mostramos dónde se va tu dinero. Si no encontramos cómo ahorrarte, no pagas.',
  ruta: '/diagnostico',
});

const migas = migasJsonLd([{ nombre: 'Diagnóstico', ruta: '/diagnostico' }]);

export default function Diagnostico() {
  return (
    <section className="bloque">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migas) }}
      />

      <div className="lienzo">
        <div className="grid gap-12 md:grid-cols-[1fr_0.85fr] md:gap-16">
          <div>
            <h1 className="text-d1">Agenda tu diagnóstico</h1>
            <p className="text-guia text-gris medida mt-6">
              Cuatro datos y te escribimos. No hay compromiso ni cobro por
              conversar.
            </p>

            <div className="mt-10">
              <FormularioDiagnostico />
            </div>
          </div>

          <Revelar>
            <aside className="md:sticky md:top-28">
              <div className="bg-hondo rounded-xl px-6 py-8 md:px-8">
                <p className="text-d3 text-white">{GARANTIA.titulo}</p>
                <p className="text-cuerpo mt-3 text-white/75">{GARANTIA.texto}</p>
              </div>

              <div className="filete mt-8 pt-8">
                <p className="text-menudo font-semibold">Qué pasa después</p>
                <ol className="mt-4 space-y-4">
                  {PASOS.map((p, i) => (
                    <li key={p.titulo} className="flex gap-3">
                      <span className="text-menudo cifra text-azul font-semibold">
                        0{i + 1}
                      </span>
                      <span className="text-cuerpo">
                        <span className="font-semibold">{p.titulo}:</span>{' '}
                        <span className="text-gris">{p.texto}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="text-menudo text-gris mt-8">
                ¿Quieres ver resultados antes de escribirnos?{' '}
                <Link href="/casos" className="text-azul underline underline-offset-4">
                  Mira los casos
                </Link>
                .
              </p>
            </aside>
          </Revelar>
        </div>
      </div>
    </section>
  );
}
