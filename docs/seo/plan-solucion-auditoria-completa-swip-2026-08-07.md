# Plan de solución de la auditoría SEO completa de SWIP

**Sitio:** https://swip.mx/

**Fecha:** 7 de agosto de 2026

**Horizonte:** 90 días

**Baseline revisado:** 79/100

**Meta a 90 días:** 86/100 o superior

**URL comercial prioritaria:** `/empeno-de-autos/`

## 1. Objetivo

Resolver los hallazgos comprobados de la auditoría completa sin dedicar tiempo a falsos positivos. El plan prioriza confianza financiera, respaldo de claims, rendimiento verificable, diferenciación de intenciones, autoridad demostrable y citabilidad GEO.

La métrica final no es el score: es aumentar operaciones calificadas procedentes o asistidas por tráfico orgánico sin crear riesgo legal, reputacional o de conversión.

## 2. Reglas de ejecución

1. No cambiar tasas, plazos, registros, contratos ni afirmaciones regulatorias sin validación de Legal/SWIP.
2. No crear testimonios, certificaciones, afiliaciones, casos ni datos que no puedan demostrarse.
3. No eliminar ni redirigir URLs sin evidencia de canibalización en Search Console.
4. `/empeno-de-autos/` conserva la propiedad de la keyword principal.
5. Cada cifra sensible debe tener condición, periodo, metodología o fuente junto a la afirmación.
6. Todo cambio debe pasar build, auditorías internas, revisión visual y verificación en producción.

### 2.1 Cruce con los planes anteriores y precedencia

Este documento coordina la remediación de la auditoría completa, pero no sustituye indiscriminadamente los planes anteriores. La precedencia queda así:

1. `plan-rector-empeno-de-autos-2026-08.md` conserva la autoridad sobre keyword, URL propietaria, arquitectura comercial y conversión.
2. Este plan conserva la autoridad sobre la secuencia consolidada de remediación del audit.
3. `plan-remediacion-seo-tecnico-2026-08-07.md` conserva estados y criterios detallados de sus tickets técnicos.
4. `backlinks-operacion-2026-08.md` conserva el tracker y proceso operativo de autoridad externa.
5. `plan-maestro-swip-kevant.md` conserva la separación temática entre marcas y la política de enlaces cruzados; su antigua prioridad para `/prestamo-con-garantia-de-auto/` ya fue sustituida por el plan rector.
6. `geo-plan-2026-04-30.md` y `blog-plan-2026-05-08.md` se conservan como antecedentes. Sus inventarios iniciales y calendarios de publicación están desactualizados porque el sitio ya tiene 48 posts y la mayor parte de aquel backlog fue ejecutada.

| Plan anterior | Estado al cruzarlo | Relación con este plan |
|---|---|---|
| Plan rector de empeño de autos | Vigente | IA-01 e IA-02 ejecutan su mapa sin cambiar la URL propietaria. La mejora visual pendiente de `/empeno-de-autos/` sigue gobernada por el plan rector. |
| Remediación técnica | Vigente y parcialmente ejecutado | PERF-05 cierra la validación de PERF-01–04/QA-04; CLAIM-02 continúa CONTENT-01 y TRUST-02; SCHEMA-03/04 continúan SCHEMA-01; IA-02 incorpora LINKS-01. |
| Backlinks operativo | Vigente | AUTH-01 no crea otro proceso: ejecuta BLK-03 a BLK-10 sobre el tracker existente. |
| Maestro SWIP–Kevant | Vigente solo en territorio y medición | KPI-01/KPI-02 incorporan su baseline; se mantiene la separación financiera SWIP vs técnica de blindaje Kevant. |
| GEO abril 2026 | Histórico | Pre-Owned, autoría y cobertura editorial ya cambiaron; se conservan consistencia de entidad, GBP, respuestas directas y `llms.txt` como complemento. |
| Blog mayo 2026 | Backlog mayormente ejecutado | CONTENT-02/03 y FRESH-01 sustituyen la cadencia de publicación por una fase de consolidación, fuentes y diferenciación. |

Los siguientes pendientes continúan abiertos en el plan técnico y no se duplican aquí: `AGENT-01`, `SEC-01`, `MAIL-01`, `SITEMAP-01`, `MEDIA-01` y `QA-01` a `QA-04`. Deben permanecer en su backlog original hasta cierre o descarte documentado.

