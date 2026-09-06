import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/ui/Breadcrumbs';
import { galleryItems, galleryCategories } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Gallery | Novex Agro"
        description="View images of Novex Agro products, field applications, technology and agricultural photography."
      />
      <PageHero
        eyebrow="Gallery"
        title="Novex Agro in the Field."
        description="A visual showcase of our products, field applications, technology and agriculture."
        breadcrumbItems={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]}
      />

      <div className="container-page py-12 lg:py-16">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                activeCategory === cat
                  ? 'bg-brand-green text-white'
                  : 'bg-cream text-muted hover:bg-navy/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((item, i) => (
            <Reveal key={i} delay={(i % 6) * 80}>
              <div className="break-inside-avoid group relative overflow-hidden rounded-xl border border-navy/8 bg-cream">
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-semibold text-brand-lime uppercase tracking-wider">{item.category}</span>
                  <p className="text-sm text-white font-medium mt-1">{item.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
