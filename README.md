# 🚀 Portfolio Template - Astro

> 🎨 **Úsalo como Template:** Este proyecto está diseñado para ser usado como plantilla pública. Haz clic en "Use this template" en GitHub para crear tu propio portfolio profesional.

<div align="center">

[![Astro](https://img.shields.io/badge/Astro-v5-blueviolet?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

Un portfolio profesional y moderno desarrollado con **Astro v5**, completamente personalizable, type-safe, y listo para deployment en múltiples plataformas sin cambios en el código.

---

## ⚡ Quick Start

```bash
# 1. Usa este template en GitHub (botón "Use this template") o clónalo
git clone https://github.com/TU_USERNAME/portfolio-template.git mi-portfolio
cd mi-portfolio

# 2. Instala dependencias
yarn install

# 3. Ejecuta el wizard de configuración interactivo
yarn setup

# 4. Inicia el servidor de desarrollo
yarn dev
```

**¡Listo!** Tu portfolio estará en `http://localhost:4321` 🎉

---

## 📑 Tabla de Contenidos

- [✨ Características](#-características)
- [🚀 Configuración Inicial](#-configuración-inicial)
- [🎨 Personalización](#-personalización)
- [📧 Formulario de Contacto](#-formulario-de-contacto)
- [🌍 Deployment Multi-Plataforma](#-deployment-multi-plataforma)
- [🔧 Scripts Disponibles](#-scripts-disponibles)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🌐 Internacionalización](#-internacionalización)
- [🎯 SEO y Structured Data](#-seo-y-structured-data)
- [🔐 Variables de Entorno](#-variables-de-entorno)
- [🛠️ Tecnologías](#️-tecnologías)
- [🐛 Troubleshooting](#-troubleshooting)
- [📋 Guía de Migración a Template Público](#-guía-de-migración-a-template-público)
- [📝 Licencia](#-licencia)

---

## ✨ Características

### 🎨 Diseño y UX

- **Diseño Moderno**: Interfaz elegante con tema oscuro y gradientes profesionales
- **Responsive**: Optimizado para móviles, tablets y desktop
- **Animaciones Suaves**: Transiciones fluidas y efectos visuales atractivos
- **Accesibilidad**: ARIA labels, semantic HTML, navegación por teclado

### ⚡ Performance y Tecnología

- **Astro v5**: Static Site Generation ultra-rápido
- **TypeScript**: Type-safe en todo el proyecto
- **Zero JS por defecto**: Solo JavaScript donde es necesario
- **Optimización de imágenes**: Sharp integration para imágenes optimizadas

### 🌍 Multi-idioma y Multi-plataforma

- **i18n Nativo**: Sistema de internacionalización con español e inglés
- **Multi-Plataforma**: Deploy en GitHub Pages, Netlify, o Vercel sin cambios
- **Rutas SEO-friendly**: URLs limpias con hreflang automático

### 🎯 SEO y Marketing

- **SEO Optimizado**: Meta tags, Open Graph, Twitter Cards
- **Structured Data**: Schema.org (Person, WebSite, ProfessionalService)
- **Google Rich Results**: Validado y optimizado para Rich Snippets
- **Sitemap y Robots**: Configuración automática

### 🔐 Desarrollo

- **Variables de Entorno Type-Safe**: Sistema nativo de Astro v5
- **Patrón Base + Overrides**: Reduce duplicación de configuración en 71%
- **CI/CD**: Linting, formateo y deployment automatizado
- **Git Hooks**: Pre-commit para calidad de código

---

## 🚀 Configuración Inicial

### Opción 1: Wizard Interactivo (Recomendado) 🪄

El wizard te hace preguntas y genera toda la configuración automáticamente:

```bash
yarn install
yarn setup
```

**Te preguntará:**

- ✅ Tu nombre completo y datos de contacto
- ✅ Tus redes sociales (GitHub, LinkedIn, Twitter, Instagram)
- ✅ Configuración de GitHub Pages (nombre de repo)
- ✅ Tu endpoint de Formspree (opcional)

**Resultado:**

- ✅ Archivos `.env.*` generados con tus datos
- ✅ Configuración lista para desarrollo
- ✅ Listo para deploy

### Opción 2: Configuración Manual

Si prefieres configurar manualmente:

```bash
# 1. Copia los archivos template
cp .env.production.template .env.production
cp .env.development.template .env.development
cp .env.github.template .env.github
cp .env.netlify.template .env.netlify

# 2. Edita cada archivo con tus datos
# Reemplaza: "tu-username", "tu-email@ejemplo.com", etc.
```

**Archivos a editar:**

- `.env.production` → Datos base (nombre, email, redes sociales)
- `.env.development` → Desarrollo local
- `.env.github` → GitHub Pages (nombre de repo, URLs)
- `.env.netlify` → Netlify (dominio personalizado)

---

## 🎨 Personalización

### 1. Contenido y Textos

Edita `src/config/translations.ts`:

```typescript
export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      portfolio: 'Portfolio',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Tu Nombre',
      subtitle: 'Tu Título Profesional',
      description: 'Tu descripción breve y atractiva',
      cta: 'Ver mi trabajo',
    },
    // ... más secciones
  },
  en: {
    // ... traducciones al inglés
  },
};
```

### 2. Imágenes

Reemplaza en `public/`:

```
public/
├── profile-image.jpg     # Tu foto (400x400px recomendado)
├── favicon.svg          # Tu favicon
├── og-image.jpg         # Para redes sociales (1200x630px)
└── robots.txt           # Configuración de bots
```

### 3. Proyectos y Experiencia

Edita los archivos en `src/sections/`:

```javascript
<!-- src/sections/ProjectsSection.astro -->
const projects = [
  {
    title: 'Nombre del Proyecto',
    description: 'Descripción breve',
    image: '/projects/proyecto1.jpg',
    tech: ['React', 'TypeScript', 'Node.js'],
    demo: 'https://demo.com',
    github: 'https://github.com/...',
  },
  // ... más proyectos
];
```

### 4. Colores y Estilos

Edita `src/styles/global.css`:

```css
:root {
  /* Colores principales */
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-accent: #f093fb;

  /* Colores de fondo */
  --bg-primary: #0a0e27;
  --bg-secondary: #1a1f3a;

  /* Tipografía */
  --font-sans: 'Inter', sans-serif;

  /* Espaciado */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
}
```

### 5. Agregar Nuevas Secciones

1. Crea el componente:

```astro
---
import Section from '@/components/Section.astro';
---

<!-- src/sections/MiNuevaSeccion.astro -->
<Section id="mi-seccion" title="Mi Nueva Sección">
  <p>Contenido de tu sección</p>
</Section>
```

2. Impórtalo en la página:

```astro
<!-- src/pages/[...lang]/index.astro -->import MiNuevaSeccion from
'@/sections/MiNuevaSeccion.astro';

<MiNuevaSeccion />
```

---

## 📧 Formulario de Contacto

### Configuración de Formspree

El formulario usa [Formspree](https://formspree.io) (plan gratuito: 50 envíos/mes).

#### Durante el Setup

El wizard te pedirá tu endpoint de Formspree automáticamente.

#### Configuración Manual

1. **Regístrate** en [formspree.io](https://formspree.io)
2. **Crea un formulario** y copia el endpoint: `https://formspree.io/f/XXXXXXXX`
3. **Añádelo** a tus archivos `.env.*`:

```env
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/XXXXXXXX
```

#### Sin Formulario

Si no quieres usar el formulario:

```env
PUBLIC_FORMSPREE_ENDPOINT=
```

El componente mostrará solo tus datos de contacto.

### Características del Formulario

- ✅ Validación en tiempo real
- ✅ Estados visuales (loading, éxito, error)
- ✅ Campos optimizados para proyectos
- ✅ Responsive y accesible
- ✅ Prevención básica de spam

---

## 🌍 Deployment Multi-Plataforma

### Plataformas Soportadas

| Plataforma       | Base Path  | Site URL                     | Build Command        |
| ---------------- | ---------- | ---------------------------- | -------------------- |
| **GitHub Pages** | `/tu-repo` | `username.github.io/tu-repo` | `yarn build:github`  |
| **Netlify**      | `/`        | `tudominio.com`              | `yarn build:netlify` |
| **Development**  | `/`        | `localhost:4321`             | `yarn dev`           |

### 🔵 GitHub Pages (Gratis)

#### Configuración Automática con GitHub Actions

1. **Configura `.env.github`:**

```env
PUBLIC_BASE_PATH=/tu-repo  # Debe coincidir con nombre del repo
```

2. **Habilita GitHub Pages:**
   - Settings → Pages → Source: **GitHub Actions**

3. **Push tu código:**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

4. **El workflow se ejecuta automáticamente:**
   - ✅ Type checking y linting
   - ✅ Formateo de código
   - ✅ Build optimizado
   - ✅ Deploy a GitHub Pages

5. **Tu sitio estará en:**
   - `https://tu-username.github.io/tu-repo`

#### Deployment Manual

```bash
yarn build:github
yarn deploy:github
```

### 🟢 Netlify (Gratis + Dominio Personalizado)

#### Deployment Automático

1. **Conecta tu repositorio:**
   - Ve a [app.netlify.com](https://app.netlify.com)
   - "Add new site" → "Import an existing project"
   - Selecciona tu repositorio

2. **Netlify detecta la configuración automáticamente:**
   - El archivo `netlify.toml` ya tiene todo configurado
   - Build command: `yarn build:netlify`
   - Publish directory: `dist`

3. **Configura dominio personalizado (opcional):**
   - Site settings → Domain management
   - Añade tu dominio
   - Actualiza `PUBLIC_SITE_URL` en `.env.netlify`

#### Características de netlify.toml

```toml
[build]
  command = "yarn build:netlify"
  publish = "dist"

# Redirects automáticos
[[redirects]]
  from = "/"
  to = "/es/"  # Idioma por defecto

# Headers de seguridad
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "..."
    X-Frame-Options = "DENY"
    Strict-Transport-Security = "..."
```

### ⚙️ Sistema Multi-Plataforma

**Sin cambios en el código**, el mismo build funciona en todas las plataformas:

```javascript
// astro.config.mjs detecta automáticamente la plataforma
const platform = process.env.PUBLIC_DEPLOYMENT_PLATFORM;

// Carga configuración base + overrides
config({ path: `.env.production` }); // Base
config({ path: `.env.${platform}` }); // Platform-specific
```

**Ventajas:**

- ✅ URLs correctas automáticamente
- ✅ Base paths correctos
- ✅ Sin duplicar configuración
- ✅ Fácil migración entre plataformas

---

## 🔧 Scripts Disponibles

### Desarrollo

```bash
yarn dev              # Servidor de desarrollo (localhost:4321)
yarn setup            # Wizard de configuración inicial
```

### Build por Plataforma

```bash
yarn build:github     # Build para GitHub Pages
yarn build:netlify    # Build para Netlify
yarn build            # Build genérico
```

### Preview

```bash
yarn preview:github   # Preview del build de GitHub
yarn preview:netlify  # Preview del build de Netlify
yarn preview          # Preview genérico
```

### Quality Assurance

```bash
yarn lint             # Prettier + Astro check
yarn format           # Formatear código con Prettier
yarn check            # Solo type-checking
yarn validate         # Lint + Type-check + Build (validación completa)
```

### Deployment

```bash
yarn deploy:github    # Deploy manual a GitHub Pages
yarn deploy:force     # Deploy forzado (sobrescribe historial)
```

### Utilidades

```bash
yarn astro sync       # Sincronizar tipos y variables
yarn clean            # Limpiar dist y .astro
yarn clean:all        # Limpiar todo incluido node_modules
```

---

## 📁 Estructura del Proyecto

```
📁 portfolio-template/
├── 📄 .env.*.template       # Templates de configuración (placeholders)
├── 📄 setup.js              # Wizard de configuración interactivo
├── 📄 netlify.toml          # Configuración de Netlify
├── 📁 .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── 📁 public/               # Archivos estáticos
│   ├── profile-image.jpg    # → Reemplaza con tu foto
│   ├── favicon.svg          # → Reemplaza con tu favicon
│   └── robots.txt
├── 📁 src/
│   ├── 📁 assets/           # Imágenes optimizadas
│   │   ├── logos/
│   │   └── projects/
│   ├── 📁 components/       # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ContactForm.astro
│   │   └── ...
│   ├── 📁 config/           # Configuración
│   │   ├── site.js          # Config del sitio
│   │   └── translations.ts  # → Edita tus textos
│   ├── 📁 layouts/
│   │   └── Layout.astro     # Layout base
│   ├── 📁 pages/            # Páginas del sitio
│   │   ├── index.astro      # Redirect a idioma
│   │   ├── 404.astro
│   │   └── [...lang]/       # Rutas i18n
│   │       ├── index.astro
│   │       ├── portfolio.astro
│   │       └── contact.astro
│   ├── 📁 sections/         # → Edita contenido
│   │   ├── HeroSection.astro
│   │   ├── AboutSection.astro
│   │   ├── ProjectsSection.astro
│   │   ├── ExperienceSection.astro
│   │   └── SkillsSection.astro
│   ├── 📁 scripts/          # JavaScript del cliente
│   │   ├── app.js           # Coordinador principal
│   │   ├── interactions.js  # Interacciones globales
│   │   ├── skillsCarousel.js
│   │   └── contactForm.js
│   ├── 📁 styles/
│   │   └── global.css       # → Edita estilos/colores
│   └── 📁 utils/
│       └── i18n.ts          # Helpers de i18n
├── 📄 astro.config.mjs      # Configuración de Astro
├── 📄 tsconfig.json
└── 📄 package.json
```

### Scripts JavaScript (src/scripts/)

Todos los scripts están organizados por funcionalidad:

- **`app.js`**: Coordinador principal, inicializa todas las interacciones
- **`interactions.js`**: Scroll suave, animaciones, intersection observers
- **`skillsCarousel.js`**: Carrusel infinito de habilidades
- **`contactForm.js`**: Manejo del formulario de contacto

**Patrón de clase consistente:**

```javascript
export class NombreClase {
  constructor() {
    this.init();
  }

  init() {
    // Configuración inicial
  }

  destroy() {
    // Limpieza de recursos
  }
}
```

---

## 🌐 Internacionalización

### Idiomas Soportados

- **Español** (`/es/`) - Idioma por defecto
- **Inglés** (`/en/`) - Traducción completa

### Agregar Nuevo Idioma

1. **Edita `src/config/translations.ts`:**

```typescript
export const translations = {
  es: {
    /* ... */
  },
  en: {
    /* ... */
  },
  fr: {
    // Nuevo idioma
    nav: {
      home: 'Accueil',
      about: 'À propos',
      // ...
    },
  },
};
```

2. **Actualiza `astro.config.mjs`:**

```javascript
i18n: {
  locales: ['es', 'en', 'fr'],
  defaultLocale: 'es',
  routing: {
    prefixDefaultLocale: true,
  },
}
```

3. **Las rutas se generan automáticamente:**
   - `/es/` (español)
   - `/en/` (inglés)
   - `/fr/` (francés)

### Uso en el Código

```astro
---
import { getRelativeLocaleUrl } from 'astro:i18n';
import { t } from '@/utils/i18n';

const lang = Astro.currentLocale || 'es';
const portfolioUrl = getRelativeLocaleUrl(lang, '/portfolio/');
---

<a href={portfolioUrl}>{t(lang, 'nav.portfolio')}</a>
```

---

## 🎯 SEO y Structured Data

### Google Rich Results Validado ✅

El sitio está optimizado con Schema.org structured data:

```
✅ 2 elementos válidos detectados
✅ 0 errores críticos
✅ Rich Results habilitados
```

### Schemas Implementados

1. **👤 Person Schema**
   - Perfil profesional completo
   - Redes sociales vinculadas
   - Ocupación y expertise
   - Knowledge Graph habilitado

2. **💼 ProfessionalService Schema**
   - Servicios catalogados
   - Información de contacto
   - SEO local optimizado
   - Click-to-call habilitado

3. **🌐 WebSite Schema**
   - Sitelinks Search Box
   - Multi-idioma (hreflang)
   - Publisher vinculado

### Beneficios SEO

- ✅ Rich Snippets en resultados de búsqueda
- ✅ Knowledge Graph para búsquedas de marca
- ✅ SEO local optimizado
- ✅ Social profiles verificados
- ✅ Better CTR con información enriquecida

**Validación:** [Google Rich Results Test](https://search.google.com/test/rich-results)

### Meta Tags Incluidos

- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Hreflang para idiomas
- Canonical URLs
- Structured Data (JSON-LD)

---

## 🔐 Variables de Entorno

### Sistema Base + Overrides

**Reduce duplicación en 71%:**

```
Antes: 3 archivos × 30 variables = 90 líneas ❌
Ahora: 1 base + overrides = 33 líneas ✅
```

### Archivos de Configuración

```bash
.env.production.template    # Base común (25 variables)
.env.development.template   # Desarrollo local
.env.github.template        # GitHub Pages (5 overrides)
.env.netlify.template       # Netlify (3 overrides)
```

### Flujo de Carga

```
yarn build:github
    ↓
cross-env PUBLIC_DEPLOYMENT_PLATFORM=github
    ↓
astro.config.mjs detecta "github"
    ↓
dotenv.config({ path: '.env.production' })  ← Base completa
    ↓
dotenv.config({ path: '.env.github' })      ← Solo overrides
    ↓
Build con configuración correcta
```

### Variables Principales

```env
# Plataforma
PUBLIC_DEPLOYMENT_PLATFORM=github|netlify|development

# URLs
PUBLIC_SITE_URL=https://tudominio.com
PUBLIC_BASE_PATH=/tu-repo  # Solo GitHub Pages

# Información Personal
PUBLIC_AUTHOR_NAME=Tu Nombre
PUBLIC_CONTACT_EMAIL=tu@email.com
PUBLIC_GITHUB_USERNAME=tu-username
PUBLIC_LINKEDIN_URL=https://linkedin.com/in/tu-perfil

# Servicios
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/XXXXXXXX
```

### Uso en el Código

```typescript
import { PUBLIC_SITE_TITLE, PUBLIC_BASE_PATH } from 'astro:env/client';

const title = PUBLIC_SITE_TITLE;
const basePath = PUBLIC_BASE_PATH;
```

---

## 🛠️ Tecnologías

### Core

- **[Astro v5](https://astro.build)** - Static Site Generator
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **CSS Variables** - Styling sin frameworks

### Servicios Externos

- **[Formspree](https://formspree.io)** - Formulario de contacto
- **[Google Fonts](https://fonts.google.com)** - Tipografía (Inter)

### Build & Deploy

- **[GitHub Actions](https://github.com/features/actions)** - CI/CD
- **[Netlify](https://www.netlify.com/)** - Hosting alternativo
- **[Sharp](https://sharp.pixelplumbing.com/)** - Optimización de imágenes

### Desarrollo

- **[Prettier](https://prettier.io/)** - Code formatting
- **[ESLint](https://eslint.org/)** - Linting (via Astro)
- **[cross-env](https://www.npmjs.com/package/cross-env)** - Variables de entorno cross-platform

---

## 🐛 Troubleshooting

### El wizard no funciona

```bash
# Verifica Node.js 18+
node --version

# Reinstala dependencias
rm -rf node_modules yarn.lock
yarn install
yarn setup
```

### Variables de entorno no definidas

```bash
# Regenera tipos de Astro
yarn astro sync
```

### Deployment falla en GitHub Actions

1. Verifica que `.env.github` tenga el nombre correcto del repo
2. Settings → Pages → Source: **GitHub Actions**
3. Settings → Actions → General → Workflow permissions: **Read and write**

### Formulario no envía

1. Verifica `PUBLIC_FORMSPREE_ENDPOINT` en `.env.*`
2. Verifica que el endpoint sea válido en formspree.io
3. Revisa la consola del navegador

### URLs con doble base path

```
❌ /chrystian_portfolio/chrystian_portfolio/about
✅ /chrystian_portfolio/about
```

**Solución:** Usa helpers de Astro:

```typescript
import { getRelativeLocaleUrl } from 'astro:i18n';
const url = getRelativeLocaleUrl('es', '/about/');
```

### Imágenes no cargan en GitHub Pages

```env
# ❌ INCORRECTO:
PUBLIC_PROFILE_IMAGE=/chrystian_portfolio/profile.jpg

# ✅ CORRECTO:
PUBLIC_PROFILE_IMAGE=/profile.jpg
# El base path se añade automáticamente
```

---

## 📋 Guía de Migración a Template Público

Si quieres publicar este portfolio como template público reutilizable, sigue estos pasos:

### 1. Eliminar Datos Personales del Repositorio

```bash
# Verificar qué archivos .env.* están en Git
git ls-files | grep "\.env\."

# Eliminarlos del tracking (mantiene archivos locales)
git rm --cached .env.production
git rm --cached .env.development
git rm --cached .env.github
git rm --cached .env.netlify

# Commit
git commit -m "chore: remove personal data files for template release"
```

### 2. Verificar .gitignore

Asegúrate de que `.gitignore` bloquea archivos personales:

```gitignore
# Bloquear archivos con datos reales
.env
.env.production
.env.development
.env.github
.env.netlify
.env.*.local

# Permitir templates (placeholders genéricos)
!.env.*.template
!.env.example
```

### 3. Reemplazar Imágenes Personales

```bash
# Reemplaza con imágenes placeholder o genéricas
public/profile-image.jpg  → Imagen placeholder
public/og-image.jpg       → Imagen genérica
src/assets/               → Verificar contenido personal
```

### 4. Actualizar package.json

```json
{
  "name": "astro-portfolio-template",
  "description": "Professional portfolio template - Astro v5 + TypeScript",
  "author": {
    "name": "Your Name",
    "email": "contact@example.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_ORG/portfolio-template.git"
  }
}
```

### 5. Configurar GitHub Repository como Template

1. **Settings → General:**
   - ✅ Marcar: **Template repository**
   - Descripción: "Professional portfolio template built with Astro v5, TypeScript, and multi-platform deployment"
   - Topics: `astro`, `portfolio`, `template`, `typescript`, `github-pages`, `netlify`

2. **Settings → Pages:**
   - Desactivar (el template no necesita Pages)

3. **Crear Release:**
   - Tag: `v1.0.0`
   - Title: "🎨 Portfolio Template v1.0.0"

### 6. Checklist de Verificación Final

```bash
# Clonar en directorio temporal (simular usuario nuevo)
cd /tmp
git clone https://github.com/TU_USERNAME/portfolio-template.git test
cd test

# Verificar que NO haya datos personales
grep -r "tu-email-real" .
grep -r "tu-username-real" .
grep -r "tu-formspree-id" .

# Probar el wizard
yarn install
yarn setup  # Completar con datos ficticios
yarn dev    # Verificar que funcione

# Probar builds
yarn build:github
yarn build:netlify
```

### Checklist Completo

- [ ] Eliminar archivos `.env.*` del repositorio Git
- [ ] Reemplazar imágenes personales con placeholders
- [ ] Actualizar `package.json` (nombre, autor, repo, homepage)
- [ ] Revisar `src/config/translations.ts` (poner textos genéricos)
- [ ] Revisar `src/sections/*.astro` (contenido de ejemplo)
- [ ] Verificar que no haya datos hardcodeados en el código
- [ ] Actualizar URLs en README
- [ ] Marcar repo como "Template repository" en GitHub
- [ ] Crear release v1.0.0
- [ ] Probar clonando como nuevo usuario

---

## 🎯 Checklist de Personalización

Antes de publicar tu portfolio, asegúrate de:

- [ ] Ejecutar `yarn setup` o configurar `.env.*` manualmente
- [ ] Reemplazar `public/profile-image.jpg` con tu foto
- [ ] Editar `src/config/translations.ts` con tus textos
- [ ] Actualizar proyectos en `ProjectsSection.astro`
- [ ] Actualizar experiencia en `ExperienceSection.astro`
- [ ] Actualizar habilidades en `SkillsSection.astro`
- [ ] Configurar Formspree (o dejarlo vacío)
- [ ] Verificar que `.env.github` tenga el nombre correcto del repo
- [ ] Personalizar colores en `global.css` (opcional)
- [ ] Hacer commit y push a GitHub
- [ ] Habilitar GitHub Pages (Settings → Pages → GitHub Actions)
- [ ] Verificar que el sitio funcione correctamente
- [ ] Probar selector de idioma
- [ ] Validar SEO con Google Rich Results Test

---

## 📊 Métricas del Proyecto

### Código

- **71% reducción** en configuración de variables (90 → 33 líneas)
- **0 errores** TypeScript
- **0 warnings** en build
- **100% type-safe** con Astro env schema

### SEO

- ✅ **2 elementos válidos** en Google Rich Results
- ✅ **0 errores críticos** en structured data
- ✅ **3 schemas** implementados
- ✅ **Multi-idioma** con hreflang

### Performance

- ⚡ **< 5 segundos** de build time
- 📦 **Static Site Generation** (SSG)
- ✅ **Lighthouse optimizado**

---

## 🔄 Historial de Cambios

### v2.0.0 - Template Público (Oct 2025)

**🎯 Conversión a Template Reutilizable:**

- ✅ Creado sistema de archivos `.env.*.template` con placeholders
- ✅ Wizard interactivo `setup.js` para configuración automática
- ✅ Patrón Base + Overrides (71% menos duplicación)
- ✅ Sistema multi-plataforma sin cambios en código
- ✅ Documentación consolidada en README único

**SEO y Structured Data:**

- ✅ Schema.org implementado (Person, WebSite, ProfessionalService)
- ✅ Validación exitosa con Google Rich Results Test
- ✅ 0 errores, Rich snippets habilitados

**Developer Experience:**

- ✅ Type-safe environment variables (Astro v5)
- ✅ Scripts organizados por funcionalidad
- ✅ CI/CD con GitHub Actions
- ✅ Documentación completa

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add some AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Abre un Pull Request

### Áreas de Contribución

- 🐛 Bug fixes
- ✨ Nuevas características
- 📝 Mejoras en documentación
- 🌍 Traducciones a nuevos idiomas
- 🎨 Mejoras de diseño
- ⚡ Optimizaciones de performance

---

## 📝 Licencia

MIT License - Siéntete libre de usar este template para tu portfolio personal o comercial.

Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- **[Astro Team](https://astro.build)** - Por el increíble framework
- **[Formspree](https://formspree.io)** - Por el servicio de formularios
- **Comunidad Open Source** - Por el feedback y soporte

---

<div align="center">

**⭐ Si te gusta este template, considera darle una estrella ⭐**

**Hecho con ❤️ usando [Astro](https://astro.build)**

[Demo](https://tu-username.github.io/portfolio-template) · [Reportar Bug](https://github.com/tu-username/portfolio-template/issues) · [Solicitar Feature](https://github.com/tu-username/portfolio-template/issues)

</div>
