# Estrategia de Contenido SWIP — V2

Fecha: 2026-05-25
Responsable: Ramon Pando
Reemplaza: `blog-plan-2026-05-08.md`

---

## Estado actual

| Métrica | Valor |
|---------|-------|
| Posts publicados | 28 |
| Posts indexados | ~8 (estimado) |
| Posts "Rastreada: sin indexar" | 2 |
| Posts "Descubierta: sin indexar" | 18 |
| Backlinks externos | 0 (Growkik lanza 1 junio) |
| Dominio activo desde | agosto 2023 |
| Google Ads activo desde | mayo 2026 |

---

## Diagnóstico: por qué la V1 no está funcionando

### Lo que se hizo bien
- Estructura técnica impecable: canonical, schema, robots, sitemap
- Contenido honesto y específico — nada inventado
- Cobertura de modelos amplia: Porsche, Ferrari, Lamborghini, Range Rover, G63, X7, blindados, Suburban, Tahoe, Escalade
- Malla de interlinks completa entre posts
- NAP consistente en todos los posts

### El problema central
El plan V1 fue correcto para un sitio con autoridad de dominio establecida. SWIP no tiene esa base todavía. Al publicar 28 posts en 3 semanas, todos siguiendo el mismo patrón de template ("¿Cuánto me prestan por X?"), Google detectó:

1. **Patrón repetitivo sin diferenciación suficiente** — muchas páginas con estructura idéntica y propósito similar. Google llama a esto "content produced at scale" — señal de alerta en Helpful Content.
2. **Dominio YMYL sin autoridad externa** — contenido financiero en un sitio sin backlinks. Google aplica criterio muy estricto de E-E-A-T para esta categoría.
3. **Author entity débil** — posts firmados por "SWIP" como organización, no por una persona con experiencia verificable.

El resultado: Google crawleó los primeros posts, los rechazó, y para el resto asignó crawl budget bajo ("Descubierta: sin indexar").

### Lo que ya se corrigió (2026-05-25)
- ✅ Schema de autor cambiado a Ramon Pando (persona) con jobTitle y worksFor
- ✅ Bio HTML del autor agregada a todos los posts via BlogPost.astro
- ✅ Post de impago reescrito desde perspectiva del acreedor (ángulo único)
- ✅ Post del Urus profundizado con secciones de mercado internacional y fenómeno de precio

---

## Los principios de la V2

**Menos posts, más profundidad.**
La V1 publicaba 3 posts por semana. La V2 publica 2 posts por mes — pero cada uno es contenido que ningún competidor puede replicar sin haber operado el negocio.

**Solo SWIP puede escribir esto.**
Cada post nuevo debe responder la pregunta: ¿podría escribir esto un blog financiero genérico? Si la respuesta es sí, no se publica.

**Conectado directo al funnel.**
Todo post nuevo debe tener intención de búsqueda clara y path hacia WhatsApp o cotizador. No contenido de awareness puro.

**Calidad primero, indexación después.**
El problema de indexación se resuelve con backlinks (Growkik) + tiempo, no con más volumen de contenido.

---

## Los 3 pilares del contenido V2

### Pilar 1 — Proceso interno (perspectiva del operador)

Contenido que solo SWIP puede escribir porque describe su propio proceso. Alta E-E-A-T. Difícil de copiar.

**Ejemplos:**
- Cómo valuamos un auto blindado internamente: lo que revisa el valuador paso a paso
- Por qué el Libro Azul no sirve para autos de lujo en México (y qué usamos en su lugar)
- Qué hace que un Cayenne valga $400K o $1.2M: el mismo modelo, diferente valuación
- Lo que vemos en una visita a domicilio en Querétaro vs. CDMX

**Criterio:** Si alguien más puede escribir exactamente lo mismo, no es Pilar 1.

---

### Pilar 2 — Mercado de autos de lujo en México (datos y perspectiva)

Contenido de análisis de mercado con datos reales que SWIP tiene por su operación. Posiciona a SWIP como referencia de mercado, no solo como prestamista.

**Ejemplos:**
- Qué modelos retienen mejor valor en México: lo que vemos en la cartera de SWIP
- El fenómeno del Urus en México: por qué algunos valen más que su precio original
- Blindados vs. no blindados: la diferencia real de valor que pocos mencionan
- Autos de lujo que más piden los clientes de SWIP en 2026

**Criterio:** Tiene que tener un dato, una observación o una perspectiva que venga de haber operado el negocio.

---

### Pilar 3 — Objeción directa de alta intención (cerca de la decisión)

Contenido para personas que ya están considerando el producto y tienen una objeción o duda específica. Intención de conversión alta.

**Ejemplos:**
- ¿Es seguro dejar mi auto de lujo en garantía? Lo que debes verificar antes de firmar
- ¿Qué diferencia hay entre SWIP y una casa de empeño para mi Porsche?
- Si ya tengo crédito automotriz activo, ¿puedo hacer un préstamo con garantía encima?
- ¿Qué pasa con el seguro de mi auto si lo dejo en resguardo?

**Criterio:** La persona que busca esto está a 1-2 pasos de contactar. El post cierra la objeción y lleva al WhatsApp.

---

## Lo que ya no se publica

| Tipo de contenido | Por qué se para |
|-------------------|-----------------|
| "¿Cuánto me prestan por un [modelo]?" | Cobertura suficiente (28 posts). Más del mismo patrón daña el dominio. |
| Posts de menos de 1,000 palabras | Señal de thin content. |
| Contenido que cualquier sitio de finanzas puede escribir igual | Bajo E-E-A-T. No diferencia a SWIP. |
| Posts sin ángulo único de SWIP | No pasan el criterio "solo SWIP puede escribir esto" |

