import { Phone, Mail, MapPin, MessageCircle, Clock, Shield, Headphones, Award } from 'lucide-react';

const footerNavigation = {
  services: [
    { name: 'Hosting E-commerce', href: '/servicios/hosting-woocommerce', title: 'Hosting WooCommerce y Tienda Online en Chile' },
    { name: 'Hosting Softland ERP', href: '/servicios/hosting-softland-erp', title: 'Servidores Softland ERP Profesional' },
    { name: 'Sincronización', href: '/servicios/sincronizacion', title: 'Integración Automática ERP y E-commerce' },
    { name: 'Soporte Softland ERP', href: '/servicios/soporte-softland-erp', title: 'Soporte Técnico Especializado Softland' },
  ],
  company: [
    { name: 'Quienes Somos', href: '/quienes-somos', title: 'Conoce Hosting Sistemas Chile' },
    { name: 'Casos de Éxito', href: '/casos-de-exito', title: 'Clientes Satisfechos en Chile' },
    { name: 'Blog', href: '/blog', title: 'Tutoriales y Guías de Hosting' },
    { name: 'Contacto', href: '/contacto', title: 'Contacto Hosting Sistemas' },
  ],
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '800 914 659',
    subtext: 'Línea directa',
    href: 'tel:800914659',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contacto@hostingsistemas.cl',
    subtext: 'Respuesta en 24h',
    href: 'mailto:contacto@hostingsistemas.cl',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Santiago, Chile',
    subtext: 'Cobertura nacional',
    href: null,
  },
];

const trustBadges = [
  { icon: Shield, label: 'SSL Seguro', description: 'Conexión cifrada' },
  { icon: Headphones, label: 'Soporte Experto', description: 'Equipo especializado' },
  { icon: Award, label: '20+ Años', description: 'De experiencia' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - 2005;

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Trust Badges Section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center justify-center sm:justify-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-hs-blue/20 to-hs-blue-light/20 border border-hs-blue/30">
                  <badge.icon className="h-6 w-6 text-hs-blue-light" />
                </div>
                <div>
                  <p className="font-semibold text-white">{badge.label}</p>
                  <p className="text-sm text-gray-400">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <img
              src="/footer.png"
              alt="Hosting Sistemas Chile - Logo footer, especialistas en hosting web"
              className="h-10 w-auto"
            />
            <p className="text-sm leading-6 text-gray-300 max-w-xs">
              Soluciones de hosting web profesional y confiable para tu negocio.
              Desde 2005 | {yearsExperience}+ años de experiencia brindando servicios de calidad en Chile.
            </p>

            {/* Support Hours */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <Clock className="h-5 w-5 text-green-400 mt-0.5" />
              <div>
                <p className="font-medium text-white text-sm">Horario de Soporte</p>
                <p className="text-sm text-gray-400">Lun - Vie: 9:00 - 19:00</p>
                <p className="text-sm text-gray-400">Sábados: 10:00 - 14:00</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/+56800914659?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium text-sm transition-colors duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Navigation Columns */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wide">
                Servicios
              </h3>
              <ul role="list" className="mt-6 space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      title={item.title}
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wide">
                Empresa
              </h3>
              <ul role="list" className="mt-6 space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      title={item.title}
                      className="text-sm leading-6 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wide">
                Contacto
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {contactInfo.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <item.icon className="h-5 w-5 mt-0.5 text-gray-500 group-hover:text-hs-blue-light transition-colors" />
                        <div>
                          <p className="text-sm font-medium">{item.value}</p>
                          <p className="text-xs text-gray-500">{item.subtext}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 text-gray-400">
                        <item.icon className="h-5 w-5 mt-0.5 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium">{item.value}</p>
                          <p className="text-xs text-gray-500">{item.subtext}</p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-sm text-gray-400">
                © {currentYear} Hosting Sistemas. Todos los derechos reservados.
              </p>
              <span className="hidden sm:inline text-gray-600">|</span>
              <p className="text-sm text-gray-500">
                Tecnológica Chile SpA
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Sitio desarrollado por{' '}
              <a
                href="https://subdominio.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                subdominio.cl
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
