import Boton from '@/components/Boton';
import { metaDe } from '@/lib/seo';

export const metadata = metaDe({
  titulo: 'Página no encontrada',
  descripcion: 'Esta dirección no existe. Te llevamos de vuelta al inicio.',
  ruta: '/404',
});

export default function NoEncontrada() {
  return (
    <section className="bloque">
      <div className="lienzo">
        <p className="text-menudo cifra text-azul font-semibold">404</p>
        <h1 className="text-d1 mt-4 max-w-[26ch]">Esta página no existe.</h1>
        <p className="text-guia text-gris medida mt-6">
          Puede que el enlace esté viejo o mal escrito. Lo que buscas
          probablemente esté acá.
        </p>

        <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Boton href="/" variante="linea">
            Volver al inicio
          </Boton>
          <Boton href="/diagnostico" variante="solido">
            Quiero mi diagnóstico
          </Boton>
        </div>
      </div>
    </section>
  );
}
