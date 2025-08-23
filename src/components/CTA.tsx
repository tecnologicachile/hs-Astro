import { Calendar, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-gradient-to-br from-hs-blue to-hs-blue-light py-16 sm:py-20 font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Conversemos sobre la mejor solución para tu negocio
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            Nuestro equipo de expertos está listo para ayudarte a optimizar tu infraestructura digital 
            y potenciar el crecimiento de tu empresa con soluciones personalizadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-hs-blue shadow-lg hover:bg-gray-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Asesoría
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:800914659"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all duration-300"
            >
              Llamar Ahora: 800 914 659
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>También puedes escribirnos a <span className="font-medium text-white">contacto@hostingsistemas.cl</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}