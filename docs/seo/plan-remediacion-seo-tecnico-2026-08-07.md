# Plan de remediación SEO técnico y rendimiento — 7 de agosto de 2026

Estado: en ejecución; primer lote técnico implementado localmente
Sitio: `https://swip.mx/`
URL prioritaria: `https://swip.mx/empeno-de-autos/`
Keyword prioritaria: “empeño de autos”

## 1. Objetivo

Corregir los problemas técnicos, de rendimiento, accesibilidad y redundancia
detectados en la auditoría del repositorio, la revisión directa de producción y
el reporte móvil de Google Lighthouse compartido el 7 de agosto de 2026.

Este documento no autoriza nuevas URLs ni cambia el mapa keyword–URL. La URL
propietaria de “empeño de autos” continúa siendo `/empeno-de-autos/`.

## 2. Estado base comprobado

La base técnica no presenta un bloqueo general de rastreo o indexación:

- 74 páginas se generan correctamente.
- 71 páginas son indexables y las 71 URLs del sitemap responden `200`.
- No existen títulos, descriptions o canonicals duplicados en el build.
- Todas las páginas tienen exactamente un H1.
- No hay enlaces internos rotos, páginas huérfanas ni páginas débilmente enlazadas.
- Las tres páginas `noindex` están fuera del sitemap.
- `robots.txt`, sitemap, `llms.txt` y `llms-full.txt` están disponibles.
- HTTPS, HSTS y caché prolongada para activos estáticos funcionan en producción.

El 100 obtenido en la categoría SEO de Lighthouse confirma varios controles
básicos de la página analizada. No evalúa por sí solo canonicalización entre
hosts, variantes `index.html`, canibalización, precisión legal, redundancia de
entidades o rendimiento orgánico.

## 3. Evidencia de Google Lighthouse

Fuente: capturas del reporte compartidas por el propietario.

- Fecha del reporte: 7 de agosto de 2026, 9:24:51 a. m. CST.
- URL evaluada: `https://www.swip.mx/`.
- Estrategia: móvil, Slow 4G, sesión de una página.
- Datos de usuarios reales: no disponibles.

### Puntuaciones

| Categoría | Resultado |
|---|---:|
| Performance | 54 |
| Accessibility | 88 |
| Best Practices | 96 |
| SEO | 100 |
| Agentic Browsing | 2/3 |

### Métricas de laboratorio

| Métrica | Resultado | Objetivo técnico |
|---|---:|---:|
| First Contentful Paint | 2.6 s | ≤ 1.8 s |
| Largest Contentful Paint | 9.6 s | ≤ 2.5 s |
| Total Blocking Time | 600 ms | ≤ 200 ms |
| Speed Index | 4.4 s | Reducir |
| Cumulative Layout Shift | 0 | ≤ 0.1 |

El principal problema medido es LCP. El CLS es correcto en esta prueba.

### Diagnósticos reportados

- El LCP corresponde al fondo visual del hero: `section.hero > div.hero-bg`.
- Lighthouse reportó que la solicitud de la imagen LCP no tenía
  `fetchpriority="high"` en el preload evaluado.
- La ruta crítica máxima fue de 832 ms y atravesó dos hojas CSS de Astro.
- Google Tag Manager y etiquetas asociadas transfirieron aproximadamente
  452.1 KiB; Lighthouse estimó 195.2 KiB de JavaScript no utilizado.
- ChatFlow cargó aproximadamente 110.9 KiB de JavaScript y 20.7 KiB de CSS;
  estimó 49.4 KiB de JavaScript y 20.7 KiB de CSS no utilizados.
- `widget.js` generó 72 ms de forced reflow y hubo 48 ms adicionales sin atribución.
- Se encontraron seis tareas largas del hilo principal.
- Se reportaron cuatro elementos con animaciones no compuestas.
- Accesibilidad detectó botones sin nombre accesible y contraste insuficiente.

### Estado del preload antes de este lote

La producción actual ya entrega este preload:

```html
<link rel="preload" as="image" href="/assets/images/hero.jpg" fetchpriority="high">
```

