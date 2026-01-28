// Bank Product Types
export type BankProductType = 'OFF_BANK' | 'REFUND_TRANSFER' | 'REFUND_ADVANCE';

// Provider Types
export type ProviderType = 'SBTPG' | 'EPS_FINANCIAL' | 'REFUND_ADVANTAGE';

export interface Provider {
  id: string;
  name: ProviderType;
  displayName: string;
  isActive: boolean;
}

// Advance Decision Types
export type AdvanceDecisionStatus = 'APPROVED' | 'PENDING' | 'DENIED';

export interface AdvanceDecision {
  status: AdvanceDecisionStatus;
  reason?: string;
  amount?: number;
  decidedAt?: string;
}

// Payout Method Types
export type PayoutMethodType = 'DIRECT_DEPOSIT' | 'CHECK' | 'PREPAID_CARD';

export interface PayoutMethod {
  type: PayoutMethodType;
  details?: {
    accountNumber?: string;
    routingNumber?: string;
    accountType?: 'CHECKING' | 'SAVINGS';
    address?: string;
    cardNumber?: string;
  };
}

// Bank Product Configuration
export interface BankProductConfig {
  id: string;
  productType: BankProductType;
  provider: ProviderType;
  isAvailable: boolean;
  fees?: {
    amount: number;
    description: string;
  }[];
}

// Bank Product Offer
export interface BankProductOffer {
  id: string;
  clientId: string;
  productType: BankProductType;
  provider: ProviderType;
  advanceDecision?: AdvanceDecision;
  expiresAt?: string;
}

// Disclosure
export interface Disclosure {
  id: string;
  version?: string;
  provider: ProviderType;
  productType: BankProductType;
  content: string;
  effectiveDate: string;
}

// Consent (Compliance)
export interface Consent {
  disclosureId: string;
  version?: string;
  acceptedAt: string; // ISO timestamp
  clientId: string;
  userAgent: string;
  ipAddress?: string; // Derived server-side
}

// Bank Product Application
export interface BankProductApplication {
  id: string;
  clientId: string;
  productType: BankProductType;
  provider: ProviderType;
  payoutMethod: PayoutMethod;
  status: 'PENDING' | 'APPROVED' | 'DENIED' | 'COMPLETED';
  createdAt: string;
  updatedAt: string;
}

// Refund Allocation
export interface RefundAllocation {
  clientId: string;
  savingsBonds?: {
    amount: number;
    bondType: string;
  };
  depositSplits?: {
    account1?: {
      routingNumber: string;
      accountNumber: string;
      accountType: 'CHECKING' | 'SAVINGS';
      amount: number;
    };
    account2?: {
      routingNumber: string;
      accountNumber: string;
      accountType: 'CHECKING' | 'SAVINGS';
      amount: number;
    };
    account3?: {
      routingNumber: string;
      accountNumber: string;
      accountType: 'CHECKING' | 'SAVINGS';
      amount: number;
    };
  };
  createdAt?: string;
  updatedAt?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
