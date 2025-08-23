export default function WindowsServerInfo() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-hs-blue to-hs-blue-light p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">
        Optimizado para Windows Server
      </h3>
      <p className="text-blue-100 text-lg mb-6">
        Nuestros servidores Windows están configurados específicamente para Softland ERP, garantizando compatibilidad total y rendimiento óptimo con todas las versiones del sistema.
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100">
        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Windows Server 2019/2022</span>
        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">SQL Server Optimizado</span>
        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">IIS Configurado</span>
      </div>
    </div>
  );
}