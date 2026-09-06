import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const { items, isOpen, closeCart, incrementItem, decrementItem, removeItem, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm animate-fade-in" onClick={closeCart} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl flex flex-col animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-navy/8">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-ink" />
            <span className="font-bold text-ink text-lg">
              Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-navy/5"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-ink" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cream mb-4">
              <ShoppingBag className="w-7 h-7 text-muted" />
            </div>
            <p className="font-semibold text-ink">Your cart is empty</p>
            <p className="mt-1 text-sm text-muted">Browse our products to get started.</p>
            <Link
              to="/products"
              onClick={closeCart}
              className="mt-5 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors"
            >
              Shop Products
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item) => (
                <div key={item.product.slug} className="flex gap-3 pb-4 border-b border-navy/6 last:border-0">
                  <Link
                    to={`/products/${item.product.slug}`}
                    onClick={closeCart}
                    className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-cream"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/products/${item.product.slug}`}
                      onClick={closeCart}
                      className="font-semibold text-ink text-sm leading-snug block hover:text-brand-green transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-muted mt-0.5">{item.product.category}</p>
                    <p className="text-sm font-semibold text-ink mt-1">{item.product.price}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-navy/10 rounded-lg">
                        <button
                          onClick={() => decrementItem(item.product.slug)}
                          className="flex items-center justify-center w-8 h-8 hover:bg-navy/5 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => incrementItem(item.product.slug)}
                          className="flex items-center justify-center w-8 h-8 hover:bg-navy/5 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.slug)}
                        className="flex items-center justify-center w-8 h-8 text-muted hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-navy/8 space-y-3">
              <Link
                to="/cart"
                onClick={closeCart}
                className="flex items-center justify-center w-full px-6 py-3 text-sm font-semibold border border-navy/15 rounded-lg hover:bg-navy/5 transition-colors"
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="flex items-center justify-center w-full px-6 py-3 text-sm font-semibold bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
