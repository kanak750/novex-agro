import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, Sprout } from 'lucide-react';
import { navItems } from '@/data/navigation';
import logoIcon from '../../logos/main_short_transparent.png';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-navy/8">
          <Link to="/" className="flex items-center gap-2.5" onClick={onClose}>
            <img src={logoIcon} alt="Novex Agro" className="w-9 h-9 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-navy text-lg tracking-tight">NOVEX</span>
              <span className="text-[10px] font-semibold text-brand-green tracking-[0.2em] uppercase">Agro</span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-navy/5"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-ink" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto p-4">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-navy/5 last:border-0">
              {item.children ? (
                <>
                  <button
                    onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between py-3.5 text-left"
                  >
                    <span className="font-semibold text-ink text-base">{item.label}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted transition-transform ${
                        expandedItem === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedItem === item.label && (
                    <div className="pb-3 pl-4 space-y-1">
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="block py-2 text-sm text-muted hover:text-brand-green transition-colors"
                      >
                        View All {item.label}
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          onClick={onClose}
                          className="block py-2 text-sm text-muted hover:text-brand-green transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="block py-3.5 font-semibold text-ink text-base hover:text-brand-green transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="p-5 border-t border-navy/8">
          <Link
            to="/products"
            onClick={onClose}
            className="flex items-center justify-center w-full px-5 py-3 text-sm font-semibold bg-brand-green text-white rounded-lg"
          >
            Shop Products
          </Link>
        </div>
      </div>
    </div>
  );
}
