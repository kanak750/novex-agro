import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { ButtonLink } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';

export function CartPage() {
  const { items, incrementItem, decrementItem, removeItem, clearCart, totalItems } = useCart();

  return (
    <>
      <SEO title="Cart | Novex Agro" description="Review your selected Novex Agro products." />
      <div className="container-page py-10 lg:py-16">
        <Breadcrumbs items={[{ label: 'Store Home', path: '/store' }, { label: 'Cart' }]} />
        <h1 className="text-3xl font-bold text-ink mb-2">Shopping Cart</h1>
        <p className="text-muted mb-8">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>

        {items.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-navy/15 rounded-xl">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cream mx-auto mb-4">
              <ShoppingBag className="w-7 h-7 text-muted" />
            </div>
            <p className="font-semibold text-ink text-lg">Your cart is empty</p>
            <p className="mt-1 text-muted">Browse our products to get started.</p>
            <div className="mt-6">
              <ButtonLink to="/store" size="md">Shop Products</ButtonLink>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.product.slug} className="flex gap-4 p-5 bg-white border border-navy/8 rounded-xl">
                  <Link
                    to={`/store/products/${item.product.slug}`}
                    className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-cream"
                  >
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/store/products/${item.product.slug}`} className="font-bold text-ink hover:text-brand-green transition-colors">
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-muted mt-0.5">{item.product.category}</p>
                    <p className="text-sm font-semibold text-ink mt-1">{item.product.price}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-navy/12 rounded-lg">
                        <button onClick={() => decrementItem(item.product.slug)} className="flex items-center justify-center w-9 h-9 hover:bg-navy/5" aria-label="Decrease">
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-10 text-center text-sm font-semibold">{item.quantity}</span>
                        <button onClick={() => incrementItem(item.product.slug)} className="flex items-center justify-center w-9 h-9 hover:bg-navy/5" aria-label="Increase">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.slug)}
                        className="flex items-center gap-1.5 text-sm text-muted hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between pt-2">
                <button
                  onClick={clearCart}
                  className="text-sm font-semibold text-muted hover:text-red-500 transition-colors"
                >
                  Clear Cart
                </button>
                <Link to="/store" className="text-sm font-semibold text-brand-green link-underline">
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-cream rounded-xl p-6 sticky top-24">
                <h2 className="font-bold text-ink text-lg mb-4">Order Summary</h2>
                <div className="space-y-3 pb-4 border-b border-navy/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Items</span>
                    <span className="font-semibold text-ink">{totalItems}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Subtotal</span>
                    <span className="font-semibold text-ink">Price on request</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Shipping</span>
                    <span className="font-semibold text-ink">Calculated at checkout</span>
                  </div>
                </div>
                <div className="flex justify-between pt-4 pb-4">
                  <span className="font-bold text-ink">Total</span>
                  <span className="font-bold text-ink">Price on request</span>
                </div>
                <p className="text-xs text-muted italic mb-4">
                  Pricing is shown as "Price on request" as placeholder. Integrate actual pricing before launch.
                </p>
                <ButtonLink to="/checkout" size="lg" className="w-full">
                  Proceed to Checkout <ArrowRight className="w-5 h-5" />
                </ButtonLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
