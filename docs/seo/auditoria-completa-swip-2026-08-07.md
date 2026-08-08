# Auditoría SEO completa de SWIP

**Sitio:** https://swip.mx/

**Fecha:** 7 de agosto de 2026
**Cobertura:** 71 URLs indexables, homepage, sitemap, renderizado, contenido, on-page, schema, rendimiento, imágenes, SXO y GEO.

## Resultado

| Lectura | Score | Uso correcto |
|---|---:|---|
| Runner determinista | 69/100 | Línea base reproducible sin juicio editorial. |
| Revisión consolidada | **79/100** | Estado provisional después de retirar falsos positivos y revisar evidencia. |

El score revisado es provisional porque no hubo acceso autenticado a Search Console, CrUX, GA4 ni PageSpeed API. No se detectaron bloqueos críticos de rastreo, indexación o renderizado.

## Scores por categoría

| Categoría | Automático | Revisado | Lectura |
|---|---:|---:|---|
| SEO técnico | 84 | 86 | Base fuerte; headers de seguridad incompletos y CWV de campo pendiente. |
| Contenido | 39 | 67 | El runner infravaloró profundidad, autoría y estructura; faltan pruebas y fuentes específicas. |
| On-page | 80 | 80 | Sólido; 15 títulos ligeramente largos y una meta de 162 caracteres. |
| Schema | 92 | 92 | Grafo fuerte; oportunidad de conectar `WebPage` y estabilizar entidades financieras. |
| Rendimiento | 55 | 75 provisional | Evidencia mixta; falta confirmar el despliegue actual con campo y pruebas comparables. |
| GEO | 61 | 69 | Buena accesibilidad y semántica; autoridad externa y citabilidad todavía limitadas. |
| Imágenes | 87 | 96 | El hero usa WebP responsive; varios avisos del runner eran falsos positivos. |

## Fortalezas comprobadas

- Las 71 URLs del sitemap respondieron `200`, sin redirecciones ni `noindex` accidentales.
- El build local genera 74 páginas: 71 indexables y 3 `noindex` correctamente fuera del sitemap.
- No se detectaron enlaces rotos, páginas huérfanas ni páginas con una sola fuente de enlaces internos.
- Canonicals autorreferentes, URLs limpias, redirecciones consistentes y `404` real.
- Contenido, metadata y JSON-LD disponibles en el HTML inicial mediante Astro.
- Schema con `Organization`, `Person`, `FinancialService`, `WebSite`, `Service`, `LoanOrCredit`, `BlogPosting`, breadcrumbs y FAQ.
- `robots.txt`, `llms.txt` y `llms-full.txt` accesibles; crawlers prioritarios de IA permitidos.
- Homepage bien alineada con la intención comercial y con 1 H1, 9 H2, 11 H3, FAQ, proceso y modalidades.
- Blog con 48 artículos, autor visible, fechas, schema y una mediana aproximada de 914 palabras.
- Hero responsive con WebP, dimensiones explícitas, preload y prioridad correcta.

## Prioridades reales

### Alta — transparencia regulatoria y contractual

SWIP publica razón social, RFC, dirección, contacto, tasa inicial y condiciones sujetas a evaluación. Sin embargo, para un servicio financiero asociado a la intención “empeño de autos” conviene verificar jurídicamente qué registros, contrato de adhesión, entidad supervisora y enlaces oficiales aplican al modelo concreto.

No se concluye incumplimiento legal. La acción es obtener una validación jurídica y publicar solamente los folios o registros que correspondan.

### Alta — respaldar claims financieros y comparativos

Claims como “desde 4.5% mensual”, “sin buró”, “en minutos”, “menos de 24 horas” y comparaciones contra bancos o casas de empeño necesitan condiciones visibles, fecha de corte, metodología y fuentes junto a la afirmación.

La primera pieza a revisar es `swip-vs-monte-de-piedad-vs-banco.md`, porque presenta cifras y comparaciones amplias sin demostrar cada dato central.

### Alta — confirmar Core Web Vitals actuales

La prueba reproducible del runner dio Performance 55, LCP aproximado de 2.30 s, CLS de 0.03 y una estimación de INP de 254 ms. La implementación actual ya incorpora optimizaciones importantes y existen pruebas locales posteriores mucho mejores, pero falta una medición live comparable y datos p75 de 28 días.

Acción: ejecutar tres Lighthouse móviles live bajo las mismas condiciones y revisar CrUX/Search Console cuando acumulen datos posteriores al despliegue.

### Media — autoridad y prueba de experiencia

La autoría y la página de Ramon Pando existen, pero la experiencia está principalmente declarada. Reforzar con:

