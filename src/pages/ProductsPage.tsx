import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/ui/Breadcrumbs';
import { ProductCard } from '@/components/public/ProductCard';
import { products, productCategories } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

type SortOption = 'featured' | 'name-asc' | 'name-desc' | 'category';

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
    setShowFilters(false);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q)
      );
    }
    if (sortBy === 'name-asc') result.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === 'name-desc') result.sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === 'category') result.sort((a, b) => a.category.localeCompare(b.category));
    return result;
  }, [selectedCategory, search, sortBy]);

  return (
    <>
      <SEO
        title="Products | Novex Agro"
        description="Browse Novex Agro's range of agricultural technology products including motor controllers, smart switches, monitoring systems, sensors and data loggers."
      />
      <PageHero
        eyebrow="Our Products"
        title="Agricultural Technology Products"
        description="Motor controllers, smart switches, monitoring systems, sensors and accessories designed for practical farm operations."
        breadcrumbItems={[{ label: 'Home', path: '/' }, { label: 'Products' }]}
      />

      <div className="container-page py-12 lg:py-16">
        {/* Search + Sort bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-sm border border-navy/12 rounded-lg focus:outline-none focus:border-brand-green bg-white"
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 text-sm font-semibold border border-navy/12 rounded-lg bg-white"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none pl-4 pr-10 py-3 text-sm font-medium border border-navy/12 rounded-lg bg-white focus:outline-none focus:border-brand-green cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="category">Category</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-8">
          {/* Category sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-ink text-sm uppercase tracking-wider">Categories</h3>
                <button onClick={() => setShowFilters(false)} className="lg:hidden text-muted">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleCategoryChange('All')}
                    className={`block w-full text-left px-3 py-2.5 text-sm rounded-lg transition-colors ${
                      selectedCategory === 'All' ? 'bg-brand-green/8 text-brand-green font-semibold' : 'text-muted hover:bg-navy/5'
                    }`}
                  >
                    All Products
                  </button>
                </li>
                {productCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryChange(cat)}
                      className={`block w-full text-left px-3 py-2.5 text-sm rounded-lg transition-colors ${
                        selectedCategory === cat ? 'bg-brand-green/8 text-brand-green font-semibold' : 'text-muted hover:bg-navy/5'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product grid */}
          <div>
            <p className="text-sm text-muted mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-navy/15 rounded-xl">
                <p className="font-semibold text-ink">No products found</p>
                <p className="mt-1 text-sm text-muted">Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 60}>
                    <ProductCard product={p} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
