import { clsx } from 'clsx';

type TextAlign = 'left' | 'center';
type ColorScheme = 'dark' | 'light';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: TextAlign;
  colorScheme?: ColorScheme;
  className?: string;
  titleClassName?: string;
  badge?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  colorScheme = 'dark',
  className,
  titleClassName,
  badge,
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const maxWidthClass = align === 'center' ? 'max-w-2xl' : '';

  const titleColor = colorScheme === 'dark' ? 'text-gray-900' : 'text-white';
  const subtitleColor = colorScheme === 'dark' ? 'text-hs-blue' : 'text-blue-200';
  const descriptionColor = colorScheme === 'dark' ? 'text-gray-600' : 'text-blue-100';

  return (
    <div className={clsx(alignClasses, maxWidthClass, className)}>
      {badge && (
        <span className={clsx(
          'inline-block text-sm font-semibold uppercase tracking-wide mb-4 px-3 py-1 rounded-full',
          colorScheme === 'dark'
            ? 'text-hs-blue bg-hs-blue/10'
            : 'text-blue-200 bg-white/10'
        )}>
          {badge}
        </span>
      )}

      {subtitle && (
        <p className={clsx(
          'text-base font-semibold leading-7 mb-2',
          subtitleColor
        )}>
          {subtitle}
        </p>
      )}

      <h2 className={clsx(
        'text-3xl font-bold tracking-tight sm:text-4xl',
        titleColor,
        titleClassName
      )}>
        {title}
      </h2>

      {description && (
        <p className={clsx(
          'mt-4 text-lg leading-8',
          descriptionColor
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
