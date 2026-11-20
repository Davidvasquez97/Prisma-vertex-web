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
| Razón social, NIT y dirección | `lib/config.ts` → `EMPRESA` |
| Fecha de la versión legal | `lib/config.ts` → `VERSION_LEGAL` |
| Apagar el modo vista previa | `lib/config.ts` → `MODO_VISTA_PREVIA` |
| Encender la analítica | `lib/config.ts` → `ANALITICA_ACTIVA` |
| Tasa dólar a pesos de los precios | `lib/config.ts` → `TASA_COP` |
| Copia de respaldo del formulario | `lib/config.ts` → `FORMULARIO_ENDPOINT` |
| Textos del inicio | `lib/contenido.ts` |
| Precios, planes y llamada inicial | `lib/contenido.ts` → `PLANES`, `LLAMADA_INICIAL` |
| Garantía | `lib/contenido.ts` → `GARANTIA` |
| Supuestos de la calculadora | `lib/contenido.ts` → `CALCULADORA` |
| Preguntas frecuentes | `lib/contenido.ts` → `PREGUNTAS` |
| Casos de éxito (inicio, /casos y nichos) | `lib/contenido.ts` → `CASOS` |
| Equipo, cargos, trayectoria y LinkedIn | `lib/contenido.ts` → `EQUIPO` |
| Especialidades y sus páginas | `lib/contenido.ts` → `NICHOS` |
| Otros sectores | `lib/contenido.ts` → `OTROS_SECTORES` |
| Fotos y logo | `assets/` |
| Artículos del blog | `contenido/blog/*.md` |

Las preguntas frecuentes viven en un solo sitio a propósito: de ahí salen el
acordeón que se ve y la ficha que lee Google. No pueden desincronizarse.

## El inicio, en orden

El orden cuenta una historia de venta: la promesa → lo que ganas → en qué
somos especialistas → cuánto estás perdiendo hoy → cómo lo hacemos → pruebas → garantía → precio → las
objeciones al precio → quiénes somos → cierre.

| Sección | Componente |
| --- | --- |
| Entrada animada (una vez por visita) | `Entrada` |
| Titular, foto del equipo | `Hero` |
| Lo que ganas | `LoQueGanas` |
| Especialistas en (cuatro nichos) | `Nichos` |
| Calculadora de cuánto pierde la empresa | `Calculadora` |
| Cómo trabajamos y con qué | `Proceso`, `Herramientas` |
| Casos de éxito destacados | `Resultados`, `CasoDestacado` |
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
  centros-radiologicos/  laboratorios-clinicos/
  clinicas-esteticas/    clinicas-odontologicas/   una página por nicho
  otros-sectores/   los demás sectores, sin página propia todavía
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
  PaginaNicho           la plantilla de las cuatro páginas de nicho
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

## Lo que queda (20 de noviembre de 2026)

El sitio ya no muestra ningún marcador PENDIENTE: los datos legales están
completos (persona natural, NIT 1.059.237.407-8, dirección del RUT), las
autorizaciones de Panorex, Lucas Vázquez y Ciclismo en Línea están
confirmadas, y la sección de video de los nichos se oculta mientras no haya
video.

**Para publicar**
1. **Cloudflare Pages**: crear el proyecto y conectar `prismavertex.com.co`
   (pasos abajo, en «Publicar»). `SITE.dominio` y `ALOJAMIENTO` ya están
   puestos.
2. **Apagar `MODO_VISTA_PREVIA`** el día del lanzamiento.
3. **Google Search Console** y **medición de visitas sin cookies**.

**Legal y tributario**
4. **Contador:** según el RUT solo tienen la responsabilidad 05 (renta), sin
   la 48 (IVA) ni la 52 (factura electrónica). El sitio dice que no se cobra
   IVA. Conviene confirmar que cumplen los requisitos de no responsable
   (art. 437 del Estatuto Tributario) y pedir que agreguen la 49 al RUT. Si
   pasan a ser responsables: `EMPRESA.responsableIva = true` y factura
   electrónica.
5. **Abogado:** revisar `/politica-de-datos` y `/terminos`. Están redactados
   sobre la Ley 1581 de 2012, el Decreto 1377 de 2013, la Circular Externa 003
   de 2025 de la SIC, la Ley 1480 de 2011, la Ley 527 de 1999 y la Ley 2300 de
   2023. Al cambiar algo, actualizar `VERSION_LEGAL`.
