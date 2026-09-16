import Link from 'next/link';
import { MODO_VISTA_PREVIA } from '@/lib/config';

type Variante = 'solido' | 'linea' | 'claro' | 'galaxia' | 'calma' | 'suave';

const clases: Record<Variante, string> = {
  solido: 'boton-solido',
  linea: 'boton-linea',
  claro: 'boton-claro',
  galaxia: 'boton-galaxia',
  calma: 'boton-calma',
  suave: 'boton-suave',
};

/**
 * Botón del sitio.
 *
 * La navegación interna (rutas que empiezan por «/» o por «#») funciona
 * siempre: recorrer el sitio no es contratar nada. Lo que el modo vista
 * previa apaga son los canales de contacto —WhatsApp, correo, redes—, que
 * se dibujan igual pero quedan inertes.
 */
export default function Boton({
  href,
  variante = 'linea',
  className = '',
  children,
}: {
  href: string;
  variante?: Variante;
  className?: string;
  children: React.ReactNode;
}) {
  const base = `boton ${clases[variante]} ${className}`;
  const interno = href.startsWith('/') || href.startsWith('#');

  if (interno) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  if (MODO_VISTA_PREVIA) {
    return (
      <button
        type="button"
        disabled
        title="Se habilita cuando el sitio salga a su dominio definitivo"
        className={`${base} boton-espera`}
      >
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={base} target="_blank" rel="noopener">
      {children}
    </a>
  );
}
