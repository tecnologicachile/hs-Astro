import { Zap, ShieldCheck, Puzzle, LifeBuoy } from 'lucide-react';

const features = [
  {
    title: 'Rendimiento Optimizado',
    description: 'Servidores LiteSpeed con NVMe, Redis y CDN integrado. Tiempos de carga inferiores a 2 segundos.',
    icon: Zap,
  },
  {
    title: 'Seguridad Empresarial',
    description: 'SSL incluido, firewall WAF, respaldos diarios automáticos y monitoreo continuo de infraestructura.',
    icon: ShieldCheck,
  },
  {
    title: 'Integración Softland ERP',
    description: 'ERPSync conecta tu e-commerce con Softland: inventario, precios y pedidos sincronizados cada 5 minutos.',
    icon: Puzzle,
  },
  {
    title: 'Soporte Especializado',
    description: 'Equipo técnico con 20+ años en Softland ERP y plataformas e-commerce. Asistencia telefónica directa.',
    icon: LifeBuoy,
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500">
            Infraestructura especializada y soporte técnico con experiencia real en sistemas empresariales.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="relative pl-14">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-hs-blue">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
