# Auditoría de enlaces internos — 23 de julio de 2026

## Alcance

Revisión automatizada de las rutas estáticas y artículos publicados del sitio SWIP. La auditoría comprueba enlaces internos literales en archivos Astro, Markdown y MDX, y considera los enlaces generados por el índice del blog y el módulo de artículos relacionados.

## Resultado

| Indicador | Resultado |
|---|---:|
| URLs conocidas | 60 |
| Enlaces internos rotos | 0 |
| Páginas huérfanas | 0 |
| Páginas con una sola fuente de enlaces | 0 |

El build de Astro generó correctamente las 60 páginas. No se modificó `/empeno-de-autos/` durante este trabajo para conservar limpia la ventana de medición iniciada con la publicación del 16 de julio.

## Cambios implementados

1. Cada artículo del blog muestra hasta tres contenidos relacionados.
2. La selección prioriza primero la misma categoría y después el mismo cluster temático.
3. Todos los artículos reciben enlaces desde el índice del blog y desde su cluster.
4. Se normalizó la variación `Autos de Lujo` a `Autos de lujo`.
5. Se añadió soporte para `updatedDate`, visible y presente en datos estructurados solo cuando existe una revisión sustantiva.
6. Se marcaron como actualizados el 16 de julio los artículos de Cadillac Escalade y Chevrolet Suburban, que sí recibieron una revisión sustantiva ese día.

## Clusters utilizados

- Blindados.
- Premium: lujo, exóticos y SUVs premium.
- Proceso: guías, requisitos y montos.
- Decisión: casos de uso y comparativas.
- Local: cobertura y Querétaro.

## Repetición de la auditoría

Ejecutar después de crear, eliminar o renombrar páginas:

```bash
npm run audit:links
```

La auditoría devuelve error si encuentra enlaces dirigidos a rutas internas inexistentes. No sustituye el informe de indexación de Search Console: una URL puede existir y estar enlazada correctamente, pero seguir pendiente de rastreo o indexación por Google.
