import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, ArrowRight } from 'lucide-react';
import { footerLinks } from '@/data/navigation';
import logoIcon from '../../logos/main_short_transparent.png';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-navy text-white">
      {/* Newsletter bar */}
      <div className="border-b border-white/10">
        <div className="container-page py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-white">Stay connected</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                Subscribe for updates on Novex Agro products, solutions and agricultural technology insights.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-white/10 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-brand-lime"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-semibold bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors whitespace-nowrap"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
          {subscribed && (
            <p className="mt-3 text-sm text-brand-lime">Thank you for subscribing. Newsletter signup is a placeholder — integrate an email service before launch.</p>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="container-page py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logoIcon} alt="Novex Agro" className="w-10 h-10 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-white text-xl tracking-tight">NOVEX</span>
                <span className="text-[10px] font-semibold text-brand-lime tracking-[0.2em] uppercase">Agro</span>
              </div>
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Smart Technology. Stronger Harvest.
            </p>
            <p className="mt-3 text-white/40 text-xs leading-relaxed max-w-xs">
              Powering Farms. Empowering Farmers.
            </p>
            <div className="mt-6 flex gap-3">
              {['Twitter', 'LinkedIn', 'YouTube', 'Instagram'].map((social) => (
                <span
                  key={social}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/8 text-white/50 text-xs font-medium hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                  title={`${social} — social link placeholder`}
                >
                  {social[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                {key}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/55 hover:text-brand-lime transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Novex Agro. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms
            </Link>
            <Link to="/shipping-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Shipping
            </Link>
            <Link to="/return-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
