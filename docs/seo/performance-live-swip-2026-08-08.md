# Lighthouse móvil live de SWIP

Fecha: 8 de agosto de 2026

Herramienta: Lighthouse 12.8.2

Entorno: producción pública, form factor móvil, throttling `simulate`

Tipo de evidencia: laboratorio; no sustituye CrUX ni mide INP de campo.

## Resultado

| URL | Corrida | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` | 1 | 78 | 100 | 100 | 100 | 2.630 s | 2.630 s | 524 ms | 0.062 | 3.140 s |
| `/` | 2 | 91 | 100 | 100 | 100 | 2.623 s | 2.623 s | 0 ms | 0.000 | 4.285 s |
| `/` | 3 | 92 | 100 | 100 | 100 | 2.608 s | 2.608 s | 0 ms | 0.062 | 2.809 s |
| `/empeno-de-autos/` | 1 | 91 | 96 | 100 | 100 | 2.768 s | 2.768 s | 0 ms | 0.008 | 2.976 s |
| `/empeno-de-autos/` | 2 | 91 | 96 | 100 | 100 | 2.758 s | 2.758 s | 0 ms | 0.008 | 2.862 s |
| `/empeno-de-autos/` | 3 | 91 | 96 | 100 | 100 | 2.758 s | 2.758 s | 0 ms | 0.008 | 2.887 s |

## Medianas

| URL | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` | 91 | 100 | 100 | 100 | 2.623 s | 2.623 s | 0 ms | 0.062 | 3.140 s |
| `/empeno-de-autos/` | 91 | 96 | 100 | 100 | 2.758 s | 2.758 s | 0 ms | 0.008 | 2.887 s |

## Lectura

- Las dos URLs conservan Performance 91 de mediana y SEO/Best Practices 100.
- El LCP de laboratorio queda ligeramente sobre el presupuesto de 2.5 s:
  2.623 s en homepage y 2.758 s en la landing de empeño. Se mantiene PERF-05
  en observación; no es una falla crítica, pero todavía no cumple el objetivo.
- La primera corrida de homepage registró TBT de 524 ms y bajó el score a 78;
  las otras dos registraron 0 ms. La mediana evita convertir ese outlier en una
  conclusión, pero la variación debe vigilarse.
- Lighthouse no entrega INP en esta prueba. No se sustituye con TBT ni con una
  estimación. El cierre de CWV requiere datos de campo de CrUX o RUM.
- `/empeno-de-autos/` marcó Accessibility 96 por contraste insuficiente. Los
  nueve estilos únicos señalados se ajustaron. Después del deployment,
  Lighthouse sobre la URL pública obtuvo Accessibility 100 y aprobó la
  comprobación de contraste el 8 de agosto de 2026 a las 00:24 UTC.

## Comparación con la corrida previa

La corrida individual documentada el 7 de agosto registró Performance 91,
FCP/LCP 1.6 s, TBT 320 ms y CLS 0.062 en homepage. La nueva mediana confirma el
score 91 y CLS 0.062, mejora la mediana de TBT a 0 ms y muestra un LCP de
laboratorio más lento. Dado que son muestras sintéticas pequeñas, no se afirma
una tendencia; el dato útil es el presupuesto pendiente y la variabilidad.

## Próximo control

1. Revisar el elemento LCP y la cadena crítica de fuentes/hero en ambas URLs.
2. Repetir tres corridas completas después de cualquier cambio de rendimiento.
3. Incorporar CrUX o RUM cuando exista acceso; reportar INP solo desde campo.
