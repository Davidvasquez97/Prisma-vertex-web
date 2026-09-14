# CLAUDE.md — Cómo trabajar en este proyecto

Léelo completo antes de escribir código. Si algo aquí choca con una instrucción puntual, avísalo en vez de asumir.

---

## Qué estamos construyendo

Una plataforma multi-tenant de agentes de WhatsApp con reservas y CRM.
Un solo motor sirve a **cualquier vertical de negocio** — restaurante, clínica odontológica, estética, joyería, punto de venta — sin escribir código nuevo por vertical.

**El dueño del proyecto no programa.** Dirige la construcción y opera el negocio desde un panel visual. Cualquier decisión que lo obligue a abrir un editor de código para operar es una decisión equivocada.

---

## La regla que manda sobre todas

> **La prueba de la joyería:** ¿puedo agregar un vertical nuevo — digamos joyería — completamente desde el panel, sin tocar código, sin migración y sin redeploy?

Si la respuesta es no, el diseño está mal. Párate y replantea.

Corolario: agregar un cliente nuevo es crear una fila. Nunca un cambio de código.

**Construimos con dos verticales a la vez desde el inicio** (restaurante y clínica odontológica). No es por vender más rápido: es el mecanismo que impide que se cuele código específico de un vertical. Si algo solo funciona para uno, se nota de inmediato.

---

## Prohibiciones absolutas

1. **Nunca condicionales por vertical.** Prohibido `if (vertical === 'restaurante')` en backend, frontend o prompts. El comportamiento viene de datos.
2. **Nunca tablas por vertical.** No `mesas`, no `citas_odontologia`. Existe `recursos` y `reservas`. Lo específico va en `jsonb`.
3. **Nunca texto de cara al usuario en el código.** Todo rótulo sale del diccionario del vertical. Si escribes "Mesa" en un componente, está mal.
4. **Nunca colores, fuentes o radios fijos en componentes.** Todo por variables CSS que vienen del tema.
5. **Nunca desfases horarios fijos.** Prohibido `-05:00` en cualquier parte. Se usa `timestamptz` en UTC y zonas IANA (`America/Bogota`). Los cálculos de disponibilidad y recordatorios se hacen en la zona del tenant.
6. **Nunca lógica de negocio dentro de Kapso.** Kapso es solo transporte.
7. **Nunca localhost ni túneles.** El webhook apunta siempre a la URL pública del deploy.
8. **Nunca una consulta sin filtro de tenant.** Aislamiento por RLS y por código, las dos capas.

---

## Dos audiencias, una aplicación

Un solo proyecto Next.js con dos áreas y componentes compartidos. **No dos aplicaciones.**

| Área | Quién entra | Qué ve |
|---|---|---|
| `/admin` | Operador (dueño de la plataforma) | Todo: verticales, todos los tenants, facturación, errores |
| `/negocio` | Dueño del negocio cliente | Solo su tenant: agenda, negocio, CRM, conversaciones |

El rol se resuelve en el servidor y se refuerza con RLS en Postgres. Un usuario de `/negocio` nunca puede leer datos de otro tenant, aunque manipule la petición.

---

## Cómo trabajas

- **Una fase a la vez.** Son cuatro, en `ESPECIFICACION.md`. No arranques la siguiente sin verificar la anterior.
- **Al terminar cada fase**, entrega: qué construiste, cómo probarlo manualmente paso a paso, y qué quedó pendiente.
- **Si hay ambigüedad, pregunta.** Máximo dos opciones, con tu recomendación y el motivo. No inventes requisitos.
- **Simple le gana a elegante.** Este código lo va a mantener alguien que no programa, con ayuda de un asistente. Código aburrido y explícito.
- **Mínimas dependencias.** Cada librería nueva hay que justificarla.
- **Git desde el primer commit.** Commits pequeños, mensajes claros en español.
- **No construyas el futuro.** Google Calendar, MCP, campañas, lista de espera: fuera del MVP. Define la interfaz donde corresponda, no la implementación.

---

## Stack (fijo, no proponer alternativas)

| Capa | Herramienta | Plan en MVP |
|---|---|---|
| Transporte WhatsApp | Kapso | Free |
| App y panel | Next.js App Router + TypeScript | — |
| Deploy | Vercel | Hobby |
| Base de datos, auth, storage | Supabase | Free |
| Modelo | Claude con tool use | API de pago |
| Estilos | Tailwind sobre variables CSS dinámicas | — |
| Repo | GitHub | Free |

Skills de Kapso antes de empezar:

```bash
npx skills add gokapso/agent-skills
claude mcp add --transport http kapso-docs https://docs.kapso.ai/mcp
```

Usa `integrate-whatsapp` para conexión y envío, `observe-whatsapp` para depurar.
No uses `automate-whatsapp`: la orquestación es nuestra.

### Restricciones del entorno gratuito

Tenlas presentes al planear cada fase:

- **Kapso Free: un solo número.** Solo un vertical puede tener WhatsApp en vivo. El multi-tenant se valida en panel y base de datos, no con dos números.
- **Supabase Free se pausa tras una semana sin actividad.** No es un error, hay que reactivarlo.
- **Claude API no tiene plan gratuito.** Controla el consumo: caché del bloque system, historial acotado, sin llamadas innecesarias en desarrollo.
- **Vercel Hobby es para uso no comercial.** Sirve para el MVP; hay que migrar antes de cobrarle a un cliente.

---

## Calidad no negociable

- **Todo mensaje se registra.** Entrada, herramientas llamadas con argumentos y resultados, salida, tokens, latencia. Sin esto es imposible depurar un agente.
- **Doble reserva es un bug crítico.** Se previene con restricción de exclusión en Postgres, no validando en la aplicación.
- **Errores visibles.** Cualquier falla no controlada genera alerta al operador.
- **Modo copiloto por defecto.** Todo tenant nuevo arranca con revisión humana antes de enviar.

---

## Antes de darte por terminado con cualquier cambio

- [ ] ¿Funciona igual para un vertical que no existía cuando lo escribí?
- [ ] ¿Funciona igual para un tenant en otro país y otra zona horaria?
- [ ] ¿Hay algún texto visible al usuario escrito en el código?
- [ ] ¿Hay algún color o fuente fijos en un componente?
- [ ] ¿Un usuario de `/negocio` podría ver datos de otro tenant?
- [ ] ¿Se puede operar desde el panel sin tocar código?
- [ ] ¿Queda registro suficiente para entender qué pasó si falla?
