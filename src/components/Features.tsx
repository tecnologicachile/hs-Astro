import { Zap, ShieldCheck, Puzzle, LifeBuoy } from 'lucide-react';

const features = [
  {
    title: 'Velocidad y Rendimiento Optimizados',
    description: 'Disfruta de una velocidad excepcional y rendimiento óptimo, asegurando que tu sitio siempre funcione al máximo',
    icon: Zap,
  },
  {
    title: 'Seguridad avanzada',
    description: 'Protege tu sitio con nuestra seguridad avanzada, incluyendo monitoreo constante y copias de seguridad regulares',
    icon: ShieldCheck,
  },
  {
    title: 'Soluciones Personalizadas',
    description: 'Obtén soluciones de hosting personalizadas que se adaptan perfectamente a las necesidades únicas de tu negocio',
    icon: Puzzle,
  },
  {
    title: 'Soporte Técnico Especializado',
    description: 'Accede a soporte técnico experto con más de 20 años de experiencia en Softland ERP y plataformas e-commerce',
    icon: LifeBuoy,
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            Experiencia y Calidad Garantizada
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 px-4 sm:px-0">
            En HostingSistemas.cl, ofrecemos soluciones de hosting superiores con tecnología avanzada y un servicio al cliente excepcional. Eleva tu negocio en línea con nuestra innovación y excelencia.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="relative pl-14 sm:pl-16">
                  <dt className="text-sm sm:text-base font-semibold leading-6 sm:leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-hs-blue">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
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