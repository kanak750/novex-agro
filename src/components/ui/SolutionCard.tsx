import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { Solution } from '@/types';

interface SolutionCardProps {
  solution: Solution;
  variant?: 'default' | 'featured';
}

export function SolutionCard({ solution, variant = 'default' }: SolutionCardProps) {
  const Icon = (Icons as Record<string, Icons.LucideIcon>)[solution.icon] ?? Icons.Circle;

  if (variant === 'featured') {
    return (
      <Link
        to={`/solutions/${solution.slug}`}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white transition-all duration-500 hover:shadow-xl hover:shadow-navy/5 hover:border-navy/20 hover:-translate-y-1"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-cream">
          <img
            src={solution.image}
            alt={solution.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <div className="flex items-center gap-2 text-white">
              <Icon className="w-5 h-5 text-brand-lime" />
              <h3 className="text-xl font-bold">{solution.name}</h3>
            </div>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm text-muted leading-relaxed">{solution.shortDescription}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green link-underline">
            Explore Solution <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/solutions/${solution.slug}`}
      className="group flex flex-col p-6 border border-navy/8 bg-white rounded-xl transition-all duration-500 hover:shadow-xl hover:shadow-navy/5 hover:border-navy/20 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-brand-green/8 text-brand-green">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-semibold text-ink text-lg">{solution.name}</h3>
      </div>
      <p className="mt-4 text-sm text-muted leading-relaxed flex-1">{solution.shortDescription}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green link-underline">
        Explore <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
