# Plan rector SEO y comercial — “empeño de autos”

Estado: aprobado como dirección estratégica
Fecha: 7 de agosto de 2026
Propietario: SWIP
Horizonte inicial: 90 días

> [!IMPORTANT]
> La keyword principal de SWIP es **“empeño de autos”** y su única URL
> propietaria es **`https://swip.mx/empeno-de-autos/`**.
>
> Toda decisión de arquitectura, contenido, enlazado interno, autoridad y
> conversión relacionada con vehículos debe evaluar primero cómo ayuda a esta
> URL a posicionar y generar operaciones calificadas.

## 1. Decisión estratégica

`/empeno-de-autos/` deja de considerarse un puente semántico y se convierte en
la página comercial prioritaria del ecosistema vehicular de SWIP.

La decisión se fundamenta en valor comercial, no únicamente en volumen de
búsqueda. Aunque “empeño de autos” produzca menos clics que términos
informativos, representa una intención cercana a una operación que genera
ingreso.

La métrica principal del programa será:

**Operaciones financiadas procedentes o asistidas por tráfico orgánico del
clúster “empeño de autos”.**

Las posiciones, impresiones y clics son indicadores intermedios, no el resultado
final del programa.

## 2. Fuente de verdad y precedencia

Este documento es la fuente de verdad para la estrategia SEO vehicular de SWIP.

Si otro sprint, backlog o documento anterior presenta
`/prestamo-con-garantia-de-auto/` como el pilar central, esta decisión lo
sustituye a partir del 7 de agosto de 2026.

No se eliminan ni redirigen URLs existentes por este cambio. Se modifica su
papel dentro de la arquitectura:

- `/empeno-de-autos/`: página principal de negocio y autoridad.
- `/prestamo-con-garantia-de-auto/`: página de apoyo para sinónimos relacionados
  con préstamo, crédito y garantía vehicular.
- Los hubs de lujo, blindados, exóticos, modalidades y ciudades conservan sus
  intenciones específicas y transfieren autoridad al hub principal.

## 3. Estado de partida

### Rankings comunicados el 7 de agosto de 2026

| Consulta | Posición reportada |
|---|---:|
| préstamo para autos blindados | 1 |
| empeño de autos de lujo | 1 |
| liquidez con garantía de auto | 7 |
| préstamo con garantía de auto CDMX | 14 |
| préstamo para autos de lujo | 15 |
| empeño de autos Querétaro | 26 |
| préstamo con garantía de auto | 30 |
| empeño de autos | Fuera del top 100 |
| préstamo sobre auto | Fuera del top 100 |

Los rankings puntuales deben compararse con Search Console, que muestra
promedios históricos, geográficos y por dispositivo. No deben considerarse
equivalentes.

### Arquitectura interna observada

| URL o clúster | Archivos fuente que lo enlazan |
|---|---:|
| Autos de lujo | 33 |
| Autos blindados | 31 |
| Préstamo con garantía de auto | 25 |
| Empeño de autos | 8 |

La página prioritaria no está huérfana, pero recibe mucha menos autoridad interna
que los hubs secundarios. Tampoco aparece como enlace principal en la navegación
vehicular ni como servicio prioritario en el footer.

### Situación técnica

- La URL es indexable.
- Tiene canonical autorreferente, title, meta description y un H1.
- No existen bloqueos técnicos conocidos que expliquen por sí solos la falta de
  ranking.
- El sitio no presenta enlaces internos rotos ni páginas huérfanas en la
  auditoría local.

Por tanto, el trabajo prioritario es de jerarquía, intención, autoridad,
contenido y conversión.

## 4. Arquitectura objetivo

La siguiente es una jerarquía conceptual. No requiere cambiar las URLs actuales.