- Trayectoria verificable, certificaciones y afiliaciones aplicables.
- Metodología de valuación firmada por un responsable.
- Casos anonimizados con vehículo, periodo, valuación, LTV, modalidad y resultado.
- Fotografías o evidencia real del proceso e instalaciones.
- Testimonios o reseñas verificables, sin fabricar prueba social.

### Media — solapamiento de intención

La homepage, `/prestamo-con-garantia-de-auto/` y `/empeno-de-autos/` comparten demasiado vocabulario e intención. No se encontró duplicado literal masivo, pero sí riesgo de canibalización semántica.

Asignación recomendada:

- `/`: marca y solución premium.
- `/prestamo-con-garantia-de-auto/`: producto financiero y explicación formal.
- `/empeno-de-autos/`: intención popular/transaccional y comparación de modalidades.

### Media — citabilidad GEO

La base GEO es buena: SSR, schema, crawlers permitidos y archivos para LLMs. La brecha es conseguir pruebas que un motor de respuestas pueda corroborar:

- Bloques autocontenidos bajo preguntas concretas.
- Datos originales con muestra, periodo y metodología.
- Citas inline junto a cifras sensibles.
- Menciones independientes en medios automotrices, financieros y empresariales.
- Actualización del LinkedIn corporativo, que todavía muestra una propuesta anterior para PyMEs.

## Mejoras secundarias

- Incorporar `WebPage` en la homepage y conectar `mainEntity`, `about` e `isPartOf`.
- Dar `@id` estable a `LoanOrCredit` y conectarlo con el servicio correspondiente.
- Ampliar `sameAs` solo cuando existan perfiles o referencias verificadas.
- Llevar el botón hamburguesa y cierres de modal a un área interactiva mínima de 48×48 px.
- Añadir CSP, `nosniff`, `Referrer-Policy`, `Permissions-Policy` y protección contra framing en Vercel.
- Diferenciar los artículos de “cuánto me prestan por...” con datos específicos y no solo con la misma arquitectura editorial.
- Mostrar qué cambió cuando una actualización editorial sea material; 17 posts comparten `dateModified` del 7 de agosto de 2026.

## Falsos positivos retirados

### 71 discrepancias de canonical

No existen. El parser del runner localizó el `href` del enlace alternativo `/llms-full.txt`, situado junto al canonical, y lo interpretó erróneamente como canonical. La homepage y las plantillas declaran canonicals autorreferentes correctos.

### Falta de autor y fechas

No aplica al blog. Los 48 artículos reciben autor visible, entidad `Person` y fecha desde el layout; 23 también tienen fecha de modificación. En la homepage, una fecha editorial tampoco es un requisito crítico.

### Imágenes legacy, alt débil y lazy loading

El hero sirve fuentes WebP responsive y conserva JPG como fallback. Su `alt=""` es defendible porque funciona como imagen decorativa de fondo. Los logos con `alt="SWIP"` son correctos y no deben cargarse de forma diferida por estar en navegación y footer.

### Datos reales no disponibles como error crítico

La ausencia de credenciales de PageSpeed/CrUX es una limitación de medición, no un defecto del sitio.

### IndexNow como prioridad alta

IndexNow es opcional. Puede ayudar en Bing y otros motores compatibles, pero no condiciona la indexación en Google.

## Plan de acción

### 0–7 días

1. Validar con asesoría jurídica los disclosures y registros aplicables.
2. Corregir claims y comparaciones sin respaldo, empezando por la comparativa contra Monte de Piedad y bancos.
3. Actualizar la descripción de LinkedIn de SWIP.
4. Ejecutar tres pruebas Lighthouse móviles live comparables.

### 8–30 días

1. Reforzar la página del fundador y publicar la metodología de valuación.
2. Añadir evidencia, fuentes inline y casos anonimizados a los artículos de mayor riesgo financiero.
3. Separar con claridad las intenciones de las tres landing pages principales.
4. Añadir `WebPage`, mejorar relaciones del grafo schema y corregir objetivos táctiles.
5. Implementar headers de seguridad con CSP inicialmente en modo report-only.

### 31–90 días

1. Crear estudios propios de valuación con metodología publicable.
2. Conseguir menciones editoriales independientes y autoridad externa.
3. Revisar clusters escalados y consolidar o enriquecer contenidos débiles.
4. Medir impacto con GSC, CrUX, GA4 y seguimiento de visibilidad en respuestas de IA.

## Limitaciones

- No se consultaron datos autenticados de Search Console, CrUX o GA4.
- PageSpeed API no estuvo disponible; los resultados de rendimiento combinan heurísticas y pruebas locales existentes.
- No estuvo disponible DataForSEO para comprobar citas reales en ChatGPT, Perplexity o AI Overviews.
- Las menciones externas fueron muestreadas y no constituyen un censo exhaustivo.
- La recomendación regulatoria requiere revisión jurídica; esta auditoría no ofrece una conclusión legal.