## 3. Qué no se va a corregir

Los siguientes avisos del runner fueron falsos positivos o prioridades mal calibradas:

- Las 71 discrepancias de canonical: el parser leyó `/llms-full.txt` como canonical.
- Autor y fechas ausentes en el blog: existen mediante el layout.
- Hero legacy: el navegador recibe WebP responsive; JPG es fallback.
- `alt=""` del hero decorativo y `alt="SWIP"` de los logos.
- Falta de credenciales CrUX/PageSpeed como error del sitio.
- IndexNow como prioridad alta.
- Portada sin suficiente contenido: supera ampliamente el umbral orientativo.

No se crearán tickets para esos avisos.

## 4. Plan por fases

### Fase 0 — Control y decisiones, días 1–3

Objetivo: crear la fuente de verdad antes de cambiar contenido financiero.

| ID | Acción | Responsable | Dependencia | Criterio de cierre |
|---|---|---|---|---|
| GOV-01 | Determinar la figura operativa y los disclosures, registros, contrato y autoridad que legalmente aplican a SWIP. | Legal/SWIP | Documentos corporativos y modelo contractual | Memorando aprobado con texto publicable, folios y enlaces oficiales aplicables. |
| CLAIM-01 | Inventariar claims de tasa, monto, tiempo, buró, seguridad, valuación y comparaciones en las 71 URLs. | Codex | Ninguna | CSV o Markdown con claim, URL, fuente, condición, propietario y estado. |
| DATA-01 | Definir las fuentes internas autorizadas para rangos de valuación y tiempos operativos. | SWIP/Operaciones | Acceso a datos reales | Diccionario de datos con periodo, muestra, responsable y restricciones de publicación. |
| KPI-01 | Registrar baseline de GSC y GA4 para orgánico y conversiones. | SWIP/Codex | Acceso GSC y GA4 | Export reproducible de 28 días por consulta, URL, dispositivo, lead y conversión. |
| PERF-05 | Ejecutar tres Lighthouse móviles live comparables sobre `/` y `/empeno-de-autos/`. | Codex | Deployment actual estable | Mediana documentada de tres corridas por URL y comparación con baseline. |

#### Entregable de Fase 0

- Matriz de claims.
- Dictamen operativo/legal para disclosures.
- Baseline de búsqueda y conversión.
- Baseline de rendimiento posterior al despliegue.

No se debe iniciar CLAIM-02 ni YMYL-01 hasta cerrar GOV-01 y DATA-01.

### Fase 1 — Confianza y claims, días 4–10

Objetivo: eliminar el mayor riesgo YMYL y mejorar conversión por confianza.

| ID | Acción | Archivos o superficie | Criterio de aceptación |
|---|---|---|---|
| YMYL-01 | Publicar disclosures y referencias oficiales aprobadas. | `src/pages/empeno-de-autos/index.astro`, `src/pages/terminos-de-uso/index.astro`, footer o página institucional | Razón social, contacto, condiciones y registros aplicables visibles, exactos y enlazados. |
| CLAIM-02 | Corregir la comparativa SWIP vs Monte de Piedad vs banco. | `src/content/blog/swip-vs-monte-de-piedad-vs-banco.md` | Cada comparación tiene fuente, fecha, alcance y lenguaje no absoluto; ninguna ventaja se presenta sin evidencia. |
| CLAIM-03 | Normalizar el claim “desde 4.5% mensual”. | `/empeno-de-autos/`, landings locales y FAQs | Tasa acompañada de condiciones, base de cálculo y ejemplo representativo aprobado; no se confunde con costo total. |
| CLAIM-04 | Normalizar “en minutos”, “menos de 24 horas” y “sin buró”. | Páginas comerciales y posts prioritarios | Cada claim aclara el hito exacto y sus condiciones; metadata y cuerpo coinciden. |
| YMYL-02 | Actualizar aviso de privacidad y términos conforme a revisión legal. | `src/pages/aviso-de-privacidad/index.astro`, `src/pages/terminos-de-uso/index.astro` | Responsable, finalidades, transferencias, ARCO, tecnologías y fecha de actualización aprobados. |
| ENTITY-01 | Alinear LinkedIn corporativo con la propuesta actual. | Perfil externo `linkedin.com/company/swip-mx` | Descripción consistente con liquidez respaldada por vehículos; servicios, ubicación y URL actualizados. |

