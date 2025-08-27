import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';

export default function SoftlandSupportWidget() {
  return (
    <div className="bg-gradient-to-br from-hs-blue to-hs-blue-light rounded-2xl p-5 shadow-lg text-white">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 text-xs font-medium mb-2">
          <Clock className="w-3 h-3" />
          Soporte Especializado
        </div>
        <h3 className="text-base font-bold mb-2">
          ¿Necesitas Soporte Técnico de Softland?
        </h3>
        <p className="text-blue-100 text-xs leading-relaxed">
          Soporte técnico alternativo. Respondemos rápido.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-2">
        {/* Phone */}
        <a 
          href="tel:800914659"
          className="flex items-center gap-2 bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-all duration-300 group"
        >
          <div className="bg-white/20 rounded p-1.5 group-hover:bg-white/30 transition-colors">
            <Phone className="w-3 h-3" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium">800 914 659</div>
            <div className="text-xs text-blue-100 opacity-75">Llamar ahora</div>
          </div>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/+56800914659?text=Hola,%20necesito%20soporte%20técnico%20para%20Softland%20ERP"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-all duration-300 group"
        >
          <div className="relative bg-white/20 rounded p-1.5 group-hover:bg-white/30 transition-colors">
            <MessageCircle className="w-3 h-3" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-medium">WhatsApp</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className="text-xs text-green-200 font-medium">En línea</span>
              </div>
            </div>
            <div className="text-xs text-blue-100 opacity-75">Respuesta inmediata</div>
          </div>
        </a>

        {/* Email */}
        <a 
          href="mailto:contacto@hostingsistemas.cl?subject=Soporte%20Técnico%20Softland%20ERP"
          className="flex items-center gap-2 bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-all duration-300 group"
        >
          <div className="bg-white/20 rounded p-1.5 group-hover:bg-white/30 transition-colors">
            <Mail className="w-3 h-3" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium">Email</div>
            <div className="text-xs text-blue-100 opacity-75">Escribir consulta</div>
          </div>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-white/20">
        <p className="text-xs text-center text-blue-100 opacity-75">
          15+ años especializados en Softland
        </p>
      </div>
    </div>
  );
}