import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, X } from 'lucide-react';

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

export default function PDFViewer({ pdfUrl, title = "Manual" }: PDFViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(100);

  // Deshabilitar click derecho en el visor
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.pdf-viewer-container')) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // Deshabilitar teclas de impresión y guardado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloquear Ctrl+S, Ctrl+P, Ctrl+A
      if (isOpen && (e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p' || e.key === 'a')) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 50));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      {/* Botón para abrir el visor */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-hs-blue hover:bg-hs-blue-light text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        Ver {title}
      </button>

      {/* Modal del visor */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center">
          <div 
            className={`
              bg-white rounded-lg shadow-2xl pdf-viewer-container
              ${isFullscreen ? 'w-full h-full' : 'w-11/12 h-5/6 max-w-6xl'}
              transition-all duration-300
            `}
          >
            {/* Header con controles */}
            <div className="bg-gray-900 text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
              <h3 className="font-semibold text-lg">{title}</h3>
              
              <div className="flex items-center gap-4">
                {/* Controles de zoom */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleZoomOut}
                    className="p-2 hover:bg-gray-700 rounded transition-colors"
                    title="Alejar"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <span className="text-sm min-w-[50px] text-center">{zoom}%</span>
                  <button
                    onClick={handleZoomIn}
                    className="p-2 hover:bg-gray-700 rounded transition-colors"
                    title="Acercar"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>

                {/* Pantalla completa */}
                <button
                  onClick={toggleFullscreen}
                  className="p-2 hover:bg-gray-700 rounded transition-colors"
                  title="Pantalla completa"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>

                {/* Cerrar */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-700 rounded transition-colors"
                  title="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Contenedor del PDF */}
            <div 
              className="relative h-[calc(100%-60px)] overflow-hidden bg-gray-100"
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Overlay invisible para prevenir interacciones */}
              <div className="absolute inset-0 z-10 pointer-events-none" />
              
              {/* iframe del PDF */}
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                className="w-full h-full border-0"
                style={{ 
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'top center',
                  width: `${10000 / zoom}%`,
                  height: `${10000 / zoom}%`,
                  pointerEvents: 'auto'
                }}
                title={title}
              />

              {/* Marca de agua opcional */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 text-gray-900 text-6xl font-bold rotate-45 select-none">
                SOLO LECTURA
              </div>
            </div>

            {/* Footer con información */}
            <div className="bg-gray-100 px-4 py-2 text-center text-xs text-gray-600 rounded-b-lg">
              Este documento es solo para visualización. Prohibida su descarga o distribución.
            </div>
          </div>
        </div>
      )}

      {/* Estilos adicionales para deshabilitar selección */}
      <style jsx>{`
        .pdf-viewer-container {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        .pdf-viewer-container iframe {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
        }
      `}</style>
    </>
  );
}