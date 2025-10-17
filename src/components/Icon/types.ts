/**
 * Tipos para el sistema de iconos
 */

// Iconos disponibles en assets/logos
export type AssetIcon =
  | 'astro'
  | 'aws'
  | 'dart'
  | 'docker'
  | 'firebase'
  | 'flutter'
  | 'github'
  | 'javascript'
  | 'nodejs'
  | 'react'
  | 'typescript'
  | 'linkedin'
  | 'external-link';
// ... añadir todos los iconos disponibles

// Iconos inline por defecto
export type DefaultIcon =
  | 'email'
  | 'phone'
  | 'mobile'
  | 'trophy'
  | 'code'
  | 'arrow-right'
  | 'arrow-left'
  | 'message-circle';

// Todos los iconos disponibles
export type IconName = AssetIcon | DefaultIcon;

// Props del componente Icon
export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  class?: string;
}
