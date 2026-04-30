# SWIP SEO Premium Program

Fecha: 2026-04-30

Estado general: `Sprint 0 completado` / `Sprint 1 en arranque`

## Objetivo del programa

Reposicionar SWIP para capturar demanda orgánica de mayor valor alrededor de:

- autos de lujo
- autos blindados
- autos exóticos
- autos deportivos
- marcas premium
- búsquedas locales premium en CDMX y Querétaro

La lógica del programa no es competir primero por los términos genéricos más amplios, sino dominar clusters premium con mayor intención comercial y mejor ajuste al servicio real.

## Principios de ejecución

1. Una URL principal por intención.
2. Evitar canibalización entre lujo, blindados, exóticos, deportivos y marcas.
3. Priorizar keywords por valor de negocio, no solo por volumen.
4. Corregir primero fricción técnica y señales de baja calidad.
5. Medir desde Search Console, Bing Webmaster y Google Business Profile.

## Roadmap por sprints

### Sprint 0

Objetivo:

- cerrar estrategia, clusters y arquitectura objetivo

Estado:

- `completado`

Resultado esperado:

- backlog listo por clusters y prioridades P1/P2/P3

### Sprint 1

Objetivo:

- corregir la base técnica y estructural que hoy limita posicionamiento, calidad percibida e indexación útil

Estado:

- `en arranque`

Salida esperada:

- sitio sin errores internos críticos obvios
- decisión clara sobre URLs indexables vs no indexables
- backlog técnico P1 ejecutable
- capa base de confianza/entidad definida

### Sprint 2

Objetivo:

- dominar cluster `autos de lujo`

### Sprint 3

Objetivo:

- dominar cluster `autos blindados`

### Sprint 4

Objetivo:

- abrir cluster `autos exóticos` y validar estructura para `autos deportivos`

### Sprint 5

Objetivo:

- marcas premium y subclusters deportivos

### Sprint 6

Objetivo:

- SEO local premium para CDMX y Querétaro

### Sprint 7

Objetivo:

- autoridad, confianza y capa de entidad

### Sprint 8

Objetivo:

- optimización por datos reales de Search Console y conversiones

## Clusters estratégicos

### P1

- autos de lujo
- autos blindados
- autos exóticos
- Porsche
- BMW
- Mercedes-Benz
- Range Rover / Land Rover
- CDMX
- Querétaro

### P2

- autos deportivos
- Ferrari
- Lamborghini
- Bentley
- McLaren
- Rolls-Royce
- Suburban blindada
- Tahoe blindada
- AMG / BMW M / Audi RS

### P3

- keywords más finas por modelo exacto
- variantes locales más específicas
- contenidos derivados de queries reales en Search Console

## Sprint 1: alcance

Sprint 1 no se enfoca todavía en producir volumen de contenido. Se enfoca en quitar fricción técnica, cerrar errores de calidad y preparar el sitio para los clusters premium.

### Sprint goal

Dejar el sitio con base técnica limpia y decisiones estructurales claras para que el trabajo de clusters P1 no se desperdicie.

### Hallazgos técnicos ya confirmados

#### 1. Enlace interno roto a `/pre-owned/`

Confirmado en:

- [PreOwnedTeaser.astro](/root/swip/src/components/PreOwnedTeaser.astro:11)
- [PreOwnedTeaser.astro](/root/swip/src/components/PreOwnedTeaser.astro:60)
- [Page.astro](/root/swip/src/layouts/Page.astro:18)

Impacto:

- fuga de autoridad interna
- mala experiencia de usuario
- señal de calidad baja repetida en varias páginas indexables

Decisión requerida:

- crear `/pre-owned/` si es una vertical real
- o eliminar temporalmente esos enlaces del layout

#### 2. `/cotizar/` está en `noindex` y además es placeholder

Confirmado en:

- [cotizar/index.astro](/root/swip/src/pages/cotizar/index.astro:6)

Impacto:

- no puede capturar intención transaccional orgánica
- hoy funciona mejor como URL de conversión asistida, no como landing de posicionamiento

Decisión requerida:

- si seguirá incompleta, mantener `noindex`
- si será URL core de captación, convertirla en landing real y volverla indexable después

#### 3. Falta capa fuerte de entidad / confianza

Estado actual:

- ya existe base schema con `Organization` y `FinancialService`
- [Base.astro](/root/swip/src/layouts/Base.astro:29)

Falta:

- página clara de entidad / nosotros
- señal editorial más fuerte para contenido financiero
- mayor visibilidad de expertise, proceso y cobertura real

