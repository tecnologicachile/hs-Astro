import { ExternalLink } from 'lucide-react';

export default function SyncFeatures() {
  return (
    <div className="bg-white py-24 sm:py-32 font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Descubre Más Sobre ERPSync
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Para más información sobre cómo ERPSync puede potenciar tu integración entre WooCommerce y Softland, visita su página oficial. Descubre las funcionalidades y beneficios completos de esta herramienta esencial para tu negocio.
            </p>
            <a 
              href="https://erpsync.cl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-hs-blue to-hs-blue-light px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:from-hs-blue-light hover:to-hs-blue-lighter transform hover:scale-105 transition-all duration-300"
            >
              Visita ERPSync
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* ERPSync Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Tecnología Avanzada</h3>
              </div>
              <p className="text-gray-700 leading-7">
                ERPSync utiliza tecnología de punta para garantizar una sincronización robusta, segura y confiable entre tus sistemas empresariales.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Fácil Implementación</h3>
              </div>
              <p className="text-gray-700 leading-7">
                Proceso de instalación y configuración simplificado, con asistencia completa de nuestro equipo técnico especializado.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Máxima Seguridad</h3>
              </div>
              <p className="text-gray-700 leading-7">
                Protección avanzada de datos con encriptación y protocolos de seguridad que garantizan la integridad de tu información empresarial.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Soporte Continuo</h3>
              </div>
              <p className="text-gray-700 leading-7">
                Acceso a soporte técnico especializado y actualizaciones regulares para mantener tu integración funcionando perfectamente.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-16 bg-gradient-to-r from-hs-blue to-hs-blue-light rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              ¿Por qué elegir ERPSync con HostingSistemas?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="text-blue-100">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm">Sincronización Automática</div>
              </div>
              <div className="text-blue-100">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm">Monitoreo Continuo</div>
              </div>
              <div className="text-blue-100">
                <div className="text-3xl font-bold text-white mb-2">0</div>
                <div className="text-sm">Errores de Sincronización</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}