/**
 * Validates routing number (9 digits)
 */
export function validateRoutingNumber(routingNumber: string): boolean {
  return /^\d{9}$/.test(routingNumber)
}

/**
 * Validates account number (4-17 digits)
 */
export function validateAccountNumber(accountNumber: string): boolean {
  return /^\d{4,17}$/.test(accountNumber)
}

/**
 * Validates email format
 */
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Formats currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

/**
 * Validates that allocation total doesn't exceed refund amount
 */
export function validateAllocationTotal(
  refundAmount: number,
  allocations: number[]
): { valid: boolean; message?: string } {
  const total = allocations.reduce((sum, amount) => sum + amount, 0)
  
  if (total > refundAmount) {
    return {
      valid: false,
      message: `Total allocation ($${formatCurrency(total)}) exceeds refund amount ($${formatCurrency(refundAmount)})`,
    }
  }
  
  return { valid: true }
}

/**
 * Generates a unique ID
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}
