import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Layouts
import { PublicLayout } from '@/components/public/PublicLayout';
import { StoreLayout } from '@/components/store/StoreLayout';

// Public Pages
import { HomePage } from '@/pages/HomePage';
import { ProductsPage } from '@/pages/ProductsPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { SolutionsPage, SolutionDetailPage } from '@/pages/SolutionsPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { ResourcesPage, BlogPostPage } from '@/pages/ResourcesPage';
import { PrivacyPolicyPage, TermsPage, ShippingPolicyPage, ReturnPolicyPage } from '@/pages/LegalPages';
import { NotFoundPage } from '@/pages/NotFoundPage';

// Store Pages
import { StoreHomePage } from '@/pages/StoreHomePage';
import { StoreProductDetailPage } from '@/pages/StoreProductDetailPage';
import { CartPage } from '@/pages/CartPage';
import { CheckoutPage } from '@/pages/CheckoutPage';
import { LoginPage } from '@/pages/LoginPage';
import { RequireAuth } from '@/components/store/RequireAuth';

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Store Routes */}
        <Route path="/store" element={<StoreLayout />}>
          <Route index element={<RequireAuth><StoreHomePage /></RequireAuth>} />
          <Route path="products/:slug" element={<RequireAuth><StoreProductDetailPage /></RequireAuth>} />
          <Route path="cart" element={<RequireAuth><CartPage /></RequireAuth>} />
          <Route path="checkout" element={<RequireAuth><CheckoutPage /></RequireAuth>} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/:slug" element={<BlogPostPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
          <Route path="/return-policy" element={<ReturnPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
