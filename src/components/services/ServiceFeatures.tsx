import { 
  TrendingUp, 
  Shield, 
  RefreshCw, 
  Headphones, 
  MapPin, 
  Server, 
  Zap
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
  backgroundGradient = "bg-gradient-to-tr from-white via-slate-50 to-blue-50"
}: ServiceFeaturesProps) {
  const gridClass = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-2 xl:grid-cols-3',
    4: 'lg:grid-cols-2 xl:grid-cols-4',
    5: 'lg:grid-cols-2 xl:grid-cols-3'
  }[gridCols];

  return (
    <div className={`${backgroundGradient} py-24 sm:py-32 font-poppins`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
        <div className={`mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 ${gridClass}`}>
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className={`group relative flex flex-col gap-6 rounded-2xl bg-white border border-gray-200 p-8 hover:border-hs-blue hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-slate-50 transition-all duration-300 ${
                  gridCols === 5 && index === 4 ? 'lg:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-hs-blue to-hs-blue-light text-white group-hover:shadow-lg transition-all duration-300">
                  <IconComponent className="h-7 w-7" />
                </div>
              <div>
                <h3 className="text-xl font-semibold leading-8 text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-base leading-7 text-gray-600">
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