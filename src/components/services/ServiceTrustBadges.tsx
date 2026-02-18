import { Shield, Clock, Award } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    text: '99.9% Uptime',
    subtext: 'Garantizado',
  },
  {
    icon: Clock,
    text: 'Soporte Experto',
    subtext: 'Especializado',
  },
  {
    icon: Award,
    text: '+10 Años',
    subtext: 'Experiencia',
  },
];

export default function ServiceTrustBadges() {
  return (
    <div className="bg-white border-t border-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-hs-blue/8 mb-3">
                <badge.icon className="h-5 w-5 text-hs-blue" />
              </div>
              <div className="text-base font-semibold text-gray-900">{badge.text}</div>
              <div className="text-sm text-gray-500">{badge.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}