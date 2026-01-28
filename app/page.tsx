import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-navy text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Ross Tax & Bookkeeping</h1>
          <p className="text-gray-300 mt-2">Client Portal & Staff Dashboard</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-4">
        <section className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-semibold text-navy mb-4">Trusted Tax & Bookkeeping Services</h2>
          <p className="text-gray-700 mb-6">
            Ross Tax & Bookkeeping provides accurate, confidential, and dependable
            tax preparation and bookkeeping services for individuals and small businesses.
            We simplify the process so you can file with confidence.
          </p>
          <Link 
            href="/app/dashboard" 
            className="inline-block bg-gold text-navy px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition"
          >
            Go to Client Portal
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-navy mb-3">Individual Tax Preparation</h3>
            <p className="text-gray-700">
              Federal and state tax returns prepared accurately and on time, with
              personalized support every step of the way.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-navy mb-3">Business Tax Services</h3>
            <p className="text-gray-700">
              Tax solutions for small businesses, self-employed professionals,
              and independent contractors.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-navy mb-3">Bookkeeping</h3>
            <p className="text-gray-700">
              Monthly and quarterly bookkeeping to keep your finances organized,
              compliant, and stress-free.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-white text-center py-6 mt-12">
        <p>© 2026 Ross Tax & Bookkeeping. All rights reserved.</p>
      </footer>
    </div>
  )
}
