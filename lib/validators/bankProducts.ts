export interface BankProductValidationResult {
  isValid: boolean
  errors: string[]
}

export interface BankProductOffer {
  providerId: string
  productId: string
  amount: number
  clientId: string
}

export function validateBankProductOffer(
  offer: BankProductOffer
): BankProductValidationResult {
  const errors: string[] = []

  if (!offer.providerId || offer.providerId.trim() === '') {
    errors.push('Provider ID is required')
  }

  if (!offer.productId || offer.productId.trim() === '') {
    errors.push('Product ID is required')
  }

  if (!offer.clientId || offer.clientId.trim() === '') {
    errors.push('Client ID is required')
  }

  if (offer.amount <= 0) {
    errors.push('Amount must be greater than 0')
  }

  if (offer.amount > 10000) {
    errors.push('Amount cannot exceed $10,000')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export function validateRoutingNumber(routingNumber: string): boolean {
  // Remove any non-digit characters
  const digits = routingNumber.replace(/\D/g, '')

  // Must be exactly 9 digits
  if (digits.length !== 9) {
    return false
  }

  // Checksum validation using the ABA algorithm
  const weights = [3, 7, 1, 3, 7, 1, 3, 7, 1]
  const sum = digits
    .split('')
    .reduce((acc, digit, index) => acc + parseInt(digit) * weights[index], 0)

  return sum % 10 === 0
}

export function validateAccountNumber(accountNumber: string): boolean {
  // Remove any non-digit characters
  const digits = accountNumber.replace(/\D/g, '')

  // Must be between 4 and 17 digits
  return digits.length >= 4 && digits.length <= 17
}
