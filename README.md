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
| WhatsApp, correo, Instagram, LinkedIn de la empresa | `lib/config.ts` → `CONTACTO` |
| Dominio final | `lib/config.ts` → `SITE.dominio` |
| Apagar el modo vista previa | `lib/config.ts` → `MODO_VISTA_PREVIA` |
| Encender la analítica | `lib/config.ts` → `ANALITICA_ACTIVA` |
| Tasa dólar a pesos de los precios | `lib/config.ts` → `TASA_COP` |
| Destino del formulario | `lib/config.ts` → `FORMULARIO_ENDPOINT` |
| Textos del inicio | `lib/contenido.ts` |
| Precios, planes y llamada inicial | `lib/contenido.ts` → `PLANES`, `LLAMADA_INICIAL` |
| Garantía | `lib/contenido.ts` → `GARANTIA` |
| Supuestos de la calculadora | `lib/contenido.ts` → `CALCULADORA` |
| Preguntas frecuentes | `lib/contenido.ts` → `PREGUNTAS` |
| Cifras de resultados | `lib/contenido.ts` → `RESULTADOS` |
| Casos publicados | `lib/contenido.ts` → `CASOS` |
| Equipo, cargos y LinkedIn de cada uno | `lib/contenido.ts` → `EQUIPO` |
| Fotos y logo | `assets/` |
| Artículos del blog | `contenido/blog/*.md` |

Las preguntas frecuentes viven en un solo sitio a propósito: de ahí salen el
acordeón que se ve y la ficha que lee Google. No pueden desincronizarse.

## El inicio, en orden

El orden cuenta una historia de venta: la promesa → lo que ganas → cuánto
estás perdiendo hoy → cómo lo hacemos → pruebas → garantía → precio → las
objeciones al precio → quiénes somos → cierre.

| Sección | Componente |
| --- | --- |
| Entrada animada (una vez por visita) | `Entrada` |
| Titular, foto del equipo | `Hero` |
| Lo que ganas | `LoQueGanas` |
| Calculadora de cuánto pierde la empresa | `Calculadora` |
| Cómo trabajamos y con qué | `Proceso`, `Herramientas` |
| Resultados | `Resultados` |
| Garantía | `Garantia` |
| Precios | `Precios`, `Billetes` |
| Preguntas frecuentes | `Faq` |
| Las personas detrás | `Equipo` |
| Cierre | `Cierre` |

## Estructura

