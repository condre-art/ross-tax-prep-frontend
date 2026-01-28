/**
 * Bank Product Type Definitions
 * 
 * This module contains all type definitions for the bank product system,
 * including provider configurations, refund advance offers, and payment processing.
 */

/**
 * Supported bank product providers
 */
export type ProviderId = "SBTPG" | "EPS" | "REFUND_ADVANTAGE";

/**
 * Available bank product types
 */
export type BankProductType = "OFF_BANK" | "REFUND_TRANSFER" | "REFUND_ADVANCE";

/**
 * Provider configuration and capabilities
 */
export interface Provider {
  id: ProviderId;
  displayName: string;
  enabled: boolean;
  supportedProducts: BankProductType[];
}

/**
 * Configuration for bank products at the application level
 */
export interface BankProductConfig {
  defaultProvider?: ProviderId;
  allowedProviders: ProviderId[];
  allowedProducts: BankProductType[];
  showSavingsBonds: boolean;
}

/**
 * Decision status for refund advance offers
 */
export type OfferDecision = "APPROVED" | "PENDING" | "DENIED" | "NOT_ELIGIBLE";

/**
 * Refund advance offer details from a provider
 */
export interface RefundAdvanceOffer {
  offerId: string;
  provider: ProviderId;
  decision: OfferDecision;
  approvedAmountCents?: number;
  aprText?: string; // display-only (backend determines)
  termSummary?: string;
  reasons?: string[]; // for denied/pending messaging
  disclosures: DisclosureRef[];
}

/**
 * Reference to a disclosure document
 */
export interface DisclosureRef {
  id: string;
  title: string;
  url: string;
  required: boolean;
}

/**
 * Method for receiving refund payout
 */
export type PayoutMethod = "DIRECT_DEPOSIT" | "CHECK" | "PREPAID_CARD";

/**
 * Direct deposit account details
 */
export interface DirectDepositDetails {
  routingNumber: string;
  accountNumber: string;
  accountType: "CHECKING" | "SAVINGS";
}

/**
 * Client's selection of bank product and payout method
 */
export interface BankProductSelection {
  clientId: string;
  provider?: ProviderId;
  product: BankProductType;
  payoutMethod: PayoutMethod;
  directDeposit?: DirectDepositDetails;
}

/**
 * Record of client consent to disclosures
 */
export interface ConsentRecord {
  clientId: string;
  disclosureId: string;
  /** ISO 8601 formatted timestamp of when the disclosure was accepted */
  acceptedAt: string;
  ipAddress?: string;
  userAgent?: string;
}

/**
 * Savings bond purchase details
 */
export interface SavingsBondPurchase {
  amountCents: number;
  recipientName?: string; // if supported
}

/**
 * Deposit allocation details
 */
export interface DepositAllocation extends DirectDepositDetails {
  amountCents: number;
}

/**
 * Allocation of refund across bonds and deposit accounts
 */
export interface RefundAllocation {
  clientId: string;
  /** Savings bond purchases from the refund */
  bonds: SavingsBondPurchase[];
  /** Direct deposit allocations to one or more bank accounts */
  deposits: DepositAllocation[];
}
