import { DepositSplit } from '@/lib/types/bank-products'
import { validateRoutingNumber, validateAccountNumber } from '@/lib/utils/validation'

interface DepositSplitsProps {
  enabled: boolean
  splits: DepositSplit[]
  onToggle: (enabled: boolean) => void
  onAddSplit: () => void
  onRemoveSplit: (id: string) => void
  onSplitChange: (id: string, field: keyof DepositSplit, value: any) => void
}

export default function DepositSplits({
  enabled,
  splits,
  onToggle,
  onAddSplit,
  onRemoveSplit,
  onSplitChange,
}: DepositSplitsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-navy">Split Remaining Refund</h3>
          <p className="text-sm text-gray-600">Split your refund into multiple deposits</p>
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
        <div className="space-y-4">
          {splits.map((split, index) => (
            <div key={split.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-navy">Deposit #{index + 1}</h4>
                {splits.length > 1 && (
                  <button
                    onClick={() => onRemoveSplit(split.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Routing Number
                  </label>
                  <input
                    type="text"
                    maxLength={9}
                    value={split.routingNumber}
                    onChange={(e) => onSplitChange(split.id, 'routingNumber', e.target.value)}
                    className={`w-full px-3 py-2 border rounded focus:ring-2 focus:ring-gold focus:border-transparent ${
                      split.routingNumber && !validateRoutingNumber(split.routingNumber)
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                    placeholder="9 digits"
                  />
                  {split.routingNumber && !validateRoutingNumber(split.routingNumber) && (
                    <p className="text-xs text-red-600 mt-1">Must be 9 digits</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Number
                  </label>
                  <input
                    type="text"
                    maxLength={17}
                    value={split.accountNumber}
                    onChange={(e) => onSplitChange(split.id, 'accountNumber', e.target.value)}
                    className={`w-full px-3 py-2 border rounded focus:ring-2 focus:ring-gold focus:border-transparent ${
                      split.accountNumber && !validateAccountNumber(split.accountNumber)
                        ? 'border-red-500'
                        : 'border-gray-300'
                    }`}
                    placeholder="4-17 digits"
                  />
                  {split.accountNumber && !validateAccountNumber(split.accountNumber) && (
                    <p className="text-xs text-red-600 mt-1">Must be 4-17 digits</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Type
                  </label>
                  <select
                    value={split.accountType}
                    onChange={(e) => onSplitChange(split.id, 'accountType', e.target.value as 'CHECKING' | 'SAVINGS')}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="CHECKING">Checking</option>
                    <option value="SAVINGS">Savings</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={split.amount || ''}
                    onChange={(e) => onSplitChange(split.id, 'amount', Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="mt-3 bg-blue-50 p-3 rounded">
                <p className="text-xs text-gray-600">
                  ⚠️ Please double-check your routing and account number. Incorrect info can delay your refund.
                </p>
              </div>
            </div>
          ))}

          <button
            onClick={onAddSplit}
            className="w-full py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded hover:border-gold hover:text-gold transition"
          >
            + Add Another Split
          </button>
        </div>
      )}
    </div>
  )
}
