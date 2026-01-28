/**
 * Main entry point for Ross Tax Prep Frontend bank products module
 * Exports all types and API client
 */

// Export all types
export type {
  ProviderId,
  BankProductType,
  PayoutMethod,
  OfferDecision,
  BankAccountType,
  Provider,
  BankProductConfig,
  DisclosureRef,
  RefundAdvanceOffer,
  DirectDepositDetails,
  BankProductSelection,
  ConsentRecord,
  ApplicationStatus,
  BankProductApplication,
  RefundAllocation,
} from './types/bank-products';

// Export API client
export {
  BankProductsApiClient,
  type ApiClientConfig,
  type ConsentSubmission,
  type ApplicationSubmission,
} from './api/bank-products-client';
