import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, CreditCard, Lock } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { useCart } from '@/context/CartContext';

export function CheckoutPage() {
  const { items, totalItems, clearCart } = useCart();
  const [step, setStep] = useState<'info' | 'success'>('info');
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '',
    address: '', city: '', state: '', pincode: '',
    company: '', notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.address.trim()) e.address = 'Required';
    if (!form.city.trim()) e.city = 'Required';
    if (!form.state.trim()) e.state = 'Required';
    if (!form.pincode.trim()) e.pincode = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStep('success');
      clearCart();
    }
  };

  if (step === 'success') {
    return (
      <>
        <SEO title="Order Placed | Novex Agro" />
        <div className="container-page py-20">
          <div className="max-w-lg mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 text-brand-green mx-auto mb-6">
              <Check className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold text-ink">Order Placed Successfully</h1>
            <p className="mt-4 text-muted leading-relaxed">
              Thank you for your order. This is a checkout placeholder — no payment has been processed. Integrate a payment provider (Razorpay, Stripe, etc.) and order management before launch.
            </p>
            <div className="mt-8">
              <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <SEO title="Checkout | Novex Agro" />
        <div className="container-page py-20 text-center">
          <h1 className="text-2xl font-bold text-ink">Your cart is empty</h1>
          <p className="mt-2 text-muted">Add products to your cart before checking out.</p>
          <Link to="/products" className="mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-brand-green text-white rounded-lg">
            Shop Products
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Checkout | Novex Agro" />
      <div className="container-page py-10">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Cart', path: '/cart' }, { label: 'Checkout' }]} />
      </div>

      <div className="container-page pb-20">
        <h1 className="text-3xl font-bold text-ink mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          {/* Form fields */}
          <div className="lg:col-span-2 space-y-8">
            {/* Customer info */}
            <div className="bg-white border border-navy/8 rounded-xl p-6">
              <h2 className="font-bold text-ink text-lg mb-5">Customer Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name *" value={form.fullName} onChange={(v) => setForm({ ...form, fullName: v })} error={errors.fullName} />
                <Field label="Email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} error={errors.email} />
                <Field label="Phone *" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} error={errors.phone} />
                <Field label="Company / Farm" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
              </div>
            </div>

            {/* Shipping info */}
            <div className="bg-white border border-navy/8 rounded-xl p-6">
              <h2 className="font-bold text-ink text-lg mb-5">Shipping Information</h2>
              <div className="space-y-4">
                <Field label="Address *" value={form.address} onChange={(v) => setForm({ ...form, address: v })} error={errors.address} />
                <div className="grid sm:grid-cols-3 gap-4">
                  <Field label="City *" value={form.city} onChange={(v) => setForm({ ...form, city: v })} error={errors.city} />
                  <Field label="State *" value={form.state} onChange={(v) => setForm({ ...form, state: v })} error={errors.state} />
                  <Field label="PIN Code *" value={form.pincode} onChange={(v) => setForm({ ...form, pincode: v })} error={errors.pincode} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Order Notes</label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-navy/12 rounded-lg focus:outline-none focus:border-brand-green resize-none"
                    placeholder="Optional notes about your order"
                  />
                </div>
              </div>
            </div>

            {/* Payment placeholder */}
            <div className="bg-white border border-navy/8 rounded-xl p-6">
              <h2 className="font-bold text-ink text-lg mb-2">Payment</h2>
              <div className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                <Lock className="w-5 h-5 text-muted flex-shrink-0" />
                <p className="text-sm text-muted">
                  Payment gateway placeholder. No payment will be processed. Integrate Razorpay, Stripe or another provider before launch.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-3 p-4 border border-dashed border-navy/15 rounded-lg">
                <CreditCard className="w-5 h-5 text-muted" />
                <span className="text-sm text-muted">Payment method selection will appear here</span>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-cream rounded-xl p-6 sticky top-24">
              <h2 className="font-bold text-ink text-lg mb-4">Order Summary</h2>
              <div className="space-y-3 pb-4 border-b border-navy/10 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.product.slug} className="flex gap-3">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-white">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-ink truncate">{item.product.name}</p>
                      <p className="text-xs text-muted">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Items</span>
                  <span className="font-semibold">{totalItems}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Total</span>
                  <span className="font-bold text-ink">Price on request</span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full py-3 text-sm font-semibold bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Place Order
              </button>
              <p className="mt-3 text-xs text-muted text-center">
                By placing this order you agree to our terms.
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

function Field({
  label, value, onChange, error, type = 'text',
}: {
  label: string; value: string; onChange: (v: string) => void; error?: string; type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-ink mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 text-sm border border-navy/12 rounded-lg focus:outline-none focus:border-brand-green"
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
