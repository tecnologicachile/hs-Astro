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
            <h2 className="text-2xl font-bold text-gray-900 font-poppins">Filtrar por categoría</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`
                px-4 py-2 rounded-full font-medium transition-all duration-200
                ${selectedCategory === 'all' 
                  ? 'bg-blue-600 text-white shadow-md transform scale-105' 
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
                      ? 'bg-blue-600 text-white shadow-md transform scale-105' 
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
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors"
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
                className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <a href={`/blog/${post.slug}`} className="block">
                  {post.data.image ? (
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      <img
                        src={post.data.image}
                        alt={post.data.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">
                        {post.data.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 font-poppins">
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
                      <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
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
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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