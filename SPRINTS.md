# SWIP — Sprints & Avances

## Stack técnico
| Servicio | Rol | Estado |
|---|---|---|
| Astro 5 | Framework del sitio (static) | ✅ Instalado |
| @astrojs/sitemap | Sitemap automático | ✅ Configurado |
| @astrojs/mdx | Blog en Markdown | ✅ Configurado |
| GitHub | Repositorio de código | ⏳ Pendiente — autenticar `gh auth login` |
| Vercel | Hosting y deploys automáticos | ⏳ Pendiente — conectar repo |
| swip.mx | Dominio (Neubox) | ⏳ Pendiente — apuntar DNS a Vercel |

## Decisiones de arquitectura
- **Framework:** Astro 5 (static output)
- **Hosting:** Vercel (no VPS — mejor CDN, deploys automáticos desde GitHub)
- **DNS:** Neubox apunta a Vercel (2 registros: A + CNAME)
- **Diseño:** DNA visual de Kevant — Inter Tight, paleta dark, CSS vanilla. Código 100% independiente.
- **Blog:** MDX con content collections de Astro
- **Landing pages Ads:** `/lp/` con `noindex`

## Estructura de páginas
```
swip.mx/                                             → index.astro
swip.mx/prestamo-con-garantia-de-auto/               → página pilar SEO
swip.mx/empeno-de-autos/                             → puente semántico
swip.mx/prestamo-con-garantia-de-auto-sin-dejarlo/   → modalidad
swip.mx/prestamo-con-garantia-de-auto-con-resguardo/ → modalidad
swip.mx/prestamo-con-garantia-de-autos-de-lujo/      → especialidad
swip.mx/prestamo-con-garantia-de-autos-blindados/    → especialidad
swip.mx/prestamo-con-garantia-de-auto-en-interlomas/ → local
swip.mx/prestamo-con-garantia-de-auto-en-queretaro/  → local
swip.mx/como-funciona/
swip.mx/requisitos/
swip.mx/vehiculos-que-aceptamos/
swip.mx/preguntas-frecuentes/
swip.mx/contacto/
swip.mx/blog/
swip.mx/blog/[slug]/
swip.mx/lp/*                                         → noindex, para Ads
```

## Contacto y datos reales pendientes
| Campo | Valor | Estado |
|---|---|---|
| Email principal | patricia_bernal@swip.mx | ✅ En código |
| WhatsApp | PENDIENTE | ⏳ Reemplazar placeholder en Nav, Footer, CTAs |
| Instagram | PENDIENTE | ⏳ |
| LinkedIn | PENDIENTE | ⏳ |

---

## Sprint 0 — Fundación técnica ✅ COMPLETO
**Objetivo:** Proyecto Astro limpio, estructura base, diseño system, homepage.

| # | Tarea | Estado | Notas |
|---|---|---|---|
| 0.1 | Análisis de mercado y competencia | ✅ | Autopresta, Ibancar, Creditas, LVL, Woodside |
| 0.2 | Decisión de stack (Astro + Vercel) | ✅ | |
| 0.3 | Scaffold Astro 5 con sitemap y MDX | ✅ | |
| 0.4 | Design system — global.css, variables, tipografía | ✅ | Inter Tight, paleta dark |
| 0.5 | Layout Base.astro — SEO completo | ✅ | title, meta, OG, schema Organization, canonical |
| 0.6 | Layout Page.astro — Nav + Footer | ✅ | |
| 0.7 | Componente Nav.astro | ✅ | Fijo, responsive, hamburger mobile |
| 0.8 | Componente Footer.astro | ✅ | 4 columnas, todos los links del sitemap |
| 0.9 | Homepage index.astro | ✅ | Hero, modalidades, proceso, especialidades, ventajas, CTA |
| 0.10 | Logos movidos a public/assets/logos/ | ✅ | logo-dark, logo-light, logo-ultralight |
| 0.11 | robots.txt — noindex en /lp/ | ✅ | |
| 0.12 | content.config.ts para blog MDX | ✅ | |
| 0.13 | .gitignore limpio | ✅ | |
| 0.14 | Primer commit en git local | ✅ | |

---

## Sprint 1 — Infraestructura y deploy en producción ✅ COMPLETO
**Objetivo:** swip.mx en vivo con CI/CD automático desde GitHub.

