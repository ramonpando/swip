# Operación de backlinks SWIP

Fecha de inicio: 7 de agosto de 2026
Estado: tracker y validación técnica implementados; ningún contacto o registro
ha sido ejecutado.

Primera validación HTTP: 7 de agosto de 2026. Veintinueve oportunidades
respondieron `200`; AMIA respondió `403` al agente automatizado y requiere
comprobación manual en navegador. Todas las páginas destino de SWIP incluidas
en el lote respondieron `200`.

Primera calificación P1: 8 de agosto de 2026. Se revisaron los diez candidatos
P1 iniciales. Motorpasión México y Líder Empresarial pasan a `qualified` porque
tienen encaje, actividad actual y una vía editorial pública. Autocosmos, El
Financiero, El Economista y Expansión conservan `research` hasta identificar un
canal editorial concreto. AMDA, AMBA, ASOFOM y el Clúster Automotriz de
Querétaro quedan en `legal_review` hasta confirmar elegibilidad y relación real.
No se contactó a ninguna organización.

## Objetivo

Conseguir menciones y enlaces legítimos que fortalezcan la autoridad temática
de SWIP alrededor de `empeño de autos`, valuación vehicular y liquidez
respaldada por activos. La URL comercial prioritaria es:

`https://swip.mx/empeno-de-autos/`

Las páginas B2B, locales y artículos pueden recibir enlaces cuando corresponda
a la intención de la fuente. No todos los enlaces deben apuntar a la homepage ni
usar el mismo anchor.

## Alcance de esta fase

Incluye:

- tracker versionado de oportunidades;
- clasificación por canal, región y prioridad;
- destino y ángulo recomendado por oportunidad;
- validación estructural y comprobación HTTP opcional;
- verificación futura de enlaces publicados y atributos `rel`.

No incluye:

- envío de correos;
- creación de cuentas;
- altas en directorios;
- compra o intercambio de enlaces;
- publicación automática en medios, comunidades o asociaciones.

## Archivos operativos

- Tracker: `data/backlinks/opportunities.csv`
- Auditor: `scripts/backlinks/audit-opportunities.mjs`
- Validación estructural: `npm run audit:backlinks`
- Validación HTTP: `npm run audit:backlinks:live`

## Estados permitidos

| Estado | Significado |
|---|---|
| `research` | Candidato pendiente de revisión humana y canal concreto |
| `qualified` | Encaje y oportunidad confirmados |
| `legal_review` | No avanzar sin confirmar elegibilidad o claims legales |
| `ready` | Puede ejecutarse manualmente |
| `submitted` | Solicitud o colaboración enviada por una persona autorizada |
| `live` | Enlace publicado y registrado en `backlink_url` |
| `rejected` | Sin encaje, rechazado o descartado por calidad |

## Criterios de calificación

Una oportunidad pasa de `research` a `qualified` solo cuando:

1. la organización y la URL son auténticas;
2. existe relación temática o geográfica con SWIP;
3. se identifica una vía legítima para aportar valor;
4. la página destino está publicada, indexable y responde `200`;
5. el ángulo no depende de afirmaciones no comprobadas;
6. cualquier requisito regulatorio o membresía está confirmado;
7. no se exige comprar un paquete de enlaces ni participar en una red.

## Reglas de destino

- Medios financieros: hub de empeño o guía educativa relevante.
- Medios automotrices: investigación o artículo de valuación específico.
- Blindaje: página de autos blindados o capital para blindadoras.
- Lotes y agencias: páginas de financiamiento empresarial.
- Fuentes locales: landing de CDMX o Querétaro cuando corresponda.
- Perfiles de entidad: homepage con NAP idéntico al schema y footer.

Los anchors deben variar de forma natural: marca, URL, tema del artículo o una
frase descriptiva. No se pedirá repetir `empeño de autos` como anchor exacto.

## Primer lote

El tracker inicia con 30 candidatos:

- medios financieros, empresariales y automotrices;
- asociaciones financieras y del ecosistema automotor;
- cámaras empresariales;
- perfiles locales de buscadores;
- directorios oficiales sujetos a validación jurídica.

Los registros son candidatos, no backlinks prometidos. `ASOFOM`, `SIEM` y
`SIPRES` permanecen bloqueados como `legal_review` hasta confirmar la naturaleza
jurídica, elegibilidad y datos oficiales de SWIP.

Distribución inicial:

- 5 medios automotrices;
- 4 medios financieros;
- 6 medios empresariales;
- 10 asociaciones o cámaras;
- 3 perfiles locales;
- 2 directorios oficiales sujetos a elegibilidad.

