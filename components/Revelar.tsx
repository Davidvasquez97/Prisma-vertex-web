'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Añade la clase `visible` cuando el contenido entra en pantalla, una sola vez.
 *
 * Es el único componente de cliente del sitio. Usa un listener de scroll
 * pasivo que se da de baja a sí mismo en cuanto dispara: más barato que un
 * IntersectionObserver por elemento y sin nada que limpiar después.
 *
 * `retraso` escalona la entrada de varias piezas hermanas. Se aplica como
 * delay de la transición, no con un temporizador, así `prefers-reduced-motion`
 * lo anula junto con todo lo demás.
 */
export default function Revelar({
  className = '',
  retraso = 0,
  children,
}: {
  className?: string;
  retraso?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo) return;

    const mira = () => {
      const r = nodo.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88 && r.bottom > 0) {
        setVisible(true);
        window.removeEventListener('scroll', mira);
        window.removeEventListener('resize', mira);
      }
    };

    window.addEventListener('scroll', mira, { passive: true });
    window.addEventListener('resize', mira, { passive: true });
    mira();

    return () => {
      window.removeEventListener('scroll', mira);
      window.removeEventListener('resize', mira);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`aparece ${className} ${visible ? 'visible' : ''}`}
      style={retraso ? { transitionDelay: `${retraso}ms` } : undefined}
    >
      {children}
    </div>
  );
}
