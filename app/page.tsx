export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Ross Tax Prep</h1>
        <p className="text-lg mb-6">
          IRS e-file approved ERO tax software; bank product compatible; ETIN,
          EFIN and PTIN tracking with a secure client portal.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Client Portal</h2>
            <p>Upload tax documents, check status, and more.</p>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Staff Dashboard</h2>
            <p>Manage clients and workflow.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
