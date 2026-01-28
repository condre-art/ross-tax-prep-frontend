// Bank Product Provider types
export type BankProvider = 'SBTPG' | 'EPS' | 'Refund Advantage';

export interface ProviderInfo {
  id: BankProvider;
  name: string;
  description: string;
  features: string[];
}

// Advance Decision types
export type AdvanceStatus = 'approved' | 'pending' | 'denied';

export interface AdvanceDecision {
  status: AdvanceStatus;
  amount?: number;
  reasonCode?: string;
  reasonMessage?: string;
  decidedAt?: string;
}

// Payout Method types
export type PayoutMethod = 'direct_deposit' | 'check' | 'card';

export interface PayoutMethodInfo {
  type: PayoutMethod;
  label: string;
  description: string;
  icon?: string;
}

export interface DirectDepositDetails {
  accountType: 'checking' | 'savings';
  routingNumber: string;
  accountNumber: string;
  bankName?: string;
}

export interface CardDetails {
  cardType: 'visa' | 'mastercard';
  lastFourDigits?: string;
}

export interface CheckDetails {
  mailingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

// Refund Allocation types
export interface RefundAllocation {
  totalRefund: number;
  allocations: AllocationItem[];
}

export interface AllocationItem {
  id: string;
  type: 'savings_bond' | 'direct_deposit' | 'check' | 'card';
  amount: number;
  description?: string;
  details?: DirectDepositDetails | CardDetails | CheckDetails | SavingsBondDetails;
}

export interface SavingsBondDetails {
  bondType: 'Series EE' | 'Series I';
  denomination: number;
  quantity: number;
}

// Bank Product Application
export interface BankProductApplication {
  id: string;
  clientId: string;
  provider: BankProvider;
  refundTransmitter: boolean;
  advanceApplication?: {
    requested: boolean;
    decision?: AdvanceDecision;
  };
  payoutMethod: PayoutMethod;
  payoutDetails: DirectDepositDetails | CardDetails | CheckDetails;
  refundAllocation?: RefundAllocation;
  consents: {
    termsAccepted: boolean;
    termsAcceptedAt?: string;
    privacyAccepted: boolean;
    privacyAcceptedAt?: string;
  };
  createdAt: string;
  updatedAt: string;
}
