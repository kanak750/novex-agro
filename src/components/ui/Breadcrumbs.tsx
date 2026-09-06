import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted flex-wrap">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {item.path && !isLast ? (
              <Link to={item.path} className="hover:text-ink transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink font-medium">{item.label}</span>
            )}
            {!isLast && <span className="text-navy/20">/</span>}
          </span>
        );
      })}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbItems,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbItems?: { label: string; path?: string }[];
}) {
  return (
    <section className="bg-cream border-b border-navy/8">
      <div className="container-page py-12 sm:py-16 lg:py-20">
        {breadcrumbItems && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        )}
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="text-heading text-ink text-balance max-w-4xl">{title}</h1>
        {description && (
          <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
