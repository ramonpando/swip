# Plan Editorial del Blog SWIP

Fecha: 2026-05-08

## Objetivo

Construir un cluster editorial que capture preguntas reales de alta intención sobre:

- empeño de autos de lujo
- autos blindados
- autos exóticos
- préstamo con garantía vehicular premium

Cada artículo debe:

- responder la pregunta principal en los primeros párrafos
- enlazar a una página comercial de SWIP
- enlazar a páginas operativas clave
- enlazar a otros artículos del blog
- cerrar con una CTA clara a valuación
- incluir nombre, dirección y teléfono de SWIP de forma consistente

## Regla editorial principal

Cada post responde una sola intención principal.

No escribir artículos ambiguos tipo:

- "todo sobre autos premium"
- "guía definitiva de vehículos especiales"

Sí escribir artículos centrados en preguntas concretas como:

- "¿Cuánto me prestan por un auto blindado?"
- "¿Cómo se valúa un Ferrari para un préstamo con garantía?"

## Datos canónicos de SWIP

Usar siempre la misma versión base del NAP dentro del blog:

- Nombre: `SWIP`
- Dirección: `Pje. Interlomas 6, Naucalpan de Juárez, Estado de México, C.P. 52787`
- Teléfono / WhatsApp: `55 5405 5089`
- Email de apoyo cuando aplique: `patricia_bernal@swip.mx`

Fuente interna:

- [Base.astro](/root/swip/src/layouts/Base.astro:34)
- [contacto/index.astro](/root/swip/src/pages/contacto/index.astro:1)

## Regla NAP para todos los blogs

Todos los artículos deben incluir una sección breve y visible al final, antes del CTA o integrada al cierre editorial.

Formato recomendado:

`SWIP`

`Pje. Interlomas 6, Naucalpan de Juárez, Estado de México, C.P. 52787`

`WhatsApp / Teléfono: 55 5405 5089`

`Atención en CDMX y Querétaro`

Esto ayuda por:

- consistencia de entidad
- confianza para el usuario
- refuerzo local
- coherencia entre blog, contacto y schema

No conviene meter un bloque demasiado largo en todos los posts. Debe ser corto, limpio y repetible.

## Estructura obligatoria por artículo

### 1. Apertura

Primer párrafo:

- repetir la pregunta de forma natural
- responderla de manera directa en 1 a 3 frases
- si aplica, incluir rango, criterio o condición principal

Segundo párrafo:

- explicar de qué depende la respuesta
- preparar el enlace a la landing comercial correcta

Ejemplo de patrón:

"Sí, un auto blindado puede respaldar un préstamo significativamente mayor que el mismo vehículo sin blindaje, pero el monto depende del valor del auto base, el nivel de blindaje y la documentación disponible. Cuando la valuación reconoce ambos componentes, la diferencia puede ser importante."

### 2. Desarrollo

Usar H2s funcionales, no genéricos. Por ejemplo:

- De qué depende el monto
- Qué revisa el valuador
- Qué documentos cambian el resultado
- Cuándo conviene con resguardo
- Qué errores bajan la oferta

### 3. Interlinks

Mínimo por post:

- 1 enlace a la landing comercial principal
- 1 enlace a una página operativa
- 2 enlaces a otros posts relacionados
- 1 enlace a contacto o cotización

### 4. Cierre

Cerrar con:

- mini resumen de la respuesta
- siguiente paso claro
- bloque NAP de SWIP

## Reglas SEO por artículo

- Una keyword principal por URL
- Variantes semánticas solo si apoyan la misma intención
- Título H1 con la pregunta o su versión más buscable
- Meta description con respuesta resumida y contexto premium
- Primeros 120 palabras deben resolver la intención
- Evitar introducciones largas
- Evitar repetir "SWIP" de forma forzada
- Evitar canibalizar la landing comercial

## Regla de enlace bidireccional

Cada vez que se publica un post nuevo, se deben actualizar las páginas relacionadas para que también enlacen al post.

Esto incluye:

- la landing comercial principal del cluster
- posts existentes del mismo cluster que tengan contexto relacionado
- la página de `/preguntas-frecuentes/` si el post responde una objeción clave

No basta con que el post enlace hacia afuera. La malla funciona cuando el tráfico también puede llegar al post desde las páginas de dinero.