#### Orden editorial de corrección

1. `/empeno-de-autos/`.
2. `/prestamo-con-garantia-de-auto/`.
3. Homepage.
4. Páginas CDMX y Querétaro.
5. `swip-vs-monte-de-piedad-vs-banco.md`.
6. Posts de urgencia, SAT, “sin buró” y rangos por modelo.

### Fase 2 — Arquitectura, schema, UX y seguridad, días 11–21

Objetivo: aclarar entidades e intenciones sin crear URLs nuevas.

| ID | Acción | Archivos principales | Criterio de aceptación |
|---|---|---|---|
| IA-01 | Separar el papel de las tres páginas principales. | `src/pages/index.astro`, `src/pages/empeno-de-autos/index.astro`, `src/pages/prestamo-con-garantia-de-auto/index.astro` | Homepage = marca; empeño = intención transaccional; préstamo = explicación financiera. Titles, H1, primeros bloques y enlaces reflejan el mapa. |
| IA-02 | Revisar enlazado y anchors tras la separación. | Navegación, footer, `RelatedLinks`, posts del clúster | `/empeno-de-autos/` mantiene prioridad sin repetir anchor exacto artificialmente. |
| SCHEMA-03 | Añadir `WebPage` a la homepage. | `src/layouts/Base.astro` o `src/pages/index.astro` | Nodo con `@id`, `isPartOf`, `about`, `mainEntity` y `primaryImageOfPage`; sin duplicar `Organization`. |
| SCHEMA-04 | Estabilizar entidades de producto financiero. | Layouts de páginas comerciales | `LoanOrCredit` y `Service` tienen `@id` estable y relaciones consistentes con `FinancialService`. |
| UX-01 | Corregir objetivos táctiles. | `src/components/Nav.astro`, modal/chat y CSS | Menú, cierres y controles principales tienen área mínima de 48×48 px sin regresión visual. |
| SEC-02 | Configurar headers de seguridad. | `vercel.json` o configuración equivalente | CSP primero en Report-Only, `nosniff`, Referrer-Policy, Permissions-Policy y `frame-ancestors`; Analytics, Partytown, WhatsApp, ChatFlow e inventario siguen funcionando. |
| ROBOTS-01 | Hacer explícita la política de `/lp/` por crawler. | `public/robots.txt` | La intención para `/lp/` es consistente entre wildcard y grupos específicos; no se usa `Disallow` como sustituto de `noindex`. |

No se redirigirá ninguna de las tres páginas principales durante esta fase. Primero se medirá el efecto de diferenciarlas.

### Fase 3 — E-E-A-T, contenido y GEO, días 22–45

Objetivo: convertir experiencia declarada en evidencia citable.

| ID | Acción | Archivos o entregable | Criterio de aceptación |
|---|---|---|---|
| EEAT-01 | Reforzar la página de Ramon Pando. | `src/pages/autor/ramon-pando/index.astro` | Trayectoria verificable, rol, experiencia relevante, perfiles confirmados y límites claros; sin credenciales no demostrables. |
| EEAT-02 | Convertir la metodología de valuación en pieza de referencia. | `src/content/blog/como-valuamos-un-auto-proceso-real.md` | Responsable, fecha, muestra o alcance, criterios, fuentes, limitaciones y evidencia visual autorizada. |
| EEAT-03 | Crear dos casos anonimizados. | Nuevas piezas solo con datos aprobados | Cada caso incluye contexto, vehículo, fecha, modalidad, valuación, LTV, resultado y privacidad validada. |
| CONTENT-02 | Añadir citas inline a los 15 posts de mayor riesgo/valor. | Blog financiero, comparativas y rangos por modelo | Cada cifra material tiene fuente o etiqueta de dato propio con metodología y fecha de corte. |
| CONTENT-03 | Revisar el clúster “cuánto me prestan por…”. | Posts por modelo | Cada URL conserva información realmente específica; consolidar o reescribir las que solo repiten plantilla. |
| FRESH-01 | Corregir freshness artificial. | Frontmatter de 17 posts con `updatedDate: 2026-08-07` | `dateModified` cambia solo por actualización material; las piezas prioritarias muestran “qué cambió”. |
| GEO-01 | Crear bloques autocontenidos en páginas clave. | `/empeno-de-autos/`, metodología, requisitos y proceso | Respuesta directa bajo preguntas reales, con condiciones y fuentes; 134–167 palabras se usa como guía, no regla. |
| GEO-02 | Mantener `llms.txt` y `llms-full.txt` sincronizados. | `public/llms.txt`, `public/llms-full.txt` | Montos, cobertura, condiciones, fuentes y URLs coinciden con las páginas canónicas. |

