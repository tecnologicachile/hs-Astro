import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '56800914659';
  const defaultMessage = 'Hola, me gustaría obtener más información sobre sus servicios';
  
  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-80 sm:w-96 max-w-[calc(100vw-2rem)] animate-slideUp">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full animate-pulse border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold">Hosting Sistemas</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <p className="text-xs opacity-90">En línea - Respuesta inmediata</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 h-48 sm:h-64 bg-gray-50">
              <div className="flex flex-col space-y-2">
                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    ¡Hola! 👋 ¿En qué podemos ayudarte hoy?
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">Continuar en WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-white text-green-500 rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 ${
          isOpen ? 'scale-0' : 'scale-100 hover:scale-105'
        }`}
        aria-label="Abrir chat de WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="h-6 w-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-medium text-gray-700 text-sm sm:text-base">Conversemos</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">En línea</span>
          </div>
        </div>
      </button>

      {/* Close Button when chat is open */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-white text-gray-600 rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn hover:bg-gray-50"
          aria-label="Cerrar chat"
        >
          <X className="h-6 w-6" />
        </button>
      )}
    </>
  );
}