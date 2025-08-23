import { ArrowRight, ShoppingCart, Database, RefreshCw, Headphones } from 'lucide-react';

const services = [
  {
    title: 'Hosting optimizado para Woocommerce',
    description: 'Hosting especializado que acelera tu tienda WooCommerce. Rendimiento superior y soporte experto para tus ventas.',
    href: '/servicios/hosting-woocommerce',
    icon: ShoppingCart,
  },
  {
    title: 'Soluciones de Hosting para Softland',
    description: 'Servidores Windows dedicados para Softland ERP. Control total, seguridad cloud y soporte experto incluido.',
    href: '/servicios/hosting-softland-erp',
    icon: Database,
  },
  {
    title: 'Sincroniza Woocoommerce con Softland',
    description: 'Integración perfecta entre WooCommerce y Softland ERP. Automatización total con ERPSync para tu negocio.',
    href: '/servicios/sincronizacion',
    icon: RefreshCw,
  },
  {
    title: 'Soporte Especializado para Softland',
    description: 'Soporte técnico experto para Softland ERP. Optimizamos tu sistema y garantizamos la continuidad operativa.',
    href: '/servicios/soporte-softland-erp',
    icon: Headphones,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-12 sm:py-16 font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Eleva tu negocio en línea con nuestro alojamiento para WooCommerce y Softland. Garantizamos estabilidad, rapidez y asistencia experta, adaptándonos a las necesidades específicas de tu empresa.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col gap-6 rounded-2xl border border-gray-200 p-8 hover:border-hs-blue hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-hs-blue text-white group-hover:bg-hs-blue-light transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold leading-8 text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-base leading-7 text-gray-600">
                {service.description}
              </p>
              <div className="mt-auto">
                <a
                  href={service.href}
                  className="inline-flex items-center gap-x-2 text-sm font-semibold text-hs-blue hover:text-hs-blue-light"
                >
                  Ver más
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}