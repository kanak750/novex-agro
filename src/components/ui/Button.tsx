import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';

const MotionLink = motion.create(Link);

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'navy';
type Size = 'sm' | 'md' | 'lg';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit';
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  disabled?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-green disabled:opacity-50 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary: 'bg-brand-green text-white hover:bg-brand-green/90 shadow-sm hover:shadow-md',
  secondary: 'bg-brand-blue text-white hover:bg-brand-blue/90 shadow-sm hover:shadow-md',
  outline: 'border border-navy/20 text-ink hover:border-navy hover:bg-navy/5',
  ghost: 'text-ink hover:bg-navy/5',
  white: 'bg-white text-navy hover:bg-cream shadow-sm hover:shadow-md',
  navy: 'bg-navy text-white hover:bg-navy-800 shadow-sm hover:shadow-md',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function ButtonLink({ to, children, variant = 'primary', size = 'md', className = '' }: ButtonLinkProps) {
  return (
    <MotionLink 
      to={to} 
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </MotionLink>
  );
}

export function Button({ onClick, type = 'button', children, variant = 'primary', size = 'md', className = '', disabled }: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
