# Sitio web Prisma Vertex

**Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4.**
Todas las rutas se generan estáticas en el build. Despliegue pensado para Vercel.

## Comandos

```bash
npm run dev      # servidor local en http://localhost:3000
npm run build    # build de producción
npm start        # sirve el build para revisarlo
```

## Estructura

```
app/
  layout.tsx        <head>, SEO, Open Graph, JSON-LD, fuente autoalojada
  page.tsx          la portada: cuatro bloques
  globals.css       tokens de color, tipografía, escala y componentes base
  fonts/            Archivo variable en .woff2
  terminos/         y privacidad/ — borradores legales
  sitemap.ts        y robots.ts — generados por Next
components/
  Hero.tsx          bloque 1 — el gancho, la refracción y los seis sectores
  Problema.tsx      bloque 2 — qué le está costando hoy
  Solucion.tsx      bloque 3 — el método, el entregable y la ficha de ejemplo
  Colaborar.tsx     bloque 4 — quiénes somos, planes, garantías, preguntas, cierre
  Planes.tsx  Faq.tsx  Nav.tsx  Footer.tsx  Logo.tsx
  Revelar.tsx       el único componente de cliente de todo el sitio
lib/
  config.ts         datos de contacto y mensajes de WhatsApp
  circuito.ts       geometría del circuito de sectores
_respaldo-astro/    la versión anterior en Astro, por si hace falta consultarla
```

## Pendiente antes de publicar

1. **Foto del equipo.** `assets/equipo-prisma.jpg` es un marcador. Sobrescríbalo
   con la foto real (cuadrada, mínimo 900px de lado). Next la convierte sola a
   WebP en varios tamaños y calcula el desenfoque de carga.
2. **Instagram y dominio**, en `lib/config.ts`. Están marcados con
   `← REEMPLAZAR`. Al cambiar el dominio, `sitemap.ts` y `robots.ts` se
   actualizan solos porque leen de ahí.
3. **Textos legales.** `app/terminos/` y `app/privacidad/` son borradores
   construidos sobre la Ley 1581 de 2012 y el Decreto 1377 de 2013. Necesitan
   revisión de David antes de publicarse.
4. **Imagen para compartir.** `public/img/og.jpg` está generada con el prisma
   redibujado; se puede reemplazar por una hecha con el logo original.

## Decisiones de diseño que conviene conocer

- **El espectro aparece una sola vez**, en el hero. Por eso el prisma del nav y
  del pie va monocromo: si el lockup llevara el arcoíris, el espectro aparecería
  tres veces en la misma página.
- **El haz del hero es CSS, no SVG.** Va anclado al costado izquierdo del prisma
  y se extiende `100vw` hacia la izquierda, así entra siempre por el borde de la
  pantalla sin importar el ancho del navegador.
- **El acordeón de preguntas usa `<details>` nativo**: sin estado de React y sin
  JavaScript propio.
- **Un solo componente de cliente**, `Revelar`, y existe para una sola cosa:
  disparar el pulso del circuito cuando entra en pantalla. No hay animación de
  entrada en ninguna otra sección; eso es deliberado.
- **`prefers-reduced-motion`** deja el espectro ya formado y el circuito sin
  pulso.

## Despliegue en Vercel

1. Subir el repositorio a GitHub.
2. En Vercel, *New Project* → importar el repositorio. Detecta Next.js solo.
3. Después de conectar el dominio, actualizar `SITE.dominio` en `lib/config.ts`
   y volver a desplegar.
