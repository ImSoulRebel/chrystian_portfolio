import type { ContactTranslations } from './types';

export const contact: Record<'es' | 'en', ContactTranslations> = {
  es: {
    title: 'Trabajemos Juntos',
    subtitle: '¿Listo para transformar tu idea en realidad?',
    description:
      '¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla realidad.',
    seo: {
      title: 'Contacto | Chrystian Michell - Tech Lead & Arquitecto Flutter',
      description:
        'Contacta con Chrystian Michell para oportunidades de liderazgo técnico, proyectos de desarrollo Flutter y servicios de consultoría especializada. Disponible para contratación inmediata.',
    },
    form: {
      subject: 'Nuevo mensaje desde el portfolio',
      title: 'Cuéntame sobre tu proyecto',
      text: 'Completa el formulario y te responderé en menos de 24 horas con una propuesta personalizada.',
      name: {
        label: 'Nombre completo',
        placeholder: 'Tu nombre',
      },
      email: {
        label: 'Email',
        placeholder: 'Tu email',
      },
      company: {
        label: 'Empresa/Organización',
        placeholder: 'Nombre de tu empresa',
      },
      phone: {
        label: 'Teléfono',
        placeholder: '+34 XXX XX XX XX',
      },
      projectType: {
        label: 'Tipo de proyecto ',
        placeholder: 'Selecciona el tipo de proyecto',
        options: {
          mobileApp: 'Aplicación móvil',
          webApp: 'Aplicación web',
          consulting: 'Consultoría técnica',
          leadership: 'Liderazgo técnico',
          migration: 'Migración/Modernización',
          other: 'Otro',
        },
      },
      budget: {
        label: 'Presupuesto estimado',
        placeholder: 'Selecciona un rango',
        options: {
          range1: '€5.000 - €15.000',
          range2: '€15.000 - €30.000',
          range3: '€30.000 - €50.000',
          range4: '€50.000+',
          undefined: 'Por definir',
        },
      },
      timeline: {
        label: 'Timeline esperado',
        placeholder: 'Selecciona un timeline',
        options: {
          immediate: 'Inmediato (&lt; 1 mes)',
          range1: '1-3 meses',
          range2: '3-6 meses',
          range3: '6-12 meses',
          flexible: 'Flexible',
        },
      },
      message: {
        label: 'Describe tu proyecto',
        placeholder:
          'Cuéntame sobre tu proyecto, objetivos, características principales, usuarios objetivo, contexto técnico, etc.',
      },
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado correctamente!',
      error: 'Error al enviar el mensaje. Inténtalo de nuevo.',
      notice: 'Te responderé en menos de 24 horas',
    },
    expectation: {
      quickResponse: {
        title: 'Respuesta rápida',
        text: 'Te responderé en menos de 24 horas con una propuesta inicial y algunas preguntas adicionales.',
      },
      collaborationOpportunity: {
        title: 'Oportunidad de colaboración',
        text: 'Evaluaré si tu proyecto es un buen fit para mis habilidades y disponibilidad actual como Tech Lead.',
      },
      actionPlan: {
        title: 'Plan de acción claro',
        text: 'Recibirás un plan detallado con alcance, enfoque técnico y condiciones de colaboración.',
      },
    },
    tipSection: {
      title: 'Consejo para un contacto efectivo',
      description:
        'Mientras más detalles compartas sobre tu proyecto, mejor podré entender tus necesidades y ofrecerte una solución perfecta.',
    },
    quickLinks: {
      label: 'O conecta directamente:',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },

    info: {
      location: 'España (Remote/Presencial)',
      availability: 'Disponible inmediatamente',
      response: 'Respuesta en menos de 24h',
    },
  },
  en: {
    title: 'Contact',
    subtitle: 'Ready to transform your idea into reality?',
    description:
      'I am available for new technical leadership opportunities, senior development roles, and specialized consulting.',
    seo: {
      title: 'Contact | Chrystian Michell - Tech Lead & Flutter Architect',
      description:
        'Contact Chrystian Michell for technical leadership opportunities, Flutter development projects, and specialized consulting services. Available for immediate hire.',
    },
    form: {
      subject: 'New message from portfolio',
      title: 'Tell me about your project',
      text: 'Fill out the form and I will respond within 24 hours with a personalized proposal.',
      name: {
        label: 'Full Name',
        placeholder: 'Your name',
      },
      email: {
        label: 'Email',
        placeholder: 'Your email',
      },
      company: {
        label: 'Company/Organization',
        placeholder: 'Your company name',
      },
      phone: {
        label: 'Phone',
        placeholder: '+34 XXX XX XX XX',
      },
      projectType: {
        label: 'Project Type',
        placeholder: 'Select project type',
        options: {
          mobileApp: 'Mobile Application',
          webApp: 'Web Application',
          consulting: 'Technical Consulting',
          leadership: 'Technical Leadership',
          migration: 'Migration/Modernization',
          other: 'Other',
        },
      },
      budget: {
        label: 'Estimated Budget',
        placeholder: 'Select a range',
        options: {
          range1: '€5,000 - €15,000',
          range2: '€15,000 - €30,000',
          range3: '€30,000 - €50,000',
          range4: '€50,000+',
          undefined: 'To be defined',
        },
      },
      timeline: {
        label: 'Expected Timeline',
        placeholder: 'Select a timeline',
        options: {
          immediate: 'Immediate (&lt; 1 month)',
          range1: '1-3 months',
          range2: '3-6 months',
          range3: '6-12 months',
          flexible: 'Flexible',
        },
      },
      message: {
        label: 'Describe your project',
        placeholder:
          'Tell me about your project, objectives, main features, target users, technical context, etc.',
      },
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
      notice: 'I will respond within 24 hours',
    },
    expectation: {
      quickResponse: {
        title: 'Quick Response',
        text: 'I will respond within 24 hours with an initial proposal and some follow-up questions.',
      },
      collaborationOpportunity: {
        title: 'Collaboration Opportunity',
        text: 'I will assess whether your project is a good fit for my skills and current availability as a Tech Lead.',
      },
      actionPlan: {
        title: 'Clear Action Plan',
        text: 'You will receive a detailed plan outlining scope, technical approach, and collaboration terms.',
      },
    },

    tipSection: {
      title: 'Tip for Effective Contact',
      description:
        'Provide as much detail as possible about your project to receive a more accurate proposal.',
    },
    quickLinks: {
      label: 'Or connect directly:',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    info: {
      location: 'Spain (Remote/On-site)',
      availability: 'Available immediately',
      response: 'Response within 24h',
    },
  },
} as const;
