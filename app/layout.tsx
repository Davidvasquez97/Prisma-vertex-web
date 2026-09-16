import type { Metadata } from 'next';
import localFont from 'next/font/local';
import {
  CONTACTO,
  GOOGLE_SEARCH_CONSOLE,
  MODO_VISTA_PREVIA,
  SITE,
} from '@/lib/config';
import AvisoVistaPrevia from '@/components/AvisoVistaPrevia';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const archivo = localFont({
  src: './fonts/archivo-var.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-archivo',
  // Archivo variable trae eje de ancho; sin esto el navegador no lo expone.
  declarations: [{ prop: 'font-stretch', value: '62% 125%' }],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.dominio),
  title: 'Consultoría de procesos empresariales | Prisma Vertex',
  description:
    'Consultoría que te ayuda a ganar más tiempo y dinero optimizando tus procesos. Popayán, Colombia.',
  icons: {
    icon: '/favicon.svg',
    apple: '/img/icono-180.png',
  },
  ...(GOOGLE_SEARCH_CONSOLE
    ? { verification: { google: GOOGLE_SEARCH_CONSOLE } }
    : {}),
};

/* Ficha del negocio para Google. Sin jerga: lo que hacemos, dicho como lo
   diría un cliente. */
const negocio = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE.dominio}/#negocio`,
  name: SITE.nombre,
  description:
    'Consultoría que ayuda a empresas medianas y grandes a ganar más tiempo y dinero optimizando sus procesos.',
  url: SITE.dominio,
  image: `${SITE.dominio}/img/og.jpg`,
  logo: `${SITE.dominio}/img/og.jpg`,
  email: CONTACTO.correo,
  telephone: `+${CONTACTO.whatsapp}`,
  areaServed: [
    { '@type': 'City', name: 'Popayán' },
    { '@type': 'City', name: 'Bogotá' },
    { '@type': 'Country', name: 'Colombia' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.ciudad,
    addressRegion: SITE.departamento,
    addressCountry: 'CO',
  },
  knowsAbout: [
    'Optimización de procesos',
    'Consultoría de procesos empresariales',
    'Automatización de tareas repetitivas',
    'Medición de productividad',
  ],
  sameAs: [CONTACTO.instagram, ...(CONTACTO.linkedin ? [CONTACTO.linkedin] : [])],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO" className={archivo.variable}>
      <head>
        {/* Sin JavaScript nada queda escondido: las entradas por scroll se
            muestran ya colocadas. */}
        <noscript>
          <style>{`.aparece{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(negocio) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:bg-azul focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        {MODO_VISTA_PREVIA && <AvisoVistaPrevia />}
        <Nav />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
