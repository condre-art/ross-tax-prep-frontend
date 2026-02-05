import Link from "next/link";

const DiamondTab = ({
  title,
  description,
  href,
  icon,
  price,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
  price?: string;
}) => (
  <Link
    href={href}
    className="group relative"
  >
    {/* Diamond Shape Container */}
    <div className="relative transform rotate-45 w-48 h-48 bg-gradient-to-br from-navy to-navy-dark shadow-2xl hover:shadow-gold transition-all duration-300 hover:scale-105 mx-auto">
      {/* Inner Content - Counter-rotate to keep text upright */}
      <div className="absolute inset-3 bg-gradient-to-br from-gold to-gold-light transform -rotate-45 flex flex-col items-center justify-center p-4">
        <span className="text-4xl mb-2">{icon}</span>
        <h3 className="text-sm font-bold text-navy text-center leading-tight">{title}</h3>
        {price && (
          <p className="text-xs font-semibold text-navy-dark mt-1">{price}</p>
        )}
      </div>
    </div>
    {/* Description Below Diamond */}
    <div className="mt-8 text-center px-4">
      <p className="text-sm text-gray-600 group-hover:text-navy transition-colors">{description}</p>
    </div>
  </Link>
);

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-cream via-white to-gold-light/20 min-h-screen">
      {/* Hero Section with Modern Gradient */}
      <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy text-cream py-24 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gold transform rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-gold transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-gold-light transform rotate-45"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-8 inline-block">
            <img 
              src="/logo.png" 
              alt="ROSS Tax & Bookkeeping" 
              className="h-32 mx-auto drop-shadow-2xl" 
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            Precision. Compliance. Confidence.
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-xl leading-relaxed text-cream/90">
            Bank products, refund allocation, money management, and client-facing flows purpose-built for compliance.
          </p>
          
          {/* Call to Action Buttons with Diamond Accent */}
          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <a
              href="/app/bank-products"
              className="group relative inline-block bg-gradient-to-r from-gold to-gold-light text-navy px-8 py-4 font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10">Bank Products Flow</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-lg transition-opacity"></div>
            </a>
            <a
              href="/app/money-management"
              className="group relative inline-block bg-cream text-navy px-8 py-4 font-bold rounded-lg border-2 border-gold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10">💰 Money Management</span>
            </a>
            <a
              href="/portal/dashboard.html"
              className="group relative inline-block bg-transparent text-cream px-8 py-4 font-bold rounded-lg border-2 border-cream hover:bg-cream/10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10">Client Portal</span>
            </a>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="#F5F1E8" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Diamond Tabs Section with Services and Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Our Services & Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tax and financial services with transparent pricing
            </p>
          </div>

          {/* Diamond Grid with Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <DiamondTab
              title="Bank Products"
              description="Choose provider, products, payout method, and complete disclosures."
              href="/app/bank-products"
              icon="🏦"
              price="Free Setup"
            />
            <DiamondTab
              title="Refund Advance"
              description="View decisions for approved, pending, or denied offers with fast processing."
              href="/app/bank-products/advance"
              icon="⚡"
              price="$49.99"
            />
            <DiamondTab
              title="Refund Allocation"
              description="Configure savings bonds purchases and multi-account splits with ease."
              href="/app/refund-allocation"
              icon="💎"
              price="$29.99"
            />
            <DiamondTab
              title="Money Management"
              description="Comprehensive financial planning, savings, and investment tools."
              href="/app/money-management"
              icon="💰"
              price="$99/month"
            />
          </div>

          {/* Additional Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-gold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-navy mb-3">Individual Tax Prep</h3>
              <p className="text-gray-600 mb-4">Federal and state returns prepared accurately with personalized support.</p>
              <div className="text-2xl font-bold text-gold mb-2">Starting at $149</div>
              <Link href="/services" className="inline-block mt-4 text-navy font-semibold hover:text-gold transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-gold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-navy mb-3">Business Tax Services</h3>
              <p className="text-gray-600 mb-4">Complete tax solutions for small businesses and self-employed professionals.</p>
              <div className="text-2xl font-bold text-gold mb-2">Starting at $299</div>
              <Link href="/services" className="inline-block mt-4 text-navy font-semibold hover:text-gold transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-gold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-navy mb-3">Bookkeeping Services</h3>
              <p className="text-gray-600 mb-4">Monthly and quarterly bookkeeping to keep your finances organized and compliant.</p>
              <div className="text-2xl font-bold text-gold mb-2">Starting at $199/mo</div>
              <Link href="/services" className="inline-block mt-4 text-navy font-semibold hover:text-gold transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-16 bg-gradient-to-r from-navy/5 via-gold/5 to-navy/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-navy mb-8">Trusted & Compliant</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2">🛡️</div>
              <p className="font-semibold text-navy">IRS Authorized</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2">🔒</div>
              <p className="font-semibold text-navy">HIPAA Compliant</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2">✓</div>
              <p className="font-semibold text-navy">SOC 2 Certified</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2">🏦</div>
              <p className="font-semibold text-navy">NCUA Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-navy-dark via-navy to-navy-dark text-cream py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
            <div className="inline-block w-16 h-16 border-2 border-gold transform rotate-45 mb-4"></div>
          </div>
          <p className="text-lg font-semibold mb-2">© 2026 Ross Tax & Bookkeeping</p>
          <p className="text-sm text-cream/70">Precision • Compliance • Confidence</p>
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
