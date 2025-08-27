import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import PageHero from './PageHero';
import { validateContactForm, validatePhone, type ContactFormData } from '../lib/validation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [phoneInfo, setPhoneInfo] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Limpiar errores de validación cuando el usuario empiece a escribir
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }

    // Validación en tiempo real para teléfono
    if (name === 'phone' && value) {
      try {
        const result = validatePhone(value);
        if (result && result.valid && result.data) {
          setPhoneInfo(`📍 ${result.data.countryName} - ${result.data.formatted}`);
        } else {
          setPhoneInfo('');
        }
      } catch (error) {
        console.warn('Error validating phone:', error);
        setPhoneInfo('');
      }
    } else if (name === 'phone' && !value) {
      setPhoneInfo('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setValidationErrors({});

    // Validar formulario con Zod
    let validationResult;
    try {
      validationResult = validateContactForm(formData);
      
      if (!validationResult || !validationResult.success) {
        setValidationErrors(validationResult?.errors || {});
        setSubmitStatus('error');
        setStatusMessage('Por favor, corrige los errores en el formulario.');
        setIsSubmitting(false);
        return;
      }
    } catch (error) {
      console.error('Error en validación:', error);
      setSubmitStatus('error');
      setStatusMessage('Error de validación. Por favor, intenta nuevamente.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validationResult.data),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setSubmitStatus('success');
        setStatusMessage('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setPhoneInfo('');
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Error de conexión. Por favor, intenta nuevamente más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <PageHero 
        title="Contáctanos" 
        subtitle="Estamos aquí para ayudarte. Obtén una cotización personalizada o resuelve tus dudas con nuestro equipo de expertos."
      />

      {/* Contact Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl mb-6 sm:mb-8">
                Información de contacto
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-hs-blue text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">800 914 659</p>
                    <p className="text-sm text-gray-500">Llamada gratuita desde todo Chile</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-hs-blue text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contacto@hostingsistemas.cl</p>
                    <p className="text-sm text-gray-500">Respuesta en menos de 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-hs-blue text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Ubicación</h3>
                    <p className="text-gray-600">Santiago, Chile</p>
                    <p className="text-sm text-gray-500">Servicio a nivel nacional</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-hs-blue text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Horarios</h3>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-sm text-gray-500">Soporte técnico 24/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hs-blue rounded-full"></div>
                    Especialistas en E-commerce y Softland ERP
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hs-blue rounded-full"></div>
                    Infraestructura LiteSpeed de alto rendimiento
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hs-blue rounded-full"></div>
                    Integración ERPSync para automatización total
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hs-blue rounded-full"></div>
                    Respaldos automáticos y seguridad empresarial
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl mb-6 sm:mb-8">
                Solicita tu cotización
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hs-blue focus:border-transparent ${
                        validationErrors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Tu nombre"
                    />
                    {validationErrors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {validationErrors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hs-blue focus:border-transparent ${
                        validationErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="tu@email.com"
                    />
                    {validationErrors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {validationErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hs-blue focus:border-transparent ${
                        validationErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="+56 9 1234 5678"
                    />
                    {phoneInfo && (
                      <p className="mt-1 text-sm text-green-600 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        {phoneInfo}
                      </p>
                    )}
                    {validationErrors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {validationErrors.phone}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hs-blue focus:border-transparent ${
                        validationErrors.company ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Nombre de tu empresa"
                    />
                    {validationErrors.company && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {validationErrors.company}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hs-blue focus:border-transparent ${
                      validationErrors.service ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="hosting-woocommerce">Hosting E-commerce</option>
                    <option value="hosting-softland">Hosting Softland ERP</option>
                    <option value="sincronizacion">Sincronización</option>
                    <option value="soporte-softland">Soporte Softland ERP</option>
                    <option value="otro">Otro</option>
                  </select>
                  {validationErrors.service && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {validationErrors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hs-blue focus:border-transparent resize-none ${
                      validationErrors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Cuéntanos sobre tu proyecto y qué necesitas..."
                  />
                  {validationErrors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {validationErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-hs-blue hover:bg-hs-blue-light hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      Enviando...
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-green-800">{statusMessage}</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-800">{statusMessage}</p>
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, aceptas que procesemos tus datos para contactarte sobre nuestros servicios.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}