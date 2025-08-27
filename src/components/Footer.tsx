import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const footerNavigation = {
  services: [
    { name: 'Hosting E-commerce', href: '/servicios/hosting-woocommerce' },
    { name: 'Hosting Softland ERP', href: '/servicios/hosting-softland-erp' },
    { name: 'Sincronización', href: '/servicios/sincronizacion' },
    { name: 'Soporte Softland ERP', href: '/servicios/soporte-softland-erp' },
  ],
  company: [
    { name: 'Quienes Somos', href: '/quienes-somos' },
    { name: 'Casos de Éxito', href: '/casos-de-exito' },
    { name: 'Blog', href: '/blog' },
    { name: 'Términos de Servicio', href: '/terms' },
    { name: 'Política de Privacidad', href: '/privacy' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
  ],
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '800 914 659',
    href: 'tel:800914659',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contacto@hostingsistemas.cl',
    href: 'mailto:contacto@hostingsistemas.cl',
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Santiago, Chile',
    href: '#',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img 
              src="https://hostingsistemas.cl/wp-content/uploads/2023/11/Hosting-Sistemas-Vector-File.png" 
              alt="Hosting Sistemas" 
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-6 text-gray-300">
              Soluciones de hosting web profesional y confiable para tu negocio. 
              Más de 10 años de experiencia brindando servicios de calidad en Chile.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Servicios</h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Empresa</h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Contacto</h3>
              <ul role="list" className="mt-6 space-y-4">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2024 Hosting Sistemas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}