En ese momento el hallazgo de prioridad estaba parcialmente corregido, pero el
fondo continuaba implementado como `background-image` CSS. Esa implementación
fue sustituida en el primer lote descrito abajo.

### Validación local posterior al primer lote

Se ejecutaron tres pruebas Lighthouse móviles sobre el build final, con Google
tag mediante Partytown. Los resultados fueron 100/93/99 en Performance y 100
constante en Accessibility, Best Practices y SEO.

| Métrica | Mediana local |
|---|---:|
| Performance | 99 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| FCP | 1.40 s |
| LCP | 1.40 s |
| TBT | 0 ms |
| CLS | 0.062 |

Estos resultados son control de laboratorio local. No sustituyen la validación
de producción bajo `https://swip.mx/` ni los datos de campo de Search Console.

## 4. Backlog priorizado

### P0 — Canonicalización del dominio

#### TEC-01 — Consolidar `www` hacia el host canónico

Estado: completado y verificado en producción el 7 de agosto de 2026.

Evidencia:

- `https://www.swip.mx/` devuelve un único `308` hacia `https://swip.mx/`.
- Una página interna conserva su pathname al pasar al host canónico.
- La prueba con `?utm_source=verify` conserva también el query string.
- El destino canónico final responde `200`.

Acción:

1. Configurar `swip.mx` como dominio principal en Vercel.
2. Configurar `www.swip.mx` como redirección permanente de dominio, no solo
   como alias del mismo deployment.
3. Conservar pathname y query string.
4. Verificar `http`, `https`, raíz y páginas internas.
5. Confirmar en Search Console la canonical seleccionada por Google.

Criterio de aceptación:

- [x] Toda URL `https://www.swip.mx/*` devuelve un único `301` o `308` hacia
  `https://swip.mx/*`.
- [x] Ninguna URL del host `www` devuelve contenido `200`.
- [x] Sitemap, canonicals y enlaces internos usan únicamente `https://swip.mx/`.
- Se revisa si la propiedad URL-prefix de Search Console necesita una propiedad
  adicional para `www` mientras Google procesa la consolidación.

#### TEC-02 — Variantes `index.html` accesibles

Estado: completado y verificado en producción el 7 de agosto de 2026.

Evidencia comprobada:

- Antes del cambio, `/index.html`, `/blog/index.html` y
  `/empeno-de-autos/index.html` respondían `200`.
- Después del deploy, `/index.html` devuelve un único `308` hacia `/` y
  `/empeno-de-autos/index.html` devuelve un único `308` hacia
  `/empeno-de-autos/`.

Acción:

- Agregar redirecciones permanentes desde `/index.html` hacia `/` y desde
  `/:path*/index.html` hacia `/:path*/`.
- Comprobar que las reglas no creen ciclos con `trailingSlash: true`.

Criterio de aceptación:

- Ninguna variante `index.html` devuelve `200`.
- Cada variante hace un solo salto hacia su URL limpia.

### P0 — Rendimiento móvil

#### PERF-01 — LCP del hero

Estado: implementado y aprobado en laboratorio local; pendiente de producción.

Implementación:

- El fondo CSS se sustituyó por `<picture>` y `<img>` con dimensiones,
  `fetchpriority="high"`, `loading="eager"`, `srcset` y preload coincidente.
- Se generaron variantes WebP de 1168 px (18 KiB) y 768 px (8.8 KiB), con el
  JPEG original como fallback.

Acción propuesta:

1. Sustituir el `div.hero-bg` por un `<picture>` con `<img>` real.
2. Definir `width`, `height`, `fetchpriority="high"`, `loading="eager"` y
   `decoding="async"`.
3. Producir AVIF/WebP con variantes móvil y escritorio mediante `srcset` y
   `sizes`.
4. Conservar el overlay como una capa independiente.
5. Evitar animar o escalar la imagen LCP durante la carga inicial.
6. Revisar que solo exista un preload y que coincida exactamente con el recurso
   que el navegador seleccionará como LCP.

Criterio de aceptación:

- LCP móvil de laboratorio ≤ 2.5 s en la mediana de tres pruebas.
- La imagen LCP se descubre desde el HTML inicial.
- Lighthouse reconoce `fetchpriority="high"`.
- No se introduce CLS.

