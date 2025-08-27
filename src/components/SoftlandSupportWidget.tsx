import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';

export default function SoftlandSupportWidget() {
  return (
    <div className="bg-gradient-to-br from-hs-blue to-hs-blue-light rounded-xl p-4 shadow-md text-white">
      {/* Header */}
      <div className="text-center mb-3">
        <div className="inline-flex items-center gap-1 bg-white/20 rounded-full px-2 py-1 text-xs font-medium mb-2">
          <Clock className="w-3 h-3" />
          Soporte Especializado
        </div>
        <h3 className="text-sm font-bold mb-1">
          ¿Necesitas Soporte Softland?
        </h3>
        <p className="text-blue-100 text-xs">
          Respondemos rápido.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-1">
        {/* Phone */}
        <a 
          href="tel:800914659"
          className="flex items-center gap-2 bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-colors group"
        >
          <Phone className="w-3 h-3 flex-shrink-0" />
          <span className="text-xs font-medium">800 914 659</span>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/+56800914659?text=Hola,%20necesito%20soporte%20técnico%20para%20Softland%20ERP"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-colors group"
        >
          <div className="relative">
            <MessageCircle className="w-3 h-3" />
            <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full"></div>
          </div>
          <span className="text-xs font-medium">WhatsApp</span>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            <span className="text-xs text-green-200">Online</span>
          </div>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-2 pt-2 border-t border-white/20">
        <p className="text-xs text-center text-blue-100">
          15+ años especializados
        </p>
      </div>
    </div>
  );
}