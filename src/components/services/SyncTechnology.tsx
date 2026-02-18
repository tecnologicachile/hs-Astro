import { RefreshCw, CheckCircle, Package, Users, DollarSign } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Automatización de Procesos',
    description: 'Elimina tareas manuales repetitivas con automatización inteligente que gestiona pedidos, inventario y datos de clientes sin intervención humana.',
  },
  {
    icon: Package,
    title: 'Gestión de Inventario Dinámica',
    description: 'Control en tiempo real del stock disponible, evitando sobreventa y optimizando la disponibilidad de productos en tu tienda online.',
  },
  {
    icon: Users,
    title: 'Sincronización de Ventas y Clientes',
    description: 'Mantén información de clientes y pedidos actualizada entre sistemas, proporcionando un servicio consistente y personalizado.',
  },
  {
    icon: DollarSign,
    title: 'Sincronización de Stock y Precios',
    description: 'Actualización automática de precios y disponibilidad, asegurando coherencia entre tu tienda online y sistema de gestión.',
  },
];

export default function SyncTechnology() {
  return (
    <div className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-hs-blue rounded-xl mb-5">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Automatización y Sincronización en Tiempo Real
            </h2>
            <p className="text-base leading-7 text-gray-500 max-w-2xl mx-auto">
              Sincronización avanzada entre tu tienda online y Softland ERP para gestión precisa y automatización instantánea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-hs-blue/30 hover:shadow-sm transition-all duration-200">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-hs-blue/8 text-hs-blue rounded-lg mr-3">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-6">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