#### PERF-02 — JavaScript de GTM y etiquetas asociadas

Estado: reemplazado localmente por una Google tag compartida para GA4 y Ads,
ejecutada fuera del hilo principal mediante Partytown; pendiente de Tag
Assistant y DebugView en producción.

Implementación:

- Se retiró el runtime de `GTM-N7GP6M25` del HTML inicial.
- GA4 `G-BD83023W5V` y Ads `AW-11373033956` comparten Google tag.
- La conversión documentada de WhatsApp conserva
  `AW-11373033956/je0UCJjDxawcEOTziq8q`.
- Los eventos de chatbot, relojes y Sociedad 52 se envían directamente con
  `gtag()` y se reenvían al Web Worker.

Acción propuesta:

1. Inventariar cada tag, trigger y variable de `GTM-N7GP6M25`.
2. Confirmar si GA4 y Google Ads necesitan descargar dos copias de `gtag.js` o
   pueden compartir una configuración.
3. Eliminar etiquetas históricas, duplicadas o sin evento de negocio vigente.
4. Evitar tags de remarketing en páginas donde no aportan medición útil.
5. Aplicar Consent Mode y secuenciación compatible con privacidad y medición.
6. Validar que `page_view`, conversiones, WhatsApp y chatbot no se dupliquen.

Criterio de aceptación:

- No hay tags duplicados en Tag Assistant.
- No se pierden conversiones ni atribución.
- TBT móvil ≤ 200 ms en la mediana de tres pruebas.
- El peso y tiempo de ejecución de terceros disminuyen frente a la línea base.

#### PERF-03 — ChatFlow carga antes de ser necesario

Estado: implementado localmente; pendiente de prueba funcional en producción.

Implementación:

- `widget.js`, sus chunks y CSS ya no se solicitan durante la carga inicial.
- El script se inyecta únicamente después de pulsar “Iniciar chat”.
- Si la carga falla, el flujo abre WhatsApp como respaldo.

Acción propuesta:

1. Mantener inicialmente un botón ligero controlado por el sitio.
2. Cargar `widget.js` y sus chunks solo cuando el usuario abra el chatbot o,
   como segunda opción, durante tiempo ocioso después de completar el LCP.
3. Pedir al proveedor que elimine el forced reflow señalado en `widget.js`.
4. Si el widget debe seguir cargando al inicio, evaluar `preconnect` a
   `https://chatapp.chatflow.mx`; no agregarlo si se adopta carga bajo demanda.
5. Medir por separado conversión del chatbot antes y después del cambio.

Criterio de aceptación:

- ChatFlow no participa en la ruta crítica del LCP.
- El chatbot continúa abriendo correctamente en móvil y escritorio.
- El evento `chatbot_started` se registra una sola vez.
- Forced reflow atribuible al widget deja de afectar la carga inicial.

#### PERF-04 — CSS crítico y animaciones

Estado: parcialmente resuelto.

Implementación:

- Se eliminaron las cuatro animaciones no compuestas del skeleton de
  Pre-Owned.
- Lighthouse local ya no reporta animaciones no compuestas.
- La revisión adicional de CSS crítico queda pendiente solo si producción no
  conserva la mediana aprobada.

Acción propuesta:

- Confirmar en Network que cada CSS se solicita una sola vez; el árbol de
  Lighthouse puede repetir una referencia visualmente sin implicar dos
  descargas reales.
- Evaluar inline del CSS mínimo de header y hero.
- Mantener el resto del CSS fuera de la ruta crítica cuando sea seguro.
- Identificar los cuatro elementos reportados con animación no compuesta.
- Limitar animaciones a `transform` y `opacity` y respetar
  `prefers-reduced-motion`.

Criterio de aceptación:

- No existen descargas CSS duplicadas.
- La ruta crítica es menor que la línea base de 832 ms.
- Lighthouse no reporta animaciones no compuestas en el primer viewport.

### P1 — Accesibilidad y navegación por agentes

#### ACC-01 — Botones sin nombre accesible

Estado: resuelto en laboratorio local.

