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
    <div className="bg-gradient-to-br from-hs-blue via-hs-blue-light to-hs-blue-lighter py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
              <Icon className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight sm:leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/90">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={ctaLink}
              className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-hs-blue shadow-lg hover:bg-gray-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {ctaText}
            </a>
            <a href={anchorLink} className="text-sm font-semibold leading-6 text-white hover:text-white/90 inline-flex items-center gap-2">
              Ver Características <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}