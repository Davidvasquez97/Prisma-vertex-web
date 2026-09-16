import Hero from '@/components/Hero';
import LoQueGanas from '@/components/LoQueGanas';
import Resultados from '@/components/Resultados';
import Proceso from '@/components/Proceso';
import Garantia from '@/components/Garantia';
import Faq from '@/components/Faq';
import Cierre from '@/components/Cierre';
import { PREGUNTAS } from '@/lib/contenido';
import { metaDe } from '@/lib/seo';

export const metadata = metaDe({
  titulo: 'Consultoría de procesos empresariales',
  descripcion:
    'Consultoría que te ayuda a ganar más tiempo y dinero optimizando tus procesos. Diagnóstico sin riesgo: si no encontramos cómo ahorrarte, no pagas.',
  ruta: '/',
});

/* Las mismas cuatro preguntas que se ven en el acordeón, para Google. */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PREGUNTAS.map((q) => ({
    '@type': 'Question',
    name: q.p,
    acceptedAnswer: { '@type': 'Answer', text: q.r },
  })),
};

export default function Inicio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <LoQueGanas />
      <Resultados />
      <Proceso />
      <Garantia />
      <Faq />
      <Cierre />
    </>
  );
}
