# 🚀 Portfolio Personal - Chrystian Michell

Un portfolio profesional y moderno desarrollado con **Astro**, diseñado para mostrar proyectos, habilidades y experiencia como Senior Flutter Developer & Tech Lead.

## 📑 Tabla de Contenidos

- [✨ Características](#-características)
- [📁 Arquitectura de Variables de Entorno](#-arquitectura-de-variables-de-entorno)
- [📦 Instalación y Configuración](#-instalación-y-configuración)
- [🌍 Variables de Entorno](#-variables-de-entorno)
- [📧 Configuración de Formspree](#-configuración-de-formspree)
- [🚀 Scripts Disponibles](#-scripts-disponibles)
- [🎯 SEO y Structured Data](#-seo-y-structured-data)
- [🔒 Privacidad y Seguridad](#-privacidad-y-seguridad)
- [🛠️ Tecnologías](#️-tecnologías)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [🌍 Internacionalización (i18n)](#-internacionalización-i18n)
- [🎨 Personalización](#-personalización)
- [🚀 Deployment](#-deployment)
- [🐛 Troubleshooting](#-troubleshooting)
- [📊 Métricas del Proyecto](#-métricas-del-proyecto)
- [🔄 Historial de Cambios](#-historial-de-cambios)
- [🤝 Contribuir](#-contribuir)
- [📝 Licencia](#-licencia)
- [👨‍💻 Autor](#-autor)

---

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante con tema oscuro y gradientes
- 📱 **Responsive**: Optimizado para todos los dispositivos
- ⚡ **Performance**: Carga rápida gracias a Astro
- 🎯 **SEO Optimizado**: Meta tags, hreflang y estructura semántica
- 🔄 **Animaciones Suaves**: Transiciones y efectos visuales
- 📧 **Formulario de Contacto**: Integración con Formspree
- 🌍 **Multi-idioma**: Sistema i18n nativo con español e inglés
- 🌐 **Multi-Plataforma**: Deployment automático en GitHub Pages y Netlify
- 🔐 **Variables de Entorno**: Sistema tipo-seguro con Astro v5
- 🚀 **CI/CD**: Linting, formateo y deployment automatizado

## 🎯 SEO y Structured Data

### 📊 Google Rich Results - Validación Exitosa

El sitio está optimizado con structured data (Schema.org) para mejorar el SEO y la visibilidad en Google:

```
✅ 2 elementos válidos detectados por Google
✅ 0 errores críticos
✅ 0 problemas no críticos
✅ Rich Results habilitados
```

**Schemas implementados:**

1. **👤 Person** (Interpretado como "Organización" por Google)
   - Perfil profesional completo
   - Redes sociales vinculadas
   - Ocupación y expertise documentados
   - Knowledge Graph habilitado

2. **💼 ProfessionalService** (Interpretado como "Empresas locales")
   - Servicios catalogados (Flutter, Liderazgo Técnico, Arquitectura)
   - Información de contacto completa
   - SEO local optimizado (Madrid)
   - Click-to-call habilitado

3. **🌐 WebSite**
   - Sitelinks Search Box
   - Multi-idioma (es/en)
   - Publisher vinculado

**Beneficios SEO:**
- ✅ Rich Snippets con ubicación, teléfono y servicios
- ✅ Knowledge Graph en búsquedas de marca
- ✅ SEO local optimizado para Madrid
- ✅ Social profiles verificados
- ✅ Better CTR con información enriquecida

**Validación:** Probado con [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## 🔒 Privacidad y Seguridad

### Datos Públicos en Structured Data

⚠️ **Importante:** Todo lo que está en el structured data es **público** y visible para cualquiera que:
- Visite el sitio web
- Vea el código fuente (Ctrl+U)
- Use herramientas de scraping

**Información pública actual:**
- 📧 Email: chrystianmichell@hotmail.com
- 📞 Teléfono: +34653316944
- 📍 Ubicación: Madrid, España (genérico - no dirección exacta)

**Privacidad protegida:**
- ✅ Dirección genérica (Madrid) en vez de domicilio real
- ✅ Código postal genérico (28001)
- ✅ SEO local mantenido sin exponer ubicación exacta

### Opciones para Mayor Privacidad

Si deseas proteger más tu información:

1. **Email profesional separado:** Crea `contacto@tudominio.com`
2. **Número virtual:** Usa Google Voice o servicio similar
3. **Eliminar campos opcionales:** Quita `streetAddress` y `postalCode` del structured data
4. **Solo formulario:** Elimina email/teléfono del structured data, usa solo el formulario

Para modificar tu privacidad, edita:
```bash
.env.production
```

Y ajusta las variables `PUBLIC_CONTACT_*`.

---

## 🛠️ Tecnologías

- **Framework**: Astro v5
- **Lenguaje**: TypeScript
- **Styling**: CSS Variables, Flexbox, Grid
- **Formularios**: Formspree
- **Fonts**: Google Fonts (Inter)
- **Gestión de Estado**: Variables de entorno tipo-seguras

---

## � Arquitectura de Variables de Entorno

### 🎯 Patrón Base + Overrides

El proyecto implementa un **sistema de herencia inteligente** que reduce duplicación en un **71%**:

```
Antes: 3 archivos × 30 variables = 90 líneas duplicadas ❌
Ahora: 1 base + 2 overrides = 33 líneas totales ✅
```

**Estructura:**

```bash
.env.production      # Base común (25 variables)
                     # - Datos personales
                     # - Redes sociales
                     # - Configuración general

.env.github          # Solo 5 overrides
                     # - PUBLIC_SITE_URL
                     # - PUBLIC_BASE_PATH
                     # - PUBLIC_DEPLOYMENT_PLATFORM

.env.netlify         # Solo 3 overrides
                     # - PUBLIC_SITE_URL
                     # - PUBLIC_DEPLOYMENT_PLATFORM
```

**Cómo funciona:**

1. `astro.config.mjs` detecta la plataforma desde `PUBLIC_DEPLOYMENT_PLATFORM`
2. Carga **primero** `.env.production` (base completa)
3. Carga **después** `.env.[platform]` que sobrescribe solo lo específico
4. Astro genera el sitio con la configuración correcta

**Ventajas:**

- ✅ Cambiar email = editar 1 archivo en vez de 3
- ✅ Agregar red social = 1 línea en vez de 3
- ✅ Nueva plataforma = solo 2-3 variables override
- ✅ Menos errores de sincronización
- ✅ Más fácil de mantener

### 🔄 Flujo de Carga

```
yarn build:github
    ↓
cross-env PUBLIC_DEPLOYMENT_PLATFORM=github
    ↓
astro.config.mjs detecta "github"
    ↓
dotenv.config({ path: '.env.production', override: false })  ← Base
    ↓
dotenv.config({ path: '.env.github', override: true })       ← Overrides
    ↓
Build con configuración completa
```

**Ejemplo práctico:**

```javascript
// .env.production (BASE)
PUBLIC_AUTHOR_NAME=Chrystian Michell
PUBLIC_CONTACT_EMAIL=chrystianmichell@hotmail.com
PUBLIC_LINKEDIN_URL=https://linkedin.com/in/chrystianmichell
PUBLIC_SITE_URL=https://www.chrystianmichell.com

// .env.github (OVERRIDE - solo lo diferente)
PUBLIC_DEPLOYMENT_PLATFORM=github
PUBLIC_BASE_PATH=/chrystian_portfolio
PUBLIC_SITE_URL=https://imsoulrebel.github.io/chrystian_portfolio

// Resultado final para GitHub:
// ✅ Hereda: AUTHOR_NAME, CONTACT_EMAIL, LINKEDIN_URL
// ✅ Sobrescribe: DEPLOYMENT_PLATFORM, BASE_PATH, SITE_URL
```

---

## �📦 Instalación y Configuración

### 1️⃣ **Clonar el Repositorio**

```bash
git clone https://github.com/ImSoulRebel/chrystian_portfolio.git
cd chrystian_portfolio
```

### 2️⃣ **Instalar Dependencias**

```bash
yarn install
# o
npm install
```

### 3️⃣ **Configurar Variables de Entorno**

El proyecto incluye archivos `.env` pre-configurados para cada plataforma:

```bash
# ✅ Ya incluidos en el repositorio
.env.development    # Para desarrollo local
.env.github         # Para GitHub Pages
.env.netlify        # Para Netlify

# ⚠️ Opcional: Sobrescribir localmente
cp .env.development .env
```

**Formspree (Opcional)**: Si quieres usar el formulario de contacto:

1. Regístrate en [formspree.io](https://formspree.io)
2. Crea un formulario y copia el endpoint
3. Edita `.env.development` o crea `.env`:

```env
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/TU_FORM_ID
```

Ver sección "📧 Configuración de Formspree" más abajo para detalles.

### 4️⃣ **Iniciar Servidor de Desarrollo**

```bash
yarn dev
# o
npm run dev
```

El sitio estará disponible en: `http://localhost:4321`

**Nota**: El proyecto detecta automáticamente que estás en modo desarrollo y usa la configuración de `.env.development`.

---

## 🌍 Variables de Entorno

Este proyecto utiliza un **sistema multi-plataforma** con el patrón **Base + Overrides** para minimizar duplicación y facilitar el mantenimiento.

### 📁 **Archivos de Configuración**

```
📁 Proyecto/
├── 📄 .env.production      # ✅ Base común (25 variables) - producción
├── 📄 .env.development     # ✅ Desarrollo local (independiente)
├── 📄 .env.github          # ✅ GitHub Pages (solo 5 overrides)
├── 📄 .env.netlify         # ✅ Netlify (solo 3 overrides)
├── 📄 .env                 # ⚙️ Local override (opcional, .gitignore)
└── 📄 astro.config.mjs     # 🔧 Configuración de plataforma
```

### 🏗️ **Patrón Base + Overrides**

El sistema usa un patrón de herencia para evitar duplicación:

1. **`.env.production`** → Configuración base completa (datos reales, URLs de redes sociales, etc.)
2. **`.env.github`** → Solo sobrescribe URLs y base path específicos de GitHub Pages
3. **`.env.netlify`** → Solo sobrescribe URLs específicas de Netlify

**Beneficios:**

- ✅ **71% menos duplicación** de código
- ✅ Cambiar email/teléfono = editar 1 archivo en vez de 3
- ✅ Agregar nueva plataforma = 2-3 líneas en vez de 50+

**📖 Documentación completa:** Ver [ENV_ARCHITECTURE.md](./ENV_ARCHITECTURE.md) para detalles del patrón de herencia.

### 🎯 **Detección Automática de Plataforma**

El sistema detecta automáticamente la plataforma usando `PUBLIC_DEPLOYMENT_PLATFORM`:

| Plataforma  | Variable                                 | Base Path              | Site URL                              |
| ----------- | ---------------------------------------- | ---------------------- | ------------------------------------- |
| **GitHub**  | `PUBLIC_DEPLOYMENT_PLATFORM=github`      | `/chrystian_portfolio` | `imsoulrebel.github.io/chrystian_...` |
| **Netlify** | `PUBLIC_DEPLOYMENT_PLATFORM=netlify`     | `/` (root)             | `www.chrystianmichell.com`            |
| **Dev**     | `PUBLIC_DEPLOYMENT_PLATFORM=development` | `/` (root)             | `localhost:4321`                      |

### 🔐 **Variables Principales**

#### **Variables Públicas** (accesibles en cliente y servidor)

```env
# Plataforma
PUBLIC_DEPLOYMENT_PLATFORM=github|netlify|development

# URLs del Sitio
PUBLIC_SITE_URL=https://imsoulrebel.github.io/chrystian_portfolio
PUBLIC_BASE_PATH=/chrystian_portfolio

# Información del Sitio
PUBLIC_SITE_TITLE=Chrystian Michell | Portfolio
PUBLIC_SITE_DESCRIPTION=Portfolio profesional de Chrystian Michell

# Información Personal
PUBLIC_AUTHOR_NAME=Chrystian Michell
PUBLIC_CONTACT_EMAIL=chrystianmichell@hotmail.com
PUBLIC_GITHUB_USERNAME=ImSoulRebel

# Servicios
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### **Uso en el Código**

Las variables públicas se cargan automáticamente en `astro:env/client`:

```astro
---
import { PUBLIC_SITE_TITLE, PUBLIC_BASE_PATH } from 'astro:env/client';
---

<h1>{PUBLIC_SITE_TITLE}</h1>
<a href={`${PUBLIC_BASE_PATH}/portfolio/`}>Portfolio</a>
```

### 🔄 **Cómo Funciona**

1. **Build**: Los scripts `build:github` y `build:netlify` establecen `PUBLIC_DEPLOYMENT_PLATFORM`
2. **Detección**: `astro.config.mjs` carga el archivo `.env.[platform]` correspondiente
3. **Construcción**: Astro genera URLs correctas automáticamente usando `base` configurado

### ⚙️ **Características del Sistema**

- ✅ **Sin cambios de código**: El mismo código funciona en todas las plataformas
- ✅ **Type-safe**: Validación automática de tipos con TypeScript
- ✅ **Helpers nativos**: Usa `getRelativeLocaleUrl` de Astro para rutas i18n
- ✅ **SEO optimizado**: Hreflang URLs correctos para cada plataforma

### 🔒 **Seguridad**

- ✅ Los archivos `.env.[platform]` contienen valores **no sensibles** (están en Git)
- ⚠️ Para API keys secretas, usa `.env` local (está en `.gitignore`)
- ❌ **NUNCA** expongas API keys en variables `PUBLIC_*`

---

## 📧 Configuración de Formspree

El formulario de contacto utiliza **[Formspree](https://formspree.io)** - un servicio que permite procesar formularios HTML en sitios estáticos sin backend.

### 🚀 **Setup en 4 Pasos**

1. **Registrarse** en [formspree.io](https://formspree.io) (Plan gratuito: 50 envíos/mes)

2. **Crear un nuevo formulario**:
   - Dashboard → New Project → New Form
   - Copiar el endpoint generado: `https://formspree.io/f/XXXXXXXX`

3. **Configurar en `.env`**:

   ```env
   PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/XXXXXXXX
   ```

4. **Probar**: Visita `/es/contact` y envía un mensaje de prueba

### ✨ **Características Implementadas**

- ✅ Validación del lado cliente en tiempo real
- ✅ Estados visuales: loading, éxito, error
- ✅ Design responsive y accesible (ARIA labels)
- ✅ Campos optimizados para proyectos:
  - Nombre y email (requeridos)
  - Empresa/organización
  - Tipo de proyecto (dropdown)
  - Presupuesto estimado
  - Timeline esperado
  - Mensaje detallado
- ✅ Mensajes en español
- ✅ Prevención de spam básica

### � **Configuración Avanzada** (Opcional)

En el dashboard de Formspree puedes:

- **CAPTCHA**: Activar reCAPTCHA para mejor protección anti-spam
- **Integraciones**: Conectar con Slack, Zapier, webhooks
- **Email Template**: Personalizar el formato de notificación
- **Domain Verification**: Verificar tu dominio para mayor seguridad

### 📊 **Planes**

| Plan        | Mensajes/mes | Características                                   |
| ----------- | ------------ | ------------------------------------------------- |
| **Free**    | 50           | Formularios ilimitados, notificaciones email      |
| **Premium** | 1,000        | CAPTCHA avanzado, exportación de datos, analytics |

---

## 🚀 Scripts Disponibles

```bash
# Desarrollo
yarn dev                    # Inicia servidor de desarrollo (puerto 4321)
                           # Usa automáticamente .env.development

# Build Multi-Plataforma (con patrón Base + Overrides)
yarn build:github           # Build para GitHub Pages
                           # Carga: .env.production + .env.github (overrides)
                           # Base path: /chrystian_portfolio

yarn build:netlify          # Build para Netlify
                           # Carga: .env.production + .env.netlify (overrides)
                           # Base path: / (root)

# Preview (Pre-visualización de builds)
yarn preview:github         # Preview del build de GitHub Pages
yarn preview:netlify        # Preview del build de Netlify

# QA y Testing
yarn lint                   # Ejecutar Prettier + Astro check
yarn format                 # Formatear código con Prettier
yarn check                  # Verificar tipos TypeScript
yarn validate               # Lint + Type-check + Build (validación completa)

# Deployment
yarn deploy:github          # Build + Deploy a GitHub Pages
yarn deploy:force           # Deploy forzado (sobrescribe historial)

# Utilidades
yarn astro sync             # Sincronizar tipos y validar variables de entorno
yarn clean                  # Limpiar archivos generados (dist, .astro)
yarn clean:all              # Limpiar todo incluido node_modules
```

### 💡 **Cómo Funcionan los Builds Multi-Plataforma**

Los scripts usan `cross-env` (compatible con Windows/Mac/Linux) para establecer `PUBLIC_DEPLOYMENT_PLATFORM`:

```bash
# Internamente:
build:github  → PUBLIC_DEPLOYMENT_PLATFORM=github
                ↓
                astro.config.mjs detecta "github"
                ↓
                Carga .env.production (base)
                ↓
                Carga .env.github (overrides)
                ↓
                Build con base path correcto
```

**Resultado:** El mismo código funciona en todas las plataformas sin cambios.

### 📚 **Guía de Deployment**

Para instrucciones completas sobre deployment multi-plataforma, consulta **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**:

- 🔵 GitHub Pages (actual)
- 🟢 Netlify (configurado y listo)
- 📋 Variables de entorno por plataforma
- 🔍 Solución de problemas
- 📊 Checklists de deployment

---

## 📂 Estructura del Proyecto

```
📁 chrystian_portfolio/
├── 📁 public/                  # Archivos estáticos
│   ├── favicon.svg
│   └── robots.txt
├── 📁 src/
│   ├── 📁 assets/              # Imágenes y recursos
│   │   ├── logos/
│   │   └── projects/
│   ├── 📁 components/          # Componentes reutilizables
│   │   ├── ContactForm.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ...
│   ├── 📁 config/              # Configuración
│   │   ├── site.js             # Config del sitio
│   │   └── translations.ts     # Traducciones i18n
│   ├── 📁 layouts/             # Layouts base
│   │   └── Layout.astro
│   ├── 📁 pages/               # Páginas del sitio
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   └── [...lang]/          # Rutas multi-idioma
│   ├── 📁 sections/            # Secciones de la página
│   │   ├── HeroSection.astro
│   │   ├── AboutSection.astro
│   │   └── ...
│   ├── 📁 scripts/             # Scripts del cliente
│   │   ├── app.js
│   │   └── contactForm.js
│   ├── 📁 styles/              # Estilos globales
│   │   └── global.css
│   └── 📁 utils/               # Utilidades
│       └── i18n.ts             # Helpers de internacionalización
├── 📄 astro.config.mjs         # Configuración de Astro
├── 📄 tsconfig.json            # Configuración de TypeScript
├── 📄 package.json             # Dependencias
└── 📄 .env.example             # Plantilla de variables de entorno
```

---

## 🌍 Internacionalización (i18n)

El proyecto soporta múltiples idiomas:

- **Español** (`/es/`) - Idioma por defecto
- **Inglés** (`/en/`) - Traducción completa

### **Añadir Nuevo Idioma**

1. Editar `src/config/translations.ts`
2. Añadir traducciones para el nuevo idioma
3. Actualizar rutas en `src/pages/[...lang]/`

---

## 🎨 Personalización

### **Colores y Estilos**

Edita las variables CSS en `src/styles/global.css`:

```css
:root {
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-accent: #f093fb;
  /* ... más variables */
}
```

### **Configuración del Sitio**

Edita `src/config/site.js` o usa variables de entorno:

```javascript
export const SITE_CONFIG = {
  title: PUBLIC_SITE_TITLE,
  description: PUBLIC_SITE_DESCRIPTION,
  author: PUBLIC_AUTHOR_NAME,
  // ...
};
```

---

## 🚀 Deployment

### **🌐 Sistema Multi-Plataforma**

Este proyecto está diseñado para desplegarse en múltiples plataformas sin cambios en el código:

| Plataforma       | Estado         | URL                                               | Base Path              |
| ---------------- | -------------- | ------------------------------------------------- | ---------------------- |
| **GitHub Pages** | ✅ Activo      | https://imsoulrebel.github.io/chrystian_portfolio | `/chrystian_portfolio` |
| **Netlify**      | 🟢 Configurado | https://www.chrystianmichell.com _(futuro)_       | `/` (root)             |
| **Development**  | 🔧 Local       | http://localhost:4321                             | `/` (root)             |

### **GitHub Pages (Actual)**

El proyecto se despliega automáticamente mediante GitHub Actions:

```bash
# Configuración automática en cada push a main
git push origin main
```

El workflow incluye:

- ✅ Linting automático
- ✅ Formateo de código (Prettier)
- ✅ Build optimizado
- ✅ Deploy a GitHub Pages

### **Migración a Netlify (Futuro)**

El proyecto está **completamente configurado** para Netlify. Cuando decidas migrar:

1. Conecta el repositorio en Netlify
2. Netlify detectará automáticamente `netlify.toml`
3. El build se ejecutará con la configuración correcta
4. Configura tu dominio personalizado

No requiere cambios en el código - el sistema de detección de plataforma se encarga automáticamente.

### **📖 Documentación Completa**

Para guía detallada de deployment, troubleshooting y migración:

👉 **[Ver DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**

### **Otras Plataformas**

También compatible con:

- **Vercel**: Deploy automático desde Git
- **Cloudflare Pages**: Compatible con Astro SSG

---

## 🐛 Debugging y Testing

### **Debug Mode**

Activa logs detallados en la consola:

```env
PUBLIC_DEBUG_MODE=true
```

### **Página de Prueba**

Visita `/env-example` para verificar:

- ✅ Estado de todas las variables de entorno
- ✅ Configuración de servicios (Formspree)
- ✅ Diferencias entre variables cliente/servidor
- ✅ Valores actuales cargados

### **Herramientas de Desarrollo**

```bash
# Sincronizar y validar tipos
bun astro sync

# Verificar errores de TypeScript
bun astro check

# Build con logs verbosos
bun build --verbose
```

### **Solución de Problemas Comunes**

| Problema                       | Solución                                                              |
| ------------------------------ | --------------------------------------------------------------------- |
| Variables no definidas         | Ejecutar `bun astro sync` para regenerar tipos                        |
| TypeScript no reconoce imports | Verificar que existe `src/env.d.ts`                                   |
| Formulario no envía            | Verificar `PUBLIC_FORMSPREE_ENDPOINT` en `.env`                       |
| Build falla                    | Revisar que todas las variables requeridas estén en `.env.production` |

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## � Troubleshooting

### Problemas Comunes y Soluciones

#### Variables de Entorno No Definidas

```bash
# Error: Cannot find name 'PUBLIC_SITE_URL'
# Solución:
yarn astro sync  # Regenera tipos de variables de entorno
```

#### Build Falla con "Missing Required Variable"

```bash
# Verificar que .env.production tenga todas las variables requeridas
# Verificar que astro.config.mjs tenga el schema correcto
yarn astro check
```

#### Formulario No Envía

```bash
# Verificar que PUBLIC_FORMSPREE_ENDPOINT esté configurado
# En .env.production o .env.development:
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/TU_ID
```

#### Rutas 404 en GitHub Pages

```bash
# Verificar que PUBLIC_BASE_PATH esté correctamente configurado
# En .env.github debe ser:
PUBLIC_BASE_PATH=/chrystian_portfolio

# El nombre debe coincidir con el nombre del repositorio
```

#### URLs Duplicadas (doble base path)

```bash
# ❌ INCORRECTO: /chrystian_portfolio/chrystian_portfolio/about
# ✅ CORRECTO: /chrystian_portfolio/about

# Solución: Usar getRelativeLocaleUrl de Astro
import { getRelativeLocaleUrl } from 'astro:i18n';
const url = getRelativeLocaleUrl('es', '/about/');
```

#### Imágenes No Cargan en GitHub Pages

```bash
# ❌ INCORRECTO:
PUBLIC_PROFILE_IMAGE=/chrystian_portfolio/profile.jpg

# ✅ CORRECTO:
PUBLIC_PROFILE_IMAGE=/profile.jpg

# El base path se añade automáticamente
```

#### TypeScript No Reconoce Imports

```bash
# Verificar que existe src/env.d.ts
# Si no existe:
echo '/// <reference types="astro/client" />' > src/env.d.ts
yarn astro sync
```

#### Google Rich Results No Detecta Schemas

```bash
# 1. Verificar que el build sea exitoso
yarn build:github

# 2. Revisar el HTML generado
# dist/es/index.html debe tener <script type="application/ld+json">

# 3. Validar con Google Rich Results Test
# https://search.google.com/test/rich-results

# 4. Verificar que las variables PUBLIC_CONTACT_* estén definidas
```

### Logs de Debug

Habilita logs detallados:

```env
# .env.development
PUBLIC_DEBUG_MODE=true
```

Luego verifica en la consola del navegador:
```
F12 → Console → Buscar logs de carga de variables
```

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
- ✅ **3 schemas** implementados (Person, WebSite, ProfessionalService)
- ✅ **Multi-idioma** con hreflang correcto

### Performance

- ⚡ **< 5 segundos** de build time
- 📦 **11 páginas** generadas (es + en)
- 🚀 **Static Site Generation** (SSG)
- ✅ **Lighthouse Score** optimizado

---

## 🔄 Historial de Cambios

### v2.0.0 - Refactorización de Variables de Entorno (Oct 2025)

**🎯 Objetivo:** Implementar patrón Base + Overrides para reducir duplicación

**Cambios:**
- ✅ Creado `.env.production` como base común (25 variables)
- ✅ Simplificado `.env.github` a solo 5 overrides (de 45 líneas)
- ✅ Simplificado `.env.netlify` a solo 3 overrides (de 45 líneas)
- ✅ **71% reducción** de código duplicado
- ✅ Sistema de herencia automático en `astro.config.mjs`
- ✅ Logs de carga de configuración para debugging

**SEO y Structured Data:**
- ✅ Implementado Schema.org (Person, WebSite, ProfessionalService)
- ✅ Validación exitosa con Google Rich Results Test
- ✅ 0 errores críticos, 0 warnings
- ✅ Rich snippets habilitados

**Privacidad:**
- ✅ Datos de dirección generalizados (Madrid en vez de ubicación específica)
- ✅ Protección de información sensible
- ✅ SEO local mantenido sin comprometer privacidad

**Documentación:**
- ✅ README consolidado con toda la información
- ✅ Guías de troubleshooting
- ✅ Ejemplos de uso

---

## �📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 👨‍💻 Autor

**Chrystian Michell**

- 🌐 Portfolio: [imsoulrebel.github.io/chrystian_portfolio](https://imsoulrebel.github.io/chrystian_portfolio)
- 💼 GitHub: [@ImSoulRebel](https://github.com/ImSoulRebel)
- 💼 LinkedIn: [chrystianmichell](https://linkedin.com/in/chrystianmichell)
- 📧 Email: chrystianmichell@hotmail.com

---

## 🙏 Agradecimientos

- **Astro Team** - Por el increíble framework
- **Formspree** - Por el servicio de formularios
- **Community** - Por el feedback y soporte

---

<div align="center">

**⭐ Si te gusta este proyecto, considera darle una estrella ⭐**

**Hecho con ❤️ por Chrystian Michell**

</div>
