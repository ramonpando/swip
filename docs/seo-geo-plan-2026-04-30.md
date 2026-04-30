# SEO + GEO/LLM Plan para SWIP

Fecha: 2026-04-30

## 1. Qué sí importa hoy según fuentes actuales

### Google SEO y AI Overviews / AI Mode

La señal principal de la investigación actual es simple: para aparecer mejor en Google y también en experiencias con IA dentro de Google, no existe una capa separada de "GEO para Google" distinta del SEO base.

Puntos clave de Google:

- Google indica que para AI Overviews y AI Mode aplican las mismas bases de SEO que para Search.
- Google dice explícitamente que no hay requisitos técnicos adicionales para aparecer ahí.
- Google también dice que no hace falta crear archivos especiales tipo AI text files ni markup especial para esas experiencias.
- Las palancas que sí siguen importando son:
  - permitir crawl e indexación
  - enlazado interno fuerte
  - contenido textual útil
  - buena experiencia de página
  - datos estructurados consistentes con el contenido visible
  - Business Profile / datos del negocio actualizados

Fuentes:

- Google Search Central, AI features and your website:
  https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central, Creating helpful, reliable, people-first content:
  https://developers.google.com/search/docs/fundamentals/creating-helpful-content

### Google-Extended

`Google-Extended` no ayuda a rankear en Google Search. Solo controla ciertos usos de contenido para Gemini / grounding en otros sistemas de Google.

Fuente:

- Google common crawlers:
  https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers

### llms.txt

`llms.txt` es útil como capa de discoverability para algunos agentes y herramientas, pero hoy no es un estándar formal de Google ni una palanca probada de ranking orgánico.

Puntos importantes:

- `llms.txt` es una propuesta abierta, no un estándar IETF/W3C.
- La propia propuesta no impone una única forma de procesamiento.
- Su valor hoy es pragmático: darle a ciertos agentes una versión resumida y controlada de tu sitio.

Fuente:

- llmstxt.org:
  https://llmstxt.org/index.html

## 2. Estado actual de SWIP

### Lo que ya está bien

El sitio ya tiene una base técnica bastante más seria que la media:

- sitemap generado por Astro y filtrado para excluir URLs no indexables: [astro.config.mjs](/root/swip/astro.config.mjs:6)
- canonical, meta description, OG, Twitter cards y JSON-LD base: [Base.astro](/root/swip/src/layouts/Base.astro:28)
- `robots.txt` presente: [robots.txt](/root/swip/public/robots.txt:1)
- `llms.txt` presente: [llms.txt](/root/swip/public/llms.txt:1)
- `llms-full.txt` presente: [llms-full.txt](/root/swip/public/llms-full.txt:1)
- blog ya indexable con `BlogPosting` y `BreadcrumbList`: [BlogPost.astro](/root/swip/src/layouts/BlogPost.astro:24)
- build correcto y sitemap generado; el build produjo 21 páginas y `sitemap-index.xml`

Conclusión: no estamos empezando desde cero. La base técnica ya permite competir.

### Huecos reales detectados

#### 1. Enlace interno roto repetido en todo el sitio

El componente `PreOwnedTeaser` enlaza a `/pre-owned/`, pero esa ruta no existe ni en `src/pages` ni en `dist`.

Evidencia:

- enlaces rotos: [PreOwnedTeaser.astro](/root/swip/src/components/PreOwnedTeaser.astro:11)
- CTA secundaria al mismo destino roto: [PreOwnedTeaser.astro](/root/swip/src/components/PreOwnedTeaser.astro:60)
- el componente está inyectado sitewide en el layout: [Page.astro](/root/swip/src/layouts/Page.astro:18)

Impacto:

- enlazado interno desperdiciado
- peor experiencia de usuario
- señal innecesaria de calidad baja

Esto sí debe corregirse rápido.

#### 2. La URL de mayor intención de conversión está en `noindex`

La página `/cotizar/` está marcada como `noindex`:

- [cotizar/index.astro](/root/swip/src/pages/cotizar/index.astro:6)

Además, el copy confirma que hoy es placeholder:

- "Estamos preparando el cotizador conversacional": [cotizar/index.astro](/root/swip/src/pages/cotizar/index.astro:17)

Interpretación:

- Si sigue siendo placeholder, `noindex` es correcto.
- Si quieren posicionarse rápido por queries transaccionales, esta URL debería convertirse en landing real y luego pasar a indexable.