```text
Homepage (/)
└── Página principal de dinero
    └── Empeño de autos (/empeno-de-autos/)
        ├── Sinónimos
        │   └── Préstamo con garantía de auto
        ├── Modalidades
        │   ├── Con resguardo
        │   └── Sin dejarlo
        ├── Segmentos
        │   ├── Autos de lujo
        │   ├── Autos blindados
        │   └── Autos exóticos
        ├── Ubicaciones
        │   ├── CDMX
        │   └── Querétaro
        ├── Contenido transaccional
        │   ├── Cuánto prestan por modelo
        │   ├── Necesidades y montos
        │   └── Modalidades de uso y resguardo
        └── Contenido de confianza
            ├── Valuación
            ├── Documentos
            ├── Costos y condiciones
            ├── Comparaciones
            └── Riesgos y objeciones
```

## 5. Mapa de keywords y URLs

| URL propietaria | Keyword principal | Variaciones permitidas |
|---|---|---|
| `/empeno-de-autos/` | empeño de autos | empeñar auto, empeño de vehículos, empeño de carro |
| `/prestamo-con-garantia-de-auto/` | préstamo con garantía de auto | préstamo sobre auto, crédito con auto en garantía |
| `/prestamo-con-garantia-de-autos-de-lujo/` | préstamo para autos de lujo | empeño de autos de lujo |
| `/prestamo-con-garantia-de-autos-blindados/` | préstamo para autos blindados | empeño de camionetas blindadas |
| `/prestamo-con-garantia-de-autos-exoticos/` | préstamo para autos exóticos | garantía de auto exótico |
| `/prestamo-con-garantia-de-auto-en-cdmx/` | préstamo con garantía de auto CDMX | empeño de autos CDMX |
| `/prestamo-con-garantia-de-auto-en-queretaro/` | préstamo con garantía de auto Querétaro | empeño de autos Querétaro |
| Artículos comparativos | diferencia, vs, conviene | objeciones y alternativas |
| Artículos por modelo | cuánto me prestan por [modelo] | empeñar [modelo], garantía de [modelo] |

### Regla anti-canibalización

Ninguna página nueva puede utilizar “empeño de autos” como intención primaria
sin un modificador claramente distinto y una justificación documentada.

Antes de crear una URL se debe responder:

1. ¿Qué intención única resuelve?
2. ¿Qué URL actual podría responderla?
3. ¿Qué contenido original tendrá?
4. ¿A qué hub enlazará?
5. ¿Podría competir con `/empeno-de-autos/`?

Si las respuestas no justifican una página independiente, el tema se incorpora a
una URL existente.

## 6. Navegación y jerarquía global

### Header vehicular

Orden recomendado:

1. Empeño de autos
2. Cómo funciona
3. Vehículos
4. Relojes
5. Sociedad 52
6. Blog
7. CTA: Cotizar mi auto

“Empeño de autos” debe enlazar directamente a `/empeno-de-autos/`.

### Homepage

El hub principal debe aparecer:

- en el primer bloque visible;
- como ruta comercial destacada;
- dentro de modalidades;
- en la sección de vehículos;
- antes del CTA final.

### Footer

La columna de servicios vehiculares debe comenzar con:

1. Empeño de autos.
2. Préstamo con garantía de auto.
3. Sin dejarlo.
4. Con resguardo.
5. Autos de lujo.
6. Autos blindados.
7. CDMX.
8. Querétaro.

### Blog

Las agrupaciones editoriales visibles serán:

- Empeño de autos.
- Cuánto prestan por tu modelo.
- Autos blindados.
- Autos de lujo.
- Modalidades y requisitos.
- Liquidez para empresarios.

Los artículos pueden conservar `/blog/{slug}/`; la organización depende de la
navegación, el etiquetado y los enlaces, no de crear directorios nuevos.

## 7. Plan de enlazado interno

Objetivo inicial: pasar de 8 a por lo menos 30 archivos fuente relevantes que
enlacen hacia `/empeno-de-autos/`.

### Reglas

1. Todo contenido vehicular de intención comercial debe enlazar al hub.
2. El enlace debe aparecer dentro del cuerpo cuando sea útil, no solamente en
   un bloque global al final.
3. Los artículos por modelo deben enlazar al hub principal y al hub de su
   segmento.
4. Los contenidos de necesidad económica deben enlazar directamente al hub.
5. Los hubs de lujo, blindados, exóticos, modalidades y ubicaciones deben
   enlazar contextualmente al hub principal.
6. `/empeno-de-autos/` debe devolver enlaces hacia sus contenidos satélite más
   valiosos.
