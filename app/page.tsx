export default function Home() {
  return (
    <main style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>
        Ross Tax & Bookkeeping
      </h1>
      <p style={{ maxWidth: '720px', margin: '0 auto 32px', fontSize: '1.1rem' }}>
        Professional tax preparation and bookkeeping services for individuals and
        small businesses.
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
        <a
          href="/portal/login"
          style={{
            display: 'inline-block',
            padding: '14px 28px',
            background: 'var(--gold)',
            color: 'var(--navy)',
            fontWeight: 'bold',
            borderRadius: '4px',
          }}
        >
          Client Portal
        </a>
        <a
          href="/app/dashboard"
          style={{
            display: 'inline-block',
            padding: '14px 28px',
            background: 'var(--navy)',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '4px',
          }}
        >
          Staff Dashboard
        </a>
      </div>
    </main>
  )
}
