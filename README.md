# 🚀 Portfolio Personal - Chrystian Michell

Un portfolio profesional y moderno desarrollado con **Astro**, diseñado para mostrar proyectos, habilidades y experiencia como Senior Flutter Developer & Tech Lead.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante con tema oscuro y gradientes
- 📱 **Responsive**: Optimizado para todos los dispositivos
- ⚡ **Performance**: Carga rápida gracias a Astro
- 🎯 **SEO Optimizado**: Meta tags y estructura semántica
- 🔄 **Animaciones Suaves**: Transiciones y efectos visuales
- 📧 **Formulario de Contacto**: Integración con Formspree
- 🌍 **Multi-idioma**: Soporte para inglés y español
- 🔐 **Variables de Entorno**: Sistema tipo-seguro con Astro v5

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
bun install
# o
npm install
```

### 3️⃣ **Configurar Variables de Entorno**

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar con tus valores reales
# Ver sección "Variables de Entorno" más abajo
```

### 4️⃣ **Iniciar Servidor de Desarrollo**

```bash
bun dev
# o
npm run dev
```

El sitio estará disponible en: `http://localhost:4321`

---

## 🌍 Variables de Entorno

Este proyecto utiliza el sistema de variables de entorno tipo-seguras de **Astro v5** con la API `astro:env`.

### 📁 **Estructura de Archivos**

```
📁 Proyecto/
├── 📄 .env                 # Tu configuración local (NO subir a Git)
├── 📄 .env.example         # Plantilla con ejemplos
├── 📄 .env.development     # Configuración de desarrollo
├── 📄 .env.production      # Configuración de producción
└── 📄 astro.config.mjs     # Schema de tipos seguros
```

### 🔐 **Variables Configuradas**

El proyecto incluye dos tipos de variables:

#### **🌐 Variables Públicas** (accesibles en cliente y servidor)

Tienen el prefijo `PUBLIC_` y están disponibles tanto en el cliente como en el servidor:

```env
# Configuración del Sitio
PUBLIC_SITE_URL=https://imsoulrebel.github.io/chrystian_portfolio
PUBLIC_BASE_DOMAIN=https://www.imsoulrebel.github.io
PUBLIC_SITE_TITLE=Chrystian Michell | Portfolio
PUBLIC_SITE_DESCRIPTION=Portfolio profesional de Chrystian Michell
PUBLIC_SITE_VERSION=1.0.0

# Información Personal
PUBLIC_AUTHOR_NAME=Chrystian Michell
PUBLIC_CONTACT_EMAIL=chrystianmichell@hotmail.com
PUBLIC_GITHUB_USERNAME=ImSoulRebel
PUBLIC_LINKEDIN_URL=https://linkedin.com/in/chrystianmichell
PUBLIC_PHONE=+51 945 062 690

# Configuración de Desarrollo
PUBLIC_DEV_PORT=4321
PUBLIC_DEBUG_MODE=false

# Formspree
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

#### **🔒 Variables Secretas** (solo servidor)

Sin prefijo, solo accesibles en el servidor (para APIs, webhooks, etc.):

```env
CONTACT_FORM_API_KEY=tu_api_key_secreta
WEBHOOK_URL=https://hooks.slack.com/services/...
```

### 📖 **Uso en el Código**

```astro
---
// Variables públicas (disponibles en cliente y servidor)
import { PUBLIC_SITE_TITLE, PUBLIC_AUTHOR_NAME } from 'astro:env/client';

// Variables secretas (solo en servidor)
import { CONTACT_FORM_API_KEY } from 'astro:env/server';
---

<h1>{PUBLIC_SITE_TITLE}</h1>
<p>Por: {PUBLIC_AUTHOR_NAME}</p>
```

### 🔄 **Gestión de Entornos**

El proyecto soporta diferentes entornos automáticamente:

```bash
# Desarrollo (usa .env + .env.development)
bun dev

# Producción (usa .env.production)
bun build

# Preview de producción local
bun preview
```

**Prioridad de carga**: `.env.local` > `.env.[mode]` > `.env`

### ⚙️ **Características del Sistema**

- ✅ **Type-safe**: Validación automática de tipos en build time
- ✅ **IntelliSense**: Autocompletado completo en VS Code
- ✅ **Seguridad**: Variables secretas nunca llegan al cliente
- ✅ **Multi-entorno**: Configuraciones separadas por entorno
- ✅ **Validación**: Errores claros si faltan variables requeridas

### 🔒 **Mejores Prácticas**

| ✅ Hacer                                    | ❌ No Hacer                          |
| ------------------------------------------- | ------------------------------------ |
| Usar `PUBLIC_` solo para datos no sensibles | Poner API keys en variables públicas |
| Mantener `.env` en `.gitignore`             | Subir archivos `.env` a Git          |
| Documentar variables en `.env.example`      | Hardcodear valores en el código      |
| Validar variables en `astro.config.mjs`     | Usar variables sin validación        |

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
bun dev              # Inicia servidor de desarrollo
bun dev:staging      # Desarrollo con entorno staging

# Producción
bun build            # Build de producción
bun build:staging    # Build para staging
bun preview          # Preview del build

# Utilidades
bun astro sync       # Sincronizar tipos y validar variables
```

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

### **GitHub Pages**

El proyecto está configurado para deployar automáticamente en GitHub Pages.

```bash
# Build para producción
bun build

# El output estará en /dist
# GitHub Actions se encarga del deploy automático
```

### **Otras Plataformas**

Compatible con:

- **Vercel**: Deploy automático desde Git
- **Netlify**: Configuración de build incluida
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
