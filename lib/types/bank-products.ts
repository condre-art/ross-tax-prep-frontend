// Bank Product Provider Types
export type BankProvider = 'SBTPG' | 'EPS_FINANCIAL' | 'REFUND_ADVANTAGE'

export interface ProviderOption {
  id: BankProvider
  name: string
  description: string
  logo?: string
}

// Bank Product Types
export type BankProductType = 'OFF_BANK' | 'REFUND_TRANSFER' | 'REFUND_ADVANCE_RT'

export interface BankProduct {
  id: BankProductType
  name: string
  description: string
  icon?: string
}

// Refund Advance Decision Types
export type AdvanceDecisionStatus = 'APPROVED' | 'PENDING' | 'DENIED'

export interface AdvanceDecision {
  status: AdvanceDecisionStatus
  amount?: number
  reasons?: string[]
  terms?: string
  providerId?: string
  decisionDate?: string
}

// Payout Method Types
export type PayoutMethodType = 'DIRECT_DEPOSIT' | 'CHECK' | 'PREPAID_CARD'

export interface DirectDepositInfo {
  routingNumber: string
  accountNumber: string
  accountType: 'CHECKING' | 'SAVINGS'
}

export interface PayoutMethod {
  type: PayoutMethodType
  directDeposit?: DirectDepositInfo
}

// Disclosure Types
export interface Disclosure {
  id: string
  version: string
  title: string
  content: string
  required: boolean
}

export interface DisclosureAcceptance {
  disclosureId: string
  version: string
  acceptedAt: string
  clientId: string
  userAgent: string
}

// Refund Allocation Types
export interface SavingsBondAllocation {
  amount: number
  enabled: boolean
}

export interface DepositSplit {
  id: string
  routingNumber: string
  accountNumber: string
  accountType: 'CHECKING' | 'SAVINGS'
  amount: number
}

export interface RefundAllocation {
  totalRefund: number
  savingsBonds?: SavingsBondAllocation
  depositSplits: DepositSplit[]
}

// Audit Log Types
export interface AuditLogEntry {
  timestamp: string
  action: string
  userId: string
  details: Record<string, any>
  userAgent: string
}
