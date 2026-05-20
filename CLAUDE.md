# CLAUDE.md

Guía del proyecto para el desarrollo del sitio web de **Estudio Polastri**.

## Resumen del proyecto

Landing page para **Estudio Polastri**, estudio jurídico de la abogada **María Laura Polastri**. El sitio es desarrollado por Digital Ya (Santiago Galardi y Juan Ignacio Solari).

**Objetivo principal del sitio:** maximizar las consultas directas por **WhatsApp**. El éxito se mide en cantidad de mensajes/consultas recibidas.

Reunión de inicio (kickoff): 12 de mayo de 2026.

## Sobre el cliente

- **Profesional:** María Laura Polastri, abogada (en Instagram: "Abogada Polastri").
- **Trayectoria:** 24 años de ejercicio profesional. Trabajó en el Poder Judicial, para el abogado del club Argentinos Juniors y en licitaciones para el gobierno del Chaco (en estos dos últimos sin figurar su nombre). Ejerce de forma autónoma desde ~1 año después de recibirse.
- **Público objetivo:** particulares, familias y trabajadores (no empresas).

### Áreas de práctica

El estudio cubre derecho de familia, derecho inmobiliario, sucesiones y despidos. **Para la comunicación web se priorizan dos áreas:**

1. **Sucesiones**
2. **Derecho de familia** — específicamente divorcios con liquidación de bienes y cuotas alimentarias.

Las demás áreas se mencionan, pero con menos énfasis.

### Diferencial competitivo

- Trabajo rápido y orientado a la resolución de conflictos.
- Fuerte enfoque en la **negociación** (se considera buena negociadora).
- Compromiso personal con cada caso hasta lograr el objetivo.
- Comunicar que cuenta con **amplia experiencia desde el inicio** — no "aprende con el cliente".

### Diferencial clave en Sucesiones (destacar)

**Financiamiento de los gastos legales de la sucesión.** Si el cliente quiere vender una propiedad y no tiene recursos para afrontar el gasto de la sucesión, el estudio **financia la sucesión** y se cobra al momento de la venta de la propiedad. Trabaja en colaboración con inmobiliarias (entre ellas la de su hermana).
> Pendiente: la clienta enviará el texto definitivo de esta oferta para bajarlo a la web.

## Ubicaciones y horarios

- **Santos Lugares**, partido de 3 de Febrero — martes y jueves de 10:00 a 16:30.
- **Tigre** — resto de los días, horario variable/amplio.
- Ambas modalidades: **presencial y remota** (online).
- ⚠️ **No publicar la dirección exacta de Tigre** (es domicilio particular). Mostrar solo la zona/localidad.

## Identidad visual

- **Tono:** formal-moderno, cálido, que genere confianza y cercanía. Evitar tecnicismos excesivos y también un lenguaje demasiado coloquial.
- **Paleta de colores:** la del logo existente — ocre, blanco, negro y gris. La clienta enviará la paleta cargada en Canva.
- **Logo:** existe un logo propio hecho por la clienta. Se reutiliza o se hacen variaciones manteniendo la paleta para consistencia visual.
- **Fotografía:** la clienta no tiene fotos profesionales. Se usarán herramientas de IA para profesionalizar su imagen, **priorizando un resultado realista** (que se parezca a la persona real, sin idealizar de más). La clienta enviará materiales (fotos simples, de oficinas) por el grupo de WhatsApp.

### Referencias de diseño

- **Tarulia** (estudio de divorcios) — le gustó la estética / primer impacto visual.
- **Villanueva Yorno y Asociados** — le gustó el esquema de colores en tonos azules.

## Estructura del sitio

Secciones acordadas:

- **Home / Inicio** — incluir un texto que transmita experiencia y trayectoria desde el inicio.
- **Servicios** — con foco en Sucesiones (incl. el diferencial de financiamiento) y Derecho de Familia.
- **Equipo / Sobre mí**
- **Contacto** — orientado a derivar a WhatsApp.
- **Preguntas frecuentes (FAQ)**
- **Publicaciones**

## Activos digitales

- **Dominio:** `studiopolastri.com.ar` — gestionado vía Google Workspace. La clienta verificará en sus suscripciones de Google dónde se compró el dominio.
- **Hosting:** probablemente no contratado aún. Se evalúa la necesidad ~2 semanas después del desarrollo inicial.
- **Redes sociales** (integrar al sitio): Instagram ("Abogada Polastri"), LinkedIn, y un Linktree. La clienta compartirá los enlaces.

## Stack técnico

- **Framework:** Astro 5 (sitio estático). Migrado desde Vite/React.
- **Estilos:** Tailwind CSS 4 (vía `@tailwindcss/vite`).
- **Lenguaje:** TypeScript.
- **Estructura:** `src/pages/` (rutas), `src/components/`, `src/layouts/`, `src/styles/`, `src/utils/`.

### Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
npm run check    # chequeo de tipos de Astro
```

## Convenciones

- Idioma del sitio: **español (Argentina)**.
- Todas las llamadas a la acción (CTA) deben converger en **WhatsApp** como canal de consulta.
- Mantener la paleta del logo (ocre/blanco/negro/gris) salvo decisión contraria del cliente.

## Próximos pasos pendientes del cliente

- Definir y enviar el texto de la oferta de sucesiones (financiamiento).
- Enviar la paleta de colores desde Canva.
- Enviar materiales: fotos simples / de oficinas (por grupo de WhatsApp).
- Buscar info de hosting en el correo.
- Identificar dónde compró el dominio (suscripciones de Google).

## Comunicación

Coordinación del proyecto vía **grupo de WhatsApp**. El equipo entrega una primera demo del sitio para revisión iterativa (qué gusta, qué cambiar, revisión de textos y contenidos).
