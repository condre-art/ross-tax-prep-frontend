import { BankProvider, ProviderOption } from '@/lib/types/bank-products'

interface ProviderSelectorProps {
  providers: ProviderOption[]
  selectedProvider: BankProvider | null
  onSelect: (providerId: BankProvider) => void
}

export default function ProviderSelector({
  providers,
  selectedProvider,
  onSelect,
}: ProviderSelectorProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {providers.map((provider) => (
        <button
          key={provider.id}
          onClick={() => onSelect(provider.id)}
          className={`p-6 text-left rounded-lg border-2 transition ${
            selectedProvider === provider.id
              ? 'border-gold bg-gold bg-opacity-10'
              : 'border-gray-300 bg-white hover:border-gold'
          }`}
        >
          <h3 className="font-semibold text-navy mb-2">{provider.name}</h3>
          <p className="text-sm text-gray-600">{provider.description}</p>
          
          {selectedProvider === provider.id && (
            <div className="mt-3 text-gold font-semibold text-sm">
              ✓ Selected
            </div>
          )}
        </button>
      ))}
    </div>
  )
}
