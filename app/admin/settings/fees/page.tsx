'use client'

import { useState } from 'react'
import Link from 'next/link'

type FeeStructure = {
  id: number
  product: string
  baseFee: number
  description: string
}

export default function FeesSettingsPage() {
  const [fees, setFees] = useState<FeeStructure[]>([
    { id: 1, product: 'Refund Transfer', baseFee: 35, description: 'Standard RT processing fee' },
    { id: 2, product: 'Refund Advance', baseFee: 0, description: 'No fee (0% APR advance)' },
    { id: 3, product: 'Prepaid Card', baseFee: 10, description: 'Card issuance and activation' },
  ])

  return (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '1000px' }}>
      <div style={{ marginBottom: '24px' }}>
        <Link href="/admin/settings/providers" style={{ color: 'var(--navy)' }}>
          ← Back to Provider Settings
        </Link>
      </div>

      <h1 style={{ marginBottom: '32px' }}>Fee Configuration</h1>

      {/* Fee Structure */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '24px' }}>Bank Product Fees</h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-gray)', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px' }}>Product</th>
                <th style={{ padding: '12px 8px' }}>Description</th>
                <th style={{ padding: '12px 8px' }}>Base Fee</th>
                <th style={{ padding: '12px 8px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fees.map(fee => (
                <tr key={fee.id} style={{ borderBottom: '1px solid var(--border-gray)' }}>
                  <td style={{ padding: '16px 8px', fontWeight: 600 }}>{fee.product}</td>
                  <td style={{ padding: '16px 8px', color: '#666' }}>{fee.description}</td>
                  <td style={{ padding: '16px 8px' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                      ${fee.baseFee.toFixed(2)}
                    </span>
                  </td>
                  <td style={{ padding: '16px 8px' }}>
                    <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tax Prep Fees */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '24px' }}>Tax Preparation Fees</h2>

        <div style={{ display: 'grid', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px', alignItems: 'center', padding: '12px', borderBottom: '1px solid var(--border-gray)' }}>
            <div>
              <strong>Individual 1040 (Federal)</strong>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: '4px 0 0 0' }}>Basic federal tax return</p>
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>$150</div>
            <div><button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>Edit</button></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px', alignItems: 'center', padding: '12px', borderBottom: '1px solid var(--border-gray)' }}>
            <div>
              <strong>State Tax Return</strong>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: '4px 0 0 0' }}>Additional state filing</p>
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>$50</div>
            <div><button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>Edit</button></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px', alignItems: 'center', padding: '12px' }}>
            <div>
              <strong>Business Return (Schedule C)</strong>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: '4px 0 0 0' }}>Self-employment income</p>
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>$250</div>
            <div><button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>Edit</button></div>
          </div>
        </div>
      </div>

      {/* Office Settings */}
      <div className="card">
        <h2 style={{ marginBottom: '24px' }}>Office-Level Settings</h2>

        <div className="form-group">
          <label className="form-label">Default Bank Product Provider</label>
          <select className="form-select">
            <option value="1">Coastal Bank</option>
            <option value="2">National Financial</option>
            <option value="3">Partner Bank Corp</option>
          </select>
        </div>

        <div className="form-group">
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input type="checkbox" defaultChecked style={{ marginRight: '12px' }} />
            <span>Enable Refund Advance for eligible clients</span>
          </label>
        </div>

        <div className="form-group">
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input type="checkbox" defaultChecked style={{ marginRight: '12px' }} />
            <span>Allow clients to select prepaid card option</span>
          </label>
        </div>

        <div className="form-group">
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input type="checkbox" defaultChecked style={{ marginRight: '12px' }} />
            <span>Enable Form 8888 (Refund Allocation) for all clients</span>
          </label>
        </div>

        <button className="btn btn-primary" style={{ marginTop: '16px' }}>
          Save Settings
        </button>
      </div>
    </div>
  )
}