## Rutina semanal

1. Ejecutar `npm run audit:backlinks`.
2. Revisar cinco candidatos de prioridad P1.
3. Descartar duplicados o superficies sin encaje.
4. Confirmar la página destino y el activo que aporta valor.
5. Cambiar a `qualified` solo con evidencia.
6. Cuando exista un enlace, registrar la URL exacta en `backlink_url` y cambiar
   el estado a `live`.
7. Ejecutar `npm run audit:backlinks:live` para comprobar disponibilidad y
   presencia del enlace.

## Formas legítimas de obtener backlinks

### 1. Aportes editoriales como fuente experta

No se pide “un backlink” de forma aislada. Se aporta una explicación, un dato,
una metodología o una entrevista útil para una pieza que el medio ya quiere
publicar. El enlace sirve para ampliar o acreditar la fuente.

Ejemplos para SWIP:

- cómo cambia la valuación por versión, kilometraje, estado o blindaje;
- diferencias entre precio anunciado y valor realizable;
- criterios para comparar venta, empeño y préstamo con garantía;
- errores comunes al valuar autos premium o blindados.

### 2. Investigación o activo original

Crear una pieza que otros puedan citar y que no sea una landing comercial. La
primera opción recomendada es un informe de valuación de autos de alto valor en
México construido únicamente con datos que SWIP pueda publicar de forma
agregada y anónima.

El activo necesita metodología, fecha, muestra, limitaciones, responsable y
gráficas reutilizables. Sin datos autorizados se publica una guía metodológica,
no estadísticas inventadas.

### 3. Relaciones reales con el ecosistema automotor

Blindadoras, talleres especializados, valuadores, lotes y agencias pueden
enlazar a SWIP cuando exista una colaboración, recurso conjunto, caso técnico o
directorio real de aliados. No se propone intercambio automático de enlaces.

### 4. Cámaras y asociaciones

Una membresía, perfil de proveedor, webinar, estudio conjunto o participación
editorial puede producir un enlace legítimo. La elegibilidad y cualquier claim
de afiliación deben confirmarse antes de publicar. AMDA, AMBA, ASOFOM y el
Clúster Automotriz de Querétaro permanecen como oportunidades, no como
afiliaciones declaradas.

### 5. Perfiles locales y de entidad

Reclamar fichas auténticas en Google Business Profile, Apple Business Connect
y Bing Places ayuda a consolidar NAP y presencia local. Antes de crear una ficha
se comprueba que no exista otra para evitar duplicados.

### 6. Recuperación de menciones y enlaces rotos

Buscar menciones de SWIP sin enlace y recursos externos que ya no funcionen. Se
puede proponer la URL de SWIP únicamente cuando sea una sustitución pertinente
y de calidad equivalente o superior. No se usa esta táctica para insertar una
landing en artículos sin relación.

### 7. Casos y colaboraciones autorizadas

Un cliente, proveedor o aliado puede enlazar un caso publicado si existen
autorización, datos verificables y valor para su audiencia. Se excluyen
testimonios fabricados, identidades no autorizadas y cifras confidenciales.

## Orden de ejecución

1. Obtener la línea base de enlaces desde Search Console.
2. Calificar los diez candidatos P1 del tracker.
3. Confirmar los tres perfiles locales.
4. Definir el primer activo original citable.
5. Identificar tres relaciones reales con el ecosistema automotor.
6. Buscar la primera mención editorial mediante aporte experto o datos.
7. Registrar y comprobar cada enlace publicado.

## Qué cuenta como éxito

Un backlink se considera válido cuando:

- proviene de una página pública, indexable y relacionada;
- fue obtenido por utilidad editorial, relación real o perfil auténtico;
- apunta a una URL que responde `200` y coincide con la intención;
- no forma parte de una red, paquete pagado o esquema recíproco;
- se registra en el tracker con su URL exacta;
- puede generar autoridad, descubrimiento, tráfico referido o confianza de
  entidad, aunque use `nofollow` cuando la plataforma lo requiera.

## Métricas

- oportunidades investigadas;
- oportunidades calificadas;
- dominios referentes nuevos;
- enlaces live por página destino;
- enlaces eliminados o modificados;
- clics referidos y conversiones asistidas;
- distribución de anchors y dominios para evitar patrones artificiales.

La calidad y relevancia prevalecen sobre la cantidad. No se fijan objetivos de
volumen hasta establecer la línea base real de dominios referentes en Search
Console.
