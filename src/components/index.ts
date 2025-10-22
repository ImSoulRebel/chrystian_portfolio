/**
 * Barrel file for Astro Components
 * Centralizes all component exports for easier imports
 *
 * Usage:
 * import { Header, Footer, ProjectCard } from '@components';
 *
 * Note: All Astro components must be default exports
 */

// === Layout Components ===
export { default as Header } from './Header.astro';
export { default as Footer } from './Footer.astro';
export { default as Section } from './Section.astro';

// === UI Components ===
export { default as Icon } from './Icon.astro';
export { default as LanguageSelector } from './LanguageSelector/LanguageSelector.astro';

// === Card Components ===
export { default as ProjectCard } from './ProjectCard/ProjectCard.astro';
export { default as SkillCard } from './SkillCard.astro';
export { default as ExperienceItem } from './ExperienceItem.astro';
export { default as BlogCard } from './BlogCard/BlogCard.astro';

// === Form Components ===
export { default as ContactForm } from './ContactForm/ContactForm.astro';

// === Interactive Components ===
export { default as FloatingCTA } from './FloatingCTA/FloatingCTA.astro';
export { default as BackToHome } from './BackToHome.astro';

// === MDX Components ===
export { default as Quote } from './Quote.astro';
export { default as Highlight } from './Highlight.astro';

// === Type Definitions (for better TypeScript support) ===
export type ComponentProps = {
  // Define common props that your components might share
  class?: string;
  id?: string;
  'data-testid'?: string;
};

/**
 * Re-export pattern for future sub-barrel files
 * Uncomment when you create sub-folders with their own barrels
 */
// export * from './forms';     // Future: src/components/forms/index.ts
// export * from './cards';     // Future: src/components/cards/index.ts
// export * from './layout';    // Future: src/components/layout/index.ts
