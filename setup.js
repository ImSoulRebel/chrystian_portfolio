#!/usr/bin/env node

/**
 * 🚀 Setup Script para Portfolio Template
 *
 * Este script automatiza la configuración inicial del portfolio:
 * 1. Copia los archivos .env.*.template a .env.*
 * 2. Solicita información básica del usuario
 * 3. Reemplaza los placeholders con los datos reales
 * 4. Genera la configuración lista para usar
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colores para la terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para hacer preguntas
const question = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

// Banner de bienvenida
console.log(`
${colors.cyan}╔════════════════════════════════════════════════════════╗
║                                                        ║
║        🚀 Portfolio Template - Setup Wizard 🚀        ║
║                                                        ║
║    Este script te ayudará a configurar tu portfolio   ║
║           personalizado en solo unos pasos            ║
║                                                        ║
╚════════════════════════════════════════════════════════╝${colors.reset}
`);

async function main() {
  try {
    console.log(
      `\n${colors.bright}📋 Vamos a configurar tu portfolio personalizado${colors.reset}\n`
    );

    // Recolectar información del usuario
    const answers = {
      authorName: await question(
        `${colors.blue}👤 Tu nombre completo:${colors.reset} `
      ),
      authorGivenName: await question(
        `${colors.blue}📝 Tu nombre (sin apellidos):${colors.reset} `
      ),
      authorFamilyName: await question(
        `${colors.blue}📝 Tu apellido:${colors.reset} `
      ),
      email: await question(
        `${colors.blue}📧 Tu email de contacto:${colors.reset} `
      ),
      phone: await question(
        `${colors.blue}📞 Tu teléfono (ej: +34600000000):${colors.reset} `
      ),
      city: await question(`${colors.blue}🏙️  Tu ciudad:${colors.reset} `),
      country: await question(
        `${colors.blue}🌍 Tu país (código, ej: ES):${colors.reset} `
      ),
      githubUsername: await question(
        `${colors.blue}💻 Tu usuario de GitHub:${colors.reset} `
      ),
      repoName: await question(
        `${colors.blue}📦 Nombre de tu repositorio (para GitHub Pages):${colors.reset} `
      ),
      linkedinProfile: await question(
        `${colors.blue}💼 Tu perfil de LinkedIn (sin https://linkedin.com/in/):${colors.reset} `
      ),
      siteTitle: await question(
        `${colors.blue}🎯 Título de tu sitio (ej: "Juan Pérez | Desarrollador Full Stack"):${colors.reset} `
      ),
      siteDescription: await question(
        `${colors.blue}📄 Descripción breve de tu portfolio:${colors.reset} `
      ),
    };

    console.log(`\n${colors.yellow}⚠️  Formspree Configuration${colors.reset}`);
    console.log(
      `Para usar el formulario de contacto, necesitas un endpoint de Formspree.`
    );
    console.log(`1. Ve a https://formspree.io y regístrate gratis`);
    console.log(`2. Crea un nuevo formulario`);
    console.log(`3. Copia el endpoint (ej: https://formspree.io/f/xyzabc)\n`);

    const formspreeEndpoint = await question(
      `${colors.blue}📨 Tu Formspree endpoint (o Enter para dejarlo vacío):${colors.reset} `
    );

    // Archivos a procesar
    const files = [
      { template: '.env.production.template', output: '.env.production' },
      { template: '.env.development.template', output: '.env.development' },
      { template: '.env.github.template', output: '.env.github' },
      { template: '.env.netlify.template', output: '.env.netlify' },
    ];

    console.log(
      `\n${colors.green}✨ Generando archivos de configuración...${colors.reset}\n`
    );

    // Procesar cada archivo
    for (const file of files) {
      const templatePath = path.join(__dirname, file.template);
      const outputPath = path.join(__dirname, file.output);

      // Verificar si el archivo ya existe
      if (fs.existsSync(outputPath)) {
        const overwrite = await question(
          `${colors.yellow}⚠️  ${file.output} ya existe. ¿Sobrescribir? (s/N):${colors.reset} `
        );
        if (overwrite.toLowerCase() !== 's') {
          console.log(`   Saltando ${file.output}...`);
          continue;
        }
      }

      // Leer template
      let content = fs.readFileSync(templatePath, 'utf8');

      // Reemplazar placeholders
      const replacements = {
        'Tu Nombre Completo': answers.authorName,
        'Tu Nombre': answers.authorGivenName,
        'Tu Apellido': answers.authorFamilyName,
        'tu-email@ejemplo.com': answers.email,
        'dev@localhost.local': answers.email,
        '+34600000000': answers.phone,
        'Tu Ciudad, Tu País': `${answers.city}, ${answers.country}`,
        'Tu Ciudad': answers.city,
        'Tu Región/Provincia': answers.city,
        'Tu País': answers.country,
        '00000': '00000', // Mantener genérico para privacidad
        ES: answers.country,
        'tu-username': answers.githubUsername,
        'tu-repo': answers.repoName,
        'tu-perfil': answers.linkedinProfile,
        'tu-handle': answers.githubUsername, // Usar GitHub username como fallback
        'Tu Nombre | Tu Título Profesional': answers.siteTitle,
        'Tu Portfolio (Desarrollo)': `${answers.authorGivenName}'s Portfolio (Dev)`,
        'Tu descripción profesional. Ejemplo: Desarrollador Full Stack especializado en React y Node.js con 5 años de experiencia.':
          answers.siteDescription,
        'Portfolio personal - Entorno de desarrollo': answers.siteDescription,
        'https://formspree.io/f/TU_FORM_ID_AQUI':
          formspreeEndpoint || 'https://formspree.io/f/TU_FORM_ID_AQUI',
        'https://www.tu-dominio.com': `https://${answers.githubUsername}.github.io/${answers.repoName}`,
      };

      // Aplicar reemplazos
      for (const [placeholder, value] of Object.entries(replacements)) {
        content = content.replaceAll(placeholder, value);
      }

      // Escribir archivo
      fs.writeFileSync(outputPath, content);
      console.log(`   ${colors.green}✓${colors.reset} ${file.output} creado`);
    }

    // Resumen
    console.log(`
${colors.green}╔════════════════════════════════════════════════════════╗
║                                                        ║
║              ✅ ¡Setup Completado! ✅                 ║
║                                                        ║
╚════════════════════════════════════════════════════════╝${colors.reset}

${colors.bright}📝 Archivos creados:${colors.reset}
   • .env.production    → Configuración base de producción
   • .env.development   → Configuración de desarrollo local
   • .env.github        → Configuración para GitHub Pages
   • .env.netlify       → Configuración para Netlify

${colors.bright}🚀 Próximos pasos:${colors.reset}

1. ${colors.cyan}Desarrollo Local:${colors.reset}
   ${colors.yellow}yarn install${colors.reset}
   ${colors.yellow}yarn dev${colors.reset}

2. ${colors.cyan}Personalizar contenido:${colors.reset}
   • Edita src/config/translations.ts con tus textos
   • Reemplaza public/profile-image.jpg con tu foto
   • Actualiza src/sections/*.astro con tu información

3. ${colors.cyan}Deployment en GitHub Pages:${colors.reset}
   • Push tu código a GitHub
   • Ve a Settings → Pages → Source: GitHub Actions
   • El workflow se ejecutará automáticamente

4. ${colors.cyan}Deployment en Netlify (opcional):${colors.reset}
   • Conecta tu repo en https://app.netlify.com
   • Netlify detectará la configuración automáticamente

${colors.bright}📚 Documentación:${colors.reset}
   • README.md - Guía completa
   • DEPLOYMENT_GUIDE.md - Guía de deployment

${colors.green}¡Disfruta creando tu portfolio! 🎉${colors.reset}
`);
  } catch (error) {
    console.error(
      `\n${colors.red}❌ Error durante el setup:${colors.reset}`,
      error.message
    );
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
