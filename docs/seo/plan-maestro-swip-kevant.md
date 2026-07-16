# Plan maestro SEO — SWIP y Kevant

Estado: fase 1 completada con inventario público y local de ambos proyectos  
Fecha de corte: 2026-07-13  
Fuentes revisadas: repositorios `/root/swip` y `/root/kevant`, sitios públicos, `robots.txt` y sitemaps públicos  
Pendiente para cerrar prioridades: Google Search Console, GA4 y datos de leads/operaciones de ambos dominios

## 1. Decisión estratégica

SWIP y Kevant deben permanecer como dominios y marcas separados. No se crearán páginas nuevas que dupliquen intenciones ya cubiertas. La estrategia será:

1. Proteger y fortalecer las URLs que ya existen.
2. Asignar una sola URL principal a cada intención de búsqueda.
3. Reorganizar el contenido existente alrededor de pilares comerciales.
4. Crear contenido nuevo únicamente cuando exista un gap de intención, evidencia de demanda o una objeción comercial recurrente.
5. Conectar ambos dominios mediante enlaces editoriales útiles, no mediante reciprocidad automática.
6. Medir leads calificados y operaciones, además de tráfico y posiciones.

## 2. Inventario ejecutivo

### SWIP

- 40 artículos publicados y activos.
- 4 pilares comerciales ya construidos: garantía de auto, autos de lujo, autos blindados y autos exóticos.
- Páginas comerciales complementarias para resguardo, modalidad sin dejar el auto, ubicaciones y requisitos.
- Canonical, sitemap, breadcrumbs, `BlogPosting`, autor y CTA ya implementados.
- Interlinking existente, pero sin un modelo uniforme de cluster ni bloque de contenido relacionado.
- Taxonomía inconsistente: existen `Autos de lujo` y `Autos de Lujo` como categorías diferentes.
- `dateModified` replica la fecha de publicación; no existe una fecha independiente de actualización editorial.

### Kevant

- Repositorio local independiente localizado en `/root/kevant`.
- Código fuente del blog localizado en `/root/kevant/blog-src`.
- 39 URLs declaradas en `https://kevant.mx/sitemap.xml`.
- 28 artículos publicados en el sitemap.
- Pilares comerciales existentes para blindaje vehicular, blindaje residencial, vehículos certificados y renta.
- Contenido ya publicado sobre niveles, costo, duración, renta, certificación, mantenimiento y blindaje civil/militar.
- El sitemap correcto es `/sitemap.xml`; `/sitemap-index.xml` devuelve 404. Esto no es un error mientras `robots.txt` y Search Console apunten a `/sitemap.xml`.

## 3. Territorio de cada marca

| Tema | Propietario principal | Papel de la otra marca |
|---|---|---|
| Préstamo con garantía vehicular | SWIP | Kevant puede referir propietarios de blindados que necesitan liquidez |
| Valuación financiera y valor de garantía | SWIP | Kevant aporta evidencia técnica del estado del blindaje |
| Liquidez, buró, tasas, plazos y pagos | SWIP | Sin contenido duplicado en Kevant |
| Compra/venta desde la perspectiva patrimonial | SWIP | Kevant lidera certificación y condición técnica de blindados |
| Blindaje nuevo, niveles y materiales | Kevant | SWIP solo explica cómo afectan el valor de garantía |
| Mantenimiento y vida útil del blindaje | Kevant | SWIP enlaza cuando impacte una valuación |
| Renta con chofer o escolta | Kevant | SWIP no debe crear páginas equivalentes |
| Vehículos blindados certificados | Kevant | SWIP puede referir inventario o certificación relevante |
| Casos reales de valuación o financiamiento | SWIP | Kevant participa si el componente técnico es relevante |
| Casos reales de blindaje, certificación o mantenimiento | Kevant | SWIP participa si existe una operación financiera real |

## 4. Páginas pilar que se conservarán

### SWIP

| Cluster | URL principal | Decisión |
|---|---|---|
| Garantía vehicular | `/prestamo-con-garantia-de-auto/` | Conservar y convertir en hub central |
| Autos blindados | `/prestamo-con-garantia-de-autos-blindados/` | Conservar; no crear `/prestamos-autos-blindados/` |
| Autos de lujo | `/prestamo-con-garantia-de-autos-de-lujo/` | Conservar y ampliar navegación por modelo |
| Autos exóticos | `/prestamo-con-garantia-de-autos-exoticos/` | Conservar y ampliar evidencia de valuación |
| Requisitos | `/requisitos/` | Conservar como página transaccional; revisar solapamiento con el artículo del blog |
| Vehículos aceptados | `/vehiculos-que-aceptamos/` | Conservar; añadir criterios de rechazo si los datos comerciales lo respaldan |
| Valuación premium | Sin URL pilar dedicada | Validar demanda y canibalización antes de crear `/valuacion-autos-premium/` |

