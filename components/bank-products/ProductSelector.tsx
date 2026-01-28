interface Product {
  id: string
  name: string
  description: string
  amount?: number
  fee?: number
}

interface ProductSelectorProps {
  products: Product[]
  selectedProduct: string | null
  onSelect: (productId: string) => void
}

export default function ProductSelector({
  products,
  selectedProduct,
  onSelect,
}: ProductSelectorProps) {
  return (
    <div>
      <h3>Choose Product</h3>
      <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelect(product.id)}
            style={{
              padding: '16px',
              border: `2px solid ${selectedProduct === product.id ? 'var(--navy)' : '#ddd'}`,
              borderRadius: '8px',
              cursor: 'pointer',
              background: selectedProduct === product.id ? '#f0f8ff' : 'white',
            }}
          >
            <h4>{product.name}</h4>
            <p style={{ color: '#666', fontSize: '14px' }}>{product.description}</p>
            {product.amount && (
              <p style={{ fontWeight: 'bold', marginTop: '8px' }}>
                Amount: ${product.amount.toLocaleString()}
              </p>
            )}
            {product.fee && (
              <p style={{ fontSize: '14px', color: '#666' }}>
                Fee: ${product.fee.toFixed(2)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
