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

    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }

    if (name === 'phone' && value) {
      try {
        const result = validatePhone(value);
        if (result && result.valid && result.data) {
          setPhoneInfo(`${result.data.countryName} - ${result.data.formatted}`);
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

  const inputClasses = (field: string) =>
    `w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-hs-blue focus:border-transparent transition-colors duration-200 ${
      validationErrors[field] ? 'border-red-300 bg-red-50' : 'border-gray-300'
    }`;

  return (
    <div className="bg-white">
      <PageHero
        title="Contáctanos"
        subtitle="Obtén una cotización personalizada o resuelve tus dudas con nuestro equipo de expertos."
      />

      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-6">
                Información de contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hs-blue/8 text-hs-blue flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-sm text-gray-500">800 914 659</p>
                    <p className="text-xs text-gray-400">Línea directa Chile</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hs-blue/8 text-hs-blue flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                    <p className="text-sm text-gray-500">contacto@hostingsistemas.cl</p>
                    <p className="text-xs text-gray-400">Respuesta en menos de 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hs-blue/8 text-hs-blue flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Ubicación</h3>
                    <p className="text-sm text-gray-500">Santiago, Chile</p>
                    <p className="text-xs text-gray-400">Servicio a nivel nacional</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hs-blue/8 text-hs-blue flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Horario</h3>
                    <p className="text-sm text-gray-500">Lunes a Viernes: 9:00 - 19:00</p>
                    <p className="text-xs text-gray-400">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-5 border border-gray-200 rounded-xl">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">¿Por qué elegirnos?</h3>
                <ul className="space-y-2.5">
                  {[
                    'Especialistas en E-commerce y Softland ERP',
                    'Infraestructura LiteSpeed de alto rendimiento',
                    'Integración ERPSync para automatización total',
                    'Respaldos automáticos y seguridad empresarial'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-hs-blue rounded-full flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-6">
                Solicita tu cotización
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses('name')}
                      placeholder="Tu nombre"
                    />
                    {validationErrors.name && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {validationErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses('email')}
                      placeholder="tu@email.com"
                    />
                    {validationErrors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {validationErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses('phone')}
                      placeholder="+56 9 1234 5678"
                    />
                    {phoneInfo && (
                      <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        {phoneInfo}
                      </p>
                    )}
                    {validationErrors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {validationErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClasses('company')}
                      placeholder="Nombre de tu empresa"
                    />
                    {validationErrors.company && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {validationErrors.company}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClasses('service')}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="hosting-woocommerce">Hosting E-commerce</option>
                    <option value="hosting-softland">Hosting Softland ERP</option>
                    <option value="sincronizacion">Sincronización</option>
                    <option value="soporte-softland">Soporte Softland ERP</option>
                    <option value="otro">Otro</option>
                  </select>
                  {validationErrors.service && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {validationErrors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses('message')} resize-none`}
                    placeholder="Cuéntanos sobre tu proyecto y qué necesitas..."
                  />
                  {validationErrors.message && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {validationErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-hs-blue hover:bg-hs-blue-light hover:shadow-md'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      Enviando...
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-green-800">{statusMessage}</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-800">{statusMessage}</p>
                  </div>
                )}

                <p className="text-xs text-gray-400 text-center">
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
