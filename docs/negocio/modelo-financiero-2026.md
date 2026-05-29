# Modelo Financiero SWIP — 2026

Última actualización: 2026-05-21
Responsable: Ramon Pando

---

## Meta

| | Valor |
|--|--|
| **Meta cartera total** | $25,000,000 MXN |
| **Fecha límite** | 31 de diciembre de 2026 |
| **Cartera actual** | $14,800,000 MXN |
| **Brecha** | $10,200,000 MXN |
| **Meses restantes** | 7 (junio–diciembre) |

---

## Parámetros del modelo

| Parámetro | Valor | Fuente |
|-----------|-------|--------|
| Duración promedio de préstamo | 4.8 meses | Histórico real |
| Churn mensual (modelo cohort) | 1/4.8 = 20.83% | Derivado |
| Ticket promedio canal ads | $150,000 MXN | Histórico real |
| Ticket promedio canal recurrentes | $600,000 MXN | Histórico real |
| Tasa de interés | Desde 4.5% mensual | Fijada |
| Razón social | CORPOSWIP LATAM S.A.P.I. de C.V. | CSF |
| RFC | CLA230824RS7 | CSF |

---

## Estado actual por canal (21 mayo 2026)

| Canal | Cartera | # Préstamos aprox. | Ticket promedio |
|-------|---------|-------------------|-----------------|
| Google Ads (activo desde 12 mayo) | $4,800,000 | ~32 | $150,000 |
| Recurrentes / directo / referidos | ~$10,000,000 | ~17 | $600,000 |
| **Total** | **$14,800,000** | **~49** | |

### Contexto histórico
- Dic 2025: $2,000,000 (inicio desde cero en ads)
- May 2026: $16,500,000 → desempeño de $1,700,000 → **$14,800,000**
- Crecimiento orgánico en 6 meses: **8.25x sin ads**

---

## La fórmula clave

```
Originations mensuales necesarias para META =
  Originations actuales + (Meta − Cartera actual) / Duración promedio

= $3,080,000 + ($25,000,000 − $14,800,000) / 4.8

= $3,080,000 + $2,125,000

= $5,205,000 / mes
```

**Necesitas originar $5.2M en nuevos préstamos cada mes** (constante desde junio).

---

## Proyección mes a mes

_Supuesto: $5.2M/mes en originations constante desde junio._
_Churn de los primeros 4-5 meses basado en originations históricas (~$3.08M/mes)._

| Mes | Originations nuevas | Churn estimado | Cartera cierre | vs Meta |
|-----|-------------------|----------------|----------------|---------|
| Mayo 2026 (real) | — | — | **$14,800,000** | -$10.2M |
| Junio | $5,200,000 | $3,080,000 | **$16,920,000** | -$8.1M |
| Julio | $5,200,000 | $3,080,000 | **$19,040,000** | -$6.0M |
| Agosto | $5,200,000 | $3,080,000 | **$21,160,000** | -$3.8M |
| Septiembre | $5,200,000 | $3,080,000 | **$23,280,000** | -$1.7M |
| Octubre | $5,200,000 | $3,500,000* | **$24,980,000** | -$20K ✅ |
| Noviembre | $5,200,000 | $5,200,000* | **~$25,000,000** | META ✅ |
| Diciembre | $5,200,000 | $5,200,000* | **~$25,000,000** | META ✅ |

_*Churn sube en oct-nov porque los préstamos originados en junio-julio (nuevos y más altos) empiezan a vencer._

---

## Desglose por canal — ¿de dónde salen los $5.2M/mes?

| Canal | Aportación mensual | Cómo |
|-------|-------------------|------|
| Recurrentes (natural) | ~$2,000,000 | ~3 clientes grandes que regresan o nuevos referidos |
| **Google Ads + Meta (a escalar)** | **~$3,200,000** | **~21 préstamos/mes a $150K** |
| **Total** | **$5,200,000** | |

### Canal ads — requerimientos

| Métrica | Valor necesario |
|---------|----------------|
| Préstamos/mes de ads | 21 |
| Leads necesarios (a 4.3% cierre) | ~490/mes |
| CPL objetivo | $150–195 MXN |
| Presupuesto ads total (Google + Meta) | ~$75,000–$95,000 MXN/mes |
| Presupuesto diario objetivo | $2,500–$3,200 MXN/día |

---

## Seguimiento mensual de ads

### Mayo 2026 (parcial — 12 al 31 mayo)

