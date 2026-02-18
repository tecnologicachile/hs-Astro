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
    ? "bg-hs-blue py-12 sm:py-16"
    : "bg-hs-blue py-16 sm:py-20";

  return (
    <div className={containerClasses}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {showBreadcrumb && breadcrumbItems.length > 0 && (
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.href ? (
                    <a href={item.href} className="hover:text-white/90 transition-colors duration-200">
                      {item.name}
                    </a>
                  ) : (
                    <span className="text-white/90">{item.name}</span>
                  )}
                  {index < breadcrumbItems.length - 1 && <span>/</span>}
                </div>
              ))}
            </nav>
          )}

          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight mb-4">
              {title}
            </h1>
            <p className="text-base leading-7 text-blue-100/60 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
