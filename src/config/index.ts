/**
 * Barrel file for Configuration
 * Centralizes all config exports for easier imports
 *
 * Usage:
 * import { siteConfig, navLinks, socialLinks } from '@config';
 *
 * Config files contain site-wide settings and constants
 */

// === Site Configuration ===
export * from "./site.js";

// === Type definitions for configuration ===
export type SiteConfig = {
  title: string;
  description: string;
  author: string;
  url: string;
  image?: string;
  lang?: string;
  locale?: string;
};

export type NavLink = {
  name: string;
  href: string;
  external?: boolean;
  icon?: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
  username?: string;
};

export type ContactInfo = {
  email: string;
  phone?: string;
  location?: string;
  availability?: string;
};

/**
 * Configuration categories
 */
export const ConfigCategories = [
  "site",
  "navigation",
  "social",
  "contact",
  "seo",
] as const;

// === Future config exports (uncomment when created) ===
// export * from './navigation.js';  // Future: navigation config
// export * from './social.js';      // Future: social links config
// export * from './seo.js';         // Future: SEO config
// export * from './theme.js';       // Future: theme config
