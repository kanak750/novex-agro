import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found | Novex Agro" />
      <div className="min-h-[60vh] flex items-center justify-center container-page py-20 text-center">
        <div>
          <p className="text-7xl font-extrabold text-brand-green/15">404</p>
          <h1 className="mt-2 text-3xl font-bold text-ink">Page Not Found</h1>
          <p className="mt-3 text-muted">The page you're looking for doesn't exist or has been moved.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
