import { BankProductType, BankProduct } from '@/lib/types/bank-products'

interface ProductSelectorProps {
  products: BankProduct[]
  selectedProduct: BankProductType | null
  onSelect: (productId: BankProductType) => void
}

export default function ProductSelector({
  products,
  selectedProduct,
  onSelect,
}: ProductSelectorProps) {
  return (
    <div className="grid gap-4">
      {products.map((product, index) => (
        <button
          key={product.id}
          onClick={() => onSelect(product.id)}
          className={`p-6 text-left rounded-lg border-2 transition ${
            selectedProduct === product.id
              ? 'border-gold bg-gold bg-opacity-10'
              : 'border-gray-300 bg-white hover:border-gold'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg font-bold text-navy">{index + 1}.</span>
                <h3 className="font-semibold text-navy">{product.name}</h3>
              </div>
              <p className="text-sm text-gray-600 ml-8">{product.description}</p>
            </div>
            
            {selectedProduct === product.id && (
              <div className="text-gold font-semibold text-sm ml-4">
                ✓ Selected
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}
