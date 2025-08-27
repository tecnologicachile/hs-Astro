import { z } from 'zod';
import { parsePhoneNumberWithError } from 'libphonenumber-js';
import type { CountryCode } from 'libphonenumber-js';

// Lista de países de habla hispana y principales mercados
const SUPPORTED_COUNTRIES: CountryCode[] = [
  'CL', // Chile (principal)
  'AR', // Argentina
  'CO', // Colombia
  'MX', // México
  'PE', // Perú
  'VE', // Venezuela
  'EC', // Ecuador
  'BO', // Bolivia
  'UY', // Uruguay
  'PY', // Paraguay
  'CR', // Costa Rica
  'PA', // Panamá
  'GT', // Guatemala
  'HN', // Honduras
  'NI', // Nicaragua
  'SV', // El Salvador
  'DO', // República Dominicana
  'CU', // Cuba
  'ES', // España
  'US', // Estados Unidos
];

// Validación personalizada para email
const emailSchema = z
  .string()
  .min(1, 'El correo electrónico es requerido')
  .email('Ingresa un correo electrónico válido')
  .max(100, 'El correo electrónico es demasiado largo')
  .toLowerCase()
  .refine((email) => {
    // Validaciones adicionales
    const domain = email.split('@')[1];
    if (!domain) return false;
    
    // No permitir dominios obviosamente falsos
    const invalidDomains = ['test.com', 'example.com', 'fake.com'];
    if (invalidDomains.includes(domain)) return false;
    
    // Verificar que tenga al menos un punto en el dominio
    return domain.includes('.');
  }, 'El dominio del correo electrónico no es válido');

// Validación personalizada para teléfono con detección de país
const phoneSchema = z
  .string()
  .min(1, 'El número de teléfono es requerido')
  .transform((value) => {
    // Limpiar el número de espacios y caracteres especiales innecesarios
    return value.replace(/[\s\-\(\)]/g, '');
  })
  .refine((phone) => {
    try {
      // Intentar parsear el número sin especificar país
      const phoneNumber = parsePhoneNumberWithError(phone);
      
      // Verificar que sea un número válido
      if (!phoneNumber.isValid()) return false;
      
      // Verificar que el país esté en nuestra lista de países soportados
      if (!phoneNumber.country || !SUPPORTED_COUNTRIES.includes(phoneNumber.country)) {
        return false;
      }
      
      return true;
    } catch (error) {
      return false;
    }
  }, 'Ingresa un número de teléfono válido con código de país (ej: +56 9 1234 5678)')
  .transform((phone) => {
    // Devolver el número parseado y formateado
    const phoneNumber = parsePhoneNumberWithError(phone);
    return {
      number: phoneNumber.number,
      country: phoneNumber.country,
      countryName: getCountryName(phoneNumber.country!),
      formatted: phoneNumber.formatInternational(),
      national: phoneNumber.formatNational(),
    };
  });

// Función auxiliar para obtener el nombre del país
function getCountryName(countryCode: CountryCode): string {
  const countryNames: Record<CountryCode, string> = {
    'CL': 'Chile',
    'AR': 'Argentina',
    'CO': 'Colombia',
    'MX': 'México',
    'PE': 'Perú',
    'VE': 'Venezuela',
    'EC': 'Ecuador',
    'BO': 'Bolivia',
    'UY': 'Uruguay',
    'PY': 'Paraguay',
    'CR': 'Costa Rica',
    'PA': 'Panamá',
    'GT': 'Guatemala',
    'HN': 'Honduras',
    'NI': 'Nicaragua',
    'SV': 'El Salvador',
    'DO': 'República Dominicana',
    'CU': 'Cuba',
    'ES': 'España',
    'US': 'Estados Unidos',
  };
  
  return countryNames[countryCode] || countryCode;
}

// Schema principal para el formulario de contacto
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'El nombre es requerido')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre es demasiado largo')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras y espacios'),
  
  company: z
    .string()
    .max(100, 'El nombre de la empresa es demasiado largo')
    .optional(),
  
  email: emailSchema,
  
  phone: phoneSchema,
  
  service: z
    .string()
    .optional(),
  
  message: z
    .string()
    .min(1, 'El mensaje es requerido')
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje es demasiado largo'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Función de validación que devuelve errores amigables
export function validateContactForm(data: unknown) {
  try {
    const result = contactFormSchema.parse(data);
    return { success: true, data: result, errors: null };
  } catch (error) {
    if (error instanceof z.ZodError && error.errors) {
      const formattedErrors: Record<string, string> = {};
      
      error.errors.forEach((err) => {
        if (err.path && err.path.length > 0) {
          const field = err.path.join('.');
          formattedErrors[field] = err.message;
        }
      });
      
      return { success: false, data: null, errors: formattedErrors };
    }
    
    return { 
      success: false, 
      data: null, 
      errors: { general: 'Error de validación desconocido' } 
    };
  }
}

// Función para validar solo el email
export function validateEmail(email: string) {
  try {
    emailSchema.parse(email);
    return { valid: true, error: null };
  } catch (error) {
    if (error instanceof z.ZodError && error.errors && error.errors.length > 0) {
      return { valid: false, error: error.errors[0].message };
    }
    return { valid: false, error: 'Error de validación de email' };
  }
}

// Función para validar solo el teléfono
export function validatePhone(phone: string) {
  try {
    const result = phoneSchema.parse(phone);
    return { valid: true, error: null, data: result };
  } catch (error) {
    if (error instanceof z.ZodError && error.errors && error.errors.length > 0) {
      return { valid: false, error: error.errors[0].message, data: null };
    }
    return { valid: false, error: 'Error de validación de teléfono', data: null };
  }
}