| # | Tarea | Estado | Notas |
|---|---|---|---|
| 1.1 | Crear repo `ramonpando/swip` en GitHub | ✅ | github.com/ramonpando/swip (privado) |
| 1.2 | `git push origin main` | ✅ | |
| 1.3 | Crear proyecto en Vercel | ✅ | swip-tau.vercel.app |
| 1.4 | Vercel detecta Astro automáticamente | ✅ | Sin config extra |
| 1.5 | Recuperar control DNS (estaba en AWS del ex-developer) | ✅ | Nameservers → Neubox por defecto |
| 1.6 | Agregar TXT de verificación Vercel en Neubox | ✅ | Dos registros _vercel |
| 1.7 | Cambiar A record → 76.76.21.21 (Vercel) | ✅ | |
| 1.8 | Cambiar CNAME www → cname.vercel-dns.com | ✅ | |
| 1.9 | SSL automático en Vercel | ✅ | Let's Encrypt automático |
| 1.10 | Verificar deploy en swip.mx | ⏳ | Propagando DNS — 15-30 min |

---

## Sprint 2 — Páginas comerciales SEO ⏳
**Objetivo:** Las 8 páginas comerciales indexables con contenido real y SEO completo.
**Orden de prioridad:** pillar → modalidades → especialidades → locales

| # | Tarea | Estado | Notas |
|---|---|---|---|
| 2.1 | `/prestamo-con-garantia-de-auto/` | ⏳ | Página pilar principal |
| 2.2 | `/empeno-de-autos/` | ⏳ | Puente semántico, captura tráfico masivo |
| 2.3 | `/prestamo-con-garantia-de-auto-sin-dejarlo/` | ⏳ | Modalidad GPS |
| 2.4 | `/prestamo-con-garantia-de-auto-con-resguardo/` | ⏳ | Modalidad resguardo |
| 2.5 | `/prestamo-con-garantia-de-autos-de-lujo/` | ⏳ | Segmento premium |
| 2.6 | `/prestamo-con-garantia-de-autos-blindados/` | ⏳ | Nicho blindado, mención Kevant |
| 2.7 | `/prestamo-con-garantia-de-auto-en-interlomas/` | ⏳ | Local + LocalBusiness schema |
| 2.8 | `/prestamo-con-garantia-de-auto-en-queretaro/` | ⏳ | Local + LocalBusiness schema |
| 2.9 | Componente FAQ.astro reutilizable | ⏳ | Con FAQPage schema JSON-LD |
| 2.10 | Componente CTASection.astro reutilizable | ⏳ | WhatsApp + email |
| 2.11 | Componente StepsGrid.astro reutilizable | ⏳ | |

---

## Sprint 3 — Páginas de soporte ⏳
**Objetivo:** Completar la arquitectura de páginas secundarias.

| # | Tarea | Estado | Notas |
|---|---|---|---|
| 3.1 | `/como-funciona/` | ⏳ | Proceso detallado, ambas modalidades |
| 3.2 | `/requisitos/` | ⏳ | Documentos, condiciones del vehículo |
| 3.3 | `/vehiculos-que-aceptamos/` | ⏳ | Marcas, años, condiciones, blindados |
| 3.4 | `/preguntas-frecuentes/` | ⏳ | FAQPage schema completo |
| 3.5 | `/contacto/` | ⏳ | Formulario + WhatsApp + mapa |
| 3.6 | `/aviso-de-privacidad/` | ⏳ | |
| 3.7 | `/terminos-de-uso/` | ⏳ | |

---

## Sprint 4 — Blog SEO ⏳
**Objetivo:** 9 artículos del cluster inicial para ganar autoridad orgánica.

### Cluster 1 — Intención comercial
| # | Artículo | Estado | Enlaza a |
|---|---|---|---|
| 4.1 | Diferencia entre empeño de autos y préstamo con garantía vehicular | ⏳ | /empeno-de-autos/, /prestamo-con-garantia-de-auto/ |
| 4.2 | ¿Qué conviene más: dejar tu auto o seguir usándolo? | ⏳ | /sin-dejarlo/, /con-resguardo/ |
| 4.3 | ¿Cuánto pueden prestarte con garantía de auto? | ⏳ | /prestamo-con-garantia-de-auto/ |
| 4.4 | ¿Qué revisan al evaluar un vehículo como garantía? | ⏳ | /requisitos/, /vehiculos-que-aceptamos/ |

