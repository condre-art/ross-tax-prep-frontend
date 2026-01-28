# Bank Product Types

This directory contains TypeScript type definitions for the bank product configuration system used in Ross Tax Prep.

## Types

### ProviderId
Bank product providers: `"SBTPG" | "EPS" | "REFUND_ADVANTAGE"`

### BankProductType
Types of bank products: `"OFF_BANK" | "REFUND_TRANSFER" | "REFUND_ADVANCE"`

### PayoutMethod
Available payout methods: `"DIRECT_DEPOSIT" | "CHECK" | "PREPAID_CARD"`

### OfferDecision
Refund advance offer decisions: `"APPROVED" | "PENDING" | "DENIED" | "NOT_ELIGIBLE"`

## Interfaces

### Provider
Defines a bank product provider with their supported products.

### BankProductConfig
Configuration for allowed bank products, providers, and payout methods.

### DisclosureRef
Reference to a disclosure document required for bank products.

### RefundAdvanceOffer
Details of a refund advance offer including decision and terms.

### DirectDepositDetails
Bank account information for direct deposit payouts.

### BankProductSelection
Client's selection of bank product, provider, and payout method.

## Usage

```typescript
import {
  ProviderId,
  BankProductType,
  PayoutMethod,
  Provider,
  BankProductConfig,
  BankProductSelection,
} from './types';

// Example: Configure bank products
const config: BankProductConfig = {
  allowedProviders: ["SBTPG", "EPS"],
  allowedProducts: ["REFUND_TRANSFER", "REFUND_ADVANCE"],
  allowedPayoutMethods: ["DIRECT_DEPOSIT", "CHECK"],
  defaultProvider: "SBTPG",
  showSavingsBonds: true,
};

// Example: Create a client selection
const selection: BankProductSelection = {
  clientId: "client-123",
  provider: "SBTPG",
  product: "REFUND_TRANSFER",
  payoutMethod: "DIRECT_DEPOSIT",
  directDeposit: {
    routingNumber: "123456789",
    accountNumber: "987654321",
    accountType: "CHECKING",
  },
};
```
