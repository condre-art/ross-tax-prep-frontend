export interface AllocationItem {
  id: string
  label: string
  amount: number
  type: 'fee' | 'advance' | 'payout'
}

export interface AllocationValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

export function validateRefundAllocation(
  totalRefund: number,
  allocations: AllocationItem[]
): AllocationValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  if (totalRefund <= 0) {
    errors.push('Total refund must be greater than 0')
  }

  const totalAllocated = allocations.reduce(
    (sum, item) => sum + item.amount,
    0
  )

  if (totalAllocated > totalRefund) {
    errors.push(
      `Total allocated ($${totalAllocated}) exceeds refund amount ($${totalRefund})`
    )
  }

  allocations.forEach((item) => {
    if (item.amount < 0) {
      errors.push(`${item.label} cannot be negative`)
    }

    if (item.type === 'fee' && item.amount > totalRefund * 0.5) {
      warnings.push(
        `${item.label} is more than 50% of total refund - please verify`
      )
    }
  })

  const clientPayout = totalRefund - totalAllocated
  if (clientPayout < 0) {
    errors.push('Client payout cannot be negative')
  }

  if (clientPayout === 0) {
    warnings.push('Client will receive no payout after allocations')
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}

export function calculateClientPayout(
  totalRefund: number,
  allocations: AllocationItem[]
): number {
  const totalAllocated = allocations.reduce(
    (sum, item) => sum + item.amount,
    0
  )
  return Math.max(0, totalRefund - totalAllocated)
}
