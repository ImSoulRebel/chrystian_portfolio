// utils/contactObfuscation.ts
// Utilidades para ofuscar email y teléfono y extraer sus partes

export function splitEmail(email?: string): { user: string; domain: string } {
  if (!email) return { user: '', domain: '' };
  const [user = '', domain = ''] = email.split('@');
  return { user, domain };
}

export function splitPhone(phone?: string): { prefix: string; number: string } {
  if (!phone) return { prefix: '', number: '' };
  const match = phone.match(/^(\+\d+)(\d+)$/);
  return {
    prefix: match?.[1] || '',
    number: match?.[2] || '',
  };
}
