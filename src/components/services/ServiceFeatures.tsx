import {
  TrendingUp,
  Shield,
  RefreshCw,
  Headphones,
  MapPin,
  Server,
  Zap,
  Users,
  Globe,
  Award,
  CheckCircle,
  Clock,
  LifeBuoy,
  ShieldCheck
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap = {
  TrendingUp,
  Shield,
  RefreshCw,
  Headphones,
  MapPin,
  Server,
  Zap,
  Users,
  Globe,
  Award,
  CheckCircle,
  Clock,
  LifeBuoy,
  ShieldCheck,
};

interface Feature {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  title: string;
  description: string;
  features: Feature[];
  gridCols?: 2 | 3 | 4 | 5;
  backgroundGradient?: string;
}

export default function ServiceFeatures({
  title,
  description,
  features,
  gridCols = 2,
  backgroundGradient = "bg-white"
}: ServiceFeaturesProps) {
  const gridClass = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-2 xl:grid-cols-3',
    4: 'lg:grid-cols-2 xl:grid-cols-4',
    5: 'lg:grid-cols-2 xl:grid-cols-3'
  }[gridCols];

  return (
    <div className={`${backgroundGradient} py-16 sm:py-20`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500">
            {description}
          </p>
        </div>
        <div className={`mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 ${gridClass}`}>
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className={`group relative flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-6 hover:border-hs-blue/30 hover:shadow-sm transition-all duration-200 ${
                  gridCols === 5 && index === 4 ? 'lg:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-hs-blue/8 text-hs-blue group-hover:bg-hs-blue group-hover:text-white transition-colors duration-200">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
