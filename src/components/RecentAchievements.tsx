import { Cloud, Shield, Zap, Users } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: 'cloud' | 'shield' | 'zap' | 'users';
}

const iconComponents = {
  cloud: Cloud,
  shield: Shield,
  zap: Zap,
  users: Users
};

interface RecentAchievementsProps {
  achievements?: Achievement[];
}

const defaultAchievements: Achievement[] = [
  {
    title: 'Expansión de Servicios Cloud',
    description: 'Implementación de nuevas opciones de hosting en la nube para mayor escalabilidad y redundancia.',
    date: '2025',
    icon: 'cloud'
  },
  {
    title: 'Mejoras de Seguridad',
    description: 'Actualización de protocolos de seguridad con protección DDoS avanzada y certificados SSL de última generación.',
    date: 'Enero 2026',
    icon: 'shield'
  },
  {
    title: 'Nuevas Integraciones E-commerce',
    description: 'Soporte ampliado para nuevas plataformas y mejoras en sincronización ERPSync con Softland.',
    date: 'Enero 2026',
    icon: 'zap'
  },
  {
    title: 'Equipo Técnico Expandido',
    description: 'Incorporación de especialistas certificados en cloud computing y seguridad informática.',
    date: '2025',
    icon: 'users'
  }
];

export default function RecentAchievements({ achievements = defaultAchievements }: RecentAchievementsProps) {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Logros Recientes
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Nuestra evolución continua para ofrecer los mejores servicios
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((achievement) => {
          const IconComponent = iconComponents[achievement.icon];
          return (
            <div
              key={achievement.title}
              className="flex gap-4 rounded-2xl bg-gradient-to-br from-hs-blue/5 to-hs-blue-light/5 border border-hs-blue/10 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-hs-blue to-hs-blue-light rounded-xl">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {achievement.description}
                </p>
                <span className="inline-flex items-center text-xs font-medium text-hs-blue bg-hs-blue/10 px-2 py-1 rounded-full">
                  {achievement.date}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