El control sin nombre provenía del widget inyectado por ChatFlow. Al cargar el
widget bajo demanda desaparece de la auditoría inicial; los controles propios
conservan nombre accesible.

Acción:

- Revisar primero el botón flotante inyectado por ChatFlow.
- Asegurar texto accesible o `aria-label` para todo botón iconográfico.
- Verificar nombre, rol y estado con el árbol de accesibilidad de Chrome.

Criterio de aceptación:

- Lighthouse no reporta botones sin nombre accesible.
- El chatbot y los modales pueden operarse con teclado y lector de pantalla.

#### ACC-02 — Contraste insuficiente

Estado: resuelto en la homepage y aprobado por Lighthouse local.

Se corrigieron tags, descripciones, enlaces y estados de botón con contraste
insuficiente. Accessibility pasó de 88 en la evidencia inicial a 100 local.

Acción:

- Capturar en Lighthouse los selectores exactos que fallan.
- Reemplazar opacidades demasiado bajas en texto informativo, navegación,
  footer y labels por tokens que cumplan WCAG AA.
- Validar estados normal, hover, focus y disabled.

Criterio de aceptación:

- Texto normal alcanza contraste mínimo 4.5:1.
- Texto grande alcanza al menos 3:1.
- Accessibility obtiene 100 o no conserva fallas automáticas conocidas.

#### AGENT-01 — Agentic Browsing 2/3

Estado: pendiente de capturar el nombre del control fallido.

Acción:

- Abrir el detalle del reporte y registrar la prueba exacta no superada.
- Corregir semántica, nombre de controles o navegación según el hallazgo.
- Confirmar que CTAs, formulario, modal y enlaces exponen nombres y propósitos
  inequívocos para usuarios y agentes.

Criterio de aceptación:

- Agentic Browsing obtiene 3/3 en la misma URL y configuración.

### P1 — Confianza, schema y fuentes

#### TRUST-01 — Aviso de privacidad desactualizado

Estado: pendiente de revisión legal.

Evidencia:

- El aviso sigue atribuyendo lineamientos y reclamaciones al extinto INAI.
- `https://www.inai.org.mx` no resuelve.
- La página declara como última actualización abril de 2026, pese a conservar
  referencias institucionales anteriores al marco vigente.

Acción:

- Solicitar validación jurídica con la Ley Federal de Protección de Datos
  Personales en Posesión de los Particulares vigente.
- Actualizar autoridad, fundamento, mecanismo de reclamación y enlaces.
- No reemplazar automáticamente INAI por otra entidad sin revisión legal.

Criterio de aceptación:

- El texto es aprobado por responsable jurídico.
- Todos los enlaces legales responden correctamente.
- La fecha de actualización coincide con la revisión realizada.

#### TRUST-02 — Fuentes CONDUSEF inestables

Estado: pendiente.

Evidencia:

- Cuatro referencias bajo `webappsos.condusef.gob.mx` presentaron problemas de
  certificado o respuesta 502 para algunos rastreadores.

Acción:

- Sustituirlas por fuentes oficiales estables en `gob.mx/condusef`, el RECA de
  CONDUSEF u otra URL institucional que respalde exactamente la misma afirmación.
- Ejecutar una revisión automática de enlaces externos.

Criterio de aceptación:

- Todas las fuentes devuelven `200` o una redirección permanente válida.
- La página de destino respalda directamente la afirmación citada.

#### SCHEMA-01 — Entidades `FinancialService` redundantes

Estado: implementado localmente; pendiente de Rich Results Test en producción.

La entidad global permanece como `FinancialService`; nueve ofertas comerciales
se modelan como `Service` y, cuando corresponde, `LoanOrCredit`. Las 74 páginas
compiladas contienen JSON-LD parseable y ninguna supera una entidad
`FinancialService`.

Evidencia:

- El layout base inyecta `Organization`, `Person`, `FinancialService` y
  `WebSite` en todas las páginas.
- Diez páginas comerciales agregan un segundo `FinancialService`.

Acción:

- Mantener `Organization` y `WebSite` en homepage o página corporativa.
- Reservar `Person` para perfil y artículos donde corresponda.
- Declarar un solo servicio específico por landing comercial y conectarlo con
  `provider` mediante `@id`.
