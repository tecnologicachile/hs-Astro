import { Clock, Zap, Cloud, Settings, Shield, Lock, Server, Activity } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap = {
  Clock,
  Zap,
  Cloud,
  Settings,
  Shield,
  Lock,
  Server,
  Activity,
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
    <div className={`${backgroundGradient} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={feature.title} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-hs-blue to-hs-blue-light shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-gray-600">
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