### Fase 4 — Autoridad externa y medición, días 46–90

Objetivo: conseguir corroboración independiente y medir resultados.

| ID | Acción | Responsable | Criterio de aceptación |
|---|---|---|---|
| AUTH-01 | Ejecutar `BLK-03` a `BLK-10` del backlog de backlinks ya preparado. | SWIP/Codex | Primeras 3 menciones editoriales o sectoriales verificadas en el tracker existente; sin enlaces pagados ni anchors exigidos. |
| AUTH-02 | Publicar un activo de datos original. | SWIP/Operaciones/Contenido | Metodología, muestra, periodo, limitaciones, autor y dataset agregado autorizados. |
| AUTH-03 | Crear contenido audiovisual experto. | SWIP | 3 videos sobre valuación, documentos y modalidades, con responsable identificable y enlaces canónicos. |
| LOCAL-01 | Verificar perfiles locales y NAP. | SWIP | GBP, Apple Business Connect y Bing Places reclamados o documentados, sin duplicados y con NAP consistente. |
| KPI-02 | Medir impacto a 28 y 90 días. | Codex/SWIP | Comparación de GSC, GA4, CWV, leads orgánicos, rankings y menciones; decisiones documentadas. |
| GEO-03 | Medir aparición en respuestas de IA. | Codex/SWIP | Set estable de consultas, fecha, ubicación, plataforma, presencia, cita y URL; no confundir ausencia puntual con tendencia. |

## 5. Backlog priorizado

### P0 — No publicar sin resolver

- GOV-01: alcance regulatorio y contractual.
- DATA-01: fuentes autorizadas para claims.
- CLAIM-02: comparativa contra Monte de Piedad y bancos.
- CLAIM-03: tasa y ejemplo representativo.

### P1 — Impacto alto en 30 días

- CLAIM-04: velocidad y buró.
- PERF-05: CWV de producción.
- IA-01: separación de intenciones.
- EEAT-01 y EEAT-02: experiencia demostrable.
- CONTENT-02: fuentes inline.
- ENTITY-01: LinkedIn consistente.

### P2 — Escala y autoridad

- SCHEMA-03 y SCHEMA-04.
- SEC-02 y UX-01.
- CONTENT-03 y FRESH-01.
- GEO-01, GEO-02 y GEO-03.
- AUTH-01, AUTH-02 y AUTH-03.

## 6. KPIs y metas

| KPI | Baseline | Día 30 | Día 90 |
|---|---:|---:|---:|
| SEO Health revisado | 79 | ≥83 | ≥86 |
| Contenido | 67 | ≥74 | ≥80 |
| GEO readiness | 69 | ≥75 | ≥80 |
| URLs indexables sanas | 71/71 | 71/71 | 71/71 |
| Issues críticos de crawl/index | 0 | 0 | 0 |
| Posts prioritarios con fuentes inline suficientes | 5/48 observados | 15 | 30 |
| Menciones externas verificadas nuevas | 0 confirmadas en baseline | 1 | 3+ |
| LCP móvil p75 | Sin campo confirmado | En observación | <2.5 s |
| INP móvil p75 | Sin campo confirmado | En observación | <200 ms |
| CLS móvil p75 | Sin campo confirmado | En observación | <0.1 |

Para leads y operaciones orgánicas, KPI-01 debe fijar primero el baseline real. La meta posterior debe expresarse como conversión y operaciones financiadas, no solo tráfico.

## 7. Dependencias y bloqueos

| Dependencia | Bloquea | Responsable |
|---|---|---|
| Dictamen legal y textos aprobados | YMYL-01, CLAIM-03, YMYL-02 | Legal/SWIP |
| Datos de operaciones y valuación | DATA-01, EEAT-02, EEAT-03, AUTH-02 | SWIP/Operaciones |
| Acceso GSC/GA4/CrUX | KPI-01, KPI-02, validación de canibalización | SWIP |
| Acceso a LinkedIn y perfiles locales | ENTITY-01, LOCAL-01 | SWIP |
| Autorización de casos e imágenes | EEAT-03, AUTH-03 | SWIP/Clientes/Legal |

