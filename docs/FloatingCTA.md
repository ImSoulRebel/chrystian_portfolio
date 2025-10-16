# FloatingCTA Component

## Descripción

Componente de botón flotante tipo Call-to-Action (CTA) que aparece en dispositivos móviles para llevar directamente al usuario a la sección de contacto.

## Características

### Diseño

- **Estilo acorde**: Se integra perfectamente con el diseño del sitio usando las variables CSS existentes
- **Gradientes**: Utiliza los gradientes primarios del sitio (`--gradient-primary`)
- **Colores**: Respeta la paleta de colores establecida
- **Sombras**: Implementa las sombras del sistema de diseño

### Funcionalidad

- **Aparición inteligente**: Solo se muestra después de hacer scroll de 200px
- **Ocultación automática**: Se esconde cuando el usuario está en la sección de contacto
- **Scroll suave**: Lleva suavemente a la sección de contacto al hacer clic
- **Intersection Observer**: Usa APIs modernas para detectar visibilidad de secciones

### Responsive Design

- **Desktop**: No se muestra en pantallas grandes (> 768px)
- **Tablet** (600px - 768px): Botón completo con texto
- **Mobile** (480px - 600px): Botón más pequeño con texto
- **Small Mobile** (< 480px): Solo icono circular

### Animaciones y Efectos

- **Entrada suave**: Animación de escala y desplazamiento
- **Hover effects**: Elevación y cambio de color
- **Pulse animation**: Efecto de pulsación periódica para llamar la atención
- **Shimmer effect**: Efecto de brillo en hover

### Accesibilidad

- **ARIA attributes**: Correctamente etiquetado para lectores de pantalla
- **Focus visible**: Outline visible para navegación por teclado
- **Reduced motion**: Respeta las preferencias de movimiento reducido del usuario
- **Color contrast**: Colores con contraste suficiente

## Uso

```astro
---
import { FloatingCTA } from '@components';
---

<FloatingCTA locale="es" />
```

## Props

| Prop   | Tipo         | Default | Descripción                           |
| ------ | ------------ | ------- | ------------------------------------- |
| locale | 'es' \| 'en' | 'es'    | Idioma para los textos del componente |

## Posicionamiento

El botón se posiciona de forma fija:

- **Bottom**: 20px (desktop), escalando hacia abajo en mobile
- **Right**: 20px (desktop), escalando hacia abajo en mobile
- **Z-index**: 1000 para estar por encima de otros elementos

## Comportamiento JavaScript

### Inicialización

```typescript
class FloatingCTA {
  private scrollThreshold: number = 200; // Píxeles antes de mostrar
  // ...
}
```

### Eventos principales

1. **Scroll**: Detecta cuando mostrar/ocultar el botón
2. **Click**: Navega suavemente a la sección de contacto
3. **Intersection**: Oculta el botón cuando se está en la sección de contacto

### Performance

- **RequestAnimationFrame**: Optimiza las actualizaciones de scroll
- **Throttling**: Evita demasiadas llamadas durante el scroll
- **Event delegation**: Manejo eficiente de eventos

## Integración

El componente se integra automáticamente en el `Layout.astro` principal, por lo que aparece en todas las páginas del sitio sin necesidad de importarlo manualmente en cada página.

## Compatibilidad

- **Browsers**: Todos los navegadores modernos que soporten Intersection Observer
- **Mobile**: Optimizado especialmente para dispositivos móviles
- **Tablet**: Funciona correctamente en tablets
- **Accessibility**: Compatible con lectores de pantalla y navegación por teclado

## Customización

### Variables CSS disponibles

El componente utiliza las variables CSS del sistema:

- `--primary-color`: Color principal del botón
- `--background-dark`: Color de fondo para contraste
- `--gradient-primary`: Gradiente principal del botón
- `--transition`: Transiciones del sistema

### Modificar el threshold

```typescript
// En el constructor de la clase FloatingCTA
this.scrollThreshold = 300; // Cambiar a 300px por ejemplo
```

## Testing

Para probar el componente:

1. Hacer scroll hacia abajo desde el top de la página
2. Verificar que aparece después de 200px de scroll
3. Hacer clic y verificar que lleva a la sección de contacto
4. Verificar que se oculta cuando se está en la sección de contacto
5. Probar en diferentes tamaños de pantalla

## Notas de desarrollo

- El componente es completamente autónomo
- No requiere dependencias externas
- Usa TypeScript para type safety
- Implementa las mejores prácticas de accessibility
- Optimizado para performance
