'use client'

import { useState } from 'react'
import Link from 'next/link'

type Client = {
  id: number
  name: string
  email: string
  status: 'New' | 'In Progress' | 'Review' | 'Filed' | 'Complete'
  filingStatus: string
  lastUpdated: string
}

export default function AdminClientsPage() {
  const [clients] = useState<Client[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Filed', filingStatus: 'Single', lastUpdated: '2026-01-23' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'In Progress', filingStatus: 'Married Joint', lastUpdated: '2026-01-27' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Review', filingStatus: 'Head of Household', lastUpdated: '2026-01-28' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', status: 'New', filingStatus: 'Single', lastUpdated: '2026-01-28' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', status: 'Complete', filingStatus: 'Married Joint', lastUpdated: '2026-01-20' },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return '#666'
      case 'In Progress': return '#1976d2'
      case 'Review': return '#f57c00'
      case 'Filed': return '#388e3c'
      case 'Complete': return '#2d6a2d'
      default: return '#666'
    }
  }

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ margin: 0 }}>Client Management</h1>
        <button className="btn btn-primary">+ Add New Client</button>
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Search Clients</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Filter by Status</label>
            <select 
              className="form-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Review">Review</option>
              <option value="Filed">Filed</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
        </div>
      </div>

      {/* Client List */}
      <div className="card">
        <h2 style={{ marginBottom: '24px' }}>
          Clients ({filteredClients.length})
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-gray)', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px' }}>Client</th>
                <th style={{ padding: '12px 8px' }}>Email</th>
                <th style={{ padding: '12px 8px' }}>Filing Status</th>
                <th style={{ padding: '12px 8px' }}>Status</th>
                <th style={{ padding: '12px 8px' }}>Last Updated</th>
                <th style={{ padding: '12px 8px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map(client => (
                <tr key={client.id} style={{ borderBottom: '1px solid var(--border-gray)' }}>
                  <td style={{ padding: '16px 8px', fontWeight: 600 }}>{client.name}</td>
                  <td style={{ padding: '16px 8px', color: '#666' }}>{client.email}</td>
                  <td style={{ padding: '16px 8px' }}>{client.filingStatus}</td>
                  <td style={{ padding: '16px 8px' }}>
                    <span style={{ 
                      padding: '4px 12px', 
                      borderRadius: '12px',
                      background: `${getStatusColor(client.status)}20`,
                      color: getStatusColor(client.status),
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>
                      {client.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 8px', color: '#666' }}>
                    {new Date(client.lastUpdated).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '16px 8px' }}>
                    <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredClients.length === 0 && (
          <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
            No clients found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  )
}