7. Los enlaces entre satélites se agregan solo cuando resuelvan la siguiente
   pregunta natural del lector.

### Anchors orientativos

- empeño de autos;
- empeñar tu auto;
- empeño de vehículos;
- obtener liquidez usando tu auto;
- usar tu auto como garantía;
- alternativa para empeñar un auto de alto valor.

No se impondrá una distribución matemática ni se repetirá el mismo anchor de
forma artificial.

## 8. Reestructura de `/empeno-de-autos/`

La página debe cumplir tres funciones: posicionar, explicar y convertir.

### Estructura requerida

1. Hero con H1 exacto, propuesta de valor, cobertura y CTA.
2. Cotización inicial por marca, modelo, año y ciudad.
3. Respuesta clara sobre cuánto se puede obtener y cómo se calcula.
4. Comparación de modalidad con resguardo y sin dejarlo.
5. Segmentos de lujo, blindados, exóticos y SUVs premium.
6. Diferenciadores verificables de SWIP.
7. Casos de necesidad: $500,000, $1 millón, negocio, nómina e impuestos.
8. Cobertura real en CDMX, zona metropolitana y Querétaro.
9. Objeciones: buró, auto financiado, factura, uso del vehículo, costos e
   incumplimiento.
10. CTA final que explique qué sucederá después del contacto.

### Principios de conversión

- Una acción principal: cotizar el auto.
- CTA visible antes del primer scroll y repetido después de los principales
  bloques de decisión.
- Mensaje consistente con la búsqueda “empeño de autos”.
- Proceso, requisitos y siguiente paso explícitos.
- Prueba operativa y ejemplos reales anonimizados cuando existan.
- Sin promesas de aprobación, montos, tasas o tiempos que no puedan sostenerse.
- Tono premium y sobrio; la keyword se usa para capturar demanda, no para
  presentar a SWIP como una casa de empeño convencional.

## 9. Plan editorial de 90 días

### Semanas 1–2 — Reestructura

- Incorporar el hub al header, footer y rutas principales de homepage.
- Reestructurar `/empeno-de-autos/`.
- Mejorar la dirección visual de la landing: actualmente carece de imágenes y
  todavía no alcanza el estándar visual premium del sitio.
- Aplicar el mapa de keywords.
- Enlazar desde hubs de lujo, blindados, exóticos, modalidades y ciudades.
- Actualizar por lo menos 15 contenidos existentes con enlaces contextuales.
- Definir medición del CTA y del inicio de contacto.

No se publican artículos nuevos hasta terminar esta fase.

### Semanas 3–4 — Actualización de activos existentes

1. Préstamo con garantía vs. empeño de autos.
2. Empeño de autos de lujo vs. préstamo con garantía.
3. Qué tan recomendable es empeñar un auto.
4. Puedo empeñar un auto que todavía estoy pagando.
5. Cuánto prestan por un auto blindado.
6. Cómo se valúa un auto blindado.
7. Documentos de un auto blindado.
8. Range Rover: Sport, Vogue y Autobiography.
9. Mercedes-AMG G63: Clase G y variante blindada.
10. Cadillac Escalade: diferenciar unidad convencional y blindada.

### Semanas 5–7 — Modelos de alta intención

Publicar un máximo de dos por semana:

1. ¿Cuánto me prestan por una BMW X5?
2. ¿Cuánto me prestan por una Mercedes GLE?
3. ¿Cuánto me prestan por una BMW X6?
4. ¿Cuánto me prestan por una Porsche Macan?
5. ¿Cuánto me prestan por una Mercedes GLS?
6. ¿Cuánto me prestan por una Audi Q7?

### Semanas 8–10 — Necesidad económica

1. Cómo conseguir $500,000 usando mi auto.
2. Cómo conseguir $1 millón usando mi auto.
3. Cuánto porcentaje del valor de un auto pueden prestar.
4. Préstamo sobre auto sin venderlo.
5. Liquidez para pagar nómina con garantía vehicular.
6. Vender o empeñar un auto de lujo.

### Semanas 11–12 — Blindados y autoridad

