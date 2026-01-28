import Link from 'next/link'

export default function LoginPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '20px' }}>
        <div className="card">
          <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>Client Portal Login</h1>
          
          <form>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="your.email@example.com"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="Enter your password"
                required 
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
              Sign In
            </button>
          </form>

          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.95rem' }}>
            <p>Don&apos;t have an account? <Link href="/app/intake" style={{ color: 'var(--gold)' }}>Get Started</Link></p>
            <p style={{ marginTop: '8px' }}>
              <Link href="/" style={{ color: 'var(--navy)' }}>← Back to Home</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
