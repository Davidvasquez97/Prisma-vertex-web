import PaginaNicho from '@/components/PaginaNicho';
import { nichoPorSlug } from '@/lib/contenido';
import { metaDe } from '@/lib/seo';

/* Todo el contenido de esta página vive en NICHOS, en lib/contenido.ts. */
const nicho = nichoPorSlug('clinicas-esteticas');

export const metadata = metaDe({
  titulo: nicho.meta.titulo,
  descripcion: nicho.meta.descripcion,
  ruta: nicho.ruta,
});

export default function ClinicasEsteticas() {
  return <PaginaNicho nicho={nicho} />;
}
