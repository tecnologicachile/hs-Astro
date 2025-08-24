import { ExternalLink } from 'lucide-react';

export default function SyncFeatures() {
  return (
    <div className="bg-white py-24 sm:py-32 font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section with Stats */}
          <div className="bg-gradient-to-r from-hs-blue to-hs-blue-light rounded-3xl p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Descubre Más Sobre ERPSync
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  Descubre cómo ERPSync potencia tu integración WooCommerce-Softland con funcionalidades avanzadas para tu negocio.
                </p>
                <a 
                  href="https://erpsync.cl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-white text-hs-blue px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Visita ERPSync
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="hidden md:grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-xs text-blue-100">Sincronización Automática</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs text-blue-100">Monitoreo Continuo</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-3xl font-bold text-white mb-1">0</div>
                  <div className="text-xs text-blue-100">Errores de Sincronización</div>
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tecnología Avanzada</h3>
              <p className="text-sm text-gray-700 leading-6">
                ERPSync utiliza tecnología de punta para garantizar una sincronización robusta, segura y confiable entre tus sistemas empresariales.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fácil Implementación</h3>
              <p className="text-sm text-gray-700 leading-6">
                Proceso de instalación y configuración simplificado, con asistencia completa de nuestro equipo técnico especializado.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Máxima Seguridad</h3>
              <p className="text-sm text-gray-700 leading-6">
                Protección avanzada de datos con encriptación y protocolos de seguridad que garantizan la integridad de tu información empresarial.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Soporte Continuo</h3>
              <p className="text-sm text-gray-700 leading-6">
                Acceso a soporte técnico especializado y actualizaciones regulares para mantener tu integración funcionando perfectamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}