---

## Qué hacer con el contenido existente

### Dejar publicados — bien como están
Los posts que siguen la estructura original pero tienen contenido sólido y específico. Google eventualmente los indexará cuando lleguen los backlinks. No tocar.

### Candidatos a profundizar (si siguen sin indexar en 60 días)
Posts con potencial pero que necesitan un ángulo más único:
- `como-se-valua-un-auto-exotico` — agregar el proceso interno de SWIP
- `como-se-valua-un-auto-blindado` — agregar diferencia entre blindaje certificado vs. no certificado desde la valuación
- `cuanto-tarda-el-proceso-para-auto-premium-blindado-exotico` — agregar timeline real con tiempos exactos de SWIP

### No tocar hasta tener backlinks
El resto del catálogo existente. El problema no es el contenido — es la falta de autoridad externa. Esperar a que Growkik (junio) aporte los primeros backlinks.

---

## Calendario concreto V2

### Junio 2026

**Post 1 (primera semana)**
Título: *"Cómo valuamos un auto en SWIP: el proceso real de una visita a domicilio"*
Slug: `como-valuamos-un-auto-proceso-real`
Pilar: 1 (proceso interno)
Ángulo: Ramon Pando narra el proceso desde adentro — qué revisa el valuador, en qué orden, qué documentos pide primero, cómo llega a un número
Por qué es único: nadie más puede describir el proceso interno de SWIP
CTA: WhatsApp para agendar valuación

**Post 2 (tercera semana)**
Título: *"Por qué el Libro Azul no sirve para valuar autos de lujo en México"*
Slug: `por-que-libro-azul-no-sirve-autos-de-lujo`
Pilar: 1 + 2
Ángulo: Explicar las limitaciones reales del Libro Azul para premium, qué referencias sí usa SWIP, casos concretos donde la diferencia fue de $500K+
Por qué es único: perspectiva del valuador especializado, no del consumidor
CTA: Cotiza tu vehículo directamente

---

### Julio 2026

**Post 3**
Título: *"¿Es seguro dejar mi Porsche o Range Rover en garantía? Lo que debes verificar"*
Slug: `es-seguro-dejar-auto-de-lujo-en-garantia`
Pilar: 3 (objeción de conversión)
Ángulo: Checklist real de qué preguntar a cualquier empresa antes de firmar (SWIP cumple todos, otros no)

**Post 4**
Título: *"Qué modelos de autos de lujo retienen mejor valor en México — perspectiva de SWIP"*
Slug: `modelos-mejor-retencion-valor-mexico-2026`
Pilar: 2 (mercado)
Ángulo: Datos de la cartera real de SWIP — qué vehículos tienen valuaciones más sólidas y por qué

---

### Agosto 2026

**Post 5**
Título: *"La diferencia real entre empeñar un Porsche en una casa de empeño y en SWIP"*
Slug: `diferencia-casa-empeno-vs-swip-autos-lujo`
Pilar: 3

**Post 6**
Título: *"Blindados certificados vs. sin certificar: lo que cambia en la valuación y el monto"*
Slug: `blindados-certificados-vs-sin-certificar-valuacion`
Pilar: 1 + 2

---

## Reglas de publicación V2

Cada post debe cumplir antes de publicarse:

- [ ] Pasa el criterio: "¿solo SWIP puede escribir esto?"
- [ ] Más de 1,200 palabras
- [ ] Tiene ángulo único documentado (no solo "responde una pregunta")
- [ ] Tiene autor: Ramon Pando (ya configurado en BlogPost.astro)
- [ ] Tiene path claro a conversión (WhatsApp o cotizador)
- [ ] Tiene interlinks a landing comercial y 2 posts relacionados
- [ ] Landing del cluster actualizada para enlazar de vuelta
- [ ] NAP incluido al final

---

## Backlinks — plan concreto

| Fecha | Acción | Objetivo |
|-------|--------|---------|
| 1 junio | Growkik lanza — comprar 2 guest posts | Dominios de finanzas MX que enlacen a `/prestamo-con-garantia-de-auto/` y `/prestamo-con-garantia-de-autos-de-lujo/` |
| Julio | 1 guest post adicional | Apuntar a `/prestamo-con-garantia-de-autos-blindados/` |
| Julio-Agosto | Directorios financieros MX | Condusef, finanzas personales, sitios de autos premium |

Objetivo: 5-8 dominios únicos apuntando al sitio antes de septiembre.

---

## KPIs de la V2

Revisar el día 1 de cada mes:

| Indicador | Meta 60 días | Meta 90 días |
|-----------|-------------|-------------|
| Posts indexados | 15+ | 20+ |
| Dominios externos con backlink | 2+ | 5+ |
| Impresiones orgánicas (Search Console) | +50% vs mayo | +100% vs mayo |
| Clics orgánicos | Tendencia positiva | 50+ clicks/semana |
| Posts "Rastreada: sin indexar" | 0 | 0 |

---

## Lo que no cambia

- Estructura técnica: bien, no tocar
- Schema de autor: Ramon Pando (ya actualizado)
- NAP en todos los posts: mantener
- Interlinks bidireccionales: mantener como regla
- Modal SwipBot/WhatsApp en todas las páginas: no tocar
- Landings de ads (CDMX y Querétaro): no agregar posts como EXIT LINKS