Los trabajos de código independientes de estas decisiones son IA-01, SCHEMA-03, SCHEMA-04, UX-01, SEC-02 y las herramientas de QA. Pueden prepararse en rama, pero los cambios de claims deben esperar aprobación.

## 8. QA por lote

Cada lote debe ejecutar:

```bash
npm run build
npm run audit:links
npm run audit:seo
npm run audit:ai
git diff --check
```

Validación adicional:

- Revisar desktop y móvil de las páginas tocadas.
- Validar JSON-LD en homepage, `/empeno-de-autos/`, una página local y un post.
- Confirmar canonical, `noindex`, sitemap y redirecciones tras deploy.
- Confirmar que GA4, Ads, WhatsApp y chatbot registran una sola vez.
- Comparar conversión antes y después de cambios importantes de copy.
- Conservar evidencia de fuente y aprobación para claims YMYL.

## 9. Definition of Done

- [ ] Los disclosures aplicables fueron aprobados y publicados.
- [ ] Tasa, tiempos, buró, rangos y comparaciones tienen soporte visible.
- [ ] Las tres landings principales tienen intenciones inequívocas.
- [ ] La metodología y la autoridad del responsable pueden verificarse.
- [ ] Los 15 contenidos prioritarios tienen fuentes suficientes y contextualizadas.
- [ ] `WebPage`, `LoanOrCredit`, `Service` y entidades base forman un grafo coherente.
- [ ] Los objetivos táctiles y headers de seguridad pasan QA.
- [ ] CWV p75 cumple objetivos o existe un plan basado en datos de campo.
- [ ] LinkedIn, perfiles locales y NAP coinciden con el sitio.
- [ ] Se obtuvieron al menos tres menciones externas legítimas.
- [ ] Los scores revisados alcanzan las metas sin reducir la conversión orgánica.
- [ ] Todos los cambios están desplegados, medidos y documentados.

## 10. Siguiente lote recomendado

El primer lote debe limitarse a:

1. CLAIM-01: inventario completo de claims.
2. GOV-01: paquete de preguntas y evidencias para Legal.
3. PERF-05: mediana live de rendimiento.
4. KPI-01: baseline de GSC/GA4.
5. Preparación técnica de IA-01 y SCHEMA-03, sin publicar cambios regulatorios pendientes.

Este orden reduce riesgo y evita reescribir el sitio dos veces.

## 11. Avance del primer lote — 8 de agosto de 2026

| ID | Estado | Evidencia o pendiente |
|---|---|---|
| CLAIM-01 | Completado | Inventario reproducible de 71 URLs en `scripts/audit-claims.mjs` y matriz en `inventario-claims-y-freshness-swip-2026-08-08.md`. |
| PERF-05 | Medición completada; presupuesto abierto | Tres corridas live por URL documentadas en `performance-live-swip-2026-08-08.md`; mediana 91, LCP 2.623 s y 2.758 s. |
| SCHEMA-03 | Implementado localmente | Homepage con `WebPage`, `@id`, `isPartOf`, `about`, `mainEntity` y `primaryImageOfPage`. |
| SCHEMA-04 | Implementado localmente | Los `Service` existentes ya tenían `@id`; se añadieron identificadores a seis nodos `LoanOrCredit`. |
| UX-01 | Implementado localmente | Menú y cierre de modal con área 48×48; contraste detectado por Lighthouse corregido en la landing y enlaces relacionados. |
| QA de falsos positivos | Implementado localmente | Canonical y atributos se parsean sin depender del orden; se comprueban autor/fecha de posts, WebP del hero y entidades schema estables. |
| CONTENT-02 | Priorización completada | Quince posts seleccionados; la edición de claims espera GOV-01/DATA-01. |
| FRESH-01 | Inventario completado | Diecisiete fechas iguales identificadas; no se alteran sin confirmar actualización material. |
| BLK-04 | Primera calificación completada | Diez P1 revisados: 2 `qualified`, 4 `research`, 4 `legal_review`; cero outreach. |

Los cambios de código permanecen pendientes de despliegue. Las cifras live de
producción no deben atribuirse a estos cambios hasta repetir QA después del
deploy.