### Kevant

| Cluster | URL principal | Decisión |
|---|---|---|
| Blindaje vehicular | `/blindaje-vehicular/` | Conservar como hub principal |
| Vehículos certificados | `/vehiculos-blindados-certificados/` | Conservar como hub de compra/inventario |
| Renta | `/renta-vehiculo-blindado/` | Conservar como hub de renta |
| Blindaje residencial | `/blindaje-residencial/` | Mantener fuera del territorio editorial de SWIP |

## 5. Riesgos de canibalización que requieren datos de GSC

No se fusionará ni redirigirá ninguna URL antes de comparar consultas, impresiones, posición, enlaces y conversiones.

| Riesgo | URLs involucradas | Hipótesis a validar |
|---|---|---|
| Servicio vs definición | `/prestamo-con-garantia-de-auto/` y `/blog/que-es-un-prestamo-con-garantia-de-auto-en-mexico/` | Deben cubrir intención transaccional e informacional, respectivamente |
| Requisitos | `/requisitos/` y `/blog/requisitos-para-un-prestamo-con-garantia-de-auto/` | Puede ser conveniente consolidar el artículo en la página comercial |
| Empeño genérico | `/empeno-de-autos/` y `/blog/prestamo-con-garantia-vs-empeno-de-autos/` | Separar servicio/comparación; revisar consultas compartidas |
| Querétaro | `/prestamo-con-garantia-de-auto-en-queretaro/`, `/blog/empeno-de-autos-en-queretaro/` y `/blog/donde-valuan-autos-blindados-en-queretaro/` | Mantener solo si cada una responde a una intención local distinta |
| Blindados | Pilar de blindados y artículos sobre monto/valuación/documentos | El pilar debe resumir y distribuir; los artículos deben profundizar sin repetir secciones completas |
| Lujo vs premium | Pilares, artículos por modelo y valuación premium propuesta | No crear un nuevo hub hasta comprobar que tiene una intención propia |

## 6. Clusters actuales de SWIP

### Garantía vehicular y proceso

- `que-es-un-prestamo-con-garantia-de-auto-en-mexico`
- `prestamo-con-garantia-vs-empeno-de-autos`
- `requisitos-para-un-prestamo-con-garantia-de-auto`
- `cuanto-te-prestan-por-tu-auto-en-mexico`
- `que-vehiculos-premium-aplican-para-prestamo-con-garantia`
- `cuanto-tarda-el-proceso-para-auto-premium-blindado-exotico`
- `que-pasa-si-no-pago-un-prestamo-con-garantia-de-auto`
- `que-tan-recomendable-es-empenar-un-auto-de-lujo-o-blindado`
- `como-valuamos-un-auto-proceso-real`
- `por-que-libro-azul-no-sirve-autos-de-lujo`

Acción: enlazar cada artículo hacia el pilar correcto; añadir navegación entre pasos del proceso; revisar el solapamiento de requisitos.

### Autos blindados

- `cuanto-me-prestan-por-un-auto-blindado`
- `como-se-valua-un-auto-blindado`
- `documentos-para-empenar-o-dejar-en-garantia-un-auto-blindado`
- `puedo-seguir-usando-mi-auto-blindado-durante-el-prestamo`
- `cuanto-me-prestan-por-una-suburban-blindada`
- `cuanto-me-prestan-por-una-tahoe-blindada`
- `cuanto-me-prestan-por-una-escalade-blindada`
- `donde-valuan-autos-blindados-en-queretaro`

Acción: mantener en SWIP la perspectiva financiera; transferir a Kevant la profundidad técnica sobre mantenimiento, nivel, certificación y vida útil.

### Autos de lujo y SUVs premium

- `empeno-de-autos-de-lujo-vs-prestamo-con-garantia`
- `con-resguardo-o-sin-dejarlo-para-auto-de-lujo`
- `puedo-empenar-un-auto-de-lujo-si-aun-lo-estoy-pagando`
- `cuanto-me-prestan-por-una-range-rover`
- `cuanto-me-prestan-por-una-bmw-x7`
- `cuanto-me-prestan-por-una-mercedes-g63`
- `cuanto-me-prestan-por-un-audi-q8`
- `cuanto-me-prestan-por-un-land-rover-defender`
- `cuanto-me-prestan-por-una-porsche-cayenne`
- `donde-valuan-autos-de-lujo-a-domicilio-en-cdmx`

