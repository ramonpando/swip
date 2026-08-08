# Inventario de claims y freshness de SWIP

Fecha: 8 de agosto de 2026
Estado: inventario técnico completo; correcciones editoriales bloqueadas por
evidencia operativa y aprobación legal.

## Cobertura

El barrido se ejecuta sobre el HTML generado, limitado al contenido de `main`,
para evitar que el modal, la navegación o el footer atribuyan el mismo claim a
todas las páginas.

- 74 páginas construidas;
- 71 páginas indexables revisadas;
- 69 páginas indexables con al menos una familia de claim candidata;
- 2 páginas sin coincidencias: `/autor/ramon-pando/` y `/sociedad-52/`.

El inventario completo de URL y archivo fuente se reproduce con:

```bash
npm run build
npm run audit:claims
```

El resultado JSON incluye, para cada familia, `route`, `source`, `owner` y
`status`. Una coincidencia significa “revisar”, no “claim incorrecto”.

## Matriz de control

| ID | Claim | URLs detectadas | Fuente exigida | Condición que debe publicarse | Propietario | Estado |
|---|---|---:|---|---|---|---|
| RATE | Tasa, costo o pago | 18 | Contrato/producto vigente y ejemplo aprobado | Base de cálculo, periodicidad, comisiones y alcance de “desde” | Legal + Finanzas | Bloqueado por GOV-01/DATA-01 |
| AMOUNT | Monto, límite o rango monetario | 57 | Operaciones y política de producto con fecha de corte | Sujeto a valuación, documentos, modalidad y aprobación | Operaciones + Finanzas | Bloqueado por DATA-01 |
| SPEED | Respuesta, valuación o desembolso | 44 | SLA observado por etapa | Definir si se trata de estimado, oferta, firma o depósito; horario y expediente completo | Operaciones | Bloqueado por DATA-01 |
| BUREAU | Buró o historial crediticio | 25 | Política real de evaluación y contrato | Aclarar qué se consulta, qué no decide por sí solo y demás requisitos | Legal + Riesgo | Bloqueado por GOV-01 |
| CUSTODY | Custodia, seguro, GPS o seguridad | 35 | Póliza, contrato y procedimiento operativo | Modalidad, cobertura, exclusiones, vigencia y obligaciones del cliente | Operaciones + Legal | Bloqueado por GOV-01/DATA-01 |
| VALUATION | Valuación, LTV o rango por activo | 66 | Metodología y datos autorizados | Fecha de corte, muestra o referencia, versión, estado y carácter estimativo | Valuación + Datos | Bloqueado por DATA-01 |
| COMPARISON | Bancos, empeño u otros proveedores | 47 | Fuente primaria vigente de cada tercero | Fecha, alcance, producto comparable y lenguaje no absoluto | Legal + Contenido | Revisión manual prioritaria |

Las cifras de URLs pueden solaparse: una página suele contener más de una
familia. Los patrones están en `scripts/audit-claims.mjs` y deben ajustarse si
aparecen nuevas formulaciones.

## Quince posts prioritarios para CONTENT-02

El orden combina riesgo financiero, intención comercial, cifras concretas y
probabilidad de que una respuesta de IA cite el pasaje fuera de contexto.

