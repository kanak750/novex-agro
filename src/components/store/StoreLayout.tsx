import { Outlet } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import { StoreNavbar } from './StoreNavbar';
import { CartDrawer } from './CartDrawer';
import { Footer } from '@/components/public/Footer';

export function StoreLayout() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="flex min-h-screen flex-col bg-cream/30">
          <StoreNavbar />
          <CartDrawer />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
