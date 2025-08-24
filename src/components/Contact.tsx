import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
    <div className="bg-white font-poppins">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-hs-blue via-hs-blue-light to-blue-400 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
              Contáctanos
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100">
              Estamos aquí para ayudarte. Obtén una cotización personalizada o resuelve tus dudas con nuestro equipo de expertos.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
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

              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hs-blue rounded-full"></div>
                    Especialistas en WooCommerce y Softland ERP
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hs-blue focus:border-transparent"
                      placeholder="Tu nombre"
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hs-blue focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hs-blue focus:border-transparent"
                      placeholder="+56 9 1234 5678"
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hs-blue focus:border-transparent"
                      placeholder="Nombre de tu empresa"
                    />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hs-blue focus:border-transparent"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="hosting-woocommerce">Hosting WooCommerce</option>
                    <option value="hosting-softland">Hosting Softland ERP</option>
                    <option value="sincronizacion">Sincronización</option>
                    <option value="soporte-softland">Soporte Softland ERP</option>
                    <option value="otro">Otro</option>
                  </select>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hs-blue focus:border-transparent resize-none"
                    placeholder="Cuéntanos sobre tu proyecto y qué necesitas..."
                  />
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