1. Depreciación de un vehículo blindado.
2. Cómo influye el nivel de blindaje en el monto del préstamo.
3. Empeñar un blindado sin certificado.
4. Autos blindados de más de diez años.

Los temas 3 y 4 deben consolidarse en las guías existentes si no existe
suficiente información única para justificar nuevas URLs.

## 10. Control de calidad para contenido nuevo

Un artículo por modelo solo se publica si incluye:

- una respuesta directa a la consulta;
- años y versiones relevantes;
- factores de valuación propios del modelo;
- problemas conocidos del mercado secundario;
- documentos necesarios;
- modalidad aplicable;
- información operativa o ejemplo realista verificable;
- preguntas específicas del modelo;
- CTA con contexto de modelo, año y ciudad;
- enlace al hub principal y al hub de segmento.

Cambiar el nombre del vehículo dentro de una plantilla no constituye contenido
único. Si no existe conocimiento específico suficiente, el modelo se incorpora a
una guía consolidada.

## 11. Autoridad externa

La keyword genérica probablemente requerirá autoridad externa además de enlaces
internos.

Durante los meses dos y tres:

- obtener menciones editoriales legítimas en medios automotrices, financieros,
  empresariales y locales;
- producir un estudio propio sobre valuación de autos de alto valor en México;
- colaborar con talleres, blindadoras, especialistas y organizaciones con una
  relación real con el servicio;
- procurar que los enlaces relevantes apunten al hub, no solo a la homepage;
- fortalecer referencias locales consistentes de CDMX y Querétaro;
- evitar compra de paquetes masivos de backlinks y reciprocidad automática.

## 12. Medición

### North star

- Operaciones financiadas atribuidas o asistidas por búsqueda orgánica del
  clúster.
- Ingreso y margen asociados a esas operaciones cuando los datos estén
  disponibles.

### Embudo mínimo

1. Impresión.
2. Visita orgánica.
3. Clic en cotización o WhatsApp.
4. Lead con vehículo elegible.
5. Valuación agendada.
6. Operación aprobada.
7. Operación financiada.

### Indicadores SEO

- posición de la consulta exacta “empeño de autos”;
- URL mostrada por Google para la consulta;
- impresiones y clics no relacionados con marca;
- CTR de `/empeno-de-autos/`;
- cantidad y calidad de enlaces internos al hub;
- consultas nuevas por modelos, montos y modalidades;
- conversiones directas y asistidas por los satélites.

### Ventanas de revisión

- Día 14: rastreo, indexación y primeras señales.
- Día 28: comparación inicial con el periodo anterior.
- Día 56: dirección de posiciones y consultas.
- Día 90: evaluación de SEO, leads y operaciones.

Entrar en top 50, top 20 o top 10 son objetivos progresivos, no garantías. No se
declarará éxito por una consulta aislada con pocas impresiones.

## 13. Gobierno editorial

Toda tarea futura relacionada con SEO vehicular debe incluir esta comprobación:

- [ ] Reconoce que la keyword principal es “empeño de autos”.
- [ ] Reconoce que su URL propietaria es `/empeno-de-autos/`.
- [ ] No compite con la intención principal.
- [ ] Explica cómo transfiere autoridad o conversiones al hub.
- [ ] Tiene una intención y una URL propietaria definidas.
- [ ] Incluye enlaces entrantes y salientes planificados.
- [ ] Tiene CTA y medición acordes con la intención.
- [ ] Aporta información específica, verificable y útil.

No debe aprobarse contenido vehicular que no pueda pasar esta lista.

## 14. Definition of Done de la primera fase

- `/empeno-de-autos/` figura como primera ruta vehicular en navegación y footer.
- La homepage le da prominencia comercial.
- La landing responde la intención, maneja objeciones y ofrece un CTA claro.
- Al menos 30 archivos relevantes enlazan al hub.
- Los hubs secundarios lo reconocen como página principal de la intención.
- El mapa keyword–URL está aplicado a todas las páginas vehiculares.
- Los artículos comparativos no compiten con la landing.
- La cotización y los contactos originados en el clúster pueden medirse.
- Existe una línea base para comparar resultados a 14, 28, 56 y 90 días.

