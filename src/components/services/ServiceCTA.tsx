import { ArrowRight, Phone } from 'lucide-react';

interface ServiceCTAProps {
  serviceName: string;
  features?: string[];
}

export default function ServiceCTA({ serviceName, features }: ServiceCTAProps) {
  return (
    <div className="bg-gradient-to-r from-hs-blue to-hs-blue-light py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Listo para potenciar tu negocio?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">
            Descubre la solución de hosting ideal para tu proyecto. 
            Te asesoramos sin compromiso para encontrar el plan perfecto.
          </p>
          

          {features && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => (
                <span key={index} className="inline-flex items-center rounded-full bg-white bg-opacity-20 px-3 py-1 text-sm text-white/90">
                  {feature}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {serviceName.includes('ERPSync') ? (
              <>
                <a
                  href="https://erpsync.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-hs-blue shadow-lg hover:bg-gray-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Visitar ERPSync.app
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/contacto"
                  className="inline-flex items-center rounded-xl bg-transparent border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-hs-blue transition-all duration-300"
                >
                  Solicitar Información
                </a>
              </>
            ) : (
              <a
                href="/contacto"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-hs-blue shadow-lg hover:bg-gray-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            )}
            <a
              href="tel:800914659"
              className="inline-flex items-center text-white hover:text-white/90 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-semibold">800 914 659</span>
            </a>
          </div>

          <div className="mt-8 text-sm text-blue-200">
            Configuración en 24 horas • Garantía de satisfacción • Soporte especializado
          </div>
        </div>
      </div>
    </div>
  );
}