6. **Contrato de transmisión de datos** para los clientes de salud.

**Para sumar después**
7. Videos demo (campo `video` de cada nicho), frases de los clientes
   (campo `cita`), LinkedIn de la empresa, logo en SVG.

Todos están también en `PENDIENTES`, dentro de `lib/config.ts`.

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

## Agregar una especialidad

1. En `lib/contenido.ts`, agregar una entrada a `NICHOS` copiando una
   existente: textos, dolores, supuestos de la calculadora, preguntas y
   mensaje de WhatsApp. Si falta el icono, se dibuja en
   `components/Iconos.tsx`.
2. Crear `app/<slug>/page.tsx` copiando el de cualquier nicho y cambiando el
   slug. Es un archivo de diez líneas que solo llama a `PaginaNicho`.

La tarjeta del inicio, el enlace del pie y la entrada del sitemap aparecen
solos.

## Las imágenes de la marca

**El sitio usa las versiones `.webp`** de prisma-logo, logo-marca,
logo-panorex, equipo-prisma y los dos perfiles: van al tamaño en que se
muestran y pesan entre 2 y 72 KB, porque en Cloudflare no hay optimizador de
imágenes. Los archivos `.png` y `.jpg` del mismo nombre son los originales:
si se cambia una foto, se reemplaza el original y se vuelve a sacar su
`.webp` con sharp (ancho de 800 px para fotos, 300 para el logo).

- `assets/prisma-logo.png` — el logo con fondo transparente, sacado del
  «SVG» que entregó David (por dentro era una imagen PNG, no vectores). Es el
  que gira en la entrada.
- `assets/logo-marca.jpg` — la pirámide del encabezado y el pie, mostrada con
  `mix-blend-mode: multiply` para que el fondo blanco desaparezca.
- `assets/logo-panorex.png` — el logo de Panorex que entregó David, recortado;
  se muestra con `mix-blend-mode: multiply` sobre la tarjeta de su caso.
- `assets/equipo-prisma.jpg` — Juan David (izquierda) y David (derecha), en
  el hero.
- `assets/retrato-david.jpg` y `retrato-juan-david-grado.jpg` — los
  retratos del círculo del equipo, en cuadrado de 320 px. El de David es su
  foto de estudio; el de Juan David sale de su ceremonia de grado.
- `assets/perfil-david-etapa.jpg` y `perfil-juan-david-grado.jpg` — las fotos
  completas que se ven al abrir «Saber más», en 4:5. La de la etapa es de
  Ciclismo en Línea y lleva su crédito.
- `assets/retrato-david-etapa.jpg`, `retrato-derecha.jpg`,
  `retrato-juan-david.jpg` y `retrato-izquierda.jpg` — retratos anteriores,
  sin uso; se pueden borrar.

## Publicar

El sitio se publica en **Cloudflare Pages**, en la misma cuenta donde está
el dominio `prismavertex.com.co`. Todas las páginas son estáticas: no hace
falta servidor. Cada `git push` a la rama de producción se publica solo.

**Configuración del proyecto en Cloudflare** (Workers & Pages → Crear →
Pages → Conectar con Git → repositorio `Prisma-vertex-web`):

| Campo | Valor |
| --- | --- |
| Rama de producción | `main` |
| Framework | Ninguno (None) |
| Comando de build | `npm run build:estatico` |
| Carpeta de salida | `out` |
| Variable de entorno | `NODE_VERSION` = `22` |

Después, en el proyecto: **Dominios personalizados** → agregar
`prismavertex.com.co` y `www.prismavertex.com.co`. Cloudflare crea los
registros DNS y el certificado solo.

Detalles que conviene saber:
- `npm run build:estatico` compila como lo hace Cloudflare y además corrige
  una falla de Next.js 16 con las precargas (ver `scripts/build-estatico.mjs`).
  Para mirarlo aquí: `npx serve out`.
- `public/_redirects` y `public/_headers` son las redirecciones y los
  encabezados de Cloudflare (caché de un año para `/_next/static` y
  seguridad básica).
- Las imágenes van en WebP ya del tamaño en que se muestran, porque sin
  servidor no hay optimizador de imágenes.
- Vercel (`david-vasquez-97/prisma-vertex`) sigue conectado al mismo
  repositorio. Cuando el dominio funcione en Cloudflare, conviene
  desconectarlo para no tener dos copias publicadas.