- Validar HTML renderizado con Rich Results Test y Schema Markup Validator.

Criterio de aceptación:

- Cada landing contiene una sola entidad de servicio inequívoca.
- No hay IDs duplicados o propiedades contradictorias.
- Los validadores no reportan errores.

#### SCHEMA-02 — Teléfono inconsistente

Estado: resuelto localmente.

Acción:

- Reemplazar `+52-1-55-5405-5089` por `+525554055089` en Organization,
  FinancialService y ContactPoint.
- Confirmar consistencia con footer, teléfono y WhatsApp.

Criterio de aceptación:

- Una sola forma E.164 se utiliza en todo el schema.

Resultado: Organization y ContactPoint utilizan `+525554055089`, consistente
con el enlace telefónico del footer.

#### SEC-01 — Dependencias con avisos de seguridad

Estado: pendiente de migración mayor controlada.

Evidencia:

- `npm audit --omit=dev` reporta nueve avisos: dos low y siete high.
- La dependencia directa `astro` 5.x concentra avisos cuyo arreglo recomendado
  por npm requiere migrar a Astro 7.2.x; `@astrojs/mdx` también requiere salto
  mayor.
- El sitio se publica como HTML estático, lo que reduce la exposición de varios
  avisos ligados a servidor o entradas dinámicas, pero no justifica ignorarlos.

Acción:

- Abrir un lote separado para migrar Astro, MDX e integraciones compatibles.
- Revisar `define:vars`, atributos propagados, imágenes y build antes de aceptar
  el salto mayor.
- No ejecutar `npm audit fix --force` sobre la rama principal.

Criterio de aceptación:

- Build y auditorías SEO/LLM siguen pasando después de la migración.
- `npm audit --omit=dev` no conserva vulnerabilidades high corregibles.
- Lighthouse y las conversiones mantienen los resultados aprobados.

#### MAIL-01 — SPF y DMARC ausentes

Estado: pendiente de configuración DNS y validación de todos los remitentes.

Evidencia del 7 de agosto de 2026:

- `swip.mx` usa Google como receptor de correo mediante su registro MX;
- la consulta TXT de `swip.mx` no devuelve un registro que comience con
  `v=spf1`;
- `_dmarc.swip.mx` no devuelve un registro TXT;
- no se concluye que DKIM esté ausente porque primero debe identificarse el
  selector configurado en Google Workspace.

Impacto:

- no bloquea rastreo ni indexación y no debe presentarse como un arreglo de
  ranking;
- sí afecta autenticación, protección contra suplantación y entregabilidad del
  correo corporativo.

Acción:

1. Inventariar Google Workspace y cualquier otro servicio autorizado para
   enviar correo con `@swip.mx`.
2. Publicar un único SPF que incluya todos los remitentes legítimos.
3. Activar DKIM en Google Workspace y verificar el selector publicado.
4. Publicar DMARC inicialmente en modo de monitoreo, revisar reportes y avanzar
   gradualmente a una política de cuarentena o rechazo.
5. Probar mensajes reales y sus encabezados antes de endurecer la política.

### P2 — Sitemap, contenido y recursos visuales

#### SITEMAP-01 — 22 páginas comerciales sin `lastmod`

Estado: pendiente.

Acción:

- Mantener una fecha editorial real por página comercial.
- Serializar `lastmod` únicamente cuando exista un cambio sustancial.
- Incluir homepage y `/empeno-de-autos/`.

Criterio de aceptación:

- Todas las páginas comerciales actualizadas declaran una fecha precisa.
- No se cambia `lastmod` en cada build sin modificación real.

#### CONTENT-01 — Comparativas solapadas

Estado: pendiente de actualización editorial, sin redirección autorizada.

URLs:

- `/blog/prestamo-con-garantia-vs-empeno-de-autos/`
- `/blog/empeno-de-autos-de-lujo-vs-prestamo-con-garantia/`

Acción:

- Conservar la primera como comparación general.
- Convertir la segunda en una pieza genuinamente específica para activos
  premium, valuación, equipamiento, documentación y decisión de modalidad.