## Regla anti-canibalización

### Las landings venden

Deben quedarse con intención transaccional principal:

- `/prestamo-con-garantia-de-autos-de-lujo/`
- `/prestamo-con-garantia-de-autos-blindados/`
- `/prestamo-con-garantia-de-autos-exoticos/`

### El blog responde dudas

Debe capturar:

- cuánto me prestan
- cómo se valúa
- qué documentos necesito
- qué pasa si no pago
- puedo seguir usándolo
- conviene con resguardo o sin dejarlo
- aplica si aún lo estoy pagando

## Prioridades editoriales

### Sprint 1: blindados y exóticos con intención alta

1. `¿Cuánto me prestan por un auto blindado?`
Slug sugerido: `cuanto-me-prestan-por-un-auto-blindado`
Keyword principal: `cuánto me prestan por un auto blindado`
Interlink principal: `/prestamo-con-garantia-de-autos-blindados/`

2. `¿Cómo se valúa un auto blindado?`
Slug sugerido: `como-se-valua-un-auto-blindado`
Keyword principal: `cómo se valúa un auto blindado`
Interlink principal: `/prestamo-con-garantia-de-autos-blindados/`

3. `¿Qué documentos necesito para un auto blindado?`
Slug sugerido: `documentos-para-empenar-o-dejar-en-garantia-un-auto-blindado`
Keyword principal: `requisitos auto blindado préstamo garantía`
Interlink principal: `/requisitos/`

4. `¿Cuánto me prestan por un Ferrari o Lamborghini?`
Slug sugerido: `cuanto-me-prestan-por-un-ferrari-o-lamborghini`
Keyword principal: `cuánto me prestan por un Ferrari`
Interlink principal: `/prestamo-con-garantia-de-autos-exoticos/`

5. `¿Cómo se valúa un auto exótico?`
Slug sugerido: `como-se-valua-un-auto-exotico`
Keyword principal: `cómo se valúa un auto exótico`
Interlink principal: `/prestamo-con-garantia-de-autos-exoticos/`

### Sprint 2: objeciones y decisión

6. `¿Puedo seguir usando mi auto blindado durante el préstamo?`
Slug sugerido: `puedo-seguir-usando-mi-auto-blindado-durante-el-prestamo`
Interlink principal: `/prestamo-con-garantia-de-auto-sin-dejarlo/`

7. `¿Qué conviene más para un auto de lujo: con resguardo o sin dejarlo?`
Slug sugerido: `auto-de-lujo-con-resguardo-o-sin-dejarlo`
Interlink principal: `/prestamo-con-garantia-de-auto-con-resguardo/`

8. `¿Puedo empeñar un auto de lujo si aún lo estoy pagando?`
Slug sugerido: `puedo-empenar-un-auto-de-lujo-si-aun-lo-estoy-pagando`
Interlink principal: `/prestamo-con-garantia-de-auto/`

9. `¿Qué pasa si no pago un préstamo con garantía de auto de lujo?`
Slug sugerido: `que-pasa-si-no-pago-un-prestamo-con-garantia-de-auto-de-lujo`
Interlink principal: `/preguntas-frecuentes/`

10. `¿Cuánto tarda el proceso para un auto premium, blindado o exótico?`
Slug sugerido: `cuanto-tarda-el-proceso-para-un-auto-premium-o-blindado`
Interlink principal: `/como-funciona/`

### Sprint 3: marcas y modelos

11. `¿Cuánto me prestan por una Suburban blindada?`
12. `¿Cuánto me prestan por una Tahoe blindada?`
13. `¿Cuánto me prestan por una Range Rover?`
14. `¿Cuánto me prestan por una Mercedes G63?`
15. `¿Cuánto me prestan por una BMW X7?`
16. `¿Cuánto me prestan por un Porsche 911?`
17. `¿Cuánto me prestan por un Ferrari 488 o F8?`
18. `¿Cuánto me prestan por un Lamborghini Urus?`

## Plantilla de contenido por post

### Bloque 1

- H1 con la pregunta
- respuesta directa
- contexto de 1 a 2 párrafos

### Bloque 2

H2: `De qué depende el monto`

