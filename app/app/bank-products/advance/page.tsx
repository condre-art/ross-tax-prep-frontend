'use client';

import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import Link from 'next/link';
import { AdvanceDecisionStatus } from '@/types';

export default function RefundAdvancePage() {
  // Mock advance decision - in real app, this would come from API
  const [advanceDecision] = useState<{
    status: AdvanceDecisionStatus;
    reason: string;
    amount?: number;
    decidedAt: string;
  }>({
    status: 'APPROVED',
    reason: 'Based on your tax return information, you qualify for a refund advance.',
    amount: 1500,
    decidedAt: new Date().toISOString(),
  });

  const getStatusColor = (status: AdvanceDecisionStatus) => {
    switch (status) {
      case 'APPROVED':
        return 'bg-green-100 border-green-400 text-green-800';
      case 'PENDING':
        return 'bg-yellow-100 border-yellow-400 text-yellow-800';
      case 'DENIED':
        return 'bg-red-100 border-red-400 text-red-800';
      default:
        return 'bg-gray-100 border-gray-400 text-gray-800';
    }
  };

  const getStatusIcon = (status: AdvanceDecisionStatus) => {
    switch (status) {
      case 'APPROVED':
        return '✓';
      case 'PENDING':
        return '⏳';
      case 'DENIED':
        return '✗';
      default:
        return '?';
    }
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <Link href="/app/bank-products" className="text-navy hover:underline text-sm">
            ← Back to Bank Products
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-navy mb-2">Refund Advance</h1>
        <p className="text-gray-600 mb-6">
          Get your refund early with instant approval decisions
        </p>

        {/* Decision Status Card */}
        <div className={`card border-2 ${getStatusColor(advanceDecision.status)} mb-6`}>
          <div className="flex items-start gap-4">
            <div className="text-4xl">{getStatusIcon(advanceDecision.status)}</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">
                Application {advanceDecision.status}
              </h2>
              
              {advanceDecision.status === 'APPROVED' && advanceDecision.amount && (
                <div className="text-3xl font-bold mb-3">
                  ${advanceDecision.amount.toLocaleString()}
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-semibold mb-1">Decision Reason:</h3>
                <p className="text-sm">{advanceDecision.reason}</p>
              </div>

              <div className="text-sm opacity-75">
                Decision Date: {new Date(advanceDecision.decidedAt).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="card">
            <h3 className="text-lg font-bold text-navy mb-3">How It Works</h3>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="font-bold">1.</span>
                <span>Select Refund Advance as your bank product</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">2.</span>
                <span>Get instant approval decision</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">3.</span>
                <span>Receive funds within 24 hours if approved</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">4.</span>
                <span>Advance is repaid from your actual refund</span>
              </li>
            </ol>
          </div>

          <div className="card">
            <h3 className="text-lg font-bold text-navy mb-3">Approval Factors</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Expected refund amount</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Tax return complexity</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Credit and identity verification</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Previous filing history</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Possible Decision Reasons */}
        <div className="card mb-6">
          <h3 className="text-lg font-bold text-navy mb-4">Common Decision Reasons</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-1">✓ Approved Reasons:</h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Sufficient expected refund amount</li>
                <li>• Verified tax return information</li>
                <li>• Passed identity and credit checks</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-yellow-700 mb-1">⏳ Pending Reasons:</h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Additional verification required</li>
                <li>• Awaiting manual review</li>
                <li>• Tax return processing in progress</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-red-700 mb-1">✗ Denied Reasons:</h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Expected refund below minimum threshold</li>
                <li>• Unable to verify identity or credit</li>
                <li>• Tax return contains errors or inconsistencies</li>
                <li>• Previous advance defaults</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Providers Info */}
        <div className="card">
          <h3 className="text-lg font-bold text-navy mb-3">Available Providers</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 bg-gray-50 rounded">
              <h4 className="font-semibold text-navy">SBTPG</h4>
              <p className="text-xs text-gray-600 mt-1">Santa Barbara Tax Products Group</p>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <h4 className="font-semibold text-navy">EPS Financial</h4>
              <p className="text-xs text-gray-600 mt-1">Electronic Payment Services</p>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <h4 className="font-semibold text-navy">Refund Advantage</h4>
              <p className="text-xs text-gray-600 mt-1">Refund Advance Solutions</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {advanceDecision.status === 'APPROVED' && (
          <div className="mt-6 flex justify-end gap-4">
            <Link href="/app/bank-products" className="btn-primary">
              Continue with Refund Advance
            </Link>
          </div>
        )}

        {advanceDecision.status === 'DENIED' && (
          <div className="mt-6 flex justify-end gap-4">
            <Link href="/app/bank-products" className="btn-secondary">
              View Other Options
            </Link>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