Acción: normalizar la categoría; crear navegación por marca/modelo y conectar cada modelo con valuación, modalidad y página comercial.

### Autos exóticos

- `cuanto-me-prestan-por-un-ferrari-o-lamborghini`
- `como-se-valua-un-auto-exotico`
- `que-baja-la-valuacion-de-un-auto-exotico-o-de-lujo`
- `cuanto-me-prestan-por-un-ferrari-488-o-f8`
- `cuanto-me-prestan-por-un-lamborghini-urus`
- `cuanto-me-prestan-por-un-porsche-911`

Acción: reforzar con fuentes de mercado, ejemplos reales anonimizados, versión, kilometraje, servicio y documentación.

### Casos de uso y comparativas

- `necesito-liquidez-urgente-tengo-un-auto`
- `no-pase-el-buro-y-tengo-un-auto-de-valor`
- `pagar-sat-deudas-urgentes-con-garantia-de-auto`
- `prestamo-con-garantia-de-auto-para-financiar-tu-negocio`
- `swip-vs-monte-de-piedad-vs-banco`

Acción: convertirlos en rutas de decisión con CTA específico y medición separada por caso de uso.

## 7. Inventario temático actual de Kevant

### Blindaje vehicular y niveles

- Niveles de blindaje vehicular en México.
- Nivel III vs nivel IV.
- Diferencia entre blindaje civil y militar.
- Cuánto cuesta blindar una camioneta.
- Cuánto tarda blindar un auto.
- Qué autos se pueden blindar.
- Blindaje vehicular para ejecutivos.

### Certificación, compra y mantenimiento

- Blindaje nuevo vs pre-owned.
- Cómo saber si el blindaje funciona.
- Qué revisa Kevant en una certificación.
- Señales de degradación.
- Cuánto dura el blindaje.
- Mantenimiento de un vehículo blindado.
- Garantía Kevant Shield.
- Ventajas de apartar un blindado en producción.

### Renta y empresas

- Renta de vehículo blindado en CDMX.
- Cuánto cuesta rentar un vehículo blindado.
- Vehículos blindados para empresas.

### Local

- Blindaje vehicular en CDMX.
- Cobertura CDMX, Querétaro, Toluca y Puebla.
- Landings comerciales de Toluca, Puebla y Estado de México.

### Residencial

- Qué incluye un blindaje residencial completo.
- Panic room: qué es y cuándo se necesita.
- Blindaje residencial vs alarma.
- Cuánto cuesta una panic room.
- Puertas blindadas.
- Ventanas y cristales balísticos.

Acción: no recrear estos temas. Auditar consultas y fortalecer los hubs existentes.

## 8. Backlog de contenido candidato

Este backlog no equivale a autorización de publicación. El orden final depende de GSC, demanda comercial y revisión experta.

### P0 — Optimización antes de publicar más

1. Normalizar categorías y navegación del blog de SWIP.
2. Añadir campo `updatedDate` real y mostrarlo solo cuando exista una revisión sustantiva.
3. Añadir bloque de artículos relacionados por cluster.
4. Crear mapa central de enlaces internos y detectar páginas huérfanas.
5. Diferenciar CTAs por intención: cotización, valuación, modalidad, blindado y caso de uso.
6. Revisar títulos y descripciones contra consultas reales de GSC.
7. Validar schema con Rich Results Test; no asumir que FAQ generará rich results.

### P1 — Candidatos de alta intención para SWIP

1. Costo total, intereses y tasas de un préstamo con garantía de auto.
2. Plazos, pagos y liquidación anticipada.
3. Valor comercial vs valor de garantía.
4. Qué vehículos no acepta SWIP y por qué.
5. Cómo afecta el kilometraje a la valuación de un auto premium.
6. Cómo afectan modificaciones y accesorios al valor de garantía.
7. Casos reales anonimizados de valuación y desembolso.

### P1 — Candidatos de alta intención para Kevant

1. Costo y mantenimiento de cristales balísticos.
2. Suspensión y frenos después del blindaje.
3. Cuánto cuesta mantener un vehículo blindado por año.
4. Checklist para comprar un blindado usado.
5. Comparativas por vehículo únicamente donde existan experiencia y demanda reales.
6. Casos reales de certificación, reparación o blindaje.

### P2 — Expansión condicionada a datos

