#!/usr/bin/env node

/**
 * Script para generar automáticamente el mapeo de iconos
 * Escanea /src/assets/logos/ y genera el tipo TypeScript
 */

import { readdir, writeFile } from 'fs/promises';
import { join, parse } from 'path';

const LOGOS_DIR = './src/assets/logos';
const OUTPUT_FILE = './src/components/Icon/generated-types.ts';

/**
 * Genera código TypeScript compatible con Prettier
 * Respeta exactamente el formato que Prettier aplica
 */
function generatePrettierCompatibleCode(iconNames, iconEntries) {
  const header = `// 🤖 Auto-generated - Do not edit manually
// Run: node scripts/generate-icon-types.js

`;

  // Generar tipo union (Prettier mantiene cada item en su línea)
  const typeLines = ['export type AvailableIcon ='];
  iconNames.forEach((name, index) => {
    const isLast = index === iconNames.length - 1;
    typeLines.push(`  | '${name}'${isLast ? ';' : ''}`);
  });
  const typeDefinition = typeLines.join('\n') + '\n\n';

  // Generar array (Prettier prefiere cada item en su línea para arrays largos)
  const arrayLines = ['export const AVAILABLE_ICONS = ['];
  iconNames.forEach((name, index) => {
    const isLast = index === iconNames.length - 1;
    arrayLines.push(`  '${name}',`);
  });
  arrayLines.push('] as const;');
  const arrayDefinition = arrayLines.join('\n') + '\n\n';

  // Generar mapeo de archivos (sin comillas en keys cuando no son necesarias)
  const mapLines = [
    '// Mapeo de nombres amigables a archivos',
    'export const ICON_FILE_MAP: Record<string, string> = {',
  ];

  iconEntries.forEach(([name, file]) => {
    // Prettier omite comillas en keys que son identificadores válidos
    const needsQuotes = !isValidIdentifier(name);
    const keyName = needsQuotes ? `'${name}'` : name;
    mapLines.push(`  ${keyName}: '${file}',`);
  });

  mapLines.push('};');
  const mapDefinition = mapLines.join('\n') + '\n';

  return header + typeDefinition + arrayDefinition + mapDefinition;
}

/**
 * Verifica si un string es un identificador válido de JavaScript/TypeScript
 */
function isValidIdentifier(str) {
  // Regex para identificadores válidos: puede empezar con letra, $, o _
  // seguido de letras, números, $, o _
  const identifierRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return identifierRegex.test(str) && !isReservedWord(str);
}

/**
 * Lista de palabras reservadas en JavaScript/TypeScript
 */
function isReservedWord(str) {
  const reserved = [
    'abstract',
    'arguments',
    'await',
    'boolean',
    'break',
    'byte',
    'case',
    'catch',
    'char',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'double',
    'else',
    'enum',
    'eval',
    'export',
    'extends',
    'false',
    'final',
    'finally',
    'float',
    'for',
    'function',
    'goto',
    'if',
    'implements',
    'import',
    'in',
    'instanceof',
    'int',
    'interface',
    'let',
    'long',
    'native',
    'new',
    'null',
    'package',
    'private',
    'protected',
    'public',
    'return',
    'short',
    'static',
    'super',
    'switch',
    'synchronized',
    'this',
    'throw',
    'throws',
    'transient',
    'true',
    'try',
    'typeof',
    'var',
    'void',
    'volatile',
    'while',
    'with',
    'yield',
  ];
  return reserved.includes(str);
}

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

    // Generar tipo TypeScript con formato Prettier-compatible
    const typeDefinition = generatePrettierCompatibleCode(
      iconNames,
      iconEntries
    );

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