#### 3. Falta profundizar señales de entidad y confianza

SWIP ya declara Organization + FinancialService, dirección, teléfono y horarios:

- [Base.astro](/root/swip/src/layouts/Base.astro:33)

Pero aún faltan varias señales de confianza visibles:

- no encontré página tipo "Nosotros" o "Quiénes somos"
- no encontré páginas de autor / editor para el blog
- no encontré casos, evidencia operativa o credenciales visibles más allá del copy comercial

Esto importa porque Google enfatiza contenido confiable, con evidencia de expertise y contexto sobre autor/sitio.

#### 4. Cobertura de contenido todavía pequeña

Hoy el blog tiene 4 piezas publicadas:

- [que-es-un-prestamo-con-garantia-de-auto-en-mexico.mdx](/root/swip/src/content/blog/que-es-un-prestamo-con-garantia-de-auto-en-mexico.mdx:1)
- [cuanto-te-prestan-por-tu-auto-en-mexico.md](/root/swip/src/content/blog/cuanto-te-prestan-por-tu-auto-en-mexico.md:1)
- [prestamo-con-garantia-vs-empeno-de-autos.md](/root/swip/src/content/blog/prestamo-con-garantia-vs-empeno-de-autos.md:1)
- [requisitos-para-un-prestamo-con-garantia-de-auto.md](/root/swip/src/content/blog/requisitos-para-un-prestamo-con-garantia-de-auto.md:1)

La arquitectura comercial principal está bien, pero todavía falta cubrir suficiente superficie semántica para ganar autoridad temática rápido.

#### 5. `llms.txt` existe, pero no hay que sobreinvertir ahí

El archivo está bien planteado como resumen editorial:

- [llms.txt](/root/swip/public/llms.txt:1)

Conclusión:

- mantenerlo: sí
- convertirlo en prioridad principal de posicionamiento: no

#### 6. Oportunidad de mejorar la capa local

SWIP opera en CDMX y Querétaro y eso está mencionado tanto en contenido como en schema:

- [Base.astro](/root/swip/src/layouts/Base.astro:63)
- [contacto/index.astro](/root/swip/src/pages/contacto/index.astro:68)

Pero para local SEO todavía hay margen claro:

- asegurar que Business Profile coincida exactamente con web
- añadir coordenadas `geo` en schema
- fortalecer páginas con intención local real

## 3. Lectura estratégica

La oportunidad más rápida para SWIP no es "más technical SEO".

La oportunidad es:

1. limpiar errores de calidad obvios
2. convertir la intención comercial alta en páginas realmente indexables
3. ampliar autoridad temática con contenido útil y localmente relevante
4. reforzar señales de entidad y confianza
5. usar `llms.txt` como complemento, no como apuesta principal

## 4. Plan priorizado para posicionarnos rápido

### Fase 1: próximos 7 días

Objetivo: quitar fricción técnica y dejar listas las páginas que pueden rankear ya.

1. Corregir el bloque `Pre-Owned`.

Opciones:

- crear la ruta `/pre-owned/` si ese inventario sí existe y es una línea de negocio real
- o remover temporalmente todos los links a `/pre-owned/`

No conviene seguir enlazando una URL inexistente desde páginas indexables.

2. Decidir el rol de `/cotizar/`.

Opciones:

- mantener `noindex` mientras sea placeholder
- o convertirla en landing comercial real y volverla indexable

Para rankear rápido por intención alta, la segunda opción es mejor, pero solo si la página deja de prometer algo que aún no existe.

3. Dar de alta y verificar medición.

Necesario:

- Google Search Console
- Bing Webmaster Tools
- Google Business Profile auditado

Acciones:

- enviar `sitemap-index.xml`
- inspeccionar manualmente homepage, servicio principal, blog y una pieza de contenido
- revisar cobertura, indexación y queries reales

4. Alinear entidad del negocio.

Publicar o reforzar:

- dirección exacta
- horarios
- teléfono
- cobertura real
- datos legales/comerciales consistentes

Todo debe coincidir entre web, schema y Business Profile.

### Fase 2: próximos 14 días

Objetivo: atacar intención comercial y comparativa.

Crear primero 8-12 piezas nuevas con mapa de keywords, no por intuición.

Prioridad alta:

