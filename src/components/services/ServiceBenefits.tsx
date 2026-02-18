import { Zap, TrendingUp, ShieldCheck, LifeBuoy, TrendingDown, RefreshCw, CheckCircle, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap = {
  Zap,
  TrendingUp,
  ShieldCheck,
  LifeBuoy,
  TrendingDown,
  RefreshCw,
  CheckCircle,
  Clock,
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
  backgroundGradient = "bg-gray-50"
}: ServiceBenefitsProps) {
  return (
    <div id="caracteristicas" className={`${backgroundGradient} py-16 sm:py-20`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-6xl">
          <dl className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:gap-x-16">
            {benefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <div key={benefit.title} className="relative group">
                  <dt className="flex items-start gap-x-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-hs-blue text-white">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-base font-semibold leading-7 text-gray-900 mt-1.5">{benefit.title}</span>
                  </dt>
                  <dd className="mt-3 text-sm leading-6 text-gray-500 pl-[3.75rem]">
                    {benefit.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        {additionalContent && (
          <div className="mx-auto mt-14 max-w-4xl">
            {additionalContent}
          </div>
        )}

        <div className="mt-14 text-center">
          <a
            href={ctaLink}
            className="inline-flex items-center rounded-lg bg-hs-blue px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-hs-blue-light hover:shadow-md transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hs-blue"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}
