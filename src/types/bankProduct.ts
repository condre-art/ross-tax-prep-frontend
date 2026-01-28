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
  allowedPayoutMethods: PayoutMethod[]; // DD + check + card
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
  reasons?: string[]; // show to client ✅
  disclosures: DisclosureRef[];
}

export interface DirectDepositDetails {
  routingNumber: string;
  accountNumber: string;
  accountType: "CHECKING" | "SAVINGS";
}

export interface BankProductSelection {
  clientId: string;
  provider?: ProviderId;  // visible choice ✅
  product: BankProductType;
  payoutMethod: PayoutMethod; // DD/check/card ✅
  directDeposit?: DirectDepositDetails;
}
