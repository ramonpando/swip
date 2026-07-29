# Avance SEO: clúster de capital empresarial

Fecha: 29 de julio de 2026  
Estado: implementado, validado y listo para producción

## Objetivo

Abrir una línea de adquisición orgánica B2B para empresas que concentran capital
en vehículos propios. El clúster busca atraer operaciones de mayor valor y con
posibilidad de recurrencia, especialmente de lotes, agencias de seminuevos y
blindadoras.

La propuesta se comunica como **capital de trabajo respaldado por inventario
vehicular existente**. No se presenta automáticamente como plan piso, línea
revolvente ni financiamiento para adquirir unidades nuevas.

## Arquitectura publicada

### Hub comercial

- `/financiamiento-con-inventario-vehicular/`
- Intención: comercial general.
- Keyword principal: `financiamiento con inventario vehicular`.
- Función: concentrar autoridad y distribuirla hacia cada vertical.

### Landings de decisión

- `/financiamiento-para-lotes-y-agencias-de-autos/`
  - Intención: comercial.
  - Keyword principal: `financiamiento para lotes de autos`.
  - Audiencia: lotes independientes, agencias y vendedores de seminuevos con
    inventario propio.

- `/capital-de-trabajo-para-blindadoras/`
  - Intención: comercial.
  - Keyword principal: `capital de trabajo para blindadoras`.
  - Audiencia: empresas de blindaje con vehículos base, unidades demo,
    inventario terminado u otros vehículos corporativos propios.

### Artículos informativos

- `/blog/como-financiar-inventario-de-un-lote-de-autos/`
  - Intención: informativa con transición comercial.
  - Responde opciones de capital, elegibilidad y preparación del inventario.

- `/blog/plan-piso-vs-garantia-de-inventario-vehicular/`
  - Intención: comparación.
  - Distingue plan piso de una operación respaldada por inventario existente.
  - Incluye fuentes de NAFIN y Scotiabank.

- `/blog/autos-propios-vs-consignacion-como-garantia/`
  - Intención: documental y de elegibilidad.
  - Separa inventario propio, vehículos financiados, consignaciones y unidades
    de clientes.

- `/blog/como-financiar-una-empresa-blindadora/`
  - Intención: informativa con alta afinidad comercial.
  - Explica ciclos de producción, activos elegibles, documentos y usos del
    capital.

## Interlinking implementado

El clúster utiliza un modelo hub-and-spoke:

1. El hub enlaza a las dos landings y a las cuatro guías.
2. Cada landing enlaza al hub, a su contenido informativo y a servicios
   vehiculares relacionados.
3. Los cuatro artículos enlazan al hub, a la landing correspondiente y entre sí
   cuando existe continuidad temática.
4. Se añadieron enlaces entrantes desde:
   - homepage;
   - footer global;
   - préstamo con garantía de auto;
   - servicio de vehículos blindados;
   - guía para financiar un negocio con un auto;
   - guía de valuación de autos blindados;
   - guía de documentos para autos blindados.
5. `llms.txt` y `llms-full.txt` incluyen la oferta empresarial y sus límites de
   interpretación.

En la validación local, cada nueva URL recibió enlaces desde cuatro o más
archivos fuente. No quedaron páginas huérfanas ni páginas con una sola fuente
de enlaces.

## Mejoras SEO y AI SEO

- Titles únicos de 50 a 56 caracteres.
- Metadescripciones de 150 a 158 caracteres.
- Un H1 por página y alineado con la intención primaria.
- Canonical autorreferente y URLs con trailing slash.
- Breadcrumbs visibles y schema `BreadcrumbList`.
- Schema `Service` para las tres páginas comerciales.
- Schema `BlogPosting` para los artículos, con:
  - autor identificado;
  - fechas;
  - sección editorial;
  - temas y keywords empresariales;
  - imagen OG individual.
- FAQ visible y `FAQPage` en landings. Se mantiene como estructura semántica;
  no se presupone que Google mostrará un resultado enriquecido.
- Fuentes específicas para artículos empresariales: NAFIN, REPUVE y metodología
  operativa de SWIP.
- CTA empresarial por WhatsApp para solicitar una evaluación de varias unidades.
- Contenido redactado con definiciones directas, tablas comparativas, listas y
  respuestas autocontenidas para facilitar extracción y citación por sistemas
  de IA.
