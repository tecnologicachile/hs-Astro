import { ArrowRight, Phone, Shield, Zap, Users, Headphones } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-[#0049AA] py-8 sm:py-10 lg:py-12 font-poppins overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center rounded-full bg-white/10 px-6 py-2 text-sm text-blue-100 backdrop-blur-sm border border-white/20">
              <Shield className="w-4 h-4 mr-2" />
              Más de 15 años de experiencia especializada
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-5xl mb-6 leading-snug sm:leading-[75px]">
              Hosting Especializado para{' '}
              <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                WooCommerce
              </span>
              <span className="block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                y Softland ERP
              </span>
            </h1>
            
            <p className="text-lg leading-8 text-blue-100 mb-8">
              Potencia tu negocio con hosting optimizado, soporte experto 24/7 y tecnología avanzada. 
              Especialistas en e-commerce y sistemas ERP para empresas que buscan excelencia.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-blue-200">
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-300" />
                <span className="text-sm font-medium">Configuración en 24h</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-300" />
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-300" />
                <span className="text-sm font-medium">Soporte Especializado</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <a
                href="/servicios"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-hs-blue shadow-lg hover:bg-gray-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Ver Nuestros Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="tel:800914659"
                className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                800 914 659
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-blue-200">
              <span className="font-medium">Email:</span> contacto@hostingsistemas.cl
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative lg:flex lg:items-center lg:justify-center">
            <div className="relative">
              {/* Central Dashboard */}
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-white text-sm font-medium">Sistema Activo</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Panel de Control</h3>
                  <p className="text-blue-100 text-sm">Gestión Integral de Servicios</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* WooCommerce Card */}
                  <div className="group bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl p-4 border border-orange-300/20 hover:border-orange-300/40 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-orange-500/30 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-orange-200" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div className="text-orange-200 text-xs">99.9%</div>
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">WooCommerce</h4>
                    <p className="text-orange-100 text-xs">E-commerce Activo</p>
                  </div>

                  {/* Softland Card */}
                  <div className="group bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-4 border border-blue-300/20 hover:border-blue-300/40 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                      </div>
                      <div className="text-blue-200 text-xs">Online</div>
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">Softland ERP</h4>
                    <p className="text-blue-100 text-xs">Sistema Operativo</p>
                  </div>

                  {/* Support Card */}
                  <div className="group bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-4 border border-green-300/20 hover:border-green-300/40 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-green-500/30 rounded-lg flex items-center justify-center">
                        <Headphones className="w-6 h-6 text-green-200" />
                      </div>
                      <div className="text-green-200 text-xs">24/7</div>
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">Soporte</h4>
                    <p className="text-green-100 text-xs">Asistencia Activa</p>
                  </div>

                  {/* Cloud Card */}
                  <div className="group bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-4 border border-purple-300/20 hover:border-purple-300/40 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-purple-500/30 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                        </svg>
                      </div>
                      <div className="text-purple-200 text-xs">Cloud</div>
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">Hosting</h4>
                    <p className="text-purple-100 text-xs">Infraestructura</p>
                  </div>
                </div>

              </div>

              {/* Floating Status Indicators */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-400 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-blue-400/60 rounded-full animate-pulse delay-300"></div>
              
              {/* Connection Lines */}
              <div className="absolute top-1/2 -left-8 w-8 h-px bg-gradient-to-r from-transparent to-white/30 hidden lg:block"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-px bg-gradient-to-l from-transparent to-white/30 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}