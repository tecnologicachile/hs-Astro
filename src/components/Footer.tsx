import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-4">
            <img
              src="/footer.png"
              alt="Hosting Sistemas Chile"
              className="h-10 w-auto mb-5"
            />
            <p className="text-sm leading-6 text-gray-400 max-w-xs mb-6">
              Hosting profesional especializado en Softland ERP y e-commerce. Desde 2005 en Chile.
            </p>

            <a
              href="https://wa.me/+56800914659?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium text-sm transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Servicios
            </h3>
            <ul role="list" className="mt-5 space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    title={item.title}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Empresa
            </h3>
            <ul role="list" className="mt-5 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    title={item.title}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Contacto
            </h3>
            <ul role="list" className="mt-5 space-y-4">
              <li>
                <a
                  href="tel:800914659"
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
                  <span className="text-sm">800 914 659</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@hostingsistemas.cl"
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Mail className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
                  <span className="text-sm">contacto@hostingsistemas.cl</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm">Santiago, Chile</span>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-gray-800">
              <p className="text-xs text-gray-500">Lun - Vie: 9:00 - 19:00</p>
              <p className="text-xs text-gray-500">Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            © {currentYear} Hosting Sistemas · Tecnológica Chile SpA
          </p>
          <p className="text-xs text-gray-600">
            Desarrollado por{' '}
            <a
              href="https://subdominio.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200"
            >
              subdominio.cl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
