export interface BankProvider {
  id: string
  name: string
  logo?: string
  active: boolean
  products: string[]
}

export interface BankProduct {
  id: string
  name: string
  description: string
  providerId: string
  type: 'advance' | 'transfer' | 'card'
  minimumRefund: number
  maximumAmount: number
  fee: number
  terms?: string
}

export interface BankProductOffer {
  id: string
  clientId: string
  providerId: string
  productId: string
  amount: number
  fee: number
  status: 'pending' | 'approved' | 'declined' | 'expired'
  createdAt: string
  updatedAt: string
  expiresAt?: string
}

export interface PayoutMethod {
  type: 'direct' | 'check' | 'card'
  routingNumber?: string
  accountNumber?: string
  accountType?: 'checking' | 'savings'
  cardNumber?: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
  }
}

export interface BankProductApplication {
  clientId: string
  providerId: string
  productId: string
  requestedAmount: number
  payoutMethod: PayoutMethod
  disclosuresAccepted: boolean
  applicationDate: string
}
