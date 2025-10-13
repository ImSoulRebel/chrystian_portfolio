# Scripts Structure

Esta carpeta contiene todos los scripts JavaScript organizados por funcionalidad para mejorar el mantenimiento y la modularidad del código.

## Archivos de Script

### `app.js`

**Coordinador principal de la aplicación**

- Punto de entrada principal para todos los scripts
- Inicializa las interacciones globales de la página
- Maneja optimizaciones de rendimiento
- Gestiona la configuración del tema
- Se importa en `index.astro`

### `interactions.js`

**Interacciones globales de la página**

- Scroll suave para enlaces de anclaje
- Intersection Observer para animaciones de elementos
- Funcionalidad que aplica a toda la página
- Usado por la clase `App`

### `skillsCarousel.js`

**Carrusel de habilidades interactivo**

- Scroll infinito automático
- Funcionalidad de arrastrar y soltar
- Animaciones fluidas
- Optimizaciones de rendimiento
- Se importa en `SkillsSection.astro`

### `contactForm.js`

**Manejo del formulario de contacto**

- Envío asíncrono de formularios
- Estados de carga y validación
- Manejo de mensajes de éxito/error
- Auto-ocultado de mensajes
- Se importa en `ContactForm.astro`

## Beneficios de esta Estructura

### 🎯 **Separación de Responsabilidades**

Cada script tiene una función específica y clara, facilitando el mantenimiento.

### 🔧 **Reutilización**

Los scripts pueden ser reutilizados en diferentes componentes sin duplicar código.

### 📦 **Modularidad**

Cada funcionalidad está encapsulada en su propia clase con métodos de inicialización y limpieza.

### 🚀 **Rendimiento**

Solo se cargan los scripts necesarios para cada componente.

### 🔍 **Debugging**

Es más fácil localizar y corregir problemas al tener código separado por funcionalidad.

### 📱 **Mantenimiento**

Actualizaciones y mejoras pueden hacerse sin afectar otras funcionalidades.

## Uso

### En Componentes

```astro
<script>
  import { NombreClase } from '../scripts/nombreScript.js';

  // Initialize cuando el componente se carga
  new NombreClase();
</script>
```

### En Páginas Principales

```astro
<script>
  import { App } from '../scripts/app.js';

  // Initialize aplicación principal
  new App();
</script>
```

## Estructura de Clases

Todas las clases siguen un patrón consistente:

```javascript
export class NombreClase {
  constructor() {
    // Inicialización de propiedades
    this.init();
  }

  init() {
    // Configuración inicial
  }

  // Métodos específicos de funcionalidad

  destroy() {
    // Limpieza de recursos
  }
}
```

## Migración Completada

- ✅ Script de interacciones globales extraído de `index.astro`
- ✅ Script del carrusel de skills movido a `SkillsSection.astro`
- ✅ Script del formulario de contacto optimizado en `ContactForm.astro`
- ✅ Coordinador principal `App` creado para gestión central
- ✅ Todas las funcionalidades mantienen su comportamiento original
- ✅ Código más limpio y mantenible

Esta nueva estructura hace que el código sea más escalable y fácil de mantener a largo plazo.
