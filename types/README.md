# Type Definitions

This directory contains TypeScript type definitions for the Ross Tax Prep application.

## Bank Product Types

The `bankProduct.ts` file contains type definitions for the bank product system, including:

### Provider Types
- **ProviderId**: Union type for supported providers (`"SBTPG" | "EPS" | "REFUND_ADVANTAGE"`)
- **Provider**: Interface for provider configuration and capabilities

### Product Types
- **BankProductType**: Union type for available products (`"OFF_BANK" | "REFUND_TRANSFER" | "REFUND_ADVANCE"`)
- **BankProductConfig**: Configuration for bank products at the application level

### Refund Advance Types
- **OfferDecision**: Union type for offer status (`"APPROVED" | "PENDING" | "DENIED" | "NOT_ELIGIBLE"`)
- **RefundAdvanceOffer**: Interface for refund advance offer details
- **DisclosureRef**: Interface for disclosure document references

### Payment Types
- **PayoutMethod**: Union type for payout methods (`"DIRECT_DEPOSIT" | "CHECK" | "PREPAID_CARD"`)
- **DirectDepositDetails**: Interface for direct deposit account information
- **BankProductSelection**: Interface for client's bank product selection

### Consent & Allocation Types
- **ConsentRecord**: Interface for tracking client consent to disclosures
- **SavingsBondPurchase**: Interface for savings bond purchase details
- **DepositAllocation**: Interface extending DirectDepositDetails with an amount field
- **RefundAllocation**: Interface for refund allocation across bonds and deposits

## Usage

Import types from the barrel export using the configured path alias:

```typescript
import {
  ProviderId,
  Provider,
  BankProductType,
  RefundAdvanceOffer,
  BankProductSelection
} from '@/types';
```

Or import directly from the module:

```typescript
import { ProviderId, Provider } from '@/types/bankProduct';
```

Alternatively, use relative imports from your source files:

```typescript
import { ProviderId, Provider } from '../types';
```

## Future Additions

As the application grows, add new type definition files here and export them through `index.ts`.
