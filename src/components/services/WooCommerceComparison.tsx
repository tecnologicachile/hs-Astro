import { BarChart3 } from 'lucide-react';

const comparisonData = [
  { server: 'LiteSpeed', performance: 95, security: 98, efficiency: 92 },
  { server: 'Apache', performance: 70, security: 75, efficiency: 65 },
  { server: 'Nginx', performance: 80, security: 80, efficiency: 78 },
];

export default function WooCommerceComparison() {
  return (
    <div className="bg-gradient-to-bl from-white via-slate-50 to-gray-100 py-24 sm:py-32 font-poppins">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-hs-blue to-hs-blue-light shadow-lg">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comparativa: LiteSpeed vs. Apache y Nginx
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Análisis comparativo entre LiteSpeed, Apache y Nginx mostrando por qué LiteSpeed es superior para alto tráfico.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {comparisonData.map((server) => (
              <div
                key={server.server}
                className={`rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl ${
                  server.server === 'LiteSpeed' 
                    ? 'border-hs-blue bg-gradient-to-br from-white to-blue-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {server.server}
                  {server.server === 'LiteSpeed' && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-hs-blue to-hs-blue-light px-3 py-1 text-xs font-medium text-white shadow-sm">
                      Recomendado
                    </span>
                  )}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">Rendimiento</span>
                      <span className="font-bold text-gray-900">{server.performance}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          server.server === 'LiteSpeed' 
                            ? 'bg-gradient-to-r from-hs-blue to-hs-blue-light' 
                            : 'bg-gray-400'
                        }`}
                        style={{ width: `${server.performance}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">Seguridad</span>
                      <span className="font-bold text-gray-900">{server.security}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          server.server === 'LiteSpeed' 
                            ? 'bg-gradient-to-r from-hs-blue to-hs-blue-light' 
                            : 'bg-gray-400'
                        }`}
                        style={{ width: `${server.security}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">Eficiencia</span>
                      <span className="font-bold text-gray-900">{server.efficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          server.server === 'LiteSpeed' 
                            ? 'bg-gradient-to-r from-hs-blue to-hs-blue-light' 
                            : 'bg-gray-400'
                        }`}
                        style={{ width: `${server.efficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}