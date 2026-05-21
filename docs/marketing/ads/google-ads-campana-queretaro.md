# Google Ads — Campaña Querétaro

Fecha: 2026-05-21
Estado: **LISTA PARA CONFIGURAR**

---

## Resumen

| Campo | Valor |
|---|---|
| Nombre de campaña | `GOOG_Search_Queretaro_Garantia_May26` |
| Tipo | Search |
| Objetivo | Leads |
| Presupuesto diario | 150 MXN |
| Ubicación | Querétaro (solo) |
| Idioma | Español |
| Landing page | `https://swip.mx/prestamo-con-garantia-de-auto-en-queretaro/` |

---

## Paso 1 — Crear la campaña

1. Google Ads → **Nueva campaña**
2. Objetivo: **Clientes potenciales**
3. Tipo: **Red de Búsqueda**
4. Nombre: `GOOG_Search_Queretaro_Garantia_May26`

### Configuración de red
- ✅ Red de Búsqueda de Google
- ❌ Desactivar Red de Display (quitar la paloma)
- ❌ Desactivar socios de búsqueda (por ahora)

### Ubicaciones
- **Segmentar:** Querétaro, México
- **Excluir:** resto del país
- Opción de segmentación: **"Personas en esta ubicación"** (no "interesadas en")

### Idioma
- Español

### Presupuesto y pujas
- Presupuesto diario: **150 MXN**
- Estrategia de puja: **Maximizar clics** (arrancar así hasta tener 30+ conversiones)
- CPC máximo: **25 MXN** (para no quemarlo en los primeros días)

### Conversiones
- Usar las mismas conversiones ya configuradas: WhatsApp click + chatbot_started

---

## Paso 2 — Crear el grupo de anuncios

Nombre: `Garantia_Vehicular_Queretaro`

### Keywords — Phrase Match (usar comillas en la interfaz)

```
"préstamo con garantía de auto Querétaro"
"empeño de autos Querétaro"
"préstamo vehicular Querétaro"
"dinero con mi auto Querétaro"
"préstamo sin buró Querétaro"
"garantía vehicular Querétaro"
"préstamo con garantía Querétaro"
"empeñar auto Querétaro"
"préstamo con auto Querétaro"
"liquidez con mi auto Querétaro"
```

### Negative keywords (agregar desde el inicio)

Copiar las mismas del archivo `negative-keywords.txt` ya existente en el repo, más estas específicas:

```
gratis
trabajo
empleo
taller
venta
compra
seminuevo
agencia
dealer
seguro de auto
refacciones
```

---

## Paso 3 — Crear los anuncios (RSA)

### Anuncio 1 — Principal

**URL final:** `https://swip.mx/prestamo-con-garantia-de-auto-en-queretaro/`

**Headlines (mínimo 10, máximo 15):**
```
1. Préstamo con Garantía de Auto en Querétaro
2. Sin Buró de Crédito · Querétaro
3. Depósito en Menos de 24 Horas
4. Valuación Gratuita en tu Domicilio
5. Hasta $5,000,000 MXN de Préstamo
6. Especialistas en Autos de Lujo y Blindados
7. Sin Vender tu Auto · Querétaro
8. Tasa Fija · Sin Sorpresas al Final
9. Préstamo Vehicular Serio en Querétaro
10. Cotiza sin Compromiso · Respuesta Hoy
11. Autos de Lujo · Blindados · Exóticos
12. Empeño de Autos Premium · Querétaro
```

**Descriptions (mínimo 2, máximo 4):**
```
1. Obtén liquidez con tu vehículo como garantía. Sin buró de crédito, sin venderlo, con depósito en menos de 24 horas. Valuación en tu domicilio en Querétaro.

2. Especialistas en autos de lujo, blindados y vehículos de alto valor en Querétaro. Proceso claro, tasa fija, contrato transparente. Cotiza sin costo.

3. Préstamos desde $90,000 hasta $5,000,000 MXN. No importa tu historial crediticio — el criterio es el valor de tu vehículo.

4. SWIP atiende Querétaro con el mismo nivel de servicio que CDMX. Valuación en domicilio o en nuestras instalaciones. Respuesta el mismo día hábil.
```

---

## Paso 4 — Extensiones de anuncio

### Sitelinks
```
Texto: Cómo funciona el proceso
URL: https://swip.mx/como-funciona/

Texto: Autos que aceptamos
URL: https://swip.mx/vehiculos-que-aceptamos/

Texto: Con resguardo o sin dejarlo
URL: https://swip.mx/prestamo-con-garantia-de-auto-con-resguardo/

Texto: Requisitos
URL: https://swip.mx/requisitos/
```

### Llamadas (callouts)
```
Sin buró de crédito
Valuación gratuita
Depósito en 24 horas
Tasa fija
Sin penalización anticipada
Proceso discreto
```

### Extensión de llamada
```
Teléfono: 55 5405 5089
```

---

## Paso 5 — Verificar antes de activar

- [ ] Conversiones conectadas (WhatsApp + chatbot)
- [ ] URL final carga correctamente en móvil
- [ ] Ubicación configurada solo Querétaro
- [ ] Red de Display desactivada
- [ ] CPC máximo en 25 MXN
- [ ] Negative keywords cargadas
- [ ] Al menos 3 headlines con "Querétaro" explícito

---

## Qué monitorear la primera semana

| Métrica | Señal de alarma |
|---|---|
| CTR | < 3% (revisar headlines) |
| CPC real | > 30 MXN (bajar bid o revisar QS) |
| Impresiones | 0 (revisar geo + keywords) |
| Conversiones | 0 en 7 días (revisar landing + tracking) |

---

## Decisión a las 2 semanas

- Si hay impresiones pero 0 clics: problema de copy o relevancia → cambiar headlines
- Si hay clics pero 0 conversiones: problema de landing o tracking → revisar
- Si hay conversiones: subir presupuesto a 250 MXN/día y evaluar en 30 días
- Si hay 0 impresiones: el volumen de búsqueda en Querétaro es muy bajo → pausar y mover keywords a campaña General con geo CDMX + Querétaro
