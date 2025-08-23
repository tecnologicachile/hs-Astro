import { Clock, Zap, Cloud, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap = {
  Clock,
  Zap,
  Cloud,
  Settings,
};

interface BackupFeature {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

interface ServiceBackupsProps {
  title: string;
  description: string;
  features: BackupFeature[];
  backgroundGradient?: string;
}

export default function ServiceBackups({ 
  title, 
  description, 
  features,
  backgroundGradient = "bg-gradient-to-bl from-gray-50 via-slate-50 to-blue-50"
}: ServiceBackupsProps) {
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
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={feature.title} className="relative pl-20 group">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-hs-blue to-hs-blue-light shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                <span className="text-xl">{feature.title}</span>
              </dt>
              <dd className="mt-3 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}