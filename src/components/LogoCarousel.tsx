import { useEffect, useRef } from 'react';

const logos = [
  { id: 1, name: 'Surdent', src: '/logos/LogoSurdent-1.webp' },
  { id: 2, name: 'RCCE', src: '/logos/RCCE.png' },
  { id: 3, name: 'Tritec', src: '/logos/TritecCE-1024x936.png.webp' },
  { id: 4, name: 'Clandent', src: '/logos/clandent-caso-de-exito-1024x936.jpg.webp' },
  { id: 5, name: 'Punto Exacto', src: '/logos/punto-exacto-casos-de-exito-1024x936.jpg.webp' },
];

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white py-6 sm:py-8 font-poppins border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Empresas que confían en nosotros
          </h3>
          <p className="mt-2 text-2xl font-bold text-gray-900">
            Nuestros Clientes
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            <div className="flex animate-scroll">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-shrink-0 px-10"
                >
                  <div className="h-24 w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
                              <span class="text-gray-400 font-semibold text-sm">${logo.name}</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
}