import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm">
        {/* Home link */}
        <li>
          <a
            href="/"
            className="flex items-center gap-1.5 text-gray-500 hover:text-hs-blue transition-colors py-1 px-2 -ml-2 rounded-md hover:bg-gray-100"
            title="Ir al inicio"
          >
            <Home className="h-4 w-4 flex-shrink-0" />
            <span className="hidden sm:inline">Inicio</span>
          </a>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4 text-gray-300 flex-shrink-0" />
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="text-gray-500 hover:text-hs-blue transition-colors py-1 px-2 rounded-md hover:bg-gray-100 truncate max-w-[200px]"
                  title={item.name}
                >
                  {item.name}
                </a>
              ) : (
                <span
                  className="text-gray-900 font-medium py-1 px-2 truncate max-w-[200px]"
                  aria-current="page"
                  title={item.name}
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
