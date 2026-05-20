# SWIP SEO + LLMS Audit

Fecha: 2026-04-21

## Estado Actual

Implementado al cierre de esta iteracion:
- se creo la URL `/preguntas-frecuentes/` y ya no existe el enlace roto detectado en la auditoria inicial
- se movieron y ampliaron las FAQs a su page dedicada, incluyendo preguntas comerciales adicionales
- se reforzo el enlazado interno entre home, money pages, pages de soporte y contacto
- se activo una capa LLMS con `llms.txt` y `llms-full.txt`
- se creo el blog real con posts iniciales y rutas indexables bajo `/blog/`
- se agrego schema especifico para blog index y posts individuales
- el blog deja de estar excluido del sitemap para que sus URLs puedan descubrirse e indexarse

Pendientes sugeridos para la siguiente jornada:
- crear 4 a 6 posts adicionales para cubrir variantes de intencion transaccional e informativa
- revisar Search Console cuando empiece a registrar impresiones y cobertura real
- definir si `/cotizar/` se mantiene como page `noindex` o se convierte en landing de conversion completa
- agregar un enlace claro para envio de documentos o registro directo hacia el dashboard de Bravix
- evaluar una seccion `preowned` jalada directamente desde Carflow
- generar OG images especificas por post y por money page para mejorar CTR social y sharing

Alcance de esta auditoria:
- Estructura de informacion del sitio
- SEO tecnico base
- Estado de indexacion y enlazado interno
- Riesgos de contenido thin o placeholder
- Estado LLMS / AI retrieval
- Propuesta de enlazado interno para ejecutar despues

## Resumen Ejecutivo

La base del sitio esta bien encaminada para SEO:
- arquitectura de URLs clara
- pages transaccionales bien separadas por intencion
- canonical, title, meta description y OG consistentes
- robots y sitemap generados
- schema util en home y algunas pages de soporte

Los principales problemas no son de arquitectura, sino de higiene SEO:
- hay enlaces internos a una URL inexistente (`/preguntas-frecuentes/`)
- el sitemap incluye URLs con `noindex`
- `/blog/` esta indexable pero sin posts reales
- `/cotizar/` esta indexable pero hoy funciona como placeholder
- no existe capa `llms.txt`

## Estructura Actual del Sitio

Rutas principales detectadas:
- `/`
- `/prestamo-con-garantia-de-auto/`
- `/prestamo-con-garantia-de-auto-con-resguardo/`
- `/prestamo-con-garantia-de-auto-sin-dejarlo/`
- `/prestamo-con-garantia-de-autos-de-lujo/`
- `/prestamo-con-garantia-de-autos-blindados/`
- `/empeno-de-autos/`
- `/como-funciona/`
- `/requisitos/`
- `/vehiculos-que-aceptamos/`
- `/cotizar/`
- `/contacto/`
- `/blog/`
- `/aviso-de-privacidad/`
- `/terminos-de-uso/`

Lectura estrategica:
- la estructura forma un cluster comercial coherente alrededor de `prestamo con garantia vehicular`
- existe una page madre comercial y varias hijas por caso de uso o segmento
- esto es bueno para SEO porque permite rankear tanto terminos generales como terminos especificos

## Hallazgos Prioritarios

### 1. Enlace interno roto a `/preguntas-frecuentes/`

Impacto:
- usuario cae en 404
- desperdicio de crawl budget
- senal de mantenimiento flojo ante bots

Referencias:
- [src/pages/index.astro](/root/swip/src/pages/index.astro:357)
- [src/components/Footer.astro](/root/swip/src/components/Footer.astro:30)

Decision recomendada:
- opcion A: crear la page `/preguntas-frecuentes/`
- opcion B: quitar esos enlaces y apuntar a una seccion FAQ real del home o de otra page existente

### 2. Sitemap incluyendo URLs con `noindex`

Impacto:
- senal mezclada para Google
- sitemap deberia listar solo URLs que quieres indexar

Referencias:
- [src/pages/aviso-de-privacidad/index.astro](/root/swip/src/pages/aviso-de-privacidad/index.astro:7)
- [src/pages/terminos-de-uso/index.astro](/root/swip/src/pages/terminos-de-uso/index.astro:7)
- [astro.config.mjs](/root/swip/astro.config.mjs:10)
- [dist/sitemap-0.xml](/root/swip/dist/sitemap-0.xml:1)

Decision recomendada:
- excluir del sitemap cualquier page marcada con `noindex`

### 3. `/blog/` indexable pero vacio

Impacto:
- thin content
- page con poca utilidad SEO real
- diluye autoridad si se indexa sin posts

