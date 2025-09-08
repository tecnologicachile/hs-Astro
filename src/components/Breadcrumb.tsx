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
    <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {/* Home link */}
        <li>
          <a 
            href="/" 
            className="text-gray-500 hover:text-gray-700 transition-colors flex items-center"
            title="Ir al inicio"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Inicio</span>
          </a>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-gray-400" />
            {item.href && index < items.length - 1 ? (
              <a
                href={item.href}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                title={`Ir a ${item.name}`}
              >
                {item.name}
              </a>
            ) : (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}