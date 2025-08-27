interface PageHeroProps {
  title: string;
  subtitle: string;
  showBreadcrumb?: boolean;
  breadcrumbItems?: Array<{
    name: string;
    href?: string;
  }>;
  variant?: 'default' | 'compact';
}

export default function PageHero({ 
  title, 
  subtitle, 
  showBreadcrumb = false, 
  breadcrumbItems = [],
  variant = 'default'
}: PageHeroProps) {
  const containerClasses = variant === 'compact' 
    ? "bg-gradient-to-br from-hs-blue via-hs-blue-light to-hs-blue-lighter py-16 sm:py-20"
    : "bg-gradient-to-br from-hs-blue via-hs-blue-light to-hs-blue-lighter py-24 sm:py-32";

  return (
    <div className={containerClasses}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          {showBreadcrumb && breadcrumbItems.length > 0 && (
            <nav className="flex items-center gap-2 text-sm text-blue-100 mb-8">
              {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.href ? (
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.name}
                    </a>
                  ) : (
                    <span className="text-white">{item.name}</span>
                  )}
                  {index < breadcrumbItems.length - 1 && <span>/</span>}
                </div>
              ))}
            </nav>
          )}
          
          {/* Hero Content */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}