- préstamo con garantía de auto en CDMX
- préstamo con garantía de auto en Querétaro
- cuánto me prestan por una camioneta / SUV
- préstamo con garantía de BMW / Mercedes / Porsche / Audi / Land Rover
- préstamo con garantía de auto blindado nivel II / III / IV
- empeño de camionetas de lujo
- cuánto tarda un préstamo con garantía vehicular
- requisitos para auto blindado / de lujo
- diferencia entre casa de empeño y garantía vehicular

Regla editorial:

- cada pieza debe resolver una intención distinta
- cada pieza debe enlazar a una página de servicio concreta
- cada pieza debe incluir datos, rangos, objeciones y siguiente paso

No publicar "blogs de relleno".

### Fase 3: próximos 30 días

Objetivo: construir autoridad de entidad y confianza.

1. Crear página "Nosotros" o equivalente.

Debe incluir:

- quién opera SWIP
- dónde operan
- cómo funciona la evaluación
- por qué saben valuar lujo / blindados
- cómo se protege el vehículo

2. Añadir capa editorial al blog.

Recomendado:

- autor visible o editor responsable
- fecha de publicación y actualización
- criterio de revisión
- enlaces a páginas de entidad

3. Reforzar schema.

Recomendado:

- mantener `FinancialService`
- complementar con propiedades más cercanas a `LocalBusiness` recomendadas por Google
- añadir `geo` si tienen coordenadas reales

4. Optimizar snippets.

Revisar títulos y metas para:

- reducir repetición
- alinear intención
- capturar click sin inflar promesas

### Fase 4: próximos 60-90 días

Objetivo: prominence y menciones externas.

1. Conseguir reseñas reales en Google Business Profile.

Google indica que más reseñas y ratings positivos pueden ayudar a local ranking.

2. Conseguir enlaces y menciones relevantes.

Prioridad:

- medios financieros / automotrices locales
- directorios serios
- cámaras o asociaciones
- partners reales

3. Publicar activos enlazables.

Ejemplos:

- guía de valuación de autos blindados en México
- guía de montos por tipo de vehículo
- checklist documental descargable
- comparativa seria entre modalidades

## 5. Plan específico de GEO / LLM

### Qué mantener

- `llms.txt`
- `llms-full.txt`
- páginas con copy claro, factual y textual
- FAQs con respuestas concretas

### Qué mejorar

1. Estructurar mejor respuestas breves dentro de páginas clave.

Patrón:

- definición corta
- rango
- requisitos
- tiempos
- cobertura
- siguiente paso

Esto ayuda tanto a snippets como a extracción por LLMs.

2. Publicar contenido con bloques fácilmente citables.

Ejemplos:

- tablas de montos
- listas de requisitos
- comparativas
- preguntas frecuentes

3. Mantener consistencia de hechos.

Los mismos datos de:

- montos
- ciudades
- horarios
- requisitos
- modalidades

deben coincidir entre homepage, páginas de servicio, blog, schema y `llms.txt`.

### Qué no hacer

- no crear archivos "AI SEO" adicionales pensando que eso moverá Google
- no inflar el sitio con páginas doorway por colonia/ciudad sin contenido realmente distinto
- no publicar artículos vacíos solo para multiplicar URLs

## 6. Orden exacto de ejecución recomendado

1. Arreglar `/pre-owned/`
2. Definir si `/cotizar/` va a rankear o solo convertir
3. Search Console + Bing Webmaster + GBP
4. Publicar página de entidad / confianza
5. Publicar 8-12 contenidos de intención alta
6. Reforzar enlazado interno desde esas piezas hacia servicios
7. Optimizar GBP, reseñas y menciones

## 7. KPI mínimos para saber si vamos bien

Medir semanalmente:

- páginas indexadas
- impresiones orgánicas por URL
- clicks orgánicos por URL
- queries nuevas en Search Console
- CTR de páginas principales
- leads desde orgánico
- leads asistidos por blog
- visibilidad local en branded y non-branded

## 8. Resumen ejecutivo

SWIP ya tiene una base técnica suficiente para posicionar.

Lo que falta no es "más SEO técnico exótico". Falta:

- corregir errores de calidad visibles
- decidir qué URL convierte y qué URL posiciona
- ampliar cobertura de contenido con intención real
- reforzar señales de confianza y entidad
- trabajar la capa local con disciplina

`llms.txt` ya existe y está bien como complemento. No es hoy la palanca principal para ganar Google. La palanca principal sigue siendo SEO clásico bien ejecutado, con contenido útil, estructura clara, entidad confiable y mejor distribución de intención entre páginas.
