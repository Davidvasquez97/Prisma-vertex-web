import Hero from '@/components/Hero';
import LoQueGanas from '@/components/LoQueGanas';
import Calculadora from '@/components/Calculadora';
import Proceso from '@/components/Proceso';
import Resultados from '@/components/Resultados';
import Garantia from '@/components/Garantia';
import Precios from '@/components/Precios';
import Faq from '@/components/Faq';
import Equipo from '@/components/Equipo';
import Cierre from '@/components/Cierre';
import Entrada from '@/components/Entrada';
import { PREGUNTAS } from '@/lib/contenido';
import { metaDe } from '@/lib/seo';

export const metadata = metaDe({
  titulo: 'Consultoría en automatización e IA',
  descripcion:
    'Consultoría en automatización e inteligencia artificial para empresas en Colombia. Ganas más tiempo y más dinero optimizando tus procesos.',
  ruta: '/',
});

/* Las mismas preguntas que se ven en el acordeón, para Google. */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PREGUNTAS.map((q) => ({
    '@type': 'Question',
    name: q.p,
    acceptedAnswer: { '@type': 'Answer', text: q.r },
  })),
};

/*
 * El orden cuenta una historia de venta:
 * la promesa → lo que ganas → cuánto estás perdiendo hoy (calculadora) →
 * cómo lo hacemos → pruebas → garantía → precio → objeciones al precio
 * (preguntas, justo después) → quiénes somos → cierre.
 */
export default function Inicio() {
  return (
    <>
      <Entrada />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <LoQueGanas />
      <Calculadora />
      <Proceso />
      <Resultados />
      <Garantia />
      <Precios />
      <Faq />
      <Equipo />
      <Cierre />
    </>
  );
}
