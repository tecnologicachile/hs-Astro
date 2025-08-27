import { Zap, TrendingUp, ShieldCheck, LifeBuoy, TrendingDown, RefreshCw, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap = {
  Zap,
  TrendingUp,
  ShieldCheck,
  LifeBuoy,
  TrendingDown,
  RefreshCw,
  CheckCircle,
};

interface Benefit {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  title: string;
  description: string;
  benefits: Benefit[];
  ctaText: string;
  ctaLink?: string;
  additionalContent?: React.ReactNode;
  backgroundGradient?: string;
}

export default function ServiceBenefits({ 
  title, 
  description, 
  benefits,
  ctaText,
  ctaLink = "/contacto",
  additionalContent,
  backgroundGradient = "bg-gradient-to-br from-blue-50 via-white to-slate-50"
}: ServiceBenefitsProps) {
  return (
    <div id="caracteristicas" className={`${backgroundGradient} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-6xl sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:gap-x-16">
            {benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <div key={benefit.title} className="relative group">
                  <dt className="flex items-start gap-x-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-hs-blue to-hs-blue-light shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-xl font-semibold leading-7 text-gray-900 mt-2">{benefit.title}</span>
                  </dt>
                  <dd className="mt-4 ml-18 text-base leading-7 text-gray-600">
                    {benefit.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
        
        {additionalContent && (
          <div className="mx-auto mt-16 max-w-4xl">
            {additionalContent}
          </div>
        )}

        <div className="mt-16 text-center">
          <a
            href={ctaLink}
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-hs-blue to-hs-blue-light px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:from-hs-blue-light hover:to-hs-blue-lighter transform hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hs-blue"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}