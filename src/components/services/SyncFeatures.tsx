import { ExternalLink, Zap, CheckCircle, Shield, Headphones } from 'lucide-react';

export default function SyncFeatures() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section with Stats */}
          <div className="bg-hs-blue rounded-xl p-10 sm:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Descubre Más Sobre ERPSync
                </h2>
                <p className="text-base text-blue-100/80 mb-6">
                  Descubre cómo ERPSync potencia tu integración e-commerce-Softland con funcionalidades avanzadas para tu negocio.
                </p>
                <a
                  href="https://erpsync.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-white text-hs-blue px-6 py-3 text-sm font-semibold shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200"
                >
                  Visita ERPSync
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="hidden md:grid grid-cols-3 gap-3 text-center">
                <div className="border border-white/15 bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-xs text-blue-100/70">Automático</div>
                </div>
                <div className="border border-white/15 bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-xs text-blue-100/70">Uptime</div>
                </div>
                <div className="border border-white/15 bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white mb-1">5 min</div>
                  <div className="text-xs text-blue-100/70">Sincronización</div>
                </div>
              </div>
            </div>
          </div>

          {/* Question Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900">
              ¿Por qué elegir ERPSync con HostingSistemas?
            </h3>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border border-gray-200 hover:border-hs-blue/30 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center justify-center w-11 h-11 bg-hs-blue/8 text-hs-blue rounded-lg mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Tecnología Avanzada</h3>
              <p className="text-sm text-gray-500 leading-6">
                Sincronización robusta, segura y confiable entre tus sistemas empresariales con tecnología de punta.
              </p>
            </div>

            <div className="rounded-xl p-6 border border-gray-200 hover:border-hs-blue/30 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center justify-center w-11 h-11 bg-hs-blue/8 text-hs-blue rounded-lg mb-4">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Fácil Implementación</h3>
              <p className="text-sm text-gray-500 leading-6">
                Proceso de instalación simplificado con asistencia completa de nuestro equipo técnico especializado.
              </p>
            </div>

            <div className="rounded-xl p-6 border border-gray-200 hover:border-hs-blue/30 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center justify-center w-11 h-11 bg-hs-blue/8 text-hs-blue rounded-lg mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Máxima Seguridad</h3>
              <p className="text-sm text-gray-500 leading-6">
                Protección avanzada con encriptación y protocolos que garantizan la integridad de tu información.
              </p>
            </div>

            <div className="rounded-xl p-6 border border-gray-200 hover:border-hs-blue/30 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center justify-center w-11 h-11 bg-hs-blue/8 text-hs-blue rounded-lg mb-4">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Soporte Continuo</h3>
              <p className="text-sm text-gray-500 leading-6">
                Soporte técnico especializado y actualizaciones regulares para mantener tu integración óptima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
