import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { products } from '@/data/products';
import { StoreProductCard } from '@/components/store/StoreProductCard';

export function StoreHomePage() {
  return (
    <>
      <SEO title="Store Home | Novex Agro" />
      <div className="container-page py-10">
        <h1 className="text-3xl font-bold text-ink mb-2">Shop Novex Products</h1>
        <p className="text-muted mb-8">Purchase agricultural technology solutions directly.</p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <StoreProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </>
  );
}
