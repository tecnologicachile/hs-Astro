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
    <nav className={className} aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-sm">
        <li>
          <a
            href="/"
            className="text-gray-400 hover:text-gray-700 transition-colors duration-200"
            title="Ir al inicio"
          >
            <Home className="h-3.5 w-3.5" />
          </a>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-gray-300" />
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="text-gray-400 hover:text-gray-700 transition-colors duration-200 truncate max-w-[200px]"
                  title={item.name}
                >
                  {item.name}
                </a>
              ) : (
                <span
                  className="text-gray-700 font-medium truncate max-w-[200px]"
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
