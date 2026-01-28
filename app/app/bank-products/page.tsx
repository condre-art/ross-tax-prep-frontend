'use client';

import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import Link from 'next/link';
import { BankProductType, ProviderType, PayoutMethodType } from '@/types';

export default function BankProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<BankProductType | ''>('');
  const [selectedProvider, setSelectedProvider] = useState<ProviderType | ''>('');
  const [selectedPayoutMethod, setSelectedPayoutMethod] = useState<PayoutMethodType | ''>('');
  const [agreedToDisclosures, setAgreedToDisclosures] = useState(false);

  const products: { value: BankProductType; label: string; description: string }[] = [
    {
      value: 'OFF_BANK',
      label: 'Off-Bank',
      description: 'Traditional refund without bank product fees',
    },
    {
      value: 'REFUND_TRANSFER',
      label: 'Refund Transfer (RT)',
      description: 'Convenient refund processing with fees deducted',
    },
    {
      value: 'REFUND_ADVANCE',
      label: 'Refund Advance (RA + RT)',
      description: 'Get your refund early with instant approval',
    },
  ];

  const providers: { value: ProviderType; label: string }[] = [
    { value: 'SBTPG', label: 'SBTPG' },
    { value: 'EPS_FINANCIAL', label: 'EPS Financial' },
    { value: 'REFUND_ADVANTAGE', label: 'Refund Advantage' },
  ];

  const payoutMethods: { value: PayoutMethodType; label: string; description: string }[] = [
    {
      value: 'DIRECT_DEPOSIT',
      label: 'Direct Deposit',
      description: 'Funds deposited directly to your bank account',
    },
    {
      value: 'CHECK',
      label: 'Paper Check',
      description: 'Physical check mailed to your address',
    },
    {
      value: 'PREPAID_CARD',
      label: 'Prepaid Card',
      description: 'Refund loaded onto a prepaid debit card',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedProduct || !selectedProvider || !selectedPayoutMethod) {
      alert('Please complete all selections');
      return;
    }

    if (!agreedToDisclosures) {
      alert('Please agree to the disclosures');
      return;
    }

    // Save consent with compliance data
    const consent = {
      disclosureId: `${selectedProvider}_${selectedProduct}_v1`,
      version: '1.0',
      acceptedAt: new Date().toISOString(),
      clientId: localStorage.getItem('clientId') || 'demo-client-123',
      userAgent: navigator.userAgent,
    };

    // TODO: Replace with actual API call
    // await bankProductsApi.submitConsent(consent);
    // await bankProductsApi.submitApplication({ ... });
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Submitting consent:', consent);
    }
    
    // TODO: Replace alert with proper toast notification
    alert('Bank product selection submitted successfully!');
  };

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-2">Bank Products</h1>
        <p className="text-gray-600 mb-6">
          Select your preferred refund option and provider
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Product Selection */}
          <div className="card">
            <h2 className="text-xl font-bold text-navy mb-4">1. Select Product</h2>
            <div className="space-y-3">
              {products.map((product) => (
                <label
                  key={product.value}
                  className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedProduct === product.value
                      ? 'border-navy bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="product"
                    value={product.value}
                    checked={selectedProduct === product.value}
                    onChange={(e) => setSelectedProduct(e.target.value as BankProductType)}
                    className="mr-3"
                  />
                  <span className="font-semibold text-navy">{product.label}</span>
                  <p className="ml-6 text-sm text-gray-600 mt-1">{product.description}</p>
                </label>
              ))}
            </div>

            {selectedProduct === 'REFUND_ADVANCE' && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Refund Advance requires approval. You'll see the decision instantly.
                  <Link href="/app/bank-products/advance" className="ml-2 underline">
                    Learn more →
                  </Link>
                </p>
              </div>
            )}
          </div>

          {/* Provider Selection */}
          {selectedProduct && (
            <div className="card">
              <h2 className="text-xl font-bold text-navy mb-4">2. Select Provider</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {providers.map((provider) => (
                  <label
                    key={provider.value}
                    className={`block p-4 border-2 rounded-lg cursor-pointer text-center transition-all ${
                      selectedProvider === provider.value
                        ? 'border-navy bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="provider"
                      value={provider.value}
                      checked={selectedProvider === provider.value}
                      onChange={(e) => setSelectedProvider(e.target.value as ProviderType)}
                      className="sr-only"
                    />
                    <span className="font-semibold text-navy">{provider.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Payout Method Selection */}
          {selectedProduct && selectedProvider && (
            <div className="card">
              <h2 className="text-xl font-bold text-navy mb-4">3. Select Payout Method</h2>
              <div className="space-y-3">
                {payoutMethods.map((method) => (
                  <label
                    key={method.value}
                    className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedPayoutMethod === method.value
                        ? 'border-navy bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payoutMethod"
                      value={method.value}
                      checked={selectedPayoutMethod === method.value}
                      onChange={(e) => setSelectedPayoutMethod(e.target.value as PayoutMethodType)}
                      className="mr-3"
                    />
                    <span className="font-semibold text-navy">{method.label}</span>
                    <p className="ml-6 text-sm text-gray-600 mt-1">{method.description}</p>
                  </label>
                ))}
              </div>

              {selectedPayoutMethod === 'DIRECT_DEPOSIT' && (
                <div className="mt-4 space-y-3">
                  <div>
                    <label className="label">Routing Number</label>
                    <input type="text" className="input-field" placeholder="123456789" pattern="[0-9]{9}" title="Routing number must be exactly 9 digits" maxLength={9} />
                  </div>
                  <div>
                    <label className="label">Account Number</label>
                    <input type="text" className="input-field" placeholder="987654321" pattern="[0-9]{4,17}" title="Account number must be 4-17 digits" minLength={4} maxLength={17} />
                  </div>
                  <div>
                    <label className="label">Account Type</label>
                    <select className="input-field">
                      <option value="">Select type</option>
                      <option value="CHECKING">Checking</option>
                      <option value="SAVINGS">Savings</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Disclosures & Consent */}
          {selectedProduct && selectedProvider && selectedPayoutMethod && (
            <div className="card">
              <h2 className="text-xl font-bold text-navy mb-4">4. Review & Agree</h2>
              
              <div className="p-4 bg-gray-50 border border-gray-200 rounded mb-4 max-h-64 overflow-y-auto">
                <h3 className="font-semibold mb-2">Disclosure Agreement</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Provider: <strong>{selectedProvider}</strong> | Product: <strong>{selectedProduct}</strong>
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  By selecting this bank product, you agree to the terms and conditions of {selectedProvider}.
                  Fees may apply for refund processing. Your refund will be processed according to the
                  selected payout method. This consent is tracked with your client ID, timestamp,
                  and device information for compliance purposes.
                </p>
              </div>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={agreedToDisclosures}
                  onChange={(e) => setAgreedToDisclosures(e.target.checked)}
                  className="mt-1 mr-3"
                />
                <span className="text-sm">
                  I have read and agree to the disclosure agreement. I understand that my consent
                  will be recorded with disclosure ID, version, timestamp, and device information.
                </span>
              </label>
            </div>
          )}

          {/* Submit Button */}
          {selectedProduct && selectedProvider && selectedPayoutMethod && (
            <div className="flex justify-end gap-4">
              <Link href="/app/dashboard" className="px-6 py-3 text-gray-600 hover:text-navy">
                Cancel
              </Link>
              <button type="submit" className="btn-primary">
                Submit Selection
              </button>
            </div>
          )}
        </form>
      </div>
    </AppLayout>
  );
}
