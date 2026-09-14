# Sitio web Prisma Vertex

Astro + Tailwind CSS. Sitio estático, sin frameworks de UI ni librerías de animación.

## Comandos

```bash
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ para revisar el build
```

## Pendiente antes de publicar

1. **Datos de contacto.** Están centralizados en `src/config.ts`. Hay que
   reemplazar las cuatro líneas marcadas con `← REEMPLAZAR`: número de WhatsApp,
   número visible, correo e Instagram. El dominio final va en `SITE.dominio` y
   también en `astro.config.mjs` (campo `site`) y en `public/robots.txt`.
2. **Foto del equipo.** `src/assets/equipo-prisma.jpg` es un marcador. Hay que
   sobrescribirlo con la foto real, en JPG o PNG, cuadrada y de al menos 900px
   de lado. Astro la convierte sola a WebP en tres tamaños.
3. **Imagen para compartir.** `public/img/og.jpg` (1200×630) está generada con el
   prisma redibujado. Se puede reemplazar por una hecha con el logo original.
4. **Textos legales.** `src/pages/terminos.astro` y `src/pages/privacidad.astro`
   son borradores construidos sobre la Ley 1581 de 2012 y el Decreto 1377 de
   2013. Necesitan revisión de David antes de publicarse.

## Cómo está armado

- `src/config.ts` — datos de contacto, mensajes prellenados de WhatsApp y
  sectores. Es el único archivo que hay que tocar para cambiar datos.
- `src/styles/tokens.css` — color, tipografía, escala, espaciado y los
  componentes base (`.lienzo`, `.seccion`, `.boton`, `.filete`).
- `src/layouts/Base.astro` — `<head>`, SEO, Open Graph y JSON-LD
  `ProfessionalService`.
- `src/components/` — una sección por archivo, en el orden del brief.

### Decisiones que conviene conocer

- **El espectro aparece una sola vez**, en el hero. Por eso el prisma del nav y
  del pie va monocromo: si el lockup llevara el arcoíris, el espectro aparecería
  tres veces en la página.
- **El haz del hero es CSS, no SVG.** Va anclado al costado izquierdo del
  prisma y se extiende `100vw` hacia la izquierda, así entra siempre por el
  borde de la pantalla sin importar el ancho del navegador.
- **El acordeón de preguntas usa `<details>` nativo**: cero JavaScript. Eso deja
  el presupuesto libre para lo único que sí lo necesita, el pulso del circuito
  de sectores (~230 bytes, diferidos).
- **`prefers-reduced-motion`** deja el espectro ya formado y el circuito sin
  pulso.

## Despliegue en Vercel

El proyecto no necesita configuración especial: Vercel detecta Astro solo.

1. Subir el repositorio a GitHub.
2. En Vercel, *New Project* → importar el repositorio.
3. Framework Preset: **Astro**. Build: `npm run build`. Output: `dist`.
4. Después de conectar el dominio, actualizar `site` en `astro.config.mjs`,
   `SITE.dominio` en `src/config.ts` y la línea `Sitemap:` de
   `public/robots.txt`, y volver a desplegar.
