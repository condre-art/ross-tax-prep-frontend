export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-off-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <a 
          href="/"
          className="inline-block bg-gold text-navy px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
