import Link from 'next/link';
import Logo from './Logo';

/* Cinco enlaces, desde 1024 px: entre 768 y 1024 no caben junto al logo y
   el botón. En pantallas menores no hay menú: lo único que tiene que estar
   siempre a la vista es el botón. «Otros sectores» va solo en el pie, para
   no recargar el menú. */
const enlaces = [
  { texto: 'Especialidades', href: '/#especialidades' },
  { texto: 'Calculadora', href: '/#calculadora' },
  { texto: 'Cómo trabajamos', href: '/#como-trabajamos' },
  { texto: 'Precios', href: '/#precios' },
  { texto: 'Casos', href: '/casos' },
];

export default function Nav() {
  return (
    <header className="encabezado">
      <nav
        className="lienzo flex h-[68px] items-center justify-between gap-5"
        aria-label="Principal"
      >
        <Link href="/" className="text-tinta flex min-h-[44px] items-center"
          aria-label="Prisma Vertex, ir al inicio">
          <Logo />
        </Link>

        <ul className="text-menudo text-gris hidden items-center gap-7 lg:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link href={e.href} className="hover:text-tinta inline-block py-2 transition-colors">
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/diagnostico"
          className="boton boton-calma boton-pequeno shrink-0"
        >
          Diagnóstico
        </Link>
      </nav>
    </header>
  );
}
