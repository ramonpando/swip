# Auditoría técnica SEO — 3 de agosto de 2026

## Resultado ejecutivo

El sitio no presenta bloqueos técnicos evidentes para rastreo o indexación en
el build publicado. La prioridad inmediata no es crear más URLs, sino confirmar
en Google Search Console que el clúster empresarial publicado el 29 de julio ya
fue descubierto e indexado y comenzar a medir consultas y leads B2B.

## Validaciones completadas

- Build estático correcto: 74 páginas generadas.
- 71 páginas indexables y 3 páginas `noindex`.
- Sitemap generado y accesible en producción.
- `robots.txt` permite rastreo general y declara el sitemap.
- Todas las páginas tienen title, meta description, canonical y exactamente un
  H1.
- No hay titles, descriptions o canonicals duplicados entre páginas
  indexables.
- Todos los bloques JSON-LD del HTML generado son JSON válido.
- Todas las imágenes renderizadas tienen atributo `alt`.
- Cero enlaces internos rotos y cero páginas huérfanas.
- Las páginas `noindex` están fuera del sitemap.
- Las siete URLs del clúster empresarial responden `200` en producción.
- Homepage, Sociedad 52 y el sitemap también responden correctamente.

## Prioridad 1 — 5 de agosto

Revisar en Search Console las siguientes siete URLs:

1. `/financiamiento-con-inventario-vehicular/`
2. `/financiamiento-para-lotes-y-agencias-de-autos/`
3. `/capital-de-trabajo-para-blindadoras/`
4. `/blog/como-financiar-inventario-de-un-lote-de-autos/`
5. `/blog/plan-piso-vs-garantia-de-inventario-vehicular/`
6. `/blog/autos-propios-vs-consignacion-como-garantia/`
7. `/blog/como-financiar-una-empresa-blindadora/`

Para cada URL registrar:

- estado de indexación;
- última fecha de rastreo;
- canonical declarada y seleccionada por Google;
- impresiones, clics, CTR, posición y consultas nuevas;
- si fue necesario solicitar indexación.

Confirmar además que `https://swip.mx/sitemap-index.xml` figura como procesado
sin errores. Registrar una anotación de publicación del 29 de julio en el
sistema de medición utilizado por el equipo.

## Prioridad 2 — medición

- Crear o confirmar eventos separados para CTA empresarial y CTA de autos.
- Conservar UTM, `gclid`, landing de entrada y categoría de intención al migrar
  la conversación de WhatsApp.
- Clasificar manualmente cada lead empresarial por origen, tipo de empresa,
  unidades presentadas, monto solicitado y resultado del expediente.
- No evaluar el clúster únicamente con tráfico: la métrica principal es el lead
  empresarial calificado y su avance operativo.

## Prioridad 3 — 26 de agosto

Comparar los primeros 28 días posteriores a la publicación contra los 28 días
anteriores, separando:

- consultas de lote o agencia;
- inventario vehicular;
- plan piso;
- blindadoras;
- flotillas y capital de trabajo.

Solo después de revisar esos datos decidir cuál será la siguiente landing o
pieza de contenido. La propuesta inicial es priorizar el tema que acumule
impresiones relevantes entre posiciones 5 y 20, o que ya produzca leads
calificados aunque el volumen sea bajo.

## Automatización agregada

`npm run audit:seo` revisa el build local y falla ante regresiones en:

- metadata esencial;
- canonicalización;
- estructura H1;
- JSON-LD inválido;
- imágenes sin `alt`;
- duplicados;
- inconsistencias entre `noindex` y sitemap.

PageSpeed Insights no entregó un resultado durante esta revisión porque su API
pública devolvió cuota agotada. No se reporta un puntaje de rendimiento sin una
medición válida; queda pendiente repetir Lighthouse móvil.
