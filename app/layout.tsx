import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { CONTACTO, MODO_VISTA_PREVIA, SITE } from '@/lib/config';
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
  title: SITE.titulo,
  description: SITE.descripcion,
  alternates: { canonical: '/' },
  // Mientras sea una maqueta no tiene sentido que Google la indexe.
  robots: MODO_VISTA_PREVIA ? { index: false, follow: false } : undefined,
  openGraph: {
    type: 'website',
    siteName: SITE.nombre,
    locale: 'es_CO',
    title: SITE.titulo,
    description: SITE.descripcion,
    url: SITE.dominio,
    images: [{ url: '/img/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.titulo,
    description: SITE.descripcion,
    images: ['/img/og.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/img/icono-180.png',
  },
};

const datosEstructurados = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE.nombre,
  description: SITE.descripcion,
  url: SITE.dominio,
  image: `${SITE.dominio}/img/og.jpg`,
  email: CONTACTO.correo,
  telephone: `+${CONTACTO.whatsapp}`,
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Cauca' },
    { '@type': 'Country', name: 'Colombia' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: CONTACTO.ciudad,
    addressRegion: CONTACTO.departamento,
    addressCountry: 'CO',
  },
  knowsAbout: [
    'Optimización de procesos',
    'Automatización de procesos',
    'Agentes de inteligencia artificial',
    'Desarrollo de software a la medida',
  ],
  sameAs: [CONTACTO.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO" className={archivo.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-azul focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <AvisoVistaPrevia />
        <Nav />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
