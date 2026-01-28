'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('clientId');
    router.push('/portal/login');
  };

  const navItems = [
    { href: '/app/dashboard', label: 'Dashboard' },
    { href: '/app/bank-products', label: 'Bank Products' },
    { href: '/app/refund-allocation', label: 'Refund Allocation' },
    { href: '/app/esign', label: 'E-Sign' },
    { href: '/app/status', label: 'Status' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-navy text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gold">Ross Tax & Bookkeeping</h1>
              <p className="text-sm text-white/80">Client Portal</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded text-sm transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-1 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                    pathname === item.href
                      ? 'text-navy border-b-2 border-gold'
                      : 'text-gray-600 hover:text-navy'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>&copy; 2026 Ross Tax & Bookkeeping. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