#### 4. Sitemap y robots están razonablemente bien

Confirmado en:

- [astro.config.mjs](/root/swip/astro.config.mjs:6)
- [robots.txt](/root/swip/public/robots.txt:1)

Lectura:

- no es la prioridad principal del sprint
- solo requiere validación final, no rehacer desde cero

#### 5. `llms.txt` sí existe

Confirmado en:

- [llms.txt](/root/swip/public/llms.txt:1)

Lectura:

- mantenerlo
- no priorizarlo por encima de señales que sí afectan SEO clásico y local

## Sprint 1 backlog

### Bloque A: calidad técnica P1

1. Resolver el caso `/pre-owned/`
   - prioridad: `alta`
   - dependencia: ninguna
   - criterio de salida: no quedan enlaces internos sitewide hacia una URL inexistente

2. Definir rol de `/cotizar/`
   - prioridad: `alta`
   - dependencia: alineación de negocio
   - criterio de salida: URL clasificada como `indexable` o `noindex` con una justificación clara

3. Validar indexabilidad de páginas comerciales clave
   - prioridad: `alta`
   - páginas foco:
     - `/`
     - `/prestamo-con-garantia-de-auto/`
     - `/prestamo-con-garantia-de-autos-de-lujo/`
     - `/prestamo-con-garantia-de-autos-blindados/`
     - `/prestamo-con-garantia-de-autos-exoticos/`
   - criterio de salida: canonical, meta robots, sitemap e intención alineados

4. Revisar enlazado interno de clusters premium
   - prioridad: `alta`
   - criterio de salida: homepage, páginas de servicio y blog empujan lujo, blindados y exóticos con lógica consistente

### Bloque B: entidad y confianza

5. Definir la URL de entidad
   - prioridad: `alta`
   - opciones:
     - `/nosotros/`
     - `/quienes-somos/`
     - `/por-que-swip/`
   - criterio de salida: URL definida en arquitectura

6. Definir los bloques mínimos de confianza que deben aparecer en sitio
   - prioridad: `alta`
   - mínimos:
     - quién opera SWIP
     - dónde opera
     - cómo se valúa
     - cómo se resguarda
     - qué cobertura tiene
   - criterio de salida: checklist aprobada para implementar en sprint siguiente

### Bloque C: medición y validación

7. Confirmar medición SEO base
   - prioridad: `alta`
   - herramientas:
     - Google Search Console
     - Bing Webmaster Tools
   - criterio de salida: propiedad y sitemap listos para seguimiento

8. Confirmar capa local
   - prioridad: `media`
   - herramienta:
     - Google Business Profile
   - criterio de salida: datos del sitio y del perfil alineables sin contradicción

### Bloque D: preparación para Sprint 2

9. Definir URL madre del cluster lujo
   - prioridad: `alta`
   - estado actual:
     - candidata: `/prestamo-con-garantia-de-autos-de-lujo/`
   - criterio de salida: URL confirmada como madre del cluster

10. Definir URL madre del cluster blindados
   - prioridad: `alta`
   - estado actual:
     - candidata: `/prestamo-con-garantia-de-autos-blindados/`
   - criterio de salida: URL confirmada como madre del cluster

11. Validar si `deportivos` necesita URL propia
   - prioridad: `media`
   - criterio de salida: decisión explícita para Sprint 4 o Sprint 5

## Definition of Done para Sprint 1

Sprint 1 se considera terminado cuando:

- no existen enlaces internos repetidos hacia `/pre-owned/` si la URL no existe
- `/cotizar/` tiene una decisión clara de estrategia SEO
- las páginas comerciales P1 tienen intención, indexabilidad y enlazado consistente
- queda definida la URL de entidad / confianza
- la medición base queda lista para seguimiento
- el sitio queda preparado para empujar el cluster `autos de lujo` en Sprint 2

## Riesgos

1. Querer rankear `/cotizar/` sin convertirla primero en una landing real.
2. Abrir demasiadas URLs por marca antes de consolidar clusters madre.
3. Mezclar `lujo`, `exóticos` y `deportivos` sin jerarquía clara.
4. Sobreinvertir en `llms.txt` mientras siguen vivos huecos técnicos simples.

## Siguiente paso inmediato

Ejecutar Sprint 1 en este orden:

1. decidir `/pre-owned/`
2. decidir `/cotizar/`
3. revisar alineación de indexabilidad en páginas P1
4. definir URL de entidad
5. dejar medición base lista

