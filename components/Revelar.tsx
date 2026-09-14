'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Añade la clase `visible` cuando el contenido entra en pantalla, una sola vez.
 * Es el único componente de cliente del sitio y existe para un solo propósito:
 * disparar el pulso del circuito de sectores cuando el visitante lo ve, no
 * antes. No hay fade-up ni animación de entrada en ninguna otra parte.
 */
export default function Revelar({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo) return;

    const mira = () => {
      const r = nodo.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85 && r.bottom > 0) {
        setVisible(true);
        window.removeEventListener('scroll', mira);
      }
    };

    window.addEventListener('scroll', mira, { passive: true });
    mira();
    return () => window.removeEventListener('scroll', mira);
  }, []);

  return (
    <div ref={ref} className={`${className} ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}