- Cuatro imágenes OG de 1200 × 630, una por artículo.

No se añadió schema `HowTo`: Google no lo incluye actualmente entre los tipos de
resultados enriquecidos compatibles. Tampoco existe un schema especial necesario
para AI Overviews.

## Validación técnica

Resultado local previo al despliegue:

- 74 páginas construidas.
- 48 artículos publicados.
- 0 enlaces internos rotos.
- 0 páginas huérfanas.
- 0 páginas con una sola fuente de enlaces.
- 0 títulos o metadescripciones fuera del rango de auditoría.
- 0 canonicals faltantes.
- 0 páginas con múltiples H1.
- 0 JSON-LD inválidos.
- 0 FAQ schemas duplicados.
- Las siete URLs nuevas aparecen en el sitemap.
- `git diff --check` sin errores.

## Supuestos y límites que deben respetarse

- El rango general comunicado sigue siendo de $90,000 a $5,000,000 MXN, sujeto
  a valuación, expediente y aprobación.
- No prometer que $5,000,000 MXN aplica por unidad, por empresa o por cada
  portafolio hasta confirmar la política operativa.
- No prometer que la estructura es revolvente.
- No prometer sustitución o liberación automática de unidades.
- Los vehículos en consignación o propiedad de clientes no se consideran
  inventario propio por defecto.
- Una blindadora no debe ofrecer vehículos de clientes como garantía de una
  obligación propia sin una estructura jurídica expresamente validada.
- No prometer tiempos de 24 horas para expedientes con varias unidades; la
  revisión puede requerir más tiempo que una operación individual.

## Definiciones operativas pendientes

Antes de ampliar el clúster o endurecer el copy comercial, confirmar:

1. Si el máximo de $5,000,000 MXN se calcula por expediente, empresa o activo.
2. Número mínimo y máximo de unidades por operación.
3. Reglas para liberar una unidad después de una venta o pago parcial.
4. Posibilidad de sustituir garantías durante el plazo.
5. Criterios exactos para personas morales.
6. Documentación corporativa definitiva.
7. Ciudades donde se pueden revisar inventarios empresariales.
8. Sectores y tipos de vehículos excluidos.

## Próximos pasos

### Prioridad 1: después del despliegue

- Verificar que las siete URLs respondan `200` en producción.
- Confirmar canonical, schema, imágenes OG y sitemap desde el HTML publicado.
- Solicitar indexación del hub y las dos landings en Search Console.
- Enviar o confirmar el sitemap actualizado.
- Registrar una anotación en analytics con la fecha de publicación.

### Prioridad 2: medición

- 5 de agosto de 2026: revisión rápida de rastreo e indexación.
- 26 de agosto de 2026: comparación completa de 28 días en Search Console.
- Separar consultas y conversiones B2B:
  - financiamiento para lote de autos;
  - financiar inventario de autos;
  - plan piso para seminuevos;
  - capital de trabajo para blindadoras;
  - financiamiento con flotilla o inventario vehicular.
- Medir clics al CTA empresarial de WhatsApp y registrar el origen de cada lead.

### Prioridad 3: siguiente ola de contenido

1. Caso real anonimizado de un lote o agencia:
   `inventario → necesidad → estructura → resultado`.
2. Calculadora o plantilla:
   `qué información preparar para evaluar 5, 10 o 20 unidades`.
3. Landing para distribuidores de autos premium y exóticos.
4. Landing para empresas de seguridad y transporte ejecutivo con flota propia.
5. Clúster sobre flotillas:
   - cómo obtener capital usando una flotilla;
   - vehículos propios vs. arrendados;
   - documentación corporativa;
   - cómo se valúa un portafolio vehicular.
6. Contenido de decisión:
   - crédito empresarial vs. garantía vehicular;
   - factoring vs. inventario vehicular;
   - cuándo no conviene financiar inventario.

## Criterio de éxito

El clúster no debe evaluarse únicamente por tráfico. Las métricas prioritarias
son:

- leads empresariales calificados;
- número y valor de unidades presentadas;
- monto solicitado;
- expedientes que pasan el filtro documental;
- operaciones aprobadas;
- recurrencia del cliente;
- consultas orgánicas nuevas y crecimiento de impresiones no relacionadas con
  “empeño de autos”.
