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

## Modo vista previa

El sitio se publica hoy como **maqueta, sin ofrecer servicios**. Eso lo controla
una sola línea en `lib/config.ts`:

```ts
export const MODO_VISTA_PREVIA = true;
```

Con el interruptor en `true`:

- Aparece una franja arriba que dice que la página está en construcción.
- Todos los botones de contacto se dibujan igual pero quedan inertes: en el HTML
  no hay ni un solo enlace a `wa.me` ni a `mailto:`.
- El correo, el WhatsApp y el Instagram del pie se muestran como texto, no como
  enlaces.
- La página se marca `noindex`, así Google no la lista.

**Para lanzarlo de verdad**, cambie esa línea a `false` y haga `git push`. Todo
vuelve a funcionar solo; no hay que tocar ningún componente.

## Pendiente antes de publicar

1. **Instagram y dominio**, en `lib/config.ts`. Están marcados con
   `← REEMPLAZAR`. Al cambiar el dominio, `sitemap.ts` y `robots.ts` se
   actualizan solos porque leen de ahí.
2. **Quitar el modo vista previa** cuando el dominio esté conectado.
3. **Textos legales.** `app/terminos/` y `app/privacidad/` son borradores
   construidos sobre la Ley 1581 de 2012 y el Decreto 1377 de 2013. Necesitan
   revisión de David antes de publicarse.
4. **Imagen para compartir.** `public/img/og.jpg` se genera a partir del logo
   real; se puede reemplazar por una diseñada aparte.

## Las imágenes de la marca

- `assets/logo-marca.jpg` — la pirámide del logo, recortada del lockup original
  y con el punto blanco subido para que el fondo quede blanco puro. Se muestra
  con `mix-blend-mode: multiply`, así el fondo desaparece sobre blanco y sobre
  perla sin necesidad de un PNG con transparencia (que pesaría diez veces más).
  Aparece en el nav, en el pie y en el apartado de Instagram.
- `assets/equipo-prisma.jpg` — la foto de David y Juan David, recortada para
  quitarle el texto "PRISMA VERTEX" que venía incrustado abajo: el sitio ya dice
  el nombre justo al lado y repetirlo restaba.
- El nombre del lockup va compuesto en Archivo, no como imagen, para que se vea
  nítido a cualquier tamaño y en cualquier pantalla.

## Decisiones de diseño que conviene conocer

- **El espectro grande aparece una sola vez**, en el hero. La pirámide del logo
  lleva su propia refracción, pero a 30px de alto no se lee como arcoíris sino
  como un brillo: por eso puede repetirse en el nav, en el pie y en el apartado
  de Instagram sin competir con el hero. El brief pedía espectro único; esta es
  la interpretación que respeta la marca real.
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
