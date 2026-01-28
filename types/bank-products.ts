/**
 * Bank Products Type Definitions
 * Types for bank product providers, configurations, and transactions
 */

export type ProviderId = "SBTPG" | "EPS" | "REFUND_ADVANTAGE";
export type BankProductType = "OFF_BANK" | "REFUND_TRANSFER" | "REFUND_ADVANCE";
export type PayoutMethod = "DIRECT_DEPOSIT" | "CHECK" | "PREPAID_CARD";
export type OfferDecision = "APPROVED" | "PENDING" | "DENIED" | "NOT_ELIGIBLE";

export interface Provider {
  id: ProviderId;
  displayName: string;
  enabled: boolean;
  supportedProducts: BankProductType[];
}

export interface BankProductConfig {
  allowedProviders: ProviderId[];
  allowedProducts: BankProductType[];
  allowedPayoutMethods: PayoutMethod[];
  defaultProvider?: ProviderId;
  showSavingsBonds: boolean;
}

export interface DisclosureRef {
  id: string;
  title: string;
  url: string;
  required: boolean;
  version?: string;
}

export interface RefundAdvanceOffer {
  offerId: string;
  provider: ProviderId;
  decision: OfferDecision;
  approvedAmountCents?: number;
  termSummary?: string;
  reasons?: string[];
  disclosures: DisclosureRef[];
}

export interface DirectDepositDetails {
  routingNumber: string;
  accountNumber: string;
  accountType: "CHECKING" | "SAVINGS";
}

export interface BankProductSelection {
  clientId: string;
  provider?: ProviderId;
  product: BankProductType;
  payoutMethod: PayoutMethod;
  directDeposit?: DirectDepositDetails;
}

export interface SavingsBondPurchase {
  amountCents: number;
  recipientName?: string;
}

export interface RefundAllocationDeposit extends DirectDepositDetails {
  amountCents: number;
}

export interface RefundAllocation {
  clientId: string;
  bonds: SavingsBondPurchase[];
  deposits: RefundAllocationDeposit[];
}
