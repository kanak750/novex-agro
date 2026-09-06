import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowLight?: boolean;
  eyebrowBlue?: boolean;
  light?: boolean;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowLight = false,
  eyebrowBlue = false,
  light = false,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <p className={eyebrowLight ? 'eyebrow-light mb-4' : eyebrowBlue ? 'eyebrow-blue mb-4' : 'eyebrow mb-4'}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-heading text-balance ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/80' : 'text-muted'} ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
