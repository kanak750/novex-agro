import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ShoppingBag, Menu, Sprout, X } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { useCart } from '@/context/CartContext';
import { useScrollPosition } from '@/hooks/useReveal';
import { MobileMenu } from './MobileMenu';
import logoIcon from '../../logos/main_short_transparent.png';

export function Navbar() {
  const scrolled = useScrollPosition();
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleDropdownEnter = (label: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== '/' && location.pathname.startsWith(path));

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-navy/8'
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <img src={logoIcon} alt="Novex Agro" className="w-9 h-9 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-navy text-lg tracking-tight">NOVEX</span>
                <span className="text-[10px] font-semibold text-brand-green tracking-[0.2em] uppercase">Agro</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'text-brand-green'
                        : 'text-ink hover:text-brand-green'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-4 h-4 opacity-60" />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-72 z-50">
                      <div className="bg-white rounded-xl shadow-lg border border-navy/8 py-2 animate-fade-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block px-4 py-2.5 hover:bg-cream transition-colors"
                          >
                            <span className="block text-sm font-semibold text-ink">{child.label}</span>
                            {child.description && (
                              <span className="block text-xs text-muted mt-0.5">{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                to="/products"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors shadow-sm"
              >
                Shop Products
              </Link>

              <button
                onClick={openCart}
                className="relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-navy/5 transition-colors"
                aria-label={`Cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5 text-ink" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-brand-blue rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-navy/5 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-ink" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