```
app/
  layout.tsx        <head>, fuente, ficha del negocio para Google, WhatsApp, analítica
  page.tsx          el inicio
  diagnostico/      formulario
  casos/            plantilla de casos
  consultoria-procesos-popayan/  y  -bogota/   versiones locales
  blog/             lista y  blog/[slug]/  artículo
  terminos/  politica-de-datos/               borradores legales
  not-found.tsx     404 con salida al inicio y al diagnóstico
  sitemap.ts  robots.ts
components/         un archivo por sección, más Nav, Footer, Logo, Boton…
  Calculadora           componente de cliente: responde al mover las barras
  FormularioDiagnostico componente de cliente: valida el formulario
  Revelar               componente de cliente: las entradas al hacer scroll
  WhatsappFlotante      botón flotante, solo cuando el sitio está lanzado
lib/
  config.ts     datos de contacto, interruptores, tasa, lista de pendientes
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
- **La navegación interna funciona completa**, calculadora incluida.
- Los canales de contacto no: en el HTML publicado no hay ni un `wa.me` ni un
  `mailto:`. El pie muestra el correo, el WhatsApp y el Instagram como texto;
  el botón flotante de WhatsApp y los LinkedIn del equipo no aparecen.
- El formulario se dibuja entero pero no envía, y lo dice antes de que alguien
  se tome el trabajo de llenarlo.
- `robots.txt` no deja rastrear nada y las páginas van con `noindex`.

**Para lanzarlo de verdad**: cambiar esa línea a `false` y `git push`. No hay
que tocar ningún componente.

## Pendiente antes de publicar

Tres son compromisos públicos con dinero de por medio y necesitan la
aprobación de David y Juan David: la garantía, los precios y los términos.

1. **Aprobar la garantía**: devolución del 100 % si el diagnóstico no encuentra
   ahorros mayores a lo pagado. Falta definir el plazo para pedirla
   (`app/terminos/page.tsx` lo marca).
2. **Aprobar los precios**: USD 95 y USD 190 (antes 65 y 120).
3. **Revisión legal** de `/terminos` y `/politica-de-datos`. Son borradores
   sobre la Ley 1581 de 2012 y el Decreto 1377 de 2013.
4. **Casos con cifras** — `lib/contenido.ts` → `CASOS`, y las dos cifras de
   `RESULTADOS`. Hay una plantilla para recolectarlos en el estudio de mercado.
5. **Confirmar la ortografía de los apellidos.** El sitio usa Vásquez y
   Chaves, como el brief y el usuario de GitHub; en los mensajes aparecen
   también Vázquez y Chávez.
6. **LinkedIn** de la empresa y de cada integrante.
7. **Activar Web Analytics** en el panel de Vercel y después poner
   `ANALITICA_ACTIVA` en `true`. Antes de activarla, su script da 404.
8. **Destino del formulario** — `FORMULARIO_ENDPOINT`. Con un endpoint de
   Formspree basta: el formulario ya envía JSON por POST.
9. **Tiempos reales de implementación** — segunda pregunta del acordeón.
10. **Código de verificación de Google Search Console.**
11. **Dominio propio**, y con él apagar el modo vista previa.
12. **Usuario real de Instagram.**

Todos están listados también en `PENDIENTES`, dentro de `lib/config.ts`.

## Medición

Lighthouse móvil sobre el build de producción, noviembre de 2026:

| | Vista previa | Lanzamiento |
| --- | --- | --- |
| Rendimiento | 98–99 | 99 |
| Accesibilidad | 100 | 100 |
| Buenas prácticas | 100 | 100 |
| SEO | 69 | 100 |
| LCP | 1,1–1,5 s | 1,1 s |
| CLS | 0 | 0 |

En vista previa el SEO baja a 69 y es correcto: la única auditoría que falla
es «la página está bloqueada para indexación», que es justo lo que pedimos
mientras sea una maqueta. La primera corrida después de arrancar el servidor
sale más lenta: hay que medir con el servidor ya caliente.

## Decisiones que conviene conocer

- **La entrada animada dura unos 2 segundos**, lo mismo que el video de
  referencia. Gira el logo real como una moneda de dos caras, la luz blanca
  entra por la izquierda y el arcoíris sale por la derecha. Sale una vez por
  visita, se salta con un clic o una tecla y no aparece con
  `prefers-reduced-motion`. Es CSS y un guion de diez líneas: si JavaScript
  falla, la cortina igual se quita sola.
- **La calculadora usa el valor legal de la hora**: salario ÷ 210, el divisor
  vigente desde el 15 de julio de 2026 con la jornada de 42 horas (Ley 2101
  de 2021), más un 52 % estimado de prestaciones y aportes. Todo corre en el
  navegador del visitante: no envía nada.
- **Los precios subieron a la parte media del mercado** colombiano, con una
  llamada inicial gratis y el diagnóstico descontable de la implementación.
- **«Recomendado» y no «El más pedido»**: la segunda frase solo puede volver
  cuando las ventas lo confirmen.
- **Los billetes junto a cada precio crecen con el monto**: se cuentan de a
  50 dólares y de a 100.000 pesos, con un tope de seis.
- **Un solo gesto de movimiento en el resto del sitio**: subir 16 px y
  aparecer. Todo se apaga con `prefers-reduced-motion`, y nada queda escondido
  sin JavaScript.
- **El acordeón usa `<details>` nativo**: sin estado de React.
- **Los emoji del brief se cambiaron por iconos de línea** dibujados a mano.

## Las imágenes de la marca

- `assets/prisma-logo.png` — el logo con fondo transparente, sacado del
  «SVG» que entregó David (por dentro era una imagen PNG, no vectores). Es el
  que gira en la entrada.
- `assets/logo-marca.jpg` — la pirámide del encabezado y el pie, mostrada con
  `mix-blend-mode: multiply` para que el fondo blanco desaparezca.
- `assets/equipo-prisma.jpg` — Juan David (izquierda) y David (derecha), en
  el hero.
- `assets/retrato-derecha.jpg` — el retrato de David en la sección del
  equipo, recortado de la foto anterior.
- `assets/retrato-juan-david.jpg` — el retrato de Juan David, una foto suya
  aparte.
- `assets/retrato-izquierda.jpg` — sin uso desde que Juan David tiene su
  propia foto; se puede borrar.

## Publicar

El proyecto está enlazado con Vercel (`david-vasquez-97/prisma-vertex`) y con
el repositorio de GitHub. Hay dos caminos y los dos sirven:

```bash
git push                        # Vercel publica solo
npx vercel@latest --prod --yes  # publicar desde esta carpeta, sin pasar por GitHub
```

Al conectar el dominio propio, actualizar `SITE.dominio` en `lib/config.ts`:
el sitemap, el robots, las canónicas y las tarjetas de Open Graph leen de ahí.