### Cluster 2 — Segmento premium
| # | Artículo | Estado | Enlaza a |
|---|---|---|---|
| 4.5 | Cómo se valúa un auto de lujo para garantía | ⏳ | /autos-de-lujo/ |
| 4.6 | Qué cambia si el vehículo es blindado | ⏳ | /autos-blindados/ |
| 4.7 | Cuándo conviene usar un auto premium para obtener liquidez | ⏳ | /autos-de-lujo/, /prestamo-con-garantia-de-auto/ |

### Cluster 3 — Confianza y proceso
| # | Artículo | Estado | Enlaza a |
|---|---|---|---|
| 4.8 | Cómo funciona el resguardo vehicular | ⏳ | /con-resguardo/ |
| 4.9 | Errores comunes al buscar empeño de autos | ⏳ | /empeno-de-autos/, /preguntas-frecuentes/ |

---

## Sprint 5 — Landing pages para Ads ⏳
**Objetivo:** 6 landing pages optimizadas para conversión, todas con noindex.

| # | URL | Estado | Campaña |
|---|---|---|---|
| 5.1 | `/lp/prestamo-con-garantia-de-auto/` | ⏳ | Google Ads — keyword principal |
| 5.2 | `/lp/empeno-de-autos/` | ⏳ | Google Ads — keyword masiva |
| 5.3 | `/lp/autos-de-lujo/` | ⏳ | Google Ads — segmento premium |
| 5.4 | `/lp/autos-blindados/` | ⏳ | Google Ads — nicho blindado |
| 5.5 | `/lp/interlomas/` | ⏳ | Google Ads local |
| 5.6 | `/lp/queretaro/` | ⏳ | Google Ads local |

---

## Sprint 6 — Optimización y conversión ⏳
**Objetivo:** Mejorar conversión, velocidad y métricas SEO.

| # | Tarea | Estado | Notas |
|---|---|---|---|
| 6.1 | Imagen hero (foto vehículo premium o video) | ⏳ | Placeholder oscuro actual |
| 6.2 | WhatsApp real — reemplazar placeholder | ⏳ | Buscar en todas las páginas |
| 6.3 | OG image por defecto | ⏳ | public/assets/og-default.jpg |
| 6.4 | Google Analytics / GA4 | ⏳ | |
| 6.5 | Google Search Console | ⏳ | Verificar con Vercel |
| 6.6 | Core Web Vitals — audit | ⏳ | Lighthouse post-deploy |
| 6.7 | Simulador básico de préstamo | ⏳ | Ingresa valor del auto → estimado |
| 6.8 | Formulario de contacto | ⏳ | Netlify Forms o similar |
| 6.9 | Instagram y LinkedIn reales | ⏳ | Agregar al Footer |
| 6.10 | Google Business Profile | ⏳ | Interlomas + Querétaro |

---

## Referencias de diseño
- **Colores:** `--black: #0A0A0A` · `--silver: #A8A8A8` · `--white: #FFFFFF` · `--dim: #3A3A3A`
- **Tipografía:** Inter Tight — peso 300 / 400 / 500
- **Estilo:** Dark, minimal, premium — DNA Kevant, identidad independiente
- **Logos:** `public/assets/logos/logo-dark.svg` · `logo-light.svg` · `logo-ultralight.svg`

---

## Log de avances
| Fecha | Sprint | Avance |
|---|---|---|
| 2026-04-20 | 0 | Proyecto iniciado — estructura base con HTML estático |
| 2026-04-20 | 0 | Análisis de competencia: Autopresta, Ibancar, Creditas, LVL, Woodside Credit |
| 2026-04-20 | 0 | Decisión de stack: Astro 5 + Vercel (en lugar de Dokploy/VPS) |
| 2026-04-20 | 0 | Scaffold completo: layouts, componentes, homepage, design system, SEO base |
| 2026-04-20 | 0 | Logos integrados: logo-dark, logo-light, logo-ultralight |
| 2026-04-20 | 0 | robots.txt, content.config.ts, .gitignore, primer commit |
| 2026-04-20 | 1 | Repo GitHub creado: github.com/ramonpando/swip |
| 2026-04-20 | 1 | Deploy en Vercel activo: swip-tau.vercel.app |
| 2026-04-20 | 1 | DNS recuperado de AWS (ex-developer) → Neubox |
| 2026-04-20 | 1 | DNS configurado en Neubox → apunta a Vercel |
| 2026-04-20 | 1 | swip.mx propagando — Sprint 1 completo |
