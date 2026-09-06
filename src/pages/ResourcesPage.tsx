import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, ArrowRight, ChevronDown } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero, Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/Button';
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import { NotFoundPage } from './NotFoundPage';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const categories = ['All', 'Smart Irrigation', 'Technology', 'Industry', 'Remote Control', 'Monitoring', 'Automation'];

export function ResourcesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const featured = blogPosts.find((p) => p.featured);

  const filtered = useMemo(() => {
    let result = blogPosts.filter((p) => !p.featured);
    if (category !== 'All') result = result.filter((p) => p.category === category);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
    }
    return result;
  }, [category, search]);

  return (
    <>
      <SEO
        title="Resources | Novex Agro"
        description="Insights, articles and resources on smart irrigation, connected farm equipment, automation and technology trends in modern agriculture."
      />
      <PageHero
        eyebrow="Resources"
        title="Insights for Smarter Agriculture."
        description="Articles and resources on agricultural technology, smart farming and the practical application of connected solutions."
        breadcrumbItems={[{ label: 'Home', path: '/' }, { label: 'Resources' }]}
      />

      {/* Featured article */}
      {featured && (
        <section className="container-page py-12">
          <Reveal>
            <Link
              to={`/resources/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-navy/8 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden bg-cream">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 text-xs mb-4">
                  <span className="font-semibold text-brand-green uppercase tracking-wider">Featured</span>
                  <span className="text-muted">&middot;</span>
                  <span className="text-muted">{featured.category}</span>
                  <span className="text-muted">&middot;</span>
                  <span className="text-muted">{featured.date}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-ink leading-tight group-hover:text-brand-green transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-muted leading-relaxed">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green link-underline">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      {/* Search + filter + grid */}
      <section className="container-page py-12">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-sm border border-navy/12 rounded-lg focus:outline-none focus:border-brand-green bg-white"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  category === cat ? 'bg-brand-green text-white' : 'bg-cream text-muted hover:bg-navy/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-navy/15 rounded-xl">
            <p className="font-semibold text-ink">No articles found</p>
            <p className="mt-1 text-sm text-muted">Try adjusting your search or category.</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.slice(0, visibleCount).map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 100}>
                  <Link
                    to={`/resources/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-navy/8 bg-white transition-all duration-300 hover:shadow-lg hover:border-navy/15 h-full"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-xs text-muted mb-3">
                        <span className="font-semibold text-brand-green">{post.category}</span>
                        <span>&middot;</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-bold text-ink text-lg leading-snug group-hover:text-brand-green transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{post.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            {visibleCount < filtered.length && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setVisibleCount(visibleCount + 6)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-navy/15 rounded-lg hover:bg-navy/5 transition-colors"
                >
                  Load More <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <NotFoundPage />;

  const related = getRelatedPosts(post.slug);

  return (
    <>
      <SEO title={`${post.title} | Novex Agro Resources`} description={post.excerpt} ogImage={post.image} />

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/20" />
        </div>
        <div className="container-page relative z-10 py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs mb-4">
              <span className="font-semibold text-brand-lime uppercase tracking-wider">{post.category}</span>
              <span className="text-white/50">&middot;</span>
              <span className="text-white/70">{post.date}</span>
            </div>
            <h1 className="text-heading text-white text-balance">{post.title}</h1>
          </div>
        </div>
      </section>

      <div className="container-page py-6">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Resources', path: '/resources' },
            { label: post.title },
          ]}
        />
      </div>

      {/* Article content */}
      <article className="container-page py-12">
        <div className="max-w-3xl">
          <p className="text-lg text-muted leading-relaxed mb-6">{post.excerpt}</p>
          {post.content.map((para, i) => (
            <p key={i} className="text-ink leading-relaxed mb-5">{para}</p>
          ))}
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-cream py-16">
          <div className="container-page">
            <SectionHeading title="Related Articles" className="mb-10" />
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/resources/${r.slug}`}
                  className="group flex gap-4 bg-white rounded-xl border border-navy/8 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-cream">
                    <img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-brand-green">{r.category}</span>
                    <h3 className="font-bold text-ink text-base leading-snug mt-1 group-hover:text-brand-green transition-colors">
                      {r.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-green py-14">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Explore Novex Agro Products</h2>
          <ButtonLink to="/products" variant="white" size="lg">
            View Products <ArrowRight className="w-5 h-5" />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
