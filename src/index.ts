/**
 * Main Barrel file for the entire src directory
 * Centralizes all major exports for maximum convenience
 *
 * Usage:
 * import { Layout, Header, HeroSection } from '@/';
 * import { siteConfig } from '@config';
 *
 * This is the main entry point for all src imports
 */

// === Re-export major barrels (avoiding conflicts) ===
export * from "./components";
export * from "./layouts";
export * from "./sections";
export * from "./config";

// Scripts are imported separately to avoid naming conflicts
// Use: import { ... } from '@scripts';

// === Type definitions aggregation ===
export type { ComponentProps } from "./components";

export type { LayoutProps } from "./layouts";

export type { SectionProps } from "./sections";

export type { SiteConfig, NavLink, SocialLink, ContactInfo } from "./config";

/**
 * Commonly used combinations for convenience
 */
export const CommonImports = {
  // Most used layout components
  layout: ["Layout"],

  // Most used UI components
  ui: ["Header", "Footer", "Icon"],

  // Most used sections
  sections: ["HeroSection", "AboutSection", "ProjectsSection"],
} as const;
