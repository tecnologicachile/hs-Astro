import { useState } from 'react';
import { X } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-80 sm:w-96 max-w-[calc(100vw-2rem)] animate-slideUp">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-[#075E54] text-white p-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center">
                  <WhatsAppIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Hosting Sistemas</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                    <p className="text-sm text-white/80">Disponible</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Cerrar chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div
              className="p-4 h-36"
              style={{
                backgroundColor: '#ECE5DD',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4cdc4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            >
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%]">
                <p className="text-sm text-gray-800">
                  ¡Hola! ¿En qué podemos ayudarte?
                </p>
                <span className="text-[10px] text-gray-400 block text-right mt-1">Ahora</span>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-[#F0F0F0]">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full py-3 flex items-center justify-center gap-2 transition-colors font-medium"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Iniciar conversación
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Pill Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full pl-4 pr-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 hover:scale-105'
        }`}
        aria-label="Abrir chat de WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="font-medium text-sm">Chatea con nosotros</span>
      </button>

      {/* Close Button */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed bottom-6 right-6 z-50 bg-gray-600 hover:bg-gray-700 text-white rounded-full pl-4 pr-5 py-3 shadow-lg flex items-center gap-3 transition-all"
          aria-label="Cerrar chat"
        >
          <X className="h-6 w-6" />
          <span className="font-medium text-sm">Cerrar</span>
        </button>
      )}
    </>
  );
}
