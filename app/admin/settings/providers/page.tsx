'use client'

import { useState } from 'react'
import Link from 'next/link'

type Provider = {
  id: number
  name: string
  type: 'Bank' | 'Advance Provider'
  status: 'Active' | 'Inactive'
  products: string[]
}

export default function ProvidersSettingsPage() {
  const [providers] = useState<Provider[]>([
    { id: 1, name: 'Coastal Bank', type: 'Bank', status: 'Active', products: ['Refund Transfer', 'Refund Advance'] },
    { id: 2, name: 'National Financial', type: 'Advance Provider', status: 'Active', products: ['Refund Advance'] },
    { id: 3, name: 'Partner Bank Corp', type: 'Bank', status: 'Inactive', products: ['Refund Transfer'] },
  ])

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <div style={{ marginBottom: '24px' }}>
        <Link href="/admin/clients" style={{ color: 'var(--navy)' }}>
          ← Back to Admin
        </Link>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ margin: 0 }}>Bank Product Providers</h1>
        <button className="btn btn-primary">+ Add New Provider</button>
      </div>

      {/* Provider List */}
      <div className="card">
        <h2 style={{ marginBottom: '24px' }}>Configured Providers</h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-gray)', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px' }}>Provider Name</th>
                <th style={{ padding: '12px 8px' }}>Type</th>
                <th style={{ padding: '12px 8px' }}>Products</th>
                <th style={{ padding: '12px 8px' }}>Status</th>
                <th style={{ padding: '12px 8px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {providers.map(provider => (
                <tr key={provider.id} style={{ borderBottom: '1px solid var(--border-gray)' }}>
                  <td style={{ padding: '16px 8px', fontWeight: 600 }}>{provider.name}</td>
                  <td style={{ padding: '16px 8px' }}>{provider.type}</td>
                  <td style={{ padding: '16px 8px' }}>
                    {provider.products.join(', ')}
                  </td>
                  <td style={{ padding: '16px 8px' }}>
                    <span style={{ 
                      padding: '4px 12px', 
                      borderRadius: '12px',
                      background: provider.status === 'Active' ? '#e8f8e8' : '#f0f0f0',
                      color: provider.status === 'Active' ? '#2d6a2d' : '#666',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>
                      {provider.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 8px' }}>
                    <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.85rem', marginRight: '8px' }}>
                      Edit
                    </button>
                    <button style={{ 
                      padding: '6px 12px', 
                      fontSize: '0.85rem',
                      background: 'transparent',
                      border: '1px solid #d32f2f',
                      color: '#d32f2f',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}>
                      Disable
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Settings Navigation */}
      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <Link href="/admin/settings/fees" className="btn btn-secondary">
          Configure Fee Settings →
        </Link>
      </div>
    </div>
  )
}
