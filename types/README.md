# Type Definitions

This directory contains TypeScript type definitions for the Ross Tax Prep application.

## Bank Products Types (`bank-products.ts`)

### Types

- **ProviderId**: Bank product provider identifiers
  - `"SBTPG"` - Santa Barbara Tax Products Group
  - `"EPS"` - Electronic Payment Services
  - `"REFUND_ADVANTAGE"` - Refund Advantage

- **BankProductType**: Types of bank products offered
  - `"OFF_BANK"` - Off-bank product
  - `"REFUND_TRANSFER"` - Refund transfer product
  - `"REFUND_ADVANCE"` - Refund advance product

- **PayoutMethod**: Methods for receiving refunds
  - `"DIRECT_DEPOSIT"` - Direct bank deposit
  - `"CHECK"` - Physical check
  - `"PREPAID_CARD"` - Prepaid debit card

- **OfferDecision**: Status of refund advance offers
  - `"APPROVED"` - Offer approved
  - `"PENDING"` - Offer pending review
  - `"DENIED"` - Offer denied
  - `"NOT_ELIGIBLE"` - Client not eligible

### Interfaces

- **Provider**: Configuration for a bank product provider
- **BankProductConfig**: Overall bank product configuration
- **DisclosureRef**: Reference to legal disclosures
- **RefundAdvanceOffer**: Details of a refund advance offer
- **DirectDepositDetails**: Bank account information for direct deposits
- **BankProductSelection**: Client's bank product selection
- **SavingsBondPurchase**: Savings bond purchase details
- **RefundAllocationDeposit**: Direct deposit details with amount for refund allocation
- **RefundAllocation**: How refunds are allocated across bonds and deposits

## Usage

```typescript
import { ProviderId, BankProductSelection, Provider } from '@/types';

// Example: Define a provider
const provider: Provider = {
  id: "SBTPG",
  displayName: "Santa Barbara Tax Products Group",
  enabled: true,
  supportedProducts: ["REFUND_TRANSFER", "REFUND_ADVANCE"]
};

// Example: Create a bank product selection
const selection: BankProductSelection = {
  clientId: "client-123",
  provider: "SBTPG",
  product: "REFUND_TRANSFER",
  payoutMethod: "DIRECT_DEPOSIT",
  directDeposit: {
    routingNumber: "123456789",
    accountNumber: "987654321",
    accountType: "CHECKING"
  }
};
```

## Environment Variables

Bank product features are controlled by environment variables defined in `.env.example`:

- `NEXT_PUBLIC_FEATURE_BANK_PRODUCTS` - Enable/disable bank products feature
- `NEXT_PUBLIC_FEATURE_SAVINGS_BONDS` - Enable/disable savings bonds feature
- `NEXT_PUBLIC_DEFAULT_PROVIDER` - Default bank product provider (e.g., "SBTPG")
