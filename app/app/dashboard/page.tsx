'use client';

import AppLayout from '@/components/AppLayout';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-6">Dashboard</h1>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/app/bank-products" className="card hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-navy mb-2">Bank Products</h3>
            <p className="text-gray-700 text-sm">
              Select refund transfer, advance, or off-bank options
            </p>
          </Link>

          <Link href="/app/refund-allocation" className="card hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-navy mb-2">Refund Allocation</h3>
            <p className="text-gray-700 text-sm">
              Configure savings bonds and deposit splits
            </p>
          </Link>

          <Link href="/app/status" className="card hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-navy mb-2">Check Status</h3>
            <p className="text-gray-700 text-sm">
              View your tax return and refund status
            </p>
          </Link>
        </div>

        {/* Welcome Section */}
        <div className="card mb-6">
          <h2 className="text-xl font-bold text-navy mb-4">Welcome to Your Client Portal</h2>
          <p className="text-gray-700 mb-4">
            Manage your tax preparation, select bank products, and track your refund all in one place.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/app/esign" className="btn-primary">
              Review Documents
            </Link>
            <Link href="/app/status" className="btn-secondary">
              Check Status
            </Link>
          </div>
        </div>

        {/* Status Overview */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-navy mb-3">Tax Return Status</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-semibold text-green-600">In Progress</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Updated:</span>
                <span className="font-semibold">Jan 28, 2026</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-navy mb-3">Bank Product</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Selected:</span>
                <span className="font-semibold">Not selected</span>
              </div>
              <div className="mt-3">
                <Link href="/app/bank-products" className="text-navy hover:underline text-sm">
                  Select Bank Product →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
