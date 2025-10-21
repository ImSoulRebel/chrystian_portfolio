/**
 * Barrel file for Page Sections
 * Centralizes all section exports for easier imports
 *
 * Usage:
 * import { HeroSection, AboutSection, ProjectsSection } from '@sections';
 *
 * Sections are complete page sections with specific functionality
 */

// === Hero & Introduction Sections ===
export { default as HeroSection } from './HeroSection.astro';
export { default as AboutSection } from './AboutSection.astro';
export { default as HighlightsSection } from './HighlightsSection.astro';

// === Content Sections ===
export { default as ProjectsSection } from './ProjectsSection.astro';
export { default as SkillsSection } from './SkillsSection.astro';
export { default as ExperienceSection } from './ExperienceSection.astro';
export { default as BlogListSection } from './BlogListSection.astro';
export { default as BlogSection } from './BlogSection.astro';

// === Contact & Footer Sections ===
export { default as ContactSection } from './ContactSection/ContactSection.astro';
export { default as BlogPreviewSection } from './BlogPreviewSection.astro';

// === Type definitions for section props ===
export type SectionProps = {
  id?: string;
  class?: string;
  title?: string;
  subtitle?: string;
  background?: 'dark' | 'light' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
};

/**
 * Section categories for organized imports
 */
export const IntroSections = [
  'HeroSection',
  'AboutSection',
  'HighlightsSection',
] as const;

export const ContentSections = [
  'ProjectsSection',
  'SkillsSection',
  'ExperienceSection',
] as const;

export const ContactSections = ['ContactSection'] as const;

// === Section order for home page ===
export const HomePageSections = [
  'HeroSection',
  'AboutSection',
  'HighlightsSection',
  'SkillsSection',
  'ExperienceSection',
  'ProjectsSection',
  'ContactSection',
] as const;
