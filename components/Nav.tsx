import Logo from './Logo';
import { MENSAJES, wa } from '@/lib/config';

const enlaces = [
  { texto: 'El problema', href: '#problema' },
  { texto: 'Qué recibe', href: '#solucion' },
  { texto: 'Planes', href: '#planes' },
];

export default function Nav() {
  return (
    <header className="border-linea border-b">
      <nav
        className="lienzo flex h-[68px] items-center justify-between gap-6"
        aria-label="Principal"
      >
        <a href="#contenido" className="text-tinta" aria-label="Prisma Vertex, inicio">
          <Logo />
        </a>

        <ul className="text-menudo text-gris hidden items-center gap-8 md:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a href={e.href} className="hover:text-tinta transition-colors">
                {e.texto}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={wa(MENSAJES.general)}
          target="_blank"
          rel="noopener"
          className="boton boton-linea text-menudo text-azul sm:border-linea sm:text-tinta shrink-0 border-transparent px-0 py-2 sm:px-4"
        >
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">Agendar por WhatsApp</span>
        </a>
      </nav>
    </header>
  );
}
