import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ShoppingBag, Headphones, Handshake, Send, Check } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/ui/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';

const inquiryTypes = [
  'General Inquiry',
  'Sales Inquiry',
  'Technical Support',
  'Partnership Inquiry',
];

const contactCards = [
  { icon: MessageSquare, title: 'General Inquiry', desc: 'Questions about Novex Agro and our products.' },
  { icon: ShoppingBag, title: 'Sales Inquiry', desc: 'Pricing, availability and product purchasing.' },
  { icon: Headphones, title: 'Technical Support', desc: 'Product support and technical assistance.' },
  { icon: Handshake, title: 'Partnership', desc: 'Business partnerships and collaborations.' },
];

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'General Inquiry',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (form.phone && !/^[+]?[\d\s-]{7,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <>
      <SEO
        title="Contact | Novex Agro"
        description="Get in touch with Novex Agro for product inquiries, sales, technical support and partnership opportunities."
      />
      <PageHero
        eyebrow="Contact"
        title="Get in Touch with Novex Agro."
        description="Have a question about our products or solutions? We're here to help. Select the relevant inquiry type and our team will respond."
        breadcrumbItems={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      {/* Contact type cards */}
      <section className="container-page py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, i) => (
            <div key={card.title} className="p-6 border border-navy/8 rounded-xl bg-white hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-green/8 text-brand-green mb-4">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-cream py-20">
        <div className="container-page">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionHeading title="Send Us a Message" className="mb-8" />
              {submitted ? (
                <div className="bg-white rounded-xl border border-brand-green/20 p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/10 text-brand-green mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-ink">Message Sent</h3>
                  <p className="mt-2 text-muted">
                    Thank you for reaching out. This is a contact form placeholder — integrate an email service or backend to receive inquiries before launch.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', inquiryType: 'General Inquiry', message: '' }); }}
                    className="mt-5 text-sm font-semibold text-brand-green link-underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-navy/8 p-6 lg:p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-1.5">Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-navy/12 rounded-lg focus:outline-none focus:border-brand-green"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-1.5">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-navy/12 rounded-lg focus:outline-none focus:border-brand-green"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-navy/12 rounded-lg focus:outline-none focus:border-brand-green"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink mb-1.5">Company / Farm</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-navy/12 rounded-lg focus:outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Inquiry Type *</label>
                    <select
                      value={form.inquiryType}
                      onChange={(e) => handleChange('inquiryType', e.target.value)}
                      className="w-full px-4 py-3 text-sm border border-navy/12 rounded-lg focus:outline-none focus:border-brand-green bg-white"
                    >
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Message *</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full px-4 py-3 text-sm border border-navy/12 rounded-lg focus:outline-none focus:border-brand-green resize-none"
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl border border-navy/8 p-6">
                <h3 className="font-bold text-ink mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-ink">Email</p>
                      <p className="text-sm text-muted">contact@novexagro.com (placeholder)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-ink">Phone</p>
                      <p className="text-sm text-muted">+91-XXXXX-XXXXX (placeholder)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-ink">Address</p>
                      <p className="text-sm text-muted">Address to be updated (placeholder)</p>
                    </div>
                  </div>
                </div>
                <p className="mt-5 pt-5 border-t border-navy/8 text-xs text-muted italic">
                  Contact details are placeholders. Update with actual information before launch.
                </p>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-xl border border-navy/8 p-6">
                <h3 className="font-bold text-ink mb-4">Location</h3>
                <div className="aspect-[4/3] rounded-lg bg-cream flex items-center justify-center border border-navy/8">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-muted mx-auto mb-2" />
                    <p className="text-sm text-muted">Map placeholder</p>
                    <p className="text-xs text-muted mt-1">Integrate a map service before launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
