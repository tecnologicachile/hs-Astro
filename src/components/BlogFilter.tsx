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
    <div className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <Tag className="h-4 w-4 text-gray-400" />
            <h2 className="text-sm font-semibold text-gray-900">Filtrar por categoría</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-hs-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Todas
              <span className={`ml-1.5 text-xs ${selectedCategory === 'all' ? 'text-white/70' : 'text-gray-400'}`}>
                {posts.length}
              </span>
            </button>

            {categories.map((category) => {
              const categoryCount = posts.filter(p => p.data.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-hs-blue text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                  <span className={`ml-1.5 text-xs ${selectedCategory === category ? 'text-white/70' : 'text-gray-400'}`}>
                    {categoryCount}
                  </span>
                </button>
              );
            })}
          </div>

          {selectedCategory !== 'all' && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-gray-400">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo' : 'artículos'}
              </span>
              <button
                onClick={() => setSelectedCategory('all')}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-100 text-xs text-gray-500 hover:bg-gray-200 transition-colors duration-200"
              >
                Limpiar
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group border border-gray-200 rounded-xl hover:border-hs-blue/30 hover:shadow-sm transition-all duration-200 overflow-hidden"
              >
                <a href={`/blog/${post.slug}`} className="block">
                  {post.data.image ? (
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={post.data.image}
                        alt={post.data.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video w-full bg-gray-50 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {post.data.category}
                      </span>
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-hs-blue/8 text-hs-blue">
                        {post.data.category}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-hs-blue transition-colors duration-200 line-clamp-2">
                      {post.data.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                      {post.data.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <time
                        dateTime={post.data.pubDate.toISOString()}
                        className="text-xs text-gray-400"
                      >
                        {post.data.pubDate.toLocaleDateString('es-CL', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </time>
                      <span className="text-xs font-medium text-hs-blue">Leer</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Tag className="h-8 w-8 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-medium text-gray-900 mb-2">No hay artículos en esta categoría</h3>
            <p className="text-sm text-gray-500 mb-5">Intenta seleccionar otra categoría</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-4 py-2 bg-hs-blue text-white text-sm rounded-lg hover:bg-hs-blue-light transition-colors duration-200"
            >
              Ver todos
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