## 15. Próximo paso autorizado por este plan

Ejecutar primero la reestructura de navegación, homepage, footer, landing e
interlinks. La publicación de contenido nuevo comienza únicamente después de
completar y validar esa fase.

## 16. Registro de ejecución — 7 de agosto de 2026

Implementación preparada y validada en el repositorio:

- [x] “Empeño de autos” es la primera ruta vehicular del header y footer.
- [x] La homepage lo presenta en el primer bloque visible y en una sección comercial propia.
- [ ] Mejorar la landing como página visual y comercial. Aunque ya incorpora
  cotización inicial, condiciones, cobertura, objeciones y CTA, todavía carece
  de imágenes y necesita una dirección visual premium.
- [x] 34 archivos fuente relevantes enlazan a `/empeno-de-autos/`.
- [x] Los hubs de lujo, blindados, exóticos, modalidades, proceso y requisitos transfieren autoridad al hub.
- [x] `llms.txt` y `llms-full.txt` reconocen la URL como fuente comercial principal.
- [x] Los bots de búsqueda y respuesta de OpenAI, Anthropic, Perplexity, Google y Bing están permitidos.
- [x] Canonical, sitemap, H1, JSON-LD y FAQPage se validan automáticamente.
- [x] `npm run build`, `npm run audit:links`, `npm run audit:seo` y `npm run audit:ai` pasan sin errores.

La publicación efectiva en `swip.mx` depende del despliegue de estos cambios.

La auditoría posterior de producción y el reporte móvil de Google Lighthouse
quedan registrados en el
[plan de remediación SEO técnico y rendimiento](./plan-remediacion-seo-tecnico-2026-08-07.md).
Ese plan añade como prioridades la consolidación de `www`, las variantes
`index.html`, el LCP móvil, el JavaScript de terceros, accesibilidad, schema y
confianza legal. No modifica la propiedad semántica de `/empeno-de-autos/`.

### Pendiente prioritario de la landing

Estado: **programado para la semana del 10 al 16 de agosto de 2026 — prioridad alta**.

Por decisión del 7 de agosto, la mejora visual no se ejecutará esta semana. El
trabajo SEO puede continuar con medición, despliegue, rastreo y actualización de
activos existentes, sin considerar terminada la landing.

Antes de considerar terminada `/empeno-de-autos/` se debe:

1. Definir y producir una imagen hero propia, sobria y relevante para empeño de
   vehículos premium.
2. Incorporar imágenes o recursos visuales en modalidades, valuación,
   segmentos de vehículos y cobertura, evitando decoración genérica.
3. Diseñar una composición visual que explique el proceso y la diferencia de
   SWIP sin convertir la página en una pared de texto.
4. Optimizar cada activo en WebP o AVIF, con dimensiones explícitas, `alt`
   descriptivo y carga diferida fuera del hero.
5. Revisar la experiencia móvil y el peso total antes de publicar.
6. Realizar una revisión visual final junto con las auditorías SEO, enlaces y
   AI/LLM.

### Actualización de contenido — avance del 7 de agosto de 2026

- [x] Comparativa entre préstamo con garantía y empeño de autos.
- [x] Comparativa con resguardo frente a modalidad sin dejar el auto.
- [x] Guía para vehículos que todavía tienen financiamiento.
- [x] Separación de intención en Querétaro: la landing local es la propietaria
  comercial de “préstamo con garantía de auto” y la variante “empeño de autos”,
  mientras el artículo atiende “dónde empeñar”, “cómo elegir” y “qué revisar”.
- [x] Se conserva la URL del artículo y su canonical; no se aplica redirección
  porque ya tiene señales orgánicas y aún no existe evidencia combinada
  consulta–página suficiente para consolidarlo sin riesgo.
- [x] Ambas páginas se enlazan con anchors diferenciados para guiar al usuario
  desde la comparación informativa hacia la evaluación comercial.
- [ ] Actualizar el clúster de autos blindados.
- [ ] Mejorar CTR y contenido de Porsche Cayenne y Mercedes-AMG G63.
- [ ] Comparar resultados a 14 y 28 días después del despliegue.
