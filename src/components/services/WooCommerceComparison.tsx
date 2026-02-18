import { BarChart3 } from 'lucide-react';

const comparisonData = [
  { server: 'LiteSpeed', performance: 95, security: 98, efficiency: 92 },
  { server: 'Apache', performance: 70, security: 75, efficiency: 65 },
  { server: 'Nginx', performance: 80, security: 80, efficiency: 78 },
];

export default function WooCommerceComparison() {
  return (
    <div className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-hs-blue">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comparativa: LiteSpeed vs. Apache y Nginx
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500">
            Análisis comparativo entre LiteSpeed, Apache y Nginx mostrando por qué LiteSpeed es superior para alto tráfico.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {comparisonData.map((server) => (
              <div
                key={server.server}
                className={`rounded-xl border p-8 transition-all duration-200 ${
                  server.server === 'LiteSpeed'
                    ? 'border-hs-blue bg-white shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                  {server.server}
                  {server.server === 'LiteSpeed' && (
                    <span className="ml-2 inline-flex items-center rounded-lg bg-hs-blue px-2.5 py-0.5 text-xs font-medium text-white">
                      Recomendado
                    </span>
                  )}
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500 font-medium">Rendimiento</span>
                      <span className="font-semibold text-gray-900">{server.performance}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          server.server === 'LiteSpeed' ? 'bg-hs-blue' : 'bg-gray-400'
                        }`}
                        style={{ width: `${server.performance}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500 font-medium">Seguridad</span>
                      <span className="font-semibold text-gray-900">{server.security}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          server.server === 'LiteSpeed' ? 'bg-hs-blue' : 'bg-gray-400'
                        }`}
                        style={{ width: `${server.security}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500 font-medium">Eficiencia</span>
                      <span className="font-semibold text-gray-900">{server.efficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          server.server === 'LiteSpeed' ? 'bg-hs-blue' : 'bg-gray-400'
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
