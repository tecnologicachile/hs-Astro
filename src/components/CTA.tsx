import { Calendar, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function CTA() {
  return (
    <div className="bg-gradient-to-br from-hs-blue to-hs-blue-light py-16 sm:py-20">
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
            <Button
              href="/contacto"
              variant="primary"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Asesoría
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              href="tel:800914659"
              variant="secondary"
            >
              Llamar Ahora: 800 914 659
            </Button>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>También puedes escribirnos a <span className="font-medium text-white">contacto@hostingsistemas.cl</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}