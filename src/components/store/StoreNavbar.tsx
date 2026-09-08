import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag, User as UserIcon, LogOut } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useScrollPosition } from '@/hooks/useReveal';
import logoIcon from '../../logos/main_short_transparent.png';

export function StoreNavbar() {
  const scrolled = useScrollPosition();
  const { totalItems, openCart } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
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
          <Link to="/store" className="flex items-center gap-2.5 flex-shrink-0">
            <img src={logoIcon} alt="Novex Agro" className="w-9 h-9 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-navy text-lg tracking-tight">NOVEX</span>
              <span className="text-[10px] font-semibold text-brand-green tracking-[0.2em] uppercase">Store</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4">
            <Link to="/store" className="text-sm font-medium text-ink hover:text-brand-green">Store Home</Link>
            <Link to="/" className="text-sm font-medium text-muted hover:text-brand-green">← Back to Main Site</Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-ink hidden sm:block">Hello, {user.name}</span>
                <button
                  onClick={logout}
                  className="flex items-center justify-center p-2 rounded-lg hover:bg-navy/5 text-muted hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/store/login"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-ink bg-cream rounded-lg hover:bg-navy/5 transition-colors"
              >
                <UserIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
              </Link>
            )}

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
          </div>
        </div>
      </div>
    </header>
  );
}
