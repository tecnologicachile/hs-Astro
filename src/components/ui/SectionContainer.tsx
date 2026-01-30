import { ReactNode } from 'react';
import { clsx } from 'clsx';

type PaddingSize = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type BackgroundVariant = 'white' | 'gray' | 'blue-tint' | 'gradient-brand' | 'dark';

const paddingClasses: Record<PaddingSize, string> = {
  none: '',
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-20',
  lg: 'py-20 sm:py-24',
  xl: 'py-24 sm:py-32',
};

const backgroundClasses: Record<BackgroundVariant, string> = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  'blue-tint': 'bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50',
  'gradient-brand': 'bg-gradient-to-br from-hs-blue via-hs-blue-light to-hs-blue-lighter',
  dark: 'bg-gray-900',
};

interface SectionContainerProps {
  children: ReactNode;
  padding?: PaddingSize;
  background?: BackgroundVariant;
  className?: string;
  as?: 'section' | 'div' | 'article';
  id?: string;
}

export default function SectionContainer({
  children,
  padding = 'lg',
  background = 'white',
  className,
  as: Component = 'section',
  id,
}: SectionContainerProps) {
  return (
    <Component
      id={id}
      className={clsx(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </Component>
  );
}
