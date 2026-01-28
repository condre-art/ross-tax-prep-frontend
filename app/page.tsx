import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-navy text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gold">Ross Tax & Bookkeeping</h1>
          <p className="text-white/90 mt-1">CloudBase Pro Web Portal</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Trusted Tax & Bookkeeping Services
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Ross Tax & Bookkeeping provides accurate, confidential, and dependable
            tax preparation and bookkeeping services for individuals and small businesses.
            We simplify the process so you can file with confidence.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/portal/login" className="btn-primary">
              Client Portal Login
            </Link>
            <Link href="/portal/login" className="btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Our Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-navy mb-3">Individual Tax Preparation</h3>
              <p className="text-gray-700">
                Federal and state tax returns prepared accurately and on time, with
                personalized support every step of the way.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-navy mb-3">Business Tax Services</h3>
              <p className="text-gray-700">
                Tax solutions for small businesses, self-employed professionals,
                and independent contractors.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-navy mb-3">Bookkeeping</h3>
              <p className="text-gray-700">
                Monthly and quarterly bookkeeping to keep your finances organized,
                compliant, and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Products Feature */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">Bank Products Available</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card bg-off-white">
              <h4 className="font-bold text-navy mb-2">Refund Transfer (RT)</h4>
              <p className="text-sm text-gray-700">
                Convenient refund processing with multiple payout options.
              </p>
            </div>

            <div className="card bg-off-white">
              <h4 className="font-bold text-navy mb-2">Refund Advance (RA)</h4>
              <p className="text-sm text-gray-700">
                Get your refund early with instant approval decisions.
              </p>
            </div>

            <div className="card bg-off-white">
              <h4 className="font-bold text-navy mb-2">Off-Bank Options</h4>
              <p className="text-sm text-gray-700">
                Traditional refund methods without bank product fees.
              </p>
            </div>
          </div>

          <p className="text-center mt-8 text-gray-600">
            <strong>Trusted Partners:</strong> SBTPG, EPS Financial, Refund Advantage
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Ross Tax & Bookkeeping. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