| Prioridad | URL | Motivo principal | Familias a validar |
|---:|---|---|---|
| 1 | `/blog/swip-vs-monte-de-piedad-vs-banco/` | Compara terceros y ventajas de SWIP | COMPARISON, RATE, AMOUNT, SPEED |
| 2 | `/blog/prestamo-con-garantia-vs-empeno-de-autos/` | Comparativa de productos financieros | COMPARISON, RATE, AMOUNT |
| 3 | `/blog/empeno-de-autos-de-lujo-vs-prestamo-con-garantia/` | Recomendación de producto por escenario | COMPARISON, AMOUNT, SPEED |
| 4 | `/blog/cuanto-te-prestan-por-tu-auto-en-mexico/` | Explica LTV y montos de forma general | VALUATION, AMOUNT, RATE |
| 5 | `/blog/cuanto-tarda-el-proceso-para-auto-premium-blindado-exotico/` | Promesas por etapa y mismo día | SPEED, VALUATION |
| 6 | `/blog/no-pase-el-buro-y-tengo-un-auto-de-valor/` | Claim sensible sobre buró | BUREAU, SPEED, AMOUNT |
| 7 | `/blog/necesito-liquidez-urgente-tengo-un-auto/` | Contexto vulnerable y urgencia financiera | SPEED, RATE, AMOUNT |
| 8 | `/blog/pagar-sat-deudas-urgentes-con-garantia-de-auto/` | Decisión financiera de alto impacto | SPEED, AMOUNT, COMPARISON |
| 9 | `/blog/con-resguardo-o-sin-dejarlo-para-auto-de-lujo/` | Seguro, custodia, costos y modalidad | CUSTODY, RATE, AMOUNT |
| 10 | `/blog/prestamo-con-garantia-de-auto-para-financiar-tu-negocio/` | Ejemplos monetarios y rapidez B2B | AMOUNT, SPEED, RATE |
| 11 | `/blog/cuanto-me-prestan-por-un-ferrari-488-o-f8/` | Rango alto por modelo | VALUATION, AMOUNT, SPEED |
| 12 | `/blog/cuanto-me-prestan-por-un-lamborghini-urus/` | Rango alto por modelo | VALUATION, AMOUNT, SPEED |
| 13 | `/blog/cuanto-me-prestan-por-una-escalade-blindada/` | Rango y valor del blindaje | VALUATION, AMOUNT, CUSTODY |
| 14 | `/blog/cuanto-me-prestan-por-una-suburban-blindada/` | Rango, tiempos y blindaje | VALUATION, AMOUNT, SPEED |
| 15 | `/blog/cuanto-me-prestan-por-un-land-rover-defender/` | Rango, buró y desembolso | VALUATION, AMOUNT, BUREAU, SPEED |

## Freshness: 17 fechas que requieren justificación

Los siguientes archivos comparten `updatedDate: "2026-08-07"`:

1. `cuanto-me-prestan-por-un-audi-q8.md`
2. `prestamo-con-garantia-vs-empeno-de-autos.md`
3. `cuanto-me-prestan-por-una-escalade-blindada.md`
4. `cuanto-me-prestan-por-una-range-rover.md`
5. `cuanto-me-prestan-por-una-bmw-x7.md`
6. `necesito-liquidez-urgente-tengo-un-auto.md`
7. `puedo-empenar-un-auto-de-lujo-si-aun-lo-estoy-pagando.md`
8. `cuanto-me-prestan-por-una-mercedes-g63.md`
9. `cuanto-me-prestan-por-una-porsche-cayenne.md`
10. `empeno-de-autos-en-queretaro.md`
11. `con-resguardo-o-sin-dejarlo-para-auto-de-lujo.md`
12. `requisitos-para-un-prestamo-con-garantia-de-auto.md`
13. `cuanto-me-prestan-por-una-suburban-blindada.md`
14. `cuanto-te-prestan-por-tu-auto-en-mexico.md`
15. `no-pase-el-buro-y-tengo-un-auto-de-valor.md`
16. `que-tan-recomendable-es-empenar-un-auto-de-lujo-o-blindado.md`
17. `pagar-sat-deudas-urgentes-con-garantia-de-auto.md`

No se eliminan ni sustituyen esas fechas automáticamente. Para cerrar
FRESH-01, cada archivo debe conservar la fecha solo si existe una modificación
material demostrable en esa fecha; los posts prioritarios deben añadir una nota
breve de qué cambió. Una corrección tipográfica o un cambio de enlaces no
justifica renovar `dateModified`.

## Siguiente decisión editorial

Antes de reescribir RATE, BUREAU, CUSTODY o SPEED se necesitan las respuestas
de GOV-01 y DATA-01. Mientras tanto sí puede avanzarse con fuentes primarias de
terceros en las tres comparativas, inventario de evidencia interna y diseño del
bloque de metodología; no debe inventarse una fuente para cifras propias.
