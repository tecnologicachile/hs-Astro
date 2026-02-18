export default function WindowsServerInfo() {
  return (
    <div className="rounded-xl bg-hs-blue p-8 text-center">
      <h3 className="text-xl font-bold text-white mb-4">
        Optimizado para Windows Server
      </h3>
      <p className="text-base text-blue-100/60 mb-6">
        Nuestros servidores Windows están configurados específicamente para Softland ERP, garantizando compatibilidad total y rendimiento óptimo con todas las versiones del sistema.
      </p>
      <div className="flex flex-wrap justify-center gap-3 text-sm text-blue-100/80">
        <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-lg">Windows Server 2019/2022</span>
        <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-lg">SQL Server Optimizado</span>
        <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-lg">IIS Configurado</span>
      </div>
    </div>
  );
}
