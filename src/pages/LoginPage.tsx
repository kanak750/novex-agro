import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/store';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      login(email);
      navigate(redirect);
    }
  };

  return (
    <div className="container-page py-20 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-xl border border-navy/10 shadow-sm">
        <h1 className="text-2xl font-bold text-ink mb-6 text-center">Login to Store</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-ink mb-1.5">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-sm border border-navy/12 rounded-lg focus:outline-none focus:border-brand-green"
              placeholder="you@example.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-sm font-semibold bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-xs text-center text-muted">
          For demo purposes, any email will work.
        </p>
      </div>
    </div>
  );
}
