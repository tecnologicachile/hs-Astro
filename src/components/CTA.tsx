import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-hs-blue py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Conversemos sobre la mejor solución para tu negocio
          </h2>
          <p className="text-base text-blue-100/60 mb-10 max-w-xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a optimizar tu infraestructura digital
            y potenciar el crecimiento de tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contacto"
              className="group inline-flex items-center justify-center font-semibold rounded-lg px-6 py-3 text-sm bg-white text-hs-blue shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200"
            >
              Agendar Asesoría
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a
              href="tel:800914659"
              className="inline-flex items-center justify-center font-semibold rounded-lg px-6 py-3 text-sm border border-white/25 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200"
            >
              Llamar: 800 914 659
            </a>
          </div>
          <p className="mt-8 text-sm text-blue-100/40">
            También puedes escribirnos a <span className="font-medium text-white/70">contacto@hostingsistemas.cl</span>
          </p>
        </div>
      </div>
    </div>
  );
}