- año
- versión
- kilometraje
- condición
- segmento
- documentación
- en blindados: nivel y certificación
- en exóticos: historial, configuración, mercado

### Bloque 3

H2: `Qué puede subir o bajar la oferta`

### Bloque 4

H2: `Qué modalidad suele convenir`

- con resguardo
- sin dejarlo

### Bloque 5

H2: `Qué sigue si quieres una valuación real`

- enlace a landing
- enlace a contacto
- bloque NAP

## Matriz base de interlinks

### Cluster blindados

Todos los posts de blindados deben enlazar a:

- `/prestamo-con-garantia-de-autos-blindados/`
- `/prestamo-con-garantia-de-auto-con-resguardo/`
- `/requisitos/`
- al menos 2 posts de blindados

### Cluster exóticos

Todos los posts de exóticos deben enlazar a:

- `/prestamo-con-garantia-de-autos-exoticos/`
- `/prestamo-con-garantia-de-auto-con-resguardo/`
- `/como-funciona/`
- al menos 2 posts de exóticos

### Cluster lujo

Todos los posts de lujo deben enlazar a:

- `/prestamo-con-garantia-de-autos-de-lujo/`
- `/prestamo-con-garantia-de-auto/`
- `/preguntas-frecuentes/`
- al menos 2 posts de lujo

## Regla de calidad para responder preguntas

No basta con mencionar el tema. Cada artículo debe:

- contestar la pregunta en serio
- decir de qué depende la respuesta
- explicar qué cambia en la práctica
- orientar al usuario a la siguiente acción correcta

No escribir respuestas huecas como:

- "depende de varios factores"
- "cada caso es diferente"
- "contáctanos para saber más"

Sí escribir respuestas concretas como:

- qué factores importan más
- qué escenarios suben o bajan el monto
- qué modalidad suele aplicar mejor
- qué documento o condición destraba el caso

## Criterio para FAQs dentro de los artículos

Agregar mini FAQs solo si:

- resuelven objeciones secundarias
- no desvían la intención principal
- ayudan a capturar variantes long-tail

Máximo recomendado:

- 3 a 5 FAQs por post

## Siguiente paso

Orden recomendado de producción inmediata:

1. `cuanto-me-prestan-por-un-auto-blindado`
2. `como-se-valua-un-auto-blindado`
3. `cuanto-me-prestan-por-un-ferrari-o-lamborghini`
4. `como-se-valua-un-auto-exotico`
5. `auto-de-lujo-con-resguardo-o-sin-dejarlo`

## Decisión editorial ya cerrada

Sí: todos los blogs deben llevar nombre, dirección y teléfono de SWIP.

La forma correcta es:

- bloque NAP breve y consistente
- mismo formato en todos los posts
- sin romper el flujo editorial
- alineado con contacto, schema y entidad del sitio

## Checklist adicional: SEO, GEO local y LLMs

Esto no depende solo del copy del artículo. Son puntos que también deben revisarse para que el blog sí empuje posicionamiento y visibilidad en buscadores y sistemas con IA.

### SEO clásico

- definir una keyword principal por post antes de escribir
- evitar dos posts compitiendo por la misma intención
- asegurar title y meta description únicos
- usar una sola H1 por artículo
- responder la pregunta principal en las primeras 120 palabras
- añadir enlaces internos hacia páginas de dinero y páginas operativas
- evitar anchors repetidos exactamente igual en todos los enlaces
- revisar que cada post tenga canonical correcto
- mantener slugs cortos y claros
- incluir alt text útil si se agregan imágenes
- no dejar posts huérfanos; cada post nuevo debe recibir enlaces desde otros posts o desde páginas relevantes
- agregar `Article` schema en todos los posts
- agregar `FAQPage` schema cuando el post incluya mini FAQs
- actualizar las landings comerciales relacionadas para que enlacen al nuevo post (la relación debe ser bidireccional)

### GEO / SEO local

- mantener NAP idéntico en blog, contacto, schema y perfiles externos
- mencionar cobertura real: `CDMX` y `Querétaro` cuando sea natural
- conectar posts relevantes con `/prestamo-con-garantia-de-auto-en-cdmx/` y `/prestamo-con-garantia-de-auto-en-queretaro/`
- usar ejemplos locales reales solo si reflejan la operación de SWIP
- reforzar señales de servicio local en temas donde aplique: valuación a domicilio, cobertura, tiempos, zonas atendidas
- revisar que Google Business Profile tenga exactamente los mismos datos base del sitio