| Métrica | Valor |
|---------|-------|
| Presupuesto diario Google Ads | $500 MXN/día |
| Campaña activa | GOOG_Search_CDMX_General |
| Conversiones (WhatsApp + SwipBot) | 23 en 9 días |
| CTR | ~17% |
| Conversion rate (clic → lead) | ~20% |
| CPL | ~$195 MXN |
| Préstamos cerrados de ads | ~1 (pendiente confirmar) |
| Tasa de cierre lead → préstamo | ~4.3% estimado |
| Campaña Querétaro | Configurada 21 mayo — pendiente activar |

### Junio 2026 ← ACTUALIZAR

| Métrica | Valor real |
|---------|-----------|
| Cartera cierre junio | — |
| Originations nuevas junio | — |
| Préstamos cerrados de ads | — |
| CPL real | — |
| Presupuesto total ads | — |
| Campañas activas | — |
| Notas | — |

### Julio 2026 ← ACTUALIZAR

| Métrica | Valor real |
|---------|-----------|
| Cartera cierre julio | — |
| Originations nuevas julio | — |
| Préstamos cerrados de ads | — |
| CPL real | — |
| Presupuesto total ads | — |
| Notas | — |

### Agosto 2026 ← ACTUALIZAR

_(copiar formato de junio)_

### Septiembre 2026 ← ACTUALIZAR

_(copiar formato de junio)_

### Octubre 2026 ← ACTUALIZAR

_(copiar formato de junio — mes crítico, churn sube)_

### Noviembre 2026 ← ACTUALIZAR

_(copiar formato de junio)_

### Diciembre 2026 ← ACTUALIZAR

_(copiar formato de junio — mes de cierre de meta)_

---

## Señales de alerta mensual

Revisar estos indicadores el día 1 de cada mes:

| Indicador | Señal verde | Señal roja |
|-----------|-------------|------------|
| Originations del mes | ≥ $5.2M | < $4.0M |
| Desempeños del mes | ≤ $3.5M | > $5.0M |
| Cartera en la proyección | ±5% del plan | > -10% del plan |
| CPL Google Ads | < $200 MXN | > $300 MXN |
| Préstamos cerrados de ads | ≥ 10/mes | < 5/mes |
| Tasa de cierre leads | ≥ 4% | < 2% |
| Cartera recurrentes | Estable o creciendo | Cae > 10% en un mes |

---

## Decisiones pendientes por fecha

| Fecha | Decisión |
|-------|----------|
| **Semana 26 mayo** | Confirmar cierre del primer préstamo de ads — valida tasa de cierre real |
| **15 junio** | Revisar CPL y leads de Querétaro — ¿escalar a $300/día? |
| **20 junio** | Revisión estrategia V2 Google Ads (ver `google-ads-estrategia-v2.md`) |
| **1 junio** | Growkik lanza — comprar 2-3 guest posts en sitios finanzas MX (~$300-400 USD) |
| **30 junio** | ¿Agregar Meta Ads? Depende de cierre real de leads de Google |
| **Octubre** | Si cartera llega a $24-25M: ¿mantener o acelerar para cerrar el año más alto? |

---

## Campañas de ads activas

| Campaña | Plataforma | Landing | Presupuesto/día | Estado |
|---------|-----------|---------|----------------|--------|
| GOOG_Search_CDMX_General | Google Ads | `/prestamo-con-garantia-de-auto-en-cdmx/` | Subido (ver nota) | Activa ✅ |
| GOOG_Search_Queretaro_Garantia_May26 | Google Ads | `/prestamo-con-garantia-de-auto-en-queretaro/` | $150 MXN | **Activa ✅** |
| Meta Ads | Meta | TBD | — | Pendiente planeación |

---

## Notas históricas

- **2026-05-12:** Primera campaña Google Ads arranca en CDMX. Grupo General activo.
- **2026-05-13:** GTM + GA4 + Google Ads conversiones verificadas. Grupo "Lujo y Blindados" pausado (0 impresiones — keywords muy genéricas).
- **2026-05-20:** Estrategia V2 documentada. Decisiones pendientes a junio.
- **2026-05-21:** Campaña Querétaro configurada. Landings CDMX y Querétaro optimizadas (hero con imagen, stats bar, trust line, divulgación legal). Modelo financiero corregido con churn cohort.
- **2026-05-29:** Campaña Querétaro activada. Ambas campañas optimizadas por ubicación y keywords:
  - CDMX: radio 8 millas desde CP 11000 (Polanco), excluidas Gustavo A. Madero / Azcapotzalco / Venustiano Carranza / Iztacalco. Keywords "sin buró" y "sin historial crediticio" pausadas — eran la causa de leads de $3K-$15K.
  - Querétaro: zona estado reemplazada por zonas premium (Juriquilla, Jurica, El Campanario, Zibatá, Zakía, El Refugio, Santiago QRO). Budget mantenido en $150/día.
  - Presupuesto CDMX subido (pendiente confirmar monto exacto).
