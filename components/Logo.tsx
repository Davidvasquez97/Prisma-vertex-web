import Image from 'next/image';
import marca from '@/assets/logo-marca.jpg';

/**
 * Lockup de Prisma Vertex: la pirámide original de la marca junto al nombre
 * compuesto en Archivo con el eje de ancho abierto, que es lo que rima con el
 * logotipo.
 *
 * La pirámide es un JPG con fondo blanco puro y se mezcla con `multiply`: sobre
 * blanco y sobre perla el fondo desaparece por completo, sin necesidad de PNG
 * con transparencia (que pesaría diez veces más).
 */
export default function Logo({
  conTexto = true,
  alto = 30,
}: {
  conTexto?: boolean;
  alto?: number;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src={marca}
        alt=""
        height={alto}
        width={Math.round((alto * 478) / 372)}
        priority
        className="mix-blend-multiply"
        style={{ height: alto, width: 'auto' }}
      />
      {conTexto && (
        <span
          className="text-[0.875rem] font-semibold whitespace-nowrap uppercase sm:text-[0.9375rem]"
          style={{ fontVariationSettings: "'wdth' 115", letterSpacing: '0.13em' }}
        >
          Prisma Vertex
        </span>
      )}
    </span>
  );
}