### GEO local — posts de cobertura geográfica

Cuando se publiquen posts locales (CDMX, Querétaro), incluir siempre:

- tiempo de respuesta real de SWIP en esa zona
- si se hace valuación a domicilio, decirlo explícitamente
- zonas o colonias que cubren si se conocen
- cómo agendar en esa ciudad (WhatsApp, teléfono, dirección)

Sin esos datos, el post queda delgado y no compite con intención local real.

### LLMs / discoverability adicional

- mantener `llms.txt` y `llms-full.txt` actualizados cuando entren nuevos clusters o páginas importantes
- asegurar que los artículos tengan lenguaje directo y claramente extractable en el primer bloque
- incluir listas, definiciones y respuestas concretas que sean fáciles de citar
- evitar párrafos demasiado vagos o publicitarios en la apertura
- mantener estructura semántica limpia con H2s descriptivos
- reforzar entidad consistente de SWIP: nombre, teléfono, dirección, cobertura y especialización
- enlazar cada post a la página comercial correcta para que la relación entre pregunta y servicio sea obvia

### Cosas que suelen olvidarse y sí pegan

- publicar varios posts sin malla de interlinks
- repetir la misma respuesta en FAQ, landing y blog sin diferenciar intención
- escribir artículos largos que tardan demasiado en responder
- no actualizar `llms.txt` después de abrir nuevos clusters
- no revisar si el post realmente empuja a una URL transaccional
- dejar posts sin contexto local cuando el usuario sí tiene intención geográfica

## Regla final de publicación

Ningún post se publica si no cumple este mínimo:

- responde la pregunta en el inicio
- tiene interlinks completos
- incluye bloque NAP de SWIP
- empuja a una landing comercial correcta
- no canibaliza otro post o landing
- puede entenderse rápido por humano, buscador y LLM
- tiene `Article` schema (y `FAQPage` si aplica)
- la landing del cluster fue actualizada para enlazar de vuelta al post

## Backlog semanal de publicación

Cadencia recomendada:

- `3 blogs por semana`

Es un ritmo suficientemente agresivo para abrir cluster, pero todavía controlable para mantener calidad, interlinks y consistencia editorial.

Si el equipo tiene capacidad alta, se puede subir a:

- `4 blogs por semana`

No recomiendo arrancar con más de 4 por semana si todavía vamos a afinar estructura, enlazado interno y actualización de `llms.txt`.

## Plan de 8 semanas

### Semana 1

Objetivo:

- abrir cluster blindados con intención alta

Publicaciones:

1. `¿Cuánto me prestan por un auto blindado?`
2. `¿Cómo se valúa un auto blindado?`
3. `¿Qué documentos necesito para un auto blindado?`

Meta de interlink:

- los 3 posts deben enlazarse entre sí
- todos deben enlazar a `/prestamo-con-garantia-de-autos-blindados/`
- al menos 2 deben enlazar a `/requisitos/`

### Semana 2

Objetivo:

- abrir cluster exóticos con intención alta

Publicaciones:

1. `¿Cuánto me prestan por un Ferrari o Lamborghini?`
2. `¿Cómo se valúa un auto exótico?`
3. `¿Qué baja la valuación de un auto exótico o de lujo?`

Meta de interlink:

- los 3 posts deben enlazarse entre sí
- todos deben enlazar a `/prestamo-con-garantia-de-autos-exoticos/`
- al menos 2 deben enlazar a `/prestamo-con-garantia-de-auto-con-resguardo/`

### Semana 3

Objetivo:

- atacar objeciones operativas y de modalidad

Publicaciones:

1. `¿Puedo seguir usando mi auto blindado durante el préstamo?`
2. `¿Qué conviene más para un auto de lujo: con resguardo o sin dejarlo?`
3. `¿Cuánto tarda el proceso para un auto premium, blindado o exótico?`

Meta de interlink:

- todos enlazan a `/como-funciona/`
- al menos 2 enlazan a `/prestamo-con-garantia-de-auto-sin-dejarlo/`
- al menos 2 enlazan a `/prestamo-con-garantia-de-auto-con-resguardo/`

