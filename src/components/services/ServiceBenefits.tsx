import { Zap, TrendingUp, ShieldCheck, LifeBuoy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap = {
  Zap,
  TrendingUp,
  ShieldCheck,
  LifeBuoy,
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
    <div id="caracteristicas" className={`${backgroundGradient} py-24 sm:py-32 font-poppins`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <div key={benefit.title} className="relative pl-20 group">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-hs-blue to-hs-blue-light shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                  <span className="text-xl">{benefit.title}</span>
                </dt>
                <dd className="mt-3 text-base leading-7 text-gray-600">
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