/**
 * Barrel file for Client Scripts
 * Centralizes all script exports for easier imports
 *
 * Usage:
 * import { initApp, handleContactForm } from '@scripts';
 *
 * Scripts contain client-side JavaScript functionality
 */

// === Core Application Scripts ===
export * from './app.js';

// === Form Handling ===
export { ContactForm } from './contactForm';

// === UI Interactions ===
export * from './interactions';

// === Component-specific Scripts ===
export * from './skillsCarousel';

// === Type definitions for script functions ===
export type ScriptFunction = () => void | Promise<void>;

export type FormHandler = (event: Event) => void | Promise<void>;

export type InteractionConfig = {
  selector: string;
  event: string;
  handler: (element: Element) => void;
};

/**
 * Script categories for organized usage
 */
export const CoreScripts = ['app'] as const;

export const FormScripts = ['contactForm'] as const;

export const UIScripts = ['interactions', 'skillsCarousel'] as const;

/**
 * Script initialization order
 * Use this array to ensure scripts load in the correct sequence
 */
export const ScriptLoadOrder = [
  'app',
  'interactions',
  'skillsCarousel',
  'contactForm',
] as const;

// === Utility functions for script management ===
export type ScriptLoader = {
  loadScript: (name: string) => Promise<void>;
  loadAllScripts: () => Promise<void>;
  isScriptLoaded: (name: string) => boolean;
};
