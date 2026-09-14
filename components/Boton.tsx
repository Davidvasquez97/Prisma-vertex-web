import { MODO_VISTA_PREVIA } from '@/lib/config';

type Variante = 'solido' | 'linea' | 'claro';

const clases: Record<Variante, string> = {
  solido: 'boton-solido',
  linea: 'boton-linea',
  claro: 'boton-claro',
};

/**
 * Un botón que, en modo vista previa, se dibuja igual pero no lleva a ningún
 * lado. Así la maqueta se puede mostrar sin ofrecer canales de contacto.
 */
export default function Boton({
  href,
  variante = 'linea',
  externo = true,
  className = '',
  children,
}: {
  href: string;
  variante?: Variante;
  externo?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const base = `boton ${clases[variante]} ${className}`;

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
    <a
      href={href}
      className={base}
      {...(externo ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {children}
    </a>
  );
}