### Semana 4

Objetivo:

- cubrir objeciones de riesgo y filtros de calificación

Publicaciones:

1. `¿Puedo empeñar un auto de lujo si aún lo estoy pagando?`
2. `¿Qué pasa si no pago un préstamo con garantía de auto de lujo?`
3. `¿Qué vehículos premium sí aplican y cuáles no?`

Meta de interlink:

- todos enlazan a `/prestamo-con-garantia-de-auto/`
- al menos 2 enlazan a `/preguntas-frecuentes/`
- al menos 1 enlaza a `/vehiculos-que-aceptamos/`

### Semana 5

Objetivo:

- abrir subcluster de blindados por modelo

Publicaciones:

1. `¿Cuánto me prestan por una Suburban blindada?`
2. `¿Cuánto me prestan por una Tahoe blindada?`
3. `¿Cuánto me prestan por una Escalade blindada?`

Meta de interlink:

- todos enlazan a `/prestamo-con-garantia-de-autos-blindados/`
- todos enlazan al post madre `cuanto-me-prestan-por-un-auto-blindado`
- al menos 2 enlazan al post `como-se-valua-un-auto-blindado`

### Semana 6

Objetivo:

- abrir subcluster lujo por modelos de alta demanda

Publicaciones:

1. `¿Cuánto me prestan por una Range Rover?`
2. `¿Cuánto me prestan por una BMW X7?`
3. `¿Cuánto me prestan por una Mercedes G63?`

Meta de interlink:

- todos enlazan a `/prestamo-con-garantia-de-autos-de-lujo/`
- todos enlazan al post de modalidad `auto-de-lujo-con-resguardo-o-sin-dejarlo`
- al menos 2 enlazan a `/como-funciona/`

### Semana 7

Objetivo:

- abrir subcluster exóticos por modelos/marcas

Publicaciones:

1. `¿Cuánto me prestan por un Ferrari 488 o F8?`
2. `¿Cuánto me prestan por un Lamborghini Urus?`
3. `¿Cuánto me prestan por un Porsche 911?`

Meta de interlink:

- todos enlazan a `/prestamo-con-garantia-de-autos-exoticos/`
- todos enlazan al post `como-se-valua-un-auto-exotico`
- al menos 2 enlazan a `/prestamo-con-garantia-de-auto-con-resguardo/`

### Semana 8

Objetivo:

- reforzar cobertura local y cerrar huecos de intención

Publicaciones:

1. `¿Dónde valúan autos de lujo a domicilio en CDMX?`
2. `¿Dónde valúan autos blindados en Querétaro?`
3. `¿Qué tan recomendable es empeñar un auto de lujo o blindado?`

Meta de interlink:

- enlazar a `/prestamo-con-garantia-de-auto-en-cdmx/`
- enlazar a `/prestamo-con-garantia-de-auto-en-queretaro/`
- enlazar a `/contacto/`

## Formato operativo del backlog

Para cada semana conviene trabajar así:

### Lunes

- cerrar keywords
- validar slugs
- decidir interlinks exactos

### Martes y miércoles

- redactar 2 artículos

### Jueves

- redactar 1 artículo
- revisión SEO y GEO

### Viernes

- subir artículos
- actualizar enlaces cruzados en landings y posts relacionados
- actualizar `llms.txt` y `llms-full.txt` si entra un cluster nuevo o una página nueva importante
- revisar Google Search Console: impresiones y clics de los posts publicados esa semana y la anterior

## KPI editorial mínimo por semana

- `3 artículos publicados`
- `0 artículos huérfanos`
- `100% artículos con NAP`
- `100% artículos con landing principal enlazada`
- `100% artículos con respuesta directa en la introducción`
- `100% artículos con Article schema`
- `100% landings del cluster actualizadas con enlace al nuevo post`
- `Search Console revisado cada viernes`

## Priorización si una semana no alcanza el tiempo

Si solo salen 2 artículos, la prioridad correcta es:

1. publicar primero artículos de `pregunta + monto`
2. después artículos de `pregunta + valuación`
3. al final artículos de `pregunta + objeción`

Orden de valor:

- monto
- valuación
- modalidad
- requisitos
- riesgo
- local
