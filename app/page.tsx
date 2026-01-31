export default function Home() {
  return (
    <main>
      <section className="bg-navy text-cream py-20 text-center">
        <img src="/logo.png" alt="ROSS Tax & Bookkeeping" className="mx-auto h-32 mb-6" />
        <h1 className="text-4xl font-bold">Precision. Compliance. Confidence.</h1>
        <p className="mt-4 max-w-xl mx-auto">
          Trusted tax and bookkeeping solutions for individuals and businesses.
        </p>
        <a href="#contact" className="inline-block mt-6 bg-gold text-navy px-6 py-3 font-semibold rounded">
          Schedule a Consultation
        </a>
      </section>

      <section className="py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div className="border p-6 rounded">
          <h3 className="text-xl font-semibold">Tax Preparation</h3>
          <p className="mt-2">Accurate, compliant, and strategic tax filing.</p>
        </div>
        <div className="border p-6 rounded">
          <h3 className="text-xl font-semibold">Bookkeeping</h3>
          <p className="mt-2">Clean books, clear insights, stress‑free finances.</p>
        </div>
        <div className="border p-6 rounded">
          <h3 className="text-xl font-semibold">Business Advisory</h3>
          <p className="mt-2">Financial clarity for growth‑focused businesses.</p>
        </div>
      </section>

      <section id="contact" className="bg-navy text-cream py-16 text-center">
        <h2 className="text-3xl font-bold">Get Started Today</h2>
        <p className="mt-4">Email: contact@rosstax.com | Phone: (XXX) XXX‑XXXX</p>
      </section>
    </main>
  );
}