- Nuevos modelos premium o exóticos para SWIP.
- Nuevas ciudades para ambas marcas.
- Comparativas entre vehículos para blindar.
- Contenido patrimonial, depreciación y reventa.
- Herramientas/calculadoras solo si entregan una estimación real y útil.

## 9. Política de enlaces SWIP ↔ Kevant

1. El enlace debe resolver una siguiente pregunta natural del lector.
2. No se crearán parejas recíprocas obligatorias.
3. Se utilizará anchor descriptivo y variable.
4. Uno o dos enlaces cruzados suelen ser suficientes, pero la regla es utilidad, no una cuota fija.
5. SWIP enlazará profundidad técnica de blindaje; Kevant enlazará liquidez y valor de garantía.
6. Los enlaces comerciales se etiquetarán en analítica con origen, artículo y CTA.
7. No se repetirá un bloque idéntico de enlaces en todos los artículos.

## 10. Medición mínima

### Eventos

- `seo_whatsapp_click`
- `seo_swipbot_start`
- `seo_quote_complete`
- `seo_lead_qualified`
- `seo_valuation_scheduled`
- `seo_operation_closed`
- `seo_kevant_quote_start`
- `seo_cross_domain_click`

### Parámetros

- `brand`
- `page_path`
- `content_cluster`
- `content_type`
- `cta_type`
- `vehicle_segment`
- `vehicle_model`
- `lead_source`
- `cross_domain_destination`

### KPIs

1. Leads orgánicos calificados.
2. Tasa de cotización completa.
3. Valuaciones agendadas.
4. Operaciones cerradas e ingreso atribuido.
5. CTR orgánico por página e intención.
6. Consultas en top 3, top 10 y top 20.
7. Páginas indexadas frente a páginas válidas esperadas.
8. Conversiones asistidas por contenido.

## 11. Datos necesarios para cerrar la matriz

Exportar de Search Console para cada dominio, con rango de 16 meses:

1. Consultas: consulta, clics, impresiones, CTR y posición.
2. Páginas: URL, clics, impresiones, CTR y posición.
3. Cruce consulta + página.
4. País y dispositivo.
5. Indexación de páginas y sitemaps.
6. Core Web Vitals.
7. Enlaces internos y externos.

Exportar de GA4/CRM:

1. Landing page orgánica.
2. Sesiones y usuarios orgánicos.
3. Eventos de WhatsApp, SwipBot y formularios.
4. Leads calificados.
5. Valuaciones/cotizaciones.
6. Operaciones e ingreso.

## 12. Plan de ejecución de 90 días

### Semanas 1–2 — Baseline y decisiones

- Incorporar exportaciones de GSC, GA4 y CRM.
- Construir matriz query–URL.
- Confirmar páginas a conservar, consolidar o reorientar.
- Definir baseline de conversiones.

### Semanas 3–4 — Fundamentos

- Normalizar taxonomía.
- Implementar fecha real de actualización.
- Implementar módulos de contenido relacionado.
- Corregir enlaces internos y páginas huérfanas.
- Diferenciar CTAs y eventos.

### Semanas 5–8 — Consolidación

- Actualizar primero las URLs con impresiones y posiciones 4–20.
- Reforzar los cuatro pilares actuales de SWIP.
- Reforzar los hubs existentes de Kevant.
- Publicar casos reales y evidencia propia.
- Añadir enlaces cruzados únicamente en artículos aprobados.

### Semanas 9–12 — Expansión validada

- Publicar gaps P1 confirmados por datos.
- Probar títulos/descripciones en páginas con impresiones altas y CTR bajo.
- Evaluar resultados por leads y operaciones.
- Decidir la siguiente expansión por modelos, ciudades o herramientas.

## 13. Criterios de aceptación

- Cada intención comercial tiene una única URL principal.
- Ninguna URL existente cambia sin evidencia y plan de redirección 301.
- Cada artículo pertenece a un cluster y enlaza a su pilar.
- Cada pilar enlaza a sus satélites más útiles.
- Cada CTA produce un evento medible.
- Cada contenido financiero o técnico tiene revisión experta y fuentes verificables.
- Las fechas de actualización representan cambios reales.
- El calendario editorial se prioriza por impacto comercial, ajuste con la marca, demanda y costo de producción.
- Los reportes muestran leads y operaciones, no únicamente tráfico.

## 14. Próxima decisión

La siguiente fase comienza al incorporar los exportes de Search Console y analítica. Sin esos datos se puede mejorar arquitectura y medición, pero no se deben tomar decisiones irreversibles de fusión, redirección ni creación masiva de contenido.
