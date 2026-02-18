import { ArrowRight, BookOpen, Calendar } from 'lucide-react';

interface BlogPost {
  title: string;
  description: string;
  slug: string;
  category: string;
  pubDate: string;
}

const blogPostsByService: Record<string, BlogPost[]> = {
  'hosting-softland-erp': [
    {
      title: 'Manuales Softland ERP: Guía Completa de Todos los Módulos',
      description: 'Accede a todos los manuales de Softland ERP en un solo lugar con guías completas para cada módulo.',
      slug: 'manuales-softland-erp-guia-completa-modulos',
      category: 'Softland ERP',
      pubDate: '2025-08-28'
    },
    {
      title: 'Manual Softland CW – Contabilidad y Presupuestos',
      description: 'Guía completa del módulo Softland CW para gestión financiera empresarial.',
      slug: 'manual-softland-cw-contabilidad-presupuestos-guia-completa',
      category: 'Softland ERP',
      pubDate: '2025-08-27'
    },
    {
      title: 'Manual Softland IW – Inventario y Facturación',
      description: 'Control integral de bodegas y documentos tributarios con Softland IW.',
      slug: 'manual-softland-iw-inventario-facturacion-guia-completa',
      category: 'Softland ERP',
      pubDate: '2025-08-27'
    }
  ],
  'hosting-woocommerce': [
    {
      title: 'Hosting E-commerce Chile Optimizado - Guía Completa',
      description: 'Guía de hosting e-commerce en Chile: criterios de selección y requisitos técnicos.',
      slug: 'hosting-optimizado-woocommerce-guia-completa',
      category: 'E-commerce',
      pubDate: '2025-08-27'
    }
  ],
  'sincronizacion': [
    {
      title: 'Manuales Softland ERP: Guía Completa de Todos los Módulos',
      description: 'Accede a todos los manuales de Softland ERP para entender la integración con e-commerce.',
      slug: 'manuales-softland-erp-guia-completa-modulos',
      category: 'Softland ERP',
      pubDate: '2025-08-28'
    },
    {
      title: 'Hosting E-commerce Chile Optimizado - Guía Completa',
      description: 'Guía de hosting e-commerce para optimizar tu tienda antes de sincronizar.',
      slug: 'hosting-optimizado-woocommerce-guia-completa',
      category: 'E-commerce',
      pubDate: '2025-08-27'
    }
  ],
  'soporte-softland-erp': [
    {
      title: 'Manuales Softland ERP: Guía Completa de Todos los Módulos',
      description: 'Accede a todos los manuales de Softland ERP para resolver dudas comunes.',
      slug: 'manuales-softland-erp-guia-completa-modulos',
      category: 'Softland ERP',
      pubDate: '2025-08-28'
    },
    {
      title: 'Manual Softland SW – Recursos Humanos',
      description: 'Administración integral del personal con el módulo Softland SW.',
      slug: 'manual-softland-sw-recursos-humanos-guia-completa',
      category: 'Softland ERP',
      pubDate: '2025-08-27'
    },
    {
      title: 'Manual Softland EW – Sueldos',
      description: 'Guía completa para la gestión de remuneraciones con Softland EW.',
      slug: 'manual-softland-ew-sueldos-guia-completa',
      category: 'Softland ERP',
      pubDate: '2025-08-27'
    }
  ]
};

interface RelatedBlogPostsProps {
  serviceId: string;
  title?: string;
  description?: string;
}

export default function RelatedBlogPosts({
  serviceId,
  title = "Artículos Relacionados",
  description = "Recursos y guías para aprovechar al máximo tu servicio"
}: RelatedBlogPostsProps) {
  const posts = blogPostsByService[serviceId] || [];

  if (posts.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-hs-blue uppercase tracking-widest mb-3">Blog</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-gray-200 rounded-xl p-6 hover:border-hs-blue/30 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-hs-blue/8 text-hs-blue">
                  {post.category}
                </span>
                <div className="flex items-center text-xs text-gray-400">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(post.pubDate).toLocaleDateString('es-CL', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </div>
              </div>
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-hs-blue transition-colors duration-200 mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                {post.description}
              </p>
              <div className="flex items-center text-hs-blue text-sm font-medium">
                Leer artículo
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
