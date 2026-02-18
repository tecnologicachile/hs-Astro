import { ArrowRight, Phone } from 'lucide-react';

interface ServiceCTAProps {
  serviceName: string;
  features?: string[];
}

export default function ServiceCTA({ serviceName, features }: ServiceCTAProps) {
  return (
    <div className="bg-hs-blue py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Listo para potenciar tu negocio?
          </h2>
          <p className="mt-4 text-base leading-7 text-blue-100/60">
            Descubre la solución de hosting ideal para tu proyecto.
            Te asesoramos sin compromiso para encontrar el plan perfecto.
          </p>

          {features && (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {features.map((feature, index) => (
                <span key={index} className="inline-flex items-center rounded-lg border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/80">
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
                  className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-hs-blue shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200"
                >
                  Visitar ERPSync.app
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="/contacto"
                  className="inline-flex items-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200"
                >
                  Solicitar Información
                </a>
              </>
            ) : (
              <a
                href="/contacto"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-hs-blue shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            )}
            <a
              href="tel:800914659"
              className="inline-flex items-center text-white/70 hover:text-white transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">800 914 659</span>
            </a>
          </div>

          <p className="mt-8 text-sm text-blue-100/40">
            Configuración en 24 horas · Garantía de satisfacción · Soporte especializado
          </p>
        </div>
      </div>
    </div>
  );
}
