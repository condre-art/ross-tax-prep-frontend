/**
 * Core type definitions for bank products and refund processing
 * Provider-agnostic types that map to backend API
 */

/**
 * Supported bank product providers
 */
export type ProviderId = "SBTPG" | "EPS" | "REFUND_ADVANTAGE";

/**
 * Types of bank products available
 */
export type BankProductType = "OFF_BANK" | "REFUND_TRANSFER" | "REFUND_ADVANCE";

/**
 * Available payout methods for refunds
 */
export type PayoutMethod = "DIRECT_DEPOSIT" | "CHECK" | "PREPAID_CARD";

/**
 * Decision status for advance offers
 */
export type OfferDecision = "APPROVED" | "PENDING" | "DENIED" | "NOT_ELIGIBLE";

/**
 * Bank account types for direct deposit
 */
export type BankAccountType = "CHECKING" | "SAVINGS";

/**
 * Provider information and capabilities
 */
export interface Provider {
  id: ProviderId;
  displayName: string;
  enabled: boolean;
  supportedProducts: BankProductType[];
}

/**
 * Office-level configuration for bank products
 */
export interface BankProductConfig {
  allowedProviders: ProviderId[];
  allowedProducts: BankProductType[];
  allowedPayoutMethods: PayoutMethod[];
  defaultProvider?: ProviderId;
  showSavingsBonds: boolean;
}

/**
 * Reference to a disclosure document
 */
export interface DisclosureRef {
  id: string;
  title: string;
  url: string;
  required: boolean;
  version?: string;
}

/**
 * Refund advance offer with decision and terms
 */
export interface RefundAdvanceOffer {
  offerId: string;
  provider: ProviderId;
  decision: OfferDecision;
  approvedAmountCents?: number;
  termSummary?: string;
  reasons?: string[]; // Human-readable reasons for decision
  disclosures: DisclosureRef[];
}

/**
 * Direct deposit account details
 */
export interface DirectDepositDetails {
  routingNumber: string;
  accountNumber: string;
  accountType: BankAccountType;
}

/**
 * Client's bank product selection
 */
export interface BankProductSelection {
  clientId: string;
  provider?: ProviderId; // Optional for client visibility
  product: BankProductType;
  payoutMethod: PayoutMethod;
  directDeposit?: DirectDepositDetails;
}

/**
 * Consent record with audit trail (for compliance)
 */
export interface ConsentRecord {
  disclosureId: string;
  disclosureVersion?: string;
  acceptedAt: string; // ISO 8601 timestamp
  ipAddress: string;
  userAgent: string;
}

/**
 * Application status
 */
export type ApplicationStatus = "APPROVED" | "PENDING" | "DENIED";

/**
 * Bank product application
 */
export interface BankProductApplication {
  id: string;
  clientId: string;
  provider: ProviderId;
  product: BankProductType;
  status: ApplicationStatus;
  submittedAt: string; // ISO 8601 timestamp
  updatedAt: string; // ISO 8601 timestamp
}

/**
 * Refund allocation with bonds and splits
 */
export interface RefundAllocation {
  clientId: string;
  savingsBonds?: {
    amountCents: number;
    bondType?: string;
  };
  splits?: Array<{
    accountName: string;
    routingNumber: string;
    accountNumber: string;
    accountType: BankAccountType;
    amountCents: number;
  }>;
}
