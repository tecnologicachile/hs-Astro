import { ArrowRight, Shield } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <div className="relative bg-hs-blue py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/90">
          <Shield className="w-4 h-4 mr-2" />
          20+ años especializados en Softland ERP
        </div>
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15]">
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Hosting Softland ERP
          </span>
          {' '}especializado en Chile
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Servidores Windows optimizados, hosting empresarial y sincronización e-commerce exclusiva (WooCommerce, PrestaShop, Magento). Más de 15 años ayudando a empresas chilenas con tecnología confiable.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            href="/servicios"
            variant="primary"
            size="lg"
          >
            Explora nuestros servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            href="/contacto"
            variant="secondary"
            size="lg"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </div>
  );
}