Referencias:
- [src/pages/blog/index.astro](/root/swip/src/pages/blog/index.astro:25)
- [src/pages/blog/index.astro](/root/swip/src/pages/blog/index.astro:47)
- build warning por coleccion vacia

Decision recomendada:
- opcion A: mantenerlo solo si se van a publicar 2 a 3 posts pronto
- opcion B: dejarlo `noindex` hasta que tenga contenido real

### 4. `/cotizar/` indexable pero en estado "en preparacion"

Impacto:
- puede percibirse como soft 404 o landing incompleta
- page transaccional con intencion fuerte, pero hoy no entrega lo que promete en el titular

Referencias:
- [src/pages/cotizar/index.astro](/root/swip/src/pages/cotizar/index.astro:9)
- [src/pages/cotizar/index.astro](/root/swip/src/pages/cotizar/index.astro:17)

Decision recomendada:
- opcion A: reforzarla como landing valida con proceso, beneficios, documentos y CTA fuerte
- opcion B: ponerla `noindex` mientras siga como placeholder

### 5. No existe capa `llms.txt`

Impacto:
- los modelos y sistemas de retrieval no tienen una fuente oficial resumida del negocio
- pierdes control sobre como debe entenderse el sitio en contextos AI

Estado:
- no se encontro `llms.txt`, `llms-full.txt` ni equivalente en repo

### 6. Senales de entidad y confianza mejorables

Impacto:
- menor autoridad percibida para un sitio de servicios financieros

Referencia:
- [src/layouts/Base.astro](/root/swip/src/layouts/Base.astro:49)

Observaciones:
- el schema base `Organization` esta bien para arrancar
- pero le faltan datos de confianza importantes:
  - telefono
  - razon social
  - direccion o cobertura mejor definida
  - `sameAs`
  - datos de contacto mas completos

## Hallazgos Secundarios

### Robots correcto pero basico

Referencia:
- [public/robots.txt](/root/swip/public/robots.txt:1)

Estado:
- correcto para un inicio
- solo bloquea `/lp/`

Comentario:
- esta bien, pero si `/blog/` o `/cotizar/` se mantienen thin, el control deberia resolverse por `noindex`, no por robots

### OG / Meta base bien implementados

Referencia:
- [src/layouts/Base.astro](/root/swip/src/layouts/Base.astro:13)

Fortalezas:
- title
- description
- canonical
- og:image
- twitter card

### Cluster semantico bien planteado

Referencia principal:
- [src/pages/index.astro](/root/swip/src/pages/index.astro:59)

Pages fuertes del cluster:
- `/prestamo-con-garantia-de-auto/`
- `/prestamo-con-garantia-de-auto-con-resguardo/`
- `/prestamo-con-garantia-de-auto-sin-dejarlo/`
- `/prestamo-con-garantia-de-autos-de-lujo/`
- `/prestamo-con-garantia-de-autos-blindados/`
- `/empeno-de-autos/`

Esto es una fortaleza real del sitio.

## Propuesta de Enlazado Interno

Objetivo:
- concentrar autoridad en las money pages
- conectar intenciones informativas con conversion
- reforzar cluster tematico
- mejorar rastreo y comprension del sitio

Reglas de ejecucion:
- usar anchors naturales
- evitar sobreoptimizacion exact match en exceso
- cada page debe enlazar al menos:
  - una page comercial principal
  - una page de soporte o confianza
  - una salida clara a conversion

### Home `/`

Debe empujar autoridad a:
- `/prestamo-con-garantia-de-auto/`
- `/prestamo-con-garantia-de-auto-con-resguardo/`
- `/prestamo-con-garantia-de-auto-sin-dejarlo/`
- `/prestamo-con-garantia-de-autos-de-lujo/`
- `/prestamo-con-garantia-de-autos-blindados/`
- `/como-funciona/`
- `/requisitos/`
- `/cotizar/`

Anchors sugeridos:
- `prestamo con garantia de auto`
- `modalidad con resguardo`
- `modalidad sin dejar tu auto`
- `autos de lujo`
- `autos blindados`
- `como funciona el proceso`
- `requisitos para solicitar`
- `cotiza tu prestamo`

### Page madre `/prestamo-con-garantia-de-auto/`

Debe enlazar a:
- `/prestamo-con-garantia-de-auto-con-resguardo/`
- `/prestamo-con-garantia-de-auto-sin-dejarlo/`
- `/prestamo-con-garantia-de-autos-de-lujo/`
- `/prestamo-con-garantia-de-autos-blindados/`
- `/como-funciona/`
- `/requisitos/`
- `/cotizar/`

