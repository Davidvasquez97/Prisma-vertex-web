# Sitio web Prisma Vertex

**Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4.**
Todas las rutas se generan estáticas en el build. Publicado en Vercel.

## Comandos

```bash
npm run dev      # servidor local en http://localhost:3000
npm run build    # build de producción
npm start        # sirve el build para revisarlo
```

## Cómo cambiar cosas sin tocar componentes

| Qué quieres cambiar | Archivo |
| --- | --- |
| WhatsApp, correo, Instagram, LinkedIn, ciudad | `lib/config.ts` |
| Dominio final | `lib/config.ts` → `SITE.dominio` |
| Apagar el modo vista previa | `lib/config.ts` → `MODO_VISTA_PREVIA` |
| Destino del formulario | `lib/config.ts` → `FORMULARIO_ENDPOINT` |
| Textos de los siete bloques del inicio | `lib/contenido.ts` |
| Preguntas frecuentes | `lib/contenido.ts` → `PREGUNTAS` |
| Cifras de resultados | `lib/contenido.ts` → `RESULTADOS` |
| Casos publicados | `lib/contenido.ts` → `CASOS` |
| Foto del equipo, logo | `assets/` |
| Artículos del blog | `contenido/blog/*.md` |

Las preguntas frecuentes viven en un solo sitio a propósito: de ahí salen el
acordeón que se ve y la ficha que lee Google. No pueden desincronizarse.

## Estructura

```
app/
  layout.tsx        <head>, fuente autoalojada, ficha del negocio para Google
  page.tsx          el inicio: siete bloques
  diagnostico/      formulario
  casos/            plantilla de casos
  consultoria-procesos-popayan/  y  -bogota/   versiones locales
  blog/             lista y  blog/[slug]/  artículo
  terminos/  politica-de-datos/               borradores legales
  not-found.tsx     404 con salida al inicio y al diagnóstico
  sitemap.ts  robots.ts
components/
  Hero  LoQueGanas  Resultados  Proceso  Garantia  Faq  Cierre
  Nav  Footer  Logo  Boton  Pendiente  Iconos  PaginaCiudad
  FormularioDiagnostico   el formulario, con validación
  Revelar                 el único componente de cliente del sitio
lib/
  config.ts     datos de contacto, interruptores, lista de pendientes
  contenido.ts  los textos del inicio
  seo.ts        metadatos y migas de pan
  blog.ts       lee los .md de contenido/blog
contenido/blog/  artículos en Markdown (hoy vacío)
_respaldo-astro/ la versión anterior en Astro, por si hace falta consultarla
```

## Modo vista previa

El sitio se publica hoy como **maqueta, sin ofrecer servicios**. Lo controla
una sola línea en `lib/config.ts`:

```ts
export const MODO_VISTA_PREVIA = true;
```

Con el interruptor en `true`:

- Aparece una franja arriba que dice que la página está en construcción.
- **La navegación interna funciona completa**: se puede recorrer todo el sitio.
- Los canales de contacto no: en el HTML publicado no hay ni un `wa.me` ni un
  `mailto:`. El correo, el WhatsApp y el Instagram del pie son texto plano.
- El formulario se dibuja entero pero no envía, y lo dice antes de que alguien
  se tome el trabajo de llenarlo.
- `robots.txt` no deja rastrear nada y las páginas van con `noindex`.

**Para lanzarlo de verdad**: cambiar esa línea a `false` y `git push`. No hay
que tocar ningún componente.

## Pendiente antes de publicar

1. **Cifras de los dos resultados del inicio** — `lib/contenido.ts`.
2. **Casos completos** — `lib/contenido.ts` → `CASOS`. En cuanto haya uno,
   `/casos` deja de mostrar la plantilla.
3. **Tiempos reales de implementación** — segunda pregunta del acordeón.
4. **URL de LinkedIn** y **usuario real de Instagram** — `lib/config.ts`.
5. **Destino del formulario** — `FORMULARIO_ENDPOINT` en `lib/config.ts`. Con
   un endpoint de Formspree basta: el formulario ya envía JSON por POST.
6. **Revisión legal** de `/terminos` y `/politica-de-datos` por David.
   Son borradores sobre la Ley 1581 de 2012 y el Decreto 1377 de 2013.
7. **Código de verificación de Google Search Console** — `lib/config.ts`.
8. **Dominio propio**, y con él apagar el modo vista previa.
9. **Logo en SVG.** Hoy es un JPG con fondo blanco que se muestra con
   `mix-blend-mode: multiply`.

Todos están listados también en `PENDIENTES`, dentro de `lib/config.ts`.

## Medición

Lighthouse móvil, build de producción, con el modo vista previa apagado:

| | |
| --- | --- |
| Rendimiento | 99 |
| Accesibilidad | 100 |
| Buenas prácticas | 100 |
| SEO | 100 |
| LCP | 2,1 s |
| CLS | 0 |

Con el modo vista previa encendido el SEO baja a 69, y es correcto que baje:
la única auditoría que falla es «la página está bloqueada para indexación»,
que es justo lo que pedimos mientras sea una maqueta.

## Decisiones de diseño que conviene conocer

- **Un solo gesto de movimiento en todo el sitio**: subir 16 px y aparecer,
  0,62 s. Sin zoom, sin giros, sin rebotes. El único momento propio es el
  hero, donde una línea gris se abre en espectro: es lo que hace un prisma,
  dicho sin explicarlo.
- **Todo se apaga con `prefers-reduced-motion`**, y nada queda escondido: lo
  que entra con scroll se muestra ya colocado. Sin JavaScript, igual.
- **El acordeón usa `<details>` nativo**: sin estado de React.
- **Un solo componente de cliente**, `Revelar`. Escucha el scroll de forma
  pasiva y se da de baja en cuanto dispara.
- **Los emoji del brief se cambiaron por iconos de línea.** Dicen lo mismo,
  pesan 300 bytes y no se leen como plantilla.
- **La foto del equipo es la imagen principal del hero**, con prioridad de
  carga. Es la única imagen real del sitio y sirve de «quiénes somos».
- **No hay precios.** La garantía nueva —pago ligado a resultados— los
  contradecía. Están en el historial de git si hay que recuperarlos.

## Las imágenes de la marca

- `assets/logo-marca.jpg` — la pirámide, recortada del lockup original y con
  el punto blanco subido. Se muestra con `mix-blend-mode: multiply`: el fondo
  desaparece sin necesidad de un PNG con transparencia.
- `assets/equipo-prisma.jpg` — David y Juan David, recortada para quitarle el
  texto incrustado abajo.
- El nombre va compuesto en Archivo, no como imagen, para que se vea nítido a
  cualquier tamaño.

## Publicar

El proyecto está enlazado con Vercel (`david-vasquez-97/prisma-vertex`) y con
el repositorio de GitHub. Hay dos caminos y los dos sirven:

```bash
git push                        # Vercel publica solo
npx vercel@latest --prod --yes  # publicar desde esta carpeta, sin pasar por GitHub
```

Al conectar el dominio propio, actualizar `SITE.dominio` en `lib/config.ts`:
el sitemap, el robots, las canónicas y las tarjetas de Open Graph leen de ahí.
