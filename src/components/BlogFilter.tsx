import { useState, useEffect } from 'react';
import { Tag, X } from 'lucide-react';

interface BlogFilterProps {
  categories: string[];
  posts: any[];
}

export default function BlogFilter({ categories, posts }: BlogFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.data.category === selectedCategory));
    }
  }, [selectedCategory, posts]);

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Tag className="h-6 w-6 text-hs-blue" />
            <h2 className="text-2xl font-bold text-gray-900">Filtrar por categoría</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`
                px-4 py-2 rounded-full font-medium transition-all duration-200
                ${selectedCategory === 'all' 
                  ? 'bg-hs-blue text-white shadow-md transform scale-105' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                }
              `}
            >
              Todas las categorías
              {selectedCategory === 'all' && (
                <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-sm">
                  {posts.length}
                </span>
              )}
            </button>
            
            {categories.map((category) => {
              const categoryCount = posts.filter(p => p.data.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2
                    ${selectedCategory === category 
                      ? 'bg-hs-blue text-white shadow-md transform scale-105' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                    }
                  `}
                >
                  {category}
                  <span className={`
                    px-2 py-0.5 rounded-full text-sm
                    ${selectedCategory === category ? 'bg-white/20' : 'bg-gray-200'}
                  `}>
                    {categoryCount}
                  </span>
                </button>
              );
            })}
          </div>

          {selectedCategory !== 'all' && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Mostrando {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo' : 'artículos'} en
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-hs-blue/10 text-hs-blue text-sm font-medium">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="ml-1 hover:bg-hs-blue/20 rounded-full p-0.5 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            </div>
          )}
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.slug} 
                className="group bg-white rounded-2xl border border-gray-200 hover:border-hs-blue hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <a href={`/blog/${post.slug}`} className="block">
                  {/* Image or Placeholder */}
                  {post.data.image ? (
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={post.data.image} 
                        alt={post.data.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video w-full bg-gradient-to-br from-hs-blue via-hs-blue-light to-blue-400 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Tag className="h-8 w-8 mx-auto mb-2 opacity-60" />
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                          {post.data.category}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-4 w-4 text-hs-blue" />
                      <span className="text-sm font-medium text-hs-blue">
                        {post.data.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-hs-blue transition-colors line-clamp-2">
                      {post.data.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.data.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <time dateTime={post.data.pubDate.toISOString()}>
                          {post.data.pubDate.toLocaleDateString('es-CL', { 
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </time>
                        <span>•</span>
                        <span>5 min</span>
                      </div>
                      <div className="text-hs-blue group-hover:text-hs-blue-light transition-colors">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Tag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No hay artículos en esta categoría</h3>
            <p className="text-gray-600 mb-6">Intenta seleccionar otra categoría para ver más contenido</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-4 py-2 bg-hs-blue text-white rounded-lg hover:bg-hs-blue-light transition-colors"
            >
              Ver todos los artículos
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}