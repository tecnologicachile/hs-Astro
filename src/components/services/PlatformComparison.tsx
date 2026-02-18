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
  return (
    <section className="bg-gray-50 py-16 sm:py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Comparativa: Plataformas E-commerce
          </h2>
          <p className="text-base text-gray-500">
            Elige la plataforma correcta para tu negocio online
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg border border-gray-200 overflow-hidden">
            <thead>
              <tr className="bg-hs-blue text-white">
                <th className="p-4 text-left text-sm font-semibold">Característica</th>
                <th className="p-4 text-center text-sm font-semibold">WooCommerce</th>
                <th className="p-4 text-center text-sm font-semibold">PrestaShop</th>
                <th className="p-4 text-center text-sm font-semibold">Magento</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="p-4 text-sm font-medium text-gray-900 border-b border-gray-100">
                    {row.feature}
                  </td>
                  <td className="p-4 text-center text-sm text-gray-700 border-b border-gray-100">
                    {row.woocommerce}
                  </td>
                  <td className="p-4 text-center text-sm text-gray-700 border-b border-gray-100">
                    {row.prestashop}
                  </td>
                  <td className="p-4 text-center text-sm text-gray-700 border-b border-gray-100">
                    {row.magento}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <p className="text-sm text-gray-500">
            <strong className="text-gray-900">Recomendación:</strong> WooCommerce es ideal para tiendas nuevas o medianas que buscan flexibilidad.
            PrestaShop para operaciones más profesionales con necesidades específicas.
            Magento para grandes empresas con alto volumen de productos y transacciones.
          </p>
        </div>
      </div>
    </section>
  );
}
