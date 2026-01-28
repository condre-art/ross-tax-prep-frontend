interface SavingsBondsToggleProps {
  enabled: boolean
  amount: number
  onToggle: (enabled: boolean) => void
  onAmountChange: (amount: number) => void
}

export default function SavingsBondsToggle({
  enabled,
  amount,
  onToggle,
  onAmountChange,
}: SavingsBondsToggleProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-navy">Purchase Savings Bonds</h3>
          <p className="text-sm text-gray-600">Allocate part of your refund to U.S. Savings Bonds</p>
        </div>
        
        <button
          onClick={() => onToggle(!enabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
            enabled ? 'bg-gold' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {enabled && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Savings Bond Amount
          </label>
          <input
            type="number"
            min="0"
            step="50"
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="Enter amount (minimum $50)"
          />
          <p className="text-xs text-gray-500 mt-1">
            Savings bonds typically have a minimum purchase of $50 and are sold in increments of $50.
          </p>
        </div>
      )}
    </div>
  )
}
