/**
 * Marcador visible de dato que falta.
 *
 * Existe para que ningún número inventado se cuele en la página: mientras
 * David no entregue la cifra real, el sitio dice en voz alta que falta, en
 * vez de rellenar con algo verosímil.
 */
export default function Pendiente({ children }: { children: React.ReactNode }) {
  return (
    <span className="pendiente">
      <span className="text-azul font-semibold">PENDIENTE:</span> {children}
    </span>
  );
}
