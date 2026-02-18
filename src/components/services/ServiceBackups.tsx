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
  backgroundGradient = "bg-white"
}: ServiceBackupsProps) {
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
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div key={feature.title} className="relative group text-center">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-hs-blue text-white mb-5">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900 mb-2">
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
