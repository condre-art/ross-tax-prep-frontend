import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-navy mb-2">Ross Tax Prep</h1>
          <p className="text-lg text-gray-600">Client Portal & Staff Dashboard</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-navy mb-3">Client Portal</h2>
            <p className="text-gray-600 mb-4">
              Upload tax documents, check status, and manage your refund options.
            </p>
            <Link
              href="/app/bank-products"
              className="inline-block px-6 py-3 bg-gold text-navy font-semibold rounded hover:bg-opacity-90 transition"
            >
              Choose Refund Delivery
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-navy mb-3">Staff Dashboard</h2>
            <p className="text-gray-600 mb-4">
              Manage clients, workflow, and bank product applications.
            </p>
            <Link
              href="/staff/dashboard"
              className="inline-block px-6 py-3 bg-navy text-white font-semibold rounded hover:bg-opacity-90 transition"
            >
              Staff Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
