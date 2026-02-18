import { ArrowRight, ShoppingCart, Database, RefreshCw, Headphones } from 'lucide-react';

const services = [
  {
    title: 'Hosting E-commerce Especializado',
    description: 'Hosting empresarial para tiendas online: WooCommerce, PrestaShop, Magento, Jumpseller y desarrollos personalizados. SSL gratuito, CDN y soporte experto.',
    href: '/servicios/hosting-woocommerce',
    icon: ShoppingCart,
  },
  {
    title: 'Soluciones de Hosting para Softland',
    description: 'Servidor Windows Chile dedicado para Softland ERP. Hosting empresarial con control total, acceso nacional y SQL Server optimizado incluido.',
    href: '/servicios/hosting-softland-erp',
    icon: Database,
  },
  {
    title: 'Sincronización E-commerce con Softland',
    description: 'Integración exclusiva entre tu tienda online (WooCommerce, PrestaShop, Magento, Jumpseller, desarrollos personalizados) y Softland ERP con ERPSync.',
    href: '/servicios/sincronizacion',
    icon: RefreshCw,
  },
  {
    title: 'Soporte Especializado para Softland',
    description: 'Soporte técnico ERP Chile experto para Softland. Consultoría especializada, optimización de sistema y continuidad operativa garantizada.',
    href: '/servicios/soporte-softland-erp',
    icon: Headphones,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros servicios especializados
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500">
            Eleva tu negocio en línea con nuestro alojamiento para e-commerce y Softland. Garantizamos estabilidad, rapidez y asistencia experta.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group relative flex flex-col gap-5 rounded-xl border border-gray-200 p-6 sm:p-8 hover:border-hs-blue/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-hs-blue/8 text-hs-blue group-hover:bg-hs-blue group-hover:text-white transition-colors duration-200">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm leading-6 text-gray-500 flex-1">
                {service.description}
              </p>
              <div className="flex items-center gap-1 text-sm font-medium text-hs-blue">
                Ver más
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
