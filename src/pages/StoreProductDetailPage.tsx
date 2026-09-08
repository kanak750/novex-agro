import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plus, Minus, ShoppingCart, Zap, Check } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button, ButtonLink } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { StoreProductCard } from '@/components/store/StoreProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { NotFoundPage } from './NotFoundPage';

export function StoreProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [added, setAdded] = useState(false);

  if (!product) return <NotFoundPage />;

  const related = getRelatedProducts(product.slug);
  const availabilityColor =
    product.availability === 'In Stock'
      ? 'text-brand-green bg-brand-green/8'
      : product.availability === 'Pre-Order'
      ? 'text-amber-600 bg-amber-50'
      : 'text-brand-blue bg-brand-blue/8';

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    window.location.href = '/store/checkout';
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'specs', label: 'Specifications' },
    { id: 'how', label: 'How It Works' },
    { id: 'install', label: 'Installation' },
    { id: 'included', label: "What's Included" },
    { id: 'warranty', label: 'Warranty' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <>
      <SEO
        title={`${product.name} | Novex Agro`}
        description={product.shortDescription}
        ogImage={product.image}
      />
      <div className="container-page py-8">
        <Breadcrumbs
          items={[
            { label: 'Store Home', path: '/store' },
            { label: product.category, path: `/products?category=${product.categorySlug}` },
            { label: product.name },
          ]}
        />
      </div>

      {/* Product main section */}
      <section className="container-page pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden bg-cream border border-navy/8 shadow-sm">
              <img
                src={product.gallery[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
            {product.gallery.length > 1 && (
              <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === i ? 'border-brand-green shadow-md scale-105' : 'border-transparent opacity-70 hover:opacity-100 hover:border-navy/20'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="eyebrow mb-3">{product.category}</p>
            <h1 className="text-3xl lg:text-4xl font-bold text-ink leading-tight">{product.name}</h1>
            <p className="mt-4 text-muted leading-relaxed text-lg">{product.shortDescription}</p>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl font-bold text-ink">{product.price}</span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${availabilityColor}`}>
                {product.availability}
              </span>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center border border-navy/12 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex items-center justify-center w-12 h-12 hover:bg-navy/5"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-14 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex items-center justify-center w-12 h-12 hover:bg-navy/5"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button
                onClick={handleAddToCart}
                variant="primary"
                size="lg"
                className="flex-1"
              >
                {added ? (
                  <><Check className="w-5 h-5" /> Added to Cart</>
                ) : (
                  <><ShoppingCart className="w-5 h-5" /> Add to Cart</>
                )}
              </Button>
              <Button
                onClick={handleBuyNow}
                variant="secondary"
                size="lg"
                className="flex-1"
              >
                <Zap className="w-5 h-5" /> Buy Now
              </Button>
            </div>

            {/* Quick info */}
            <div className="mt-8 pt-8 border-t border-navy/8 space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <span className="font-semibold text-ink w-28 flex-shrink-0">Product Code</span>
                <span className="text-muted">{product.specifications[0]?.value}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="font-semibold text-ink w-28 flex-shrink-0">Category</span>
                <Link to={`/products?category=${product.categorySlug}`} className="text-brand-green hover:underline">
                  {product.category}
                </Link>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="font-semibold text-ink w-28 flex-shrink-0">Availability</span>
                <span className="text-muted">{product.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs section */}
      <section className="bg-cream py-16">
        <div className="container-page">
          {/* Tab nav */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-10 border-b border-navy/8 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id ? 'bg-navy text-white shadow-md' : 'text-muted hover:bg-navy/5 hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="bg-white rounded-xl border border-navy/8 p-6 lg:p-10">
            {activeTab === 'overview' && (
              <div className="prose max-w-none">
                <p className="text-ink leading-relaxed text-lg">{product.longDescription}</p>
              </div>
            )}
            {activeTab === 'features' && (
              <ul className="space-y-4 max-w-2xl">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-ink leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === 'specs' && (
              <div className="overflow-x-auto">
                <table className="w-full max-w-2xl">
                  <tbody className="divide-y divide-navy/8">
                    {product.specifications.map((spec, i) => (
                      <tr key={i}>
                        <td className="py-3 pr-6 font-semibold text-ink text-sm whitespace-nowrap">{spec.label}</td>
                        <td className="py-3 text-muted text-sm">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-4 text-xs text-muted italic">
                  Specifications marked as "Edit to specify" are placeholders. Update with actual product data before launch.
                </p>
              </div>
            )}
            {activeTab === 'how' && (
              <ol className="space-y-5 max-w-2xl">
                {product.howItWorks.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-green text-white text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-ink leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            )}
            {activeTab === 'install' && (
              <ol className="space-y-5 max-w-2xl">
                {product.installation.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-ink leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            )}
            {activeTab === 'included' && (
              <ul className="space-y-3 max-w-2xl">
                {product.whatsIncluded.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                    <span className="text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === 'warranty' && (
              <p className="text-muted leading-relaxed max-w-2xl">{product.warranty}</p>
            )}
            {activeTab === 'faq' && (
              <div className="max-w-2xl">
                <FAQAccordion items={product.faqs} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="container-page py-16">
          <h2 className="text-2xl font-bold text-ink mb-8">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <StoreProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      <div className="container-page pb-16">
        <ButtonLink to="/store" variant="outline" size="md">
          ← Back to Store Home
        </ButtonLink>
      </div>
    </>
  );
}
