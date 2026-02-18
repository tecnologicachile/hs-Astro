import { ArrowRight, Database, ShoppingCart, RefreshCw, Headphones } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  href: string;
  icon: 'Database' | 'ShoppingCart' | 'RefreshCw' | 'Headphones';
}

const allServices: Service[] = [
  {
    title: 'Hosting Softland ERP',
    description: 'Servidores Windows dedicados con SQL Server optimizado y soporte técnico especializado.',
    href: '/servicios/hosting-softland-erp',
    icon: 'Database',
  },
  {
    title: 'Hosting E-commerce',
    description: 'Hosting optimizado para WooCommerce, PrestaShop, Magento y Jumpseller con SSL y CDN.',
    href: '/servicios/hosting-woocommerce',
    icon: 'ShoppingCart',
  },
  {
    title: 'Sincronización ERPSync',
    description: 'Integración automática cada 5 minutos entre Softland ERP y tu tienda online.',
    href: '/servicios/sincronizacion',
    icon: 'RefreshCw',
  },
  {
    title: 'Soporte Softland ERP',
    description: 'Soporte técnico especializado con 20+ años de experiencia en Softland ERP.',
    href: '/servicios/soporte-softland-erp',
    icon: 'Headphones',
  }
];

const iconComponents = {
  Database,
  ShoppingCart,
  RefreshCw,
  Headphones
};

interface RelatedServicesProps {
  currentService: string;
  title?: string;
  description?: string;
}

export default function RelatedServices({
  currentService,
  title = "Servicios Relacionados",
  description = "Descubre otros servicios que pueden complementar tu solución"
}: RelatedServicesProps) {
  const relatedServices = allServices.filter(service => service.href !== currentService);

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service) => {
            const IconComponent = iconComponents[service.icon];

            return (
              <a
                key={service.href}
                href={service.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-hs-blue/30 hover:shadow-sm transition-all duration-200 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-hs-blue/8 text-hs-blue rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-hs-blue group-hover:text-white transition-colors duration-200">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-6 mb-4 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center text-hs-blue text-sm font-medium">
                  Ver más
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
