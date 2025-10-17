#!/usr/bin/env node

/**
 * Script para generar automáticamente el mapeo de iconos
 * Escanea /src/assets/logos/ y genera el tipo TypeScript
 */

import { readdir, writeFile } from 'fs/promises';
import { join, parse } from 'path';

const LOGOS_DIR = './src/assets/logos';
const OUTPUT_FILE = './src/components/Icon/generated-types.ts';

async function generateIconTypes() {
  try {
    // Leer archivos SVG
    const files = await readdir(LOGOS_DIR);
    const svgFiles = files.filter((file) => file.endsWith('.svg'));

    // Mapeo para manejar duplicados y prioridades
    const iconMap = new Map();

    svgFiles.forEach((file) => {
      const name = parse(file).name;
      let iconName = name
        .replace(/_logo$/, '')
        .replace(/_icon$/, '')
        .replace(/_large$/, '')
        .replace(/[_-]/g, '-')
        .toLowerCase();

      // Manejar casos especiales y duplicados
      if (iconName === 'astro' && file.includes('large')) {
        iconName = 'astro-large';
      } else if (iconName === 'github' && file.includes('icon')) {
        iconName = 'github-icon';
      } else if (iconName === 'github' && file.includes('logo')) {
        iconName = 'github-logo';
      } else if (iconName === 'node-js') {
        // Preferir nodejs sobre node-js para consistencia
        if (!iconMap.has('nodejs')) {
          iconName = 'nodejs';
        } else {
          iconName = 'node-js-alt';
        }
      }

      // Solo añadir si no existe (evita duplicados)
      if (!iconMap.has(iconName)) {
        iconMap.set(iconName, file);
      }
    });

    // Convertir a arrays ordenados
    const iconNames = Array.from(iconMap.keys()).sort();
    const iconEntries = iconNames.map((name) => [name, iconMap.get(name)]);

    // Generar tipo TypeScript con formato Prettier
    const typeDefinition = `// 🤖 Auto-generated - Do not edit manually
// Run: node scripts/generate-icon-types.js

export type AvailableIcon =
${iconNames.map((name) => `  | '${name}'`).join('\n')};

export const AVAILABLE_ICONS = [
${iconNames.map((name) => `  '${name}',`).join('\n')}
] as const;

// Mapeo de nombres amigables a archivos
export const ICON_FILE_MAP: Record<string, string> = {
${iconEntries.map(([name, file]) => `  '${name}': '${file}',`).join('\n')}
};
`;

    await writeFile(OUTPUT_FILE, typeDefinition);
    console.log(
      `✅ Generados ${iconNames.length} tipos de iconos únicos en ${OUTPUT_FILE}`
    );
    console.log(`📁 Archivos procesados: ${svgFiles.length}`);
  } catch (error) {
    console.error('❌ Error generando tipos:', error);
  }
}

generateIconTypes();
