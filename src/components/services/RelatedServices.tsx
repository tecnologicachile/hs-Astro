import { ArrowRight, Database, ShoppingCart, RefreshCw, Headphones } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  href: string;
  icon: 'Database' | 'ShoppingCart' | 'RefreshCw' | 'Headphones';
  color: string;
}

const allServices: Service[] = [
  {
    title: 'Hosting Softland ERP',
    description: 'Servidores Windows dedicados con SQL Server optimizado y soporte técnico especializado.',
    href: '/servicios/hosting-softland-erp',
    icon: 'Database',
    color: 'blue'
  },
  {
    title: 'Hosting E-commerce',
    description: 'Hosting optimizado para WooCommerce, PrestaShop, Magento y Jumpseller con SSL y CDN.',
    href: '/servicios/hosting-woocommerce',
    icon: 'ShoppingCart',
    color: 'purple'
  },
  {
    title: 'Sincronización ERPSync',
    description: 'Integración automática cada 5 minutos entre Softland ERP y tu tienda online.',
    href: '/servicios/sincronizacion',
    icon: 'RefreshCw',
    color: 'orange'
  },
  {
    title: 'Soporte Softland ERP',
    description: 'Soporte técnico especializado con 20+ años de experiencia en Softland ERP.',
    href: '/servicios/soporte-softland-erp',
    icon: 'Headphones',
    color: 'green'
  }
];

const iconComponents = {
  Database,
  ShoppingCart,
  RefreshCw,
  Headphones
};

const colorClasses = {
  blue: {
    bg: 'bg-hs-blue/10',
    bgHover: 'group-hover:bg-hs-blue/20',
    text: 'text-hs-blue',
    border: 'hover:border-hs-blue'
  },
  purple: {
    bg: 'bg-purple-100',
    bgHover: 'group-hover:bg-purple-200',
    text: 'text-purple-600',
    border: 'hover:border-purple-400'
  },
  orange: {
    bg: 'bg-orange-100',
    bgHover: 'group-hover:bg-orange-200',
    text: 'text-orange-600',
    border: 'hover:border-orange-400'
  },
  green: {
    bg: 'bg-green-100',
    bgHover: 'group-hover:bg-green-200',
    text: 'text-green-600',
    border: 'hover:border-green-400'
  }
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service) => {
            const IconComponent = iconComponents[service.icon];
            const colors = colorClasses[service.color as keyof typeof colorClasses];

            return (
              <a
                key={service.href}
                href={service.href}
                className={`group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${colors.border}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 ${colors.bgHover} transition-colors`}>
                    <IconComponent className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className={`text-lg font-semibold text-gray-900 group-hover:${colors.text} transition-colors`}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className={`flex items-center ${colors.text} transition-colors`}>
                  <span className="text-sm font-medium">Ver más</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
