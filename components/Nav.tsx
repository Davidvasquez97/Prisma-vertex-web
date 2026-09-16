import Link from 'next/link';
import Logo from './Logo';

/* Tres enlaces en escritorio. En celular no hay menú: la página es corta y
   lo único que tiene que estar siempre a la vista es el botón. */
const enlaces = [
  { texto: 'Lo que ganas', href: '/#lo-que-ganas' },
  { texto: 'Cómo trabajamos', href: '/#como-trabajamos' },
  { texto: 'Casos', href: '/casos' },
];

export default function Nav() {
  return (
    <header className="encabezado">
      <nav
        className="lienzo flex h-[68px] items-center justify-between gap-5"
        aria-label="Principal"
      >
        <Link href="/" className="text-tinta" aria-label="Prisma Vertex, ir al inicio">
          <Logo />
        </Link>

        <ul className="text-menudo text-gris hidden items-center gap-8 md:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link href={e.href} className="hover:text-tinta transition-colors">
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/diagnostico"
          className="boton boton-solido boton-pequeno shrink-0"
        >
          Diagnóstico
        </Link>
      </nav>
    </header>
  );
}
