'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic
    console.log('Login attempt:', { email, password })
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h1 style={{ marginBottom: '24px', textAlign: 'center' }}>
          Client Portal Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label
              htmlFor="email"
              style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label
              htmlFor="password"
              style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: 'var(--navy)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  )
}
