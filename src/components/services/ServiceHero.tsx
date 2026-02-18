import { ArrowRight, ShoppingCart, Database, RefreshCw, Headphones } from 'lucide-react';

const iconMap = {
  ShoppingCart,
  Database,
  RefreshCw,
  Headphones,
};

interface ServiceHeroProps {
  iconName: keyof typeof iconMap;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  anchorLink?: string;
}

export default function ServiceHero({
  iconName,
  title,
  subtitle,
  ctaText = "Solicitar Cotización",
  ctaLink = "/contacto",
  anchorLink = "#caracteristicas"
}: ServiceHeroProps) {
  const Icon = iconMap[iconName];

  return (
    <div className="bg-hs-blue py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-white/10">
              <Icon className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight">
            {title}
          </h1>
          <p className="mt-5 text-base leading-7 text-blue-100/60 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a
              href={ctaLink}
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-hs-blue shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200"
            >
              {ctaText}
            </a>
            <a href={anchorLink} className="text-sm font-medium text-white/70 hover:text-white inline-flex items-center gap-1.5 transition-colors duration-200">
              Ver Características <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