- Revisar consulta–página en Search Console antes de consolidar o redirigir.

Criterio de aceptación:

- Cada URL tiene keyword, intención y respuesta distintas.
- No repiten la misma tabla, conclusión ni promesa comercial.

#### LINKS-01 — Anchor exacto repetido

Estado: pendiente.

Evidencia:

- 26 de 35 enlaces rastreados hacia `/empeno-de-autos/` usan exactamente
  “empeño de autos”.

Acción:

- Variar anchors según la oración: modalidades de empeño, usar el auto como
  garantía, requisitos, costos, valuación o guía principal.
- Mantener algunos anchors exactos donde sean naturales.

Criterio de aceptación:

- Ningún patrón mecánico domina los enlaces editoriales.
- El contexto de cada enlace explica por qué debe visitarse el hub.

#### MEDIA-01 — Imágenes OG y Pre-Owned

Estado: pendiente.

Acción:

- Crear imágenes OG propias para `/empeno-de-autos/`, homepage y landings
  comerciales prioritarias; actualmente 26 páginas comparten la imagen genérica.
- Agregar dimensiones intrínsecas a imágenes dinámicas de Pre-Owned o recibirlas
  desde la API.
- Mantener el aspect ratio reservado y lazy loading fuera del viewport.

Criterio de aceptación:

- Páginas prioritarias tienen preview diferenciada de 1200 × 630.
- Las imágenes dinámicas no producen CLS.

## 5. Mejoras a las auditorías automáticas

### QA-01 — Corregir el nombre y alcance del auditor de enlaces

`audit:links` informa “74 URLs indexables conocidas”, aunque el sitio tiene 71
indexables y tres `noindex`. El análisis de enlaces sigue siendo útil, pero el
nombre del indicador es incorrecto.

Acción:

- Cambiarlo a “rutas conocidas” o hacer que lea la condición `noindex`.

### QA-02 — Detectar variantes públicas

Agregar pruebas de producción para:

- `http` → `https`;
- `www` → host canónico;
- ausencia y presencia de trailing slash;
- variantes `index.html`;
- 404 real para rutas inexistentes;
- canonical del HTML final.

### QA-03 — Enlaces externos y schema semántico

Agregar:

- verificación programada de enlaces externos;
- reporte de `@type` e IDs repetidos en JSON-LD;
- alerta de teléfono, URL, dirección o nombre legal inconsistentes;
- validación manual periódica con herramientas que rendericen JavaScript.

### QA-04 — Presupuesto de rendimiento

Definir un control periódico para homepage y `/empeno-de-autos/`:

- LCP ≤ 2.5 s;
- TBT ≤ 200 ms en laboratorio;
- CLS ≤ 0.1;
- sin incremento no aprobado de JavaScript de terceros;
- medianas de tres ejecuciones, no una sola medición.

## 6. Orden de ejecución recomendado

1. TEC-01 y TEC-02: consolidar host y URLs.
2. PERF-01: reconstruir el LCP del hero.
3. PERF-02 y PERF-03: reducir GTM y cargar ChatFlow bajo demanda.
4. PERF-04, ACC-01, ACC-02 y AGENT-01.
5. TRUST-01, TRUST-02, SCHEMA-01, SCHEMA-02 y MAIL-01.
6. SITEMAP-01, CONTENT-01, LINKS-01 y MEDIA-01.
7. QA-01 a QA-04 para prevenir regresiones.

La mejora visual pendiente de `/empeno-de-autos/` debe coordinarse con
PERF-01 y MEDIA-01. El nuevo hero no debe aprobarse si empeora el LCP móvil.

## 7. Validación de cierre

Antes de marcar este plan como completado:

1. Ejecutar `npm run build`.
2. Ejecutar `npm run audit:links`.
3. Ejecutar `npm run audit:seo`.
4. Ejecutar `npm run audit:ai`.
5. Ejecutar `git diff --check`.
6. Validar las 71 URLs del sitemap en producción.
7. Ejecutar tres pruebas Lighthouse móvil y tres de escritorio sobre el host
   canónico, usando la mediana.
8. Revisar Rich Results Test en homepage, `/empeno-de-autos/`, una landing
   local y un artículo.
9. Inspeccionar en Search Console la URL principal y confirmar canonical
   declarada y seleccionada.
10. Confirmar que GA4, Google Ads, WhatsApp y chatbot siguen registrando los
    eventos acordados una sola vez.

## 8. Definition of Done

- [x] `www` y `index.html` ya no entregan páginas duplicadas.
- [ ] LCP, TBT y CLS cumplen los objetivos en la mediana de tres pruebas.
- [ ] El widget no bloquea la carga ni genera controles inaccesibles.
- [ ] Accessibility y Agentic Browsing no conservan fallas automáticas.
- [ ] Schema no duplica servicios y utiliza NAP consistente.
- [ ] SPF, DKIM y DMARC autentican todos los remitentes legítimos de SWIP.
- [ ] El aviso de privacidad fue revisado por responsable jurídico.
- [ ] Las fuentes externas críticas funcionan.
- [ ] Las comparativas tienen intenciones diferenciadas.
- [ ] Sitemap y auditorías cubren las regresiones detectadas.
- [ ] Los cambios están desplegados y verificados en producción.

## 9. Revisión cruzada con SEOptimer — 7 de agosto de 2026

La lista externa fue contrastada contra el código, las 74 páginas del build,
DNS público y el deployment posterior al primer lote. No se adoptan
recomendaciones automáticas sin evidencia porque varias no distinguen entre la
homepage y la URL propietaria de cada intención.

### Confirmado como resuelto o falso positivo

| Recomendación externa | Evidencia | Decisión |
|---|---|---|
| Usar keywords en etiquetas importantes | `/empeno-de-autos/` alinea keyword, URL, title y H1; la homepage conserva una intención distinta | No duplicar la keyword principal en todas las páginas |
| Aumentar longitud del title | Homepage: 48 caracteres; la auditoría interna no reporta titles problemáticos | No alargar por una regla genérica |
| Agregar `alt` a todas las imágenes | 74 HTML revisados y 0 imágenes sin atributo `alt`; el hero decorativo usa `alt=""` deliberadamente | Cerrado |
| Usar HTTP/2+ | Producción responde `HTTP/2 200` y mantiene HSTS | Cerrado |
| Eliminar estilos inline | Solo existen cuatro atributos `style`; no explican el rendimiento actual | Limpieza opcional, sin prioridad SEO |
| Agregar Local Business Schema | El sitio ya usa `FinancialService`, subtipo específico de `LocalBusiness`, con NAP normalizado | No duplicar entidad |
| Ocultar correos visibles | El correo cumple una función de contacto y confianza | No tratar como problema SEO |
| Crear perfiles sociales | Solo LinkedIn está confirmado y enlazado | Añadir únicamente perfiles reales y activos |
| Instalar Facebook Pixel | Es una decisión de paid media y privacidad, no SEO | No instalar sin campaña y plan de consentimiento |

### Pendientes reales o parciales

#### Rendimiento móvil

Primera ejecución Lighthouse móvil sobre producción después del deploy:

- Performance: 91;
- Accessibility: 100;
- SEO: 100;
- FCP: 1.6 s;
- LCP: 1.6 s;
- TBT: 320 ms;
- CLS: 0.062.

La mejora frente a la línea base es material, especialmente en LCP. El TBT de
esta ejecución todavía supera el presupuesto de 200 ms. No se cierra QA-04
hasta obtener la mediana de tres ejecuciones y revisar las tareas largas si la
mediana confirma la regresión.

#### Autoridad externa

La recomendación de link building es válida, pero no constituye un error de
código. Existe una guía de outreach en
`docs/marketing/seo/backlinks-outreach-2026-05-20.md` y el plan rector ya
prioriza menciones editoriales legítimas durante los meses dos y tres. Antes de
ejecutarla se deben verificar organizaciones, medios, condiciones regulatorias
y contactos actuales. No se comprarán paquetes masivos ni enlaces artificiales.

#### Autenticación de correo

SPF y DMARC sí están ausentes según DNS público. Se incorporan como MAIL-01.
Este trabajo protege correo y reputación de dominio, aunque no sea un arreglo
directo de posicionamiento orgánico.
