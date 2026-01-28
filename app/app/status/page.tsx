'use client';

import AppLayout from '@/components/AppLayout';
import Link from 'next/link';

export default function StatusPage() {
  // Mock status data - in real app, this would come from API
  const status = {
    taxReturn: {
      status: 'Filed',
      filedDate: '2026-01-25',
      expectedRefund: 3250,
    },
    efile: {
      status: 'Accepted',
      acceptedDate: '2026-01-26',
      acknowledgement: 'ACK123456789',
    },
    refund: {
      status: 'Processing',
      estimatedDate: '2026-02-10',
    },
    bankProduct: {
      type: 'Refund Transfer',
      provider: 'SBTPG',
      status: 'Active',
    },
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-2">Status</h1>
        <p className="text-gray-600 mb-6">
          Track your tax return, e-file, and refund status
        </p>

        {/* Timeline */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-navy mb-6">Filing Progress</h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div className="w-0.5 h-full bg-green-500 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <h3 className="font-semibold text-navy mb-1">Tax Return Prepared</h3>
                <p className="text-sm text-gray-600">
                  Your tax return has been prepared and reviewed
                </p>
                <p className="text-xs text-gray-500 mt-1">Completed: {status.taxReturn.filedDate}</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div className="w-0.5 h-full bg-green-500 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <h3 className="font-semibold text-navy mb-1">E-Filed</h3>
                <p className="text-sm text-gray-600">
                  Tax return electronically filed with IRS
                </p>
                <p className="text-xs text-gray-500 mt-1">Filed: {status.taxReturn.filedDate}</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div className="w-0.5 h-full bg-blue-300 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <h3 className="font-semibold text-navy mb-1">IRS Accepted</h3>
                <p className="text-sm text-gray-600">
                  Your return has been accepted by the IRS
                </p>
                <p className="text-xs text-gray-500 mt-1">Accepted: {status.efile.acceptedDate}</p>
                <p className="text-xs text-gray-500">ACK: {status.efile.acknowledgement}</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse">
                  ...
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-navy mb-1">Refund Processing</h3>
                <p className="text-sm text-gray-600">
                  IRS is processing your refund
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Estimated: {status.refund.estimatedDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-navy mb-3">Refund Information</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Expected Amount:</span>
                <span className="font-bold text-green-600">
                  ${status.taxReturn.expectedRefund.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Status:</span>
                <span className="font-semibold text-blue-600">{status.refund.status}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Est. Date:</span>
                <span className="font-semibold">{status.refund.estimatedDate}</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-navy mb-3">Bank Product</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Product:</span>
                <span className="font-semibold">{status.bankProduct.type}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Provider:</span>
                <span className="font-semibold">{status.bankProduct.provider}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Status:</span>
                <span className="font-semibold text-green-600">{status.bankProduct.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card">
          <h3 className="text-lg font-semibold text-navy mb-4">Need Help?</h3>
          <div className="flex gap-4 flex-wrap">
            <Link href="/app/bank-products" className="btn-secondary">
              View Bank Product Details
            </Link>
            <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
