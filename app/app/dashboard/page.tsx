import Link from 'next/link'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-navy mb-6">Client Dashboard</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          href="/app/bank-products"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-navy mb-3">Bank Products</h2>
          <p className="text-gray-700">
            Choose your refund transfer provider and apply for refund advances.
          </p>
          <span className="text-gold font-semibold mt-4 inline-block">
            Manage Bank Products →
          </span>
        </Link>

        <Link 
          href="/app/refund-allocation"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-navy mb-3">Refund Allocation</h2>
          <p className="text-gray-700">
            Split your refund between accounts, savings bonds, and more.
          </p>
          <span className="text-gold font-semibold mt-4 inline-block">
            Manage Allocation →
          </span>
        </Link>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-navy mb-3">Documents</h2>
          <p className="text-gray-700">
            Upload and view your tax documents.
          </p>
          <span className="text-gray-400 font-semibold mt-4 inline-block">
            Coming Soon
          </span>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-navy mb-3">E-Sign</h2>
          <p className="text-gray-700">
            Review and sign your tax documents electronically.
          </p>
          <span className="text-gray-400 font-semibold mt-4 inline-block">
            Coming Soon
          </span>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-navy mb-3">Status</h2>
          <p className="text-gray-700">
            Track the status of your tax return.
          </p>
          <span className="text-gray-400 font-semibold mt-4 inline-block">
            Coming Soon
          </span>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-navy mb-3">Support</h2>
          <p className="text-gray-700">
            Get help with your tax preparation.
          </p>
          <span className="text-gray-400 font-semibold mt-4 inline-block">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  )
}