Anchors sugeridos:
- `con resguardo`
- `sin dejarlo`
- `si tu auto es de lujo`
- `si tu vehiculo es blindado`
- `conoce el proceso completo`
- `revisa los requisitos`
- `solicita una cotizacion`

### `/prestamo-con-garantia-de-auto-con-resguardo/`

Debe enlazar a:
- `/prestamo-con-garantia-de-auto/`
- `/prestamo-con-garantia-de-auto-sin-dejarlo/`
- `/como-funciona/`
- `/requisitos/`
- `/contacto/`
- `/cotizar/`

Anchors sugeridos:
- `prestamo con garantia vehicular`
- `si prefieres seguir usando tu auto`
- `como funciona el resguardo`
- `documentacion necesaria`
- `hablar con un asesor`
- `cotiza tu prestamo`

### `/prestamo-con-garantia-de-auto-sin-dejarlo/`

Debe enlazar a:
- `/prestamo-con-garantia-de-auto/`
- `/prestamo-con-garantia-de-auto-con-resguardo/`
- `/como-funciona/`
- `/requisitos/`
- `/cotizar/`

Anchors sugeridos:
- `prestamo con garantia de auto`
- `modalidad con resguardo`
- `paso a paso del proceso`
- `que necesitas para solicitar`
- `cotizacion por WhatsApp`

### `/prestamo-con-garantia-de-autos-de-lujo/`

Debe enlazar a:
- `/prestamo-con-garantia-de-auto/`
- `/vehiculos-que-aceptamos/`
- `/prestamo-con-garantia-de-auto-con-resguardo/`
- `/prestamo-con-garantia-de-auto-sin-dejarlo/`
- `/cotizar/`

Anchors sugeridos:
- `prestamo con garantia vehicular`
- `vehiculos que aceptamos`
- `modalidad con resguardo`
- `sin dejar tu auto`
- `cotiza tu auto de lujo`

### `/prestamo-con-garantia-de-autos-blindados/`

Debe enlazar a:
- `/prestamo-con-garantia-de-auto/`
- `/vehiculos-que-aceptamos/`
- `/prestamo-con-garantia-de-auto-con-resguardo/`
- `/contacto/`
- `/cotizar/`

Anchors sugeridos:
- `garantia vehicular`
- `vehiculos blindados y de alto valor`
- `resguardo seguro`
- `hablar con un ejecutivo`
- `solicitar evaluacion`

### `/empeno-de-autos/`

Debe enlazar a:
- `/prestamo-con-garantia-de-auto/`
- `/como-funciona/`
- `/requisitos/`
- `/cotizar/`

Anchors sugeridos:
- `alternativa al empeno de autos`
- `prestamo con garantia de auto`
- `como funciona`
- `requisitos`
- `cotiza tu prestamo`

### `/como-funciona/`

Debe enlazar a:
- `/prestamo-con-garantia-de-auto/`
- `/prestamo-con-garantia-de-auto-con-resguardo/`
- `/prestamo-con-garantia-de-auto-sin-dejarlo/`
- `/requisitos/`
- `/cotizar/`

Anchors sugeridos:
- `prestamo con garantia de auto`
- `modalidad con resguardo`
- `modalidad sin dejarlo`
- `requisitos para avanzar`
- `inicia tu cotizacion`

### `/requisitos/`

Debe enlazar a:
- `/prestamo-con-garantia-de-auto/`
- `/como-funciona/`
- `/vehiculos-que-aceptamos/`
- `/cotizar/`

Anchors sugeridos:
- `prestamo con garantia vehicular`
- `como funciona el proceso`
- `vehiculos que aceptamos`
- `solicitar cotizacion`

### `/vehiculos-que-aceptamos/`

Debe enlazar a:
- `/prestamo-con-garantia-de-autos-de-lujo/`
- `/prestamo-con-garantia-de-autos-blindados/`
- `/prestamo-con-garantia-de-auto/`
- `/cotizar/`

Anchors sugeridos:
- `autos de lujo`
- `autos blindados`
- `prestamo con garantia de auto`
- `cotiza tu vehiculo`

### `/contacto/`

Debe enlazar a:
- `/cotizar/`
- `/como-funciona/`
- `/requisitos/`

Anchors sugeridos:
- `cotiza tu prestamo`
- `ver el proceso`
- `revisar requisitos`

### `/cotizar/`

Debe enlazar a:
- `/prestamo-con-garantia-de-auto/`
- `/requisitos/`
- `/como-funciona/`

