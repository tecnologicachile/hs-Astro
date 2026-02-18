const logos = [
  { id: 1, name: 'Surdent', src: '/logos/surdent.webp', alt: 'Surdent - Cliente Hosting Sistemas Chile, soluciones dentales' },
  { id: 2, name: 'RefriChile', src: '/logos/refrichile.png', alt: 'RefriChile - Cliente Hosting Sistemas, empresa chilena de refrigeración' },
  { id: 3, name: 'Tritec', src: '/logos/tritec.webp', alt: 'Tritec - Cliente Hosting Sistemas Chile, empresa tecnológica' },
  { id: 4, name: 'Clandent', src: '/logos/clandent.webp', alt: 'Clandent - Cliente Hosting Sistemas, clínica dental en Chile' },
  { id: 5, name: 'Punto Exacto', src: '/logos/punto-exacto.webp', alt: 'Punto Exacto - Cliente Hosting Sistemas Chile, empresa de servicios' },
  { id: 6, name: 'Sagita', src: '/logos/sagita.png', alt: 'Sagita - Cliente Hosting Sistemas, empresa chilena de software' },
];

export default function LogoCarousel() {
  return (
    <div className="bg-gray-50 py-10 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-8">
          Empresas que confían en nosotros
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-10 items-center">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center h-20"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.name === 'Sagita' ? 'max-h-12' : 'max-h-16'} max-w-full object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-200`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <span class="text-gray-400 font-medium text-xs">${logo.name}</span>
                    `;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
