'use client';

import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import Link from 'next/link';

export default function ESignPage() {
  const [signed, setSigned] = useState(false);
  const [signature, setSignature] = useState('');

  const documents = [
    {
      id: '1',
      name: 'Form 8879 - IRS e-file Signature Authorization',
      description: 'Authorization to electronically file your tax return',
      status: signed ? 'signed' : 'pending',
    },
    {
      id: '2',
      name: 'Bank Product Disclosure',
      description: 'Terms and conditions for selected bank products',
      status: 'signed',
    },
    {
      id: '3',
      name: 'Tax Return Summary',
      description: 'Summary of your 2025 tax return',
      status: 'signed',
    },
  ];

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (signature.trim() && signature.length >= 3) {
      setSigned(true);
      // TODO: Replace alert with proper toast notification
      alert('Document signed successfully!');
    } else {
      alert('Please enter your full legal name (at least 3 characters)');
    }
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-2">E-Sign Documents</h1>
        <p className="text-gray-600 mb-6">
          Review and electronically sign your tax documents
        </p>

        {/* Documents List */}
        <div className="space-y-4 mb-6">
          {documents.map((doc) => (
            <div key={doc.id} className="card">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy mb-1">{doc.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                  <span
                    className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                      doc.status === 'signed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {doc.status === 'signed' ? '✓ Signed' : 'Pending Signature'}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded">
                    View
                  </button>
                  {doc.status === 'pending' && (
                    <button className="px-4 py-2 text-sm bg-navy text-white rounded hover:bg-opacity-90">
                      Sign
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Signature Section */}
        {!signed && (
          <div className="card">
            <h2 className="text-xl font-bold text-navy mb-4">Electronic Signature</h2>
            <form onSubmit={handleSign}>
              <div className="mb-4">
                <label className="label">Type your full legal name</label>
                <input
                  type="text"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  className="input-field text-2xl font-serif"
                  placeholder="John Doe"
                  minLength={3}
                  pattern="[A-Za-z\s\-']+"
                  title="Please enter your full legal name (letters, spaces, hyphens, and apostrophes only)"
                  required
                />
                <p className="text-xs text-gray-600 mt-1">
                  By typing your name, you agree that this constitutes a legal signature
                </p>
              </div>

              <div className="mb-4 p-4 bg-gray-50 rounded">
                <h3 className="font-semibold mb-2">Electronic Signature Agreement</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  I agree that my electronic signature is the legal equivalent of my manual signature.
                  I consent to be legally bound by this signature and the documents I am signing.
                  This consent applies to all records relating to this transaction.
                </p>
              </div>

              <div className="flex justify-end gap-4">
                <Link href="/app/dashboard" className="px-6 py-3 text-gray-600 hover:text-navy">
                  Cancel
                </Link>
                <button type="submit" className="btn-primary">
                  Sign Document
                </button>
              </div>
            </form>
          </div>
        )}

        {signed && (
          <div className="card bg-green-50 border-2 border-green-400">
            <div className="flex items-start gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-lg font-bold text-green-800 mb-1">All Documents Signed</h3>
                <p className="text-sm text-green-700">
                  All required documents have been electronically signed. Your tax return is ready
                  for e-filing.
                </p>
                <div className="mt-4">
                  <Link href="/app/status" className="btn-secondary">
                    Check Filing Status
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
