import { Check, Minus } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  woocommerce: string;
  prestashop: string;
  magento: string;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Facilidad de Uso",
    woocommerce: "Alta",
    prestashop: "Media",
    magento: "Baja"
  },
  {
    feature: "Costo Inicial",
    woocommerce: "Bajo",
    prestashop: "Medio",
    magento: "Alto"
  },
  {
    feature: "Escalabilidad",
    woocommerce: "Media-Alta",
    prestashop: "Alta",
    magento: "Muy Alta"
  },
  {
    feature: "Personalización",
    woocommerce: "Alta",
    prestashop: "Alta",
    magento: "Muy Alta"
  },
  {
    feature: "Hosting Requerido",
    woocommerce: "VPS/Cloud",
    prestashop: "VPS/Cloud",
    magento: "Dedicado"
  },
  {
    feature: "Comunidad/Soporte",
    woocommerce: "Muy Grande",
    prestashop: "Grande",
    magento: "Grande"
  },
  {
    feature: "Ideal para",
    woocommerce: "Pymes",
    prestashop: "Medianas",
    magento: "Grandes"
  }
];

export default function PlatformComparison() {
  const getCellStyle = (value: string) => {
    if (value.includes("Alta") || value.includes("Grande") || value.includes("Bajo")) {
      return "text-green-600 font-medium";
    }
    if (value.includes("Media") || value.includes("Medio")) {
      return "text-yellow-600 font-medium";
    }
    if (value.includes("Baja") || value.includes("Alto")) {
      return "text-orange-600 font-medium";
    }
    return "text-gray-700";
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Comparativa: Plataformas E-commerce
          </h2>
          <p className="text-gray-600">
            Elige la plataforma correcta para tu negocio online
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-hs-blue to-hs-blue-light text-white">
                <th className="p-4 text-left font-semibold">Característica</th>
                <th className="p-4 text-center font-semibold">WooCommerce</th>
                <th className="p-4 text-center font-semibold">PrestaShop</th>
                <th className="p-4 text-center font-semibold">Magento</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="p-4 font-semibold text-gray-900 border-b border-gray-100">
                    {row.feature}
                  </td>
                  <td className={`p-4 text-center border-b border-gray-100 ${getCellStyle(row.woocommerce)}`}>
                    {row.woocommerce}
                  </td>
                  <td className={`p-4 text-center border-b border-gray-100 ${getCellStyle(row.prestashop)}`}>
                    {row.prestashop}
                  </td>
                  <td className={`p-4 text-center border-b border-gray-100 ${getCellStyle(row.magento)}`}>
                    {row.magento}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-sm text-gray-700">
            <strong className="text-hs-blue">Recomendación:</strong> WooCommerce es ideal para tiendas nuevas o medianas que buscan flexibilidad.
            PrestaShop para operaciones más profesionales con necesidades específicas.
            Magento para grandes empresas con alto volumen de productos y transacciones.
          </p>
        </div>
      </div>
    </section>
  );
}
