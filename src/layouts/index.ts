/**
 * Barrel file for Astro Layouts
 * Centralizes all layout exports for easier imports
 *
 * Usage:
 * import { Layout } from '@layouts';
 *
 * Layouts are complete page templates that wrap content
 */

// === Base Layouts ===
export { default as Layout } from './Layout.astro';

// === Future layout exports (uncomment when created) ===
// export { default as BlogLayout } from './BlogLayout.astro';
// export { default as ProjectLayout } from './ProjectLayout.astro';
// export { default as PageLayout } from './PageLayout.astro';

// === Type definitions for layout props ===
export type LayoutProps = {
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  class?: string;
};
