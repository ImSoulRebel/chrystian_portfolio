# 🚀 Guía de Deployment Multi-Plataforma

Esta guía explica cómo desplegar el portfolio de Chrystian Michell en diferentes plataformas de hosting, aprovechando el sistema multi-plataforma implementado.

## 📋 Tabla de Contenidos

- [Arquitectura Multi-Plataforma](#arquitectura-multi-plataforma)
- [Deployment en GitHub Pages](#deployment-en-github-pages)
- [Migración a Netlify](#migración-a-netlify)
- [Variables de Entorno](#variables-de-entorno)
- [Scripts Disponibles](#scripts-disponibles)
- [Solución de Problemas](#solución-de-problemas)

---

## 🏗️ Arquitectura Multi-Plataforma

El proyecto está configurado para funcionar en múltiples plataformas sin cambios en el código:

### Plataformas Soportadas

| Plataforma       | Base Path              | Site URL                                            | Configuración      |
| ---------------- | ---------------------- | --------------------------------------------------- | ------------------ |
| **GitHub Pages** | `/chrystian_portfolio` | `https://imsoulrebel.github.io/chrystian_portfolio` | `.env.github`      |
| **Netlify**      | `/` (root)             | `https://www.chrystianmichell.com`                  | `.env.netlify`     |
| **Development**  | `/` (root)             | `http://localhost:4321`                             | `.env.development` |

### Sistema de Detección Automática

El sistema detecta automáticamente la plataforma basándose en la variable `PUBLIC_DEPLOYMENT_PLATFORM`:

```javascript
// astro.config.mjs
const deploymentPlatform =
  process.env.PUBLIC_DEPLOYMENT_PLATFORM || 'development';
config({
  path: resolve(__dirname, `.env.${deploymentPlatform}`),
  override: false,
});
```

---

## 🔵 Deployment en GitHub Pages

### Estado Actual

✅ **Actualmente desplegado en:** https://imsoulrebel.github.io/chrystian_portfolio/

### Configuración

El deployment en GitHub Pages está **completamente automatizado** mediante GitHub Actions.

#### Archivo de Workflow

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: 📥 Checkout
        uses: actions/checkout@v4

      - name: 🟢 Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'yarn'

      - name: 📦 Install Dependencies
        run: yarn install --frozen-lockfile

      - name: 🔍 Type Check & Lint
        run: yarn run lint

      - name: ✨ Format Code
        run: yarn run format

      - name: 🏗️ Build
        run: yarn run build:github
        env:
          PUBLIC_DEPLOYMENT_PLATFORM: github
          PUBLIC_SITE_URL: https://imsoulrebel.github.io/chrystian_portfolio
          PUBLIC_BASE_PATH: /chrystian_portfolio

      - name: 📤 Upload Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: 🚀 Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Deployment Manual

Si necesitas hacer un deployment manual:

```bash
# Build para GitHub Pages
yarn build:github

# Deploy manual (requiere gh-pages instalado)
yarn deploy:github
```

### Validación

Para validar que el deployment fue exitoso:

1. **GitHub Actions**: Verifica el workflow en https://github.com/ImSoulRebel/chrystian_portfolio/actions
2. **Sitio en vivo**: Visita https://imsoulrebel.github.io/chrystian_portfolio/
3. **URLs i18n**:
   - Español: https://imsoulrebel.github.io/chrystian_portfolio/es/
   - Inglés: https://imsoulrebel.github.io/chrystian_portfolio/en/
4. **Selector de idioma**: Prueba cambiar entre idiomas

---

## 🟢 Migración a Netlify

### Preparación

El proyecto ya está **100% preparado** para Netlify. Solo necesitas:

1. Cuenta en Netlify
2. Conectar tu repositorio
3. ¡Listo! Netlify usará automáticamente la configuración de `netlify.toml`

### Configuración Automática

El archivo `netlify.toml` ya está configurado con:

#### Build Settings

```toml
[build]
  command = "yarn build:netlify"
  publish = "dist"

  [build.environment]
    NODE_VERSION = "20"
    YARN_VERSION = "1.22.22"
    PUBLIC_DEPLOYMENT_PLATFORM = "netlify"
    PUBLIC_SITE_URL = "https://www.chrystianmichell.com"
    PUBLIC_BASE_PATH = ""
```

#### Redirects

```toml
# Redirect de la raíz al idioma español
[[redirects]]
  from = "/"
  to = "/es/"
  status = 301
  force = true

# Compatibilidad con URLs antiguas
[[redirects]]
  from = "/portfolio/*"
  to = "/es/portfolio/:splat"
  status = 301

# Página 404 personalizada
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

#### Security Headers

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'..."
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
```

### Pasos para Deploy en Netlify

#### Opción 1: Desde Netlify UI

1. **Ir a Netlify Dashboard**: https://app.netlify.com/
2. **Crear nuevo sitio**: Click en "Add new site" → "Import an existing project"
3. **Conectar GitHub**: Selecciona tu repositorio `chrystian_portfolio`
4. **Configuración automática**: Netlify detectará automáticamente `netlify.toml`
5. **Deploy**: Click en "Deploy site"

#### Opción 2: Netlify CLI

```bash
# Instalar Netlify CLI globalmente
npm install -g netlify-cli

# Login en Netlify
netlify login

# Inicializar proyecto
netlify init

# Deploy manual
netlify deploy --prod
```

### Configuración de Dominio Personalizado

Para usar `www.chrystianmichell.com`:

1. En Netlify Dashboard → Site settings → Domain management
2. Click en "Add custom domain"
3. Ingresa: `www.chrystianmichell.com`
4. Configura DNS:
   ```
   CNAME www [tu-sitio].netlify.app
   ```
5. Habilita HTTPS automático (Let's Encrypt)

### Validación en Netlify

Después del deployment:

1. **URL del sitio**: Verifica en Netlify Dashboard
2. **URLs i18n**:
   - Español: https://www.chrystianmichell.com/es/
   - Inglés: https://www.chrystianmichell.com/en/
3. **Redirects**: Prueba acceder a `/` → debe redirigir a `/es/`
4. **Headers**: Verifica en DevTools → Network → Headers
5. **Selector de idioma**: Debe funcionar correctamente

---

## 🔧 Variables de Entorno

### Archivos de Configuración

El proyecto incluye tres archivos `.env`:

#### `.env.development`

```bash
PUBLIC_DEPLOYMENT_PLATFORM=development
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_BASE_PATH=
```

#### `.env.github`

```bash
PUBLIC_DEPLOYMENT_PLATFORM=github
PUBLIC_SITE_URL=https://imsoulrebel.github.io/chrystian_portfolio
PUBLIC_BASE_PATH=/chrystian_portfolio
```

#### `.env.netlify`

```bash
PUBLIC_DEPLOYMENT_PLATFORM=netlify
PUBLIC_SITE_URL=https://www.chrystianmichell.com
PUBLIC_BASE_PATH=
```

### Variables Importantes

| Variable                     | Descripción                     | Valores Posibles                                       |
| ---------------------------- | ------------------------------- | ------------------------------------------------------ |
| `PUBLIC_DEPLOYMENT_PLATFORM` | Identifica la plataforma actual | `development`, `github`, `netlify`                     |
| `PUBLIC_SITE_URL`            | URL completa del sitio          | URL completa incluyendo base path si es necesario      |
| `PUBLIC_BASE_PATH`           | Subcarpeta del hosting          | `/chrystian_portfolio` para GitHub, vacío para Netlify |

### Uso en el Código

```typescript
// Acceso a variables de entorno
import { getBasePath, getSiteUrl, getDeploymentPlatform } from '@utils/i18n';

const basePath = getBasePath(); // '/chrystian_portfolio' o ''
const siteUrl = getSiteUrl(); // URL completa
const platform = getDeploymentPlatform(); // 'github', 'netlify', etc.
```

---

## 📜 Scripts Disponibles

### Development

```bash
# Iniciar servidor de desarrollo
yarn dev

# Preview del build de producción
yarn preview
```

### Build por Plataforma

```bash
# Build para GitHub Pages
yarn build:github

# Build para Netlify
yarn build:netlify

# Build genérico (usa NODE_ENV)
yarn build
```

### Preview por Plataforma

```bash
# Preview de GitHub Pages build
yarn preview:github

# Preview de Netlify build
yarn preview:netlify
```

### Quality Assurance

```bash
# Type checking y lint
yarn lint

# Formateo de código
yarn format

# Type checking solamente
yarn astro check
```

### Deployment

```bash
# Deploy a GitHub Pages (manual)
yarn deploy:github
```

---

## 🔍 Solución de Problemas

### GitHub Pages

#### Problema: 404 en todas las rutas

**Solución**: Verifica que GitHub Pages esté habilitado en Settings → Pages → Source: GitHub Actions

#### Problema: Estilos no cargan

**Solución**: Verifica que `PUBLIC_BASE_PATH` esté correctamente configurado en el workflow

#### Problema: Selector de idioma no funciona

**Solución**: Verifica que las URLs generadas incluyan el base path

### Netlify

#### Problema: Página 404 en refresh

**Solución**: Verifica que `netlify.toml` esté en la raíz y los redirects estén configurados

#### Problema: Headers de seguridad no aplican

**Solución**: Verifica la sintaxis de `[[headers]]` en `netlify.toml`

#### Problema: Build falla

**Solución**: Verifica que las variables de entorno en `netlify.toml` sean correctas

### General

#### Problema: URLs con doble base path

**Solución**: Asegúrate de que `PUBLIC_SITE_URL` no incluya el base path cuando `PUBLIC_BASE_PATH` esté definido

#### Problema: i18n no funciona correctamente

**Solución**: Verifica que estés usando los helpers de Astro (`getRelativeLocaleUrl`, `getAbsoluteLocaleUrl`)

---

## 📊 Checklist de Deployment

### Pre-Deployment

- [ ] Ejecutar `yarn lint` sin errores
- [ ] Ejecutar `yarn format`
- [ ] Ejecutar `yarn build:github` exitosamente
- [ ] Ejecutar `yarn build:netlify` exitosamente
- [ ] Verificar URLs hreflang en dist/
- [ ] Probar selector de idioma localmente

### Post-Deployment GitHub Pages

- [ ] GitHub Actions workflow completado sin errores
- [ ] Sitio accesible en https://imsoulrebel.github.io/chrystian_portfolio/
- [ ] URLs i18n funcionando (/es/, /en/)
- [ ] Selector de idioma funcional
- [ ] Assets cargando correctamente

### Post-Deployment Netlify

- [ ] Build en Netlify completado
- [ ] Sitio accesible en dominio configurado
- [ ] Redirect de / a /es/ funcionando
- [ ] URLs i18n funcionando
- [ ] Headers de seguridad aplicados
- [ ] Certificado SSL activo

---

## 🎯 Próximos Pasos

### Optimizaciones Recomendadas

1. **Performance**
   - Implementar lazy loading para imágenes
   - Añadir service worker para PWA
   - Optimizar fuentes con preload

2. **SEO**
   - Añadir sitemap.xml
   - Implementar robots.txt
   - Añadir JSON-LD estructurado

3. **Monitoreo**
   - Integrar Google Analytics
   - Configurar Sentry para error tracking
   - Añadir Lighthouse CI

### Migración Futura

Cuando decidas migrar de GitHub Pages a Netlify:

1. Deploy en Netlify siguiendo esta guía
2. Configura el dominio personalizado
3. Verifica que todo funcione correctamente
4. Actualiza enlaces externos si es necesario
5. (Opcional) Mantén GitHub Pages como respaldo

---

## 📞 Soporte

Si encuentras problemas durante el deployment:

1. Revisa esta guía completa
2. Consulta los logs de build (GitHub Actions o Netlify)
3. Verifica las variables de entorno
4. Comprueba que los archivos `.env.*` estén correctos

---

**Última actualización**: 13 de octubre de 2025  
**Versión del sistema**: v2.0 (Multi-platform con Astro i18n helpers)
