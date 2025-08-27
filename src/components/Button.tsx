import type { ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'gradient' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  target
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  
  const variantClasses = {
    primary: 'bg-white text-hs-blue shadow-lg hover:bg-gray-50 hover:shadow-xl transform hover:scale-105 focus-visible:outline-hs-blue',
    secondary: 'bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 focus-visible:outline-white',
    gradient: 'bg-gradient-to-r from-hs-blue to-hs-blue-light text-white shadow-lg hover:shadow-xl hover:from-hs-blue-light hover:to-hs-blue-lighter transform hover:scale-105 focus-visible:outline-hs-blue',
    ghost: 'text-hs-blue hover:text-hs-blue-light hover:bg-hs-blue/5'
  };

  const sizeClasses = {
    sm: 'rounded-lg px-4 py-2 text-sm',
    md: 'rounded-xl px-8 py-4 text-base',
    lg: 'rounded-xl px-10 py-5 text-lg'
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed transform-none hover:scale-100 hover:shadow-lg' 
    : '';

  const combinedClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    className
  );

  const commonProps = {
    className: combinedClasses,
    onClick: disabled ? undefined : onClick,
    disabled
  };

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      {...commonProps}
    >
      {children}
    </button>
  );
}