Anchors sugeridos:
- `prestamo con garantia vehicular`
- `documentacion necesaria`
- `como funciona`

### `/blog/`

Mientras siga vacio:
- no deberia ser eje principal de enlazado interno

Cuando tenga posts:
- cada post debe enlazar a una money page principal
- cada post debe enlazar a una page de soporte o conversion

Anchors sugeridos para futuros posts:
- `prestamo con garantia de auto`
- `cotiza tu vehiculo`
- `autos de lujo`
- `autos blindados`
- `requisitos`
- `como funciona`

## Anchors Recomendados

Anchors principales:
- `prestamo con garantia de auto`
- `prestamo con garantia vehicular`
- `cotiza tu prestamo`
- `solicitar evaluacion`
- `como funciona`
- `requisitos para solicitar`
- `vehiculos que aceptamos`

Anchors secundarios:
- `modalidad con resguardo`
- `modalidad sin dejar tu auto`
- `autos de lujo`
- `autos blindados`
- `alternativa al empeno de autos`
- `hablar con un asesor`
- `valuacion de tu vehiculo`

Anchors conversacionales:
- `si tu auto es de lujo`
- `si tu vehiculo esta blindado`
- `si necesitas seguir usandolo`
- `si buscas una alternativa mas seria`
- `conoce el proceso completo`
- `revisa si tu vehiculo aplica`

## Propuesta LLMS

### Estado actual

No existe hoy:
- `llms.txt`
- `llms-full.txt`

### Recomendacion

Crear:
- `public/llms.txt`
- `public/llms-full.txt`

### Objetivo de `llms.txt`

Que modelos, agentes y sistemas de retrieval entiendan:
- quien es SWIP
- que servicios ofrece
- que pages son fuente oficial
- que pages son prioritarias
- que pages son secundarias o no ideales como fuente comercial

### Estructura sugerida para `llms.txt`

- nombre: `SWIP`
- descripcion: `Sitio oficial de prestamo con garantia vehicular en Mexico`
- cobertura: `CDMX y Queretaro`
- pages prioritarias:
  - `/`
  - `/prestamo-con-garantia-de-auto/`
  - `/prestamo-con-garantia-de-auto-con-resguardo/`
  - `/prestamo-con-garantia-de-auto-sin-dejarlo/`
  - `/prestamo-con-garantia-de-autos-de-lujo/`
  - `/prestamo-con-garantia-de-autos-blindados/`
  - `/como-funciona/`
  - `/requisitos/`
  - `/cotizar/`
  - `/contacto/`
- contacto oficial:
  - `patricia_bernal@swip.mx`
  - WhatsApp oficial
- pages no prioritarias como fuente comercial:
  - legales
  - placeholders

### Estructura sugerida para `llms-full.txt`

Ampliar con:
- descripcion del servicio
- modalidades
- perfiles de vehiculos aceptados
- proceso
- tiempos
- cobertura
- contacto
- FAQ oficial
- URLs recomendadas para citar

## Plan de Ejecucion Recomendado

Orden sugerido para manana:

1. Resolver enlaces rotos a `/preguntas-frecuentes/`
2. Corregir sitemap para no incluir `noindex`
3. Decidir indexacion de `/blog/` y `/cotizar/`
4. Implementar enlazado interno contextual
5. Crear `llms.txt`
6. Crear `llms-full.txt`
7. Reforzar schema de entidad y confianza

## Checklist de Trabajo

- [ ] definir destino real de FAQ
- [ ] remover o corregir enlaces a `/preguntas-frecuentes/`
- [ ] excluir legales del sitemap
- [ ] definir si `/blog/` se indexa o no
- [ ] definir si `/cotizar/` se indexa o no
- [ ] agregar enlaces internos contextuales en money pages
- [ ] agregar enlaces internos contextuales en pages de soporte
- [ ] crear `llms.txt`
- [ ] crear `llms-full.txt`
- [ ] fortalecer entity schema

## Archivos Relevantes

- [astro.config.mjs](/root/swip/astro.config.mjs:1)
- [public/robots.txt](/root/swip/public/robots.txt:1)
- [src/layouts/Base.astro](/root/swip/src/layouts/Base.astro:1)
- [src/pages/index.astro](/root/swip/src/pages/index.astro:1)
- [src/pages/blog/index.astro](/root/swip/src/pages/blog/index.astro:1)
- [src/pages/cotizar/index.astro](/root/swip/src/pages/cotizar/index.astro:1)
- [src/components/Footer.astro](/root/swip/src/components/Footer.astro:1)
- [dist/sitemap-0.xml](/root/swip/dist/sitemap-0.xml:1)
