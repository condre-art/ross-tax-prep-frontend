'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BankProvider, BankProductType, ProviderOption, BankProduct } from '@/lib/types/bank-products'
import { logAuditEntry, AUDIT_ACTIONS } from '@/lib/utils/audit'
import ProviderSelector from '@/components/bank-products/ProviderSelector'
import ProductSelector from '@/components/bank-products/ProductSelector'

const PROVIDERS: ProviderOption[] = [
  {
    id: 'SBTPG',
    name: 'Santa Barbara TPG',
    description: 'Trusted refund processing with comprehensive features',
  },
  {
    id: 'EPS_FINANCIAL',
    name: 'EPS Financial',
    description: 'Fast processing and competitive rates',
  },
  {
    id: 'REFUND_ADVANTAGE',
    name: 'Refund Advantage',
    description: 'Flexible options and advance opportunities',
  },
]

const PRODUCTS: BankProduct[] = [
  {
    id: 'OFF_BANK',
    name: 'No Bank Product',
    description: 'Refund goes directly to you.',
  },
  {
    id: 'REFUND_TRANSFER',
    name: 'Refund Transfer (RT)',
    description: 'Fees can be deducted from your refund.',
  },
  {
    id: 'REFUND_ADVANCE_RT',
    name: 'Refund Advance + RT',
    description: 'If approved, you may receive funds earlier.',
  },
]

export default function BankProductsPage() {
  const router = useRouter()
  const [selectedProvider, setSelectedProvider] = useState<BankProvider | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<BankProductType | null>(null)
  const [showProducts, setShowProducts] = useState(false)

  const handleProviderSelect = async (providerId: BankProvider) => {
    setSelectedProvider(providerId)
    setShowProducts(true)
    
    await logAuditEntry({
      action: AUDIT_ACTIONS.PROVIDER_SELECTED,
      userId: 'client-temp-id', // Would come from auth context
      details: { providerId },
    })
  }

  const handleProductSelect = async (productId: BankProductType) => {
    setSelectedProduct(productId)
    
    await logAuditEntry({
      action: AUDIT_ACTIONS.PRODUCT_SELECTED,
      userId: 'client-temp-id',
      details: { productId, providerId: selectedProvider },
    })
  }

  const handleContinue = () => {
    if (!selectedProvider || !selectedProduct) return

    // If Refund Advance selected, go to advance decision page
    if (selectedProduct === 'REFUND_ADVANCE_RT') {
      router.push('/app/bank-products/advance')
    } else {
      // Otherwise, go to refund allocation
      router.push('/app/refund-allocation')
    }
  }

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-off-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">
            Choose how you want to receive your refund
          </h1>
          <p className="text-gray-600">
            Select a refund option and complete the required disclosures.
          </p>
        </div>

        {/* Step 1: Provider Selection */}
        <div className="mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-navy mb-1">
              Step 1 — Select a provider
            </h2>
            <p className="text-sm text-gray-500">
              Provider options may affect eligibility and available features.
            </p>
          </div>
          
          <ProviderSelector
            providers={PROVIDERS}
            selectedProvider={selectedProvider}
            onSelect={handleProviderSelect}
          />
        </div>

        {/* Step 2: Product Selection */}
        {showProducts && (
          <div className="mb-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-navy mb-1">
                Step 2 — Choose Product
              </h2>
            </div>
            
            <ProductSelector
              products={PRODUCTS}
              selectedProduct={selectedProduct}
              onSelect={handleProductSelect}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={handleBack}
            className="px-6 py-3 border-2 border-navy text-navy font-semibold rounded hover:bg-navy hover:text-white transition"
          >
            Back to Dashboard
          </button>
          
          <button
            onClick={handleContinue}
            disabled={!selectedProvider || !selectedProduct}
            className="px-6 py-3 bg-gold text-navy font-semibold rounded hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
