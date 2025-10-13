# 🚀 Portfolio Personal - Chrystian Michell

Un portfolio profesional y moderno desarrollado con **Astro**, diseñado para mostrar proyectos, habilidades y experiencia como Senior Flutter Developer & Tech Lead.

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

## 🛠️ Tecnologías

- **Framework**: Astro v5
- **Lenguaje**: TypeScript
- **Styling**: CSS Variables, Flexbox, Grid
- **Formularios**: Formspree
- **Fonts**: Google Fonts (Inter)
- **Gestión de Estado**: Variables de entorno tipo-seguras

---

## 📦 Instalación y Configuración

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

Este proyecto utiliza un **sistema multi-plataforma** con archivos `.env` pre-configurados:

### 📁 **Archivos de Configuración**

```
📁 Proyecto/
├── 📄 .env.development     # ✅ Desarrollo local (incluido)
├── 📄 .env.github          # ✅ GitHub Pages (incluido)
├── 📄 .env.netlify         # ✅ Netlify (incluido)
├── 📄 .env                 # ⚙️ Local override (opcional, .gitignore)
└── 📄 astro.config.mjs     # 🔧 Configuración de plataforma
```

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

# Build Multi-Plataforma
yarn build:github           # Build para GitHub Pages (con base path)
yarn build:netlify          # Build para Netlify (sin base path)

# Preview
yarn preview:github         # Preview del build de GitHub
yarn preview:netlify        # Preview del build de Netlify

# QA y Testing
yarn lint                   # Ejecutar ESLint
yarn format                 # Formatear código con Prettier
yarn check                  # Verificar tipos TypeScript

# Deployment
yarn deploy:github          # Deploy a GitHub Pages

# Utilidades
yarn astro sync             # Sincronizar tipos y validar variables
```

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

## 📝 Licencia

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
