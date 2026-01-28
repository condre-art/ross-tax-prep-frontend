# Type Definitions

This directory contains TypeScript type definitions for the Ross Tax Prep Frontend application.

## Refund Allocation Types

### `SavingsBondPurchase`

Represents a savings bond purchase allocation from a tax refund.

```typescript
interface SavingsBondPurchase {
  amountCents: number;      // Amount in cents (e.g., 500000 = $5,000.00)
  recipientName?: string;   // Optional recipient name
}
```

### `RefundAllocation`

Represents the complete allocation of a client's tax refund to savings bonds and bank deposits.

```typescript
interface RefundAllocation {
  clientId: string;
  bonds: SavingsBondPurchase[];
  deposits: Array<{
    amountCents: number;              // Amount in cents
    routingNumber: string;            // 9-digit US bank routing number
    accountNumber: string;            // Bank account number
    accountType: "CHECKING" | "SAVINGS";  // Account type
  }>;
}
```

## Usage

Import the types from the types module:

```typescript
import { SavingsBondPurchase, RefundAllocation } from './types';

const allocation: RefundAllocation = {
  clientId: "client-123",
  bonds: [
    { amountCents: 500000, recipientName: "John Doe" }
  ],
  deposits: [
    {
      amountCents: 1000000,
      routingNumber: "123456789",
      accountNumber: "9876543210",
      accountType: "CHECKING"
    }
  ]
};
```

## Building

To compile the TypeScript types:

```bash
npm run build
```

To type-check without building:

```bash
npm run type-check
```

## Notes

- All monetary amounts are represented in cents to avoid floating-point precision issues
- The `bonds` and `deposits` arrays can be empty if the client doesn't allocate funds to those categories
- Routing numbers should be 9-digit US bank routing numbers
- The `recipientName` field in `SavingsBondPurchase` is optional
