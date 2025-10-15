#!/usr/bin/env node

/**
 * 🚀 Setup Script para Portfolio
 *
 * Este script automatiza la configuración inicial del portfolio:
 * 1. Crea el archivo .env con las variables necesarias
 * 2. Solicita información básica del usuario
 * 3. Genera la configuración lista para usar
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
║           🚀 Portfolio Setup Wizard 🚀                ║
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
        `${colors.blue}📞 Tu teléfono (opcional, Enter para omitir):${colors.reset} `
      ),

      // Dirección postal (SEO - Schema.org PostalAddress)
      street: await question(
        `${colors.blue}🏠 Tu calle y número (opcional, mejora SEO):${colors.reset} `
      ),
      postalCode: await question(
        `${colors.blue}📮 Código postal (opcional, mejora SEO):${colors.reset} `
      ),
      city: await question(
        `${colors.blue}🏙️  Tu ciudad (opcional):${colors.reset} `
      ),
      region: await question(
        `${colors.blue}🗺️  Región/Estado/Provincia (opcional, mejora SEO):${colors.reset} `
      ),
      country: await question(
        `${colors.blue}🌍 Tu país (opcional):${colors.reset} `
      ),

      // Redes sociales
      githubUsername: await question(
        `${colors.blue}💻 Tu usuario de GitHub (opcional):${colors.reset} `
      ),
      linkedinProfile: await question(
        `${colors.blue}💼 Tu perfil de LinkedIn - solo el nombre (opcional):${colors.reset} `
      ),
      twitterHandle: await question(
        `${colors.blue}🐦 Tu usuario de Twitter/X sin @ (opcional, mejora SEO):${colors.reset} `
      ),

      // Imagen de perfil (SEO - Schema.org ImageObject)
      profileImageWidth: await question(
        `${colors.blue}🖼️  Ancho de tu imagen de perfil en px (opcional, ej: 400):${colors.reset} `
      ),
      profileImageHeight: await question(
        `${colors.blue}🖼️  Alto de tu imagen de perfil en px (opcional, ej: 400):${colors.reset} `
      ),

      // Información del sitio
      siteTitle: await question(
        `${colors.blue}🎯 Título de tu sitio (ej: "Juan Pérez - Full Stack Developer"):${colors.reset} `
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

    // Verificar si .env ya existe
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
      const overwrite = await question(
        `${colors.yellow}⚠️  .env ya existe. ¿Sobrescribir? (s/N):${colors.reset} `
      );
      if (overwrite.toLowerCase() !== 's') {
        console.log(
          `\n${colors.yellow}Setup cancelado. Tu archivo .env no fue modificado.${colors.reset}`
        );
        rl.close();
        return;
      }
    }

    console.log(
      `\n${colors.green}✨ Generando archivo .env...${colors.reset}\n`
    );

    // Leer .env.example
    const examplePath = path.join(__dirname, '.env.example');
    if (!fs.existsSync(examplePath)) {
      throw new Error('.env.example no encontrado');
    }

    let content = fs.readFileSync(examplePath, 'utf8');

    // Reemplazar placeholders
    const replacements = {
      'http://localhost:4321': 'http://localhost:4321', // Mantener para desarrollo
      'https://www.midominio.com': answers.githubUsername
        ? `https://${answers.githubUsername}.github.io`
        : 'https://www.midominio.com',
      'Mi Portfolio': answers.siteTitle,
      'Portfolio personal de desarrollador': answers.siteDescription,
      Desarrollador: answers.authorName,
      'contacto@example.com': answers.email,
    };

    // Aplicar reemplazos
    for (const [placeholder, value] of Object.entries(replacements)) {
      content = content.replace(placeholder, value);
    }

    // Agregar valores opcionales si existen
    if (answers.authorGivenName) {
      content = content.replace(
        'PUBLIC_AUTHOR_GIVEN_NAME=',
        `PUBLIC_AUTHOR_GIVEN_NAME=${answers.authorGivenName}`
      );
    }
    if (answers.authorFamilyName) {
      content = content.replace(
        'PUBLIC_AUTHOR_FAMILY_NAME=',
        `PUBLIC_AUTHOR_FAMILY_NAME=${answers.authorFamilyName}`
      );
    }
    if (answers.phone) {
      content = content.replace(
        'PUBLIC_CONTACT_PHONE=',
        `PUBLIC_CONTACT_PHONE=${answers.phone}`
      );
    }

    // Dirección postal (SEO - Schema.org PostalAddress)
    if (answers.street) {
      content = content.replace(
        'PUBLIC_CONTACT_STREET=',
        `PUBLIC_CONTACT_STREET=${answers.street}`
      );
    }
    if (answers.postalCode) {
      content = content.replace(
        'PUBLIC_CONTACT_POSTAL_CODE=',
        `PUBLIC_CONTACT_POSTAL_CODE=${answers.postalCode}`
      );
    }
    if (answers.city) {
      content = content.replace(
        'PUBLIC_CONTACT_CITY=',
        `PUBLIC_CONTACT_CITY=${answers.city}`
      );
    }
    if (answers.region) {
      content = content.replace(
        'PUBLIC_CONTACT_REGION=',
        `PUBLIC_CONTACT_REGION=${answers.region}`
      );
    }
    if (answers.country) {
      content = content.replace(
        'PUBLIC_CONTACT_COUNTRY=',
        `PUBLIC_CONTACT_COUNTRY=${answers.country}`
      );
    }

    // Redes sociales
    if (answers.githubUsername) {
      content = content.replace(
        'PUBLIC_GITHUB_USERNAME=',
        `PUBLIC_GITHUB_USERNAME=${answers.githubUsername}`
      );
      content = content.replace(
        'PUBLIC_GITHUB_URL=',
        `PUBLIC_GITHUB_URL=https://github.com/${answers.githubUsername}`
      );
    }
    if (answers.linkedinProfile) {
      content = content.replace(
        'PUBLIC_LINKEDIN_URL=',
        `PUBLIC_LINKEDIN_URL=https://linkedin.com/in/${answers.linkedinProfile}`
      );
    }
    if (answers.twitterHandle) {
      content = content.replace(
        'PUBLIC_TWITTER_HANDLE=',
        `PUBLIC_TWITTER_HANDLE=${answers.twitterHandle}`
      );
      content = content.replace(
        'PUBLIC_TWITTER_URL=',
        `PUBLIC_TWITTER_URL=https://twitter.com/${answers.twitterHandle}`
      );
    }

    // Imagen de perfil (SEO - Schema.org ImageObject)
    if (answers.profileImageWidth) {
      content = content.replace(
        'PUBLIC_PROFILE_IMAGE_WIDTH=',
        `PUBLIC_PROFILE_IMAGE_WIDTH=${answers.profileImageWidth}`
      );
    }
    if (answers.profileImageHeight) {
      content = content.replace(
        'PUBLIC_PROFILE_IMAGE_HEIGHT=',
        `PUBLIC_PROFILE_IMAGE_HEIGHT=${answers.profileImageHeight}`
      );
    }

    // Formspree
    if (formspreeEndpoint) {
      content = content.replace(
        'PUBLIC_FORMSPREE_ENDPOINT=',
        `PUBLIC_FORMSPREE_ENDPOINT=${formspreeEndpoint}`
      );
    }

    // Escribir archivo .env
    fs.writeFileSync(envPath, content);
    console.log(`   ${colors.green}✓${colors.reset} .env creado exitosamente`);

    // Resumen
    console.log(`
${colors.green}╔════════════════════════════════════════════════════════╗
║                                                        ║
║              ✅ ¡Setup Completado! ✅                 ║
║                                                        ║
╚════════════════════════════════════════════════════════╝${colors.reset}

${colors.bright}📝 Archivo creado:${colors.reset}
   • .env - Configuración local de desarrollo

${colors.bright}🎯 Variables configuradas:${colors.reset}
   ${colors.cyan}Variables obligatorias:${colors.reset} ✓
   ${colors.yellow}Variables opcionales SEO:${colors.reset} ${answers.street || answers.twitterHandle || answers.profileImageWidth ? '✓ (¡Mejora tu SEO!)' : '⚠️  Considera agregarlas para mejor SEO'}

${colors.bright}🚀 Próximos pasos:${colors.reset}

1. ${colors.cyan}Desarrollo Local:${colors.reset}
   ${colors.yellow}yarn install${colors.reset}
   ${colors.yellow}yarn dev${colors.reset}

2. ${colors.cyan}Personalizar contenido:${colors.reset}
   • Edita src/config/translations.ts con tus textos
   • Reemplaza public/profile-image.jpg con tu foto
   • Actualiza src/sections/*.astro con tu información

3. ${colors.cyan}Deployment - GitHub Pages:${colors.reset}
   • Ve a: Settings → Secrets and variables → Actions → Variables
   • Configura las 28 variables según README.md
   • Haz push a main para desplegar automáticamente

4. ${colors.cyan}Deployment - Netlify (Alternativa):${colors.reset}
   • Conecta tu repositorio en netlify.com
   • Configura las 28 variables en Site settings → Environment variables
   • Build command: ${colors.yellow}yarn build:netlify${colors.reset}
   • Publish directory: ${colors.yellow}dist${colors.reset}

${colors.bright}📊 Impacto SEO de variables opcionales:${colors.reset}
   ${answers.street || answers.postalCode || answers.region ? colors.green + '✓' : colors.yellow + '○'} Dirección completa: ${colors.cyan}+40% Schema.org PostalAddress${colors.reset}
   ${answers.twitterHandle ? colors.green + '✓' : colors.yellow + '○'} Twitter: ${colors.cyan}+20% Schema.org Person${colors.reset}
   ${answers.profileImageWidth && answers.profileImageHeight ? colors.green + '✓' : colors.yellow + '○'} Dimensiones imagen: ${colors.cyan}+60% Schema.org ImageObject${colors.reset}

${colors.bright}📚 Documentación:${colors.reset}
   • README.md - Guía completa con deployment multi-plataforma
   • CHANGELOG_UPDATE.md - Variables SEO recuperadas

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
