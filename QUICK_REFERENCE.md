# Quick Reference: Bank Products API

## Installation & Build

```bash
npm install
npm run build
```

## Initialize API Client

```typescript
import { BankProductsApiClient } from './src';

const client = new BankProductsApiClient({
  baseUrl: 'https://api.rosstaxprep.com',
  headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
});
```

## Common Operations

### Get Providers
```typescript
const providers = await client.getProviders();
```

### Check Eligibility
```typescript
const offers = await client.getOffers('client-123');
const approved = offers.find(o => o.decision === 'APPROVED');
```

### Get Disclosures
```typescript
const disclosures = await client.getDisclosures('SBTPG', 'REFUND_ADVANCE');
```

### Save Consent (Compliance Required)
```typescript
await client.saveConsent({
  clientId: 'client-123',
  disclosureId: 'disclosure-id',
  disclosureVersion: '1.0',
  acceptedAt: new Date().toISOString(),
  ipAddress: '192.168.1.1',
  userAgent: navigator.userAgent
});
```

### Submit Application
```typescript
const app = await client.submitApplication({
  clientId: 'client-123',
  provider: 'SBTPG',
  product: 'REFUND_ADVANCE',
  offerId: 'offer-123'
});
```

### Check Application Status
```typescript
const status = await client.getApplicationStatus(app.id);
// status.status: 'APPROVED' | 'PENDING' | 'DENIED'
```

### Save Selection with Direct Deposit
```typescript
await client.saveSelection({
  clientId: 'client-123',
  provider: 'SBTPG',
  product: 'REFUND_TRANSFER',
  payoutMethod: 'DIRECT_DEPOSIT',
  directDeposit: {
    routingNumber: '123456789',
    accountNumber: '987654321',
    accountType: 'CHECKING'
  }
});
```

### Save Refund Allocation
```typescript
await client.saveRefundAllocation({
  clientId: 'client-123',
  savingsBonds: {
    amountCents: 50000, // $500.00
    bondType: 'Series I'
  },
  splits: [{
    accountName: 'Checking',
    routingNumber: '123456789',
    accountNumber: '987654321',
    accountType: 'CHECKING',
    amountCents: 100000 // $1000.00
  }]
});
```

### Load Existing Allocation
```typescript
const allocation = await client.getRefundAllocation('client-123');
```

## Key Types

```typescript
type ProviderId = "SBTPG" | "EPS" | "REFUND_ADVANTAGE";
type BankProductType = "OFF_BANK" | "REFUND_TRANSFER" | "REFUND_ADVANCE";
type PayoutMethod = "DIRECT_DEPOSIT" | "CHECK" | "PREPAID_CARD";
type OfferDecision = "APPROVED" | "PENDING" | "DENIED" | "NOT_ELIGIBLE";
type BankAccountType = "CHECKING" | "SAVINGS";
```

## Error Handling

All API methods throw descriptive errors:

```typescript
try {
  await client.getOffers('');
} catch (error) {
  // Error: clientId is required and cannot be empty
}

try {
  await client.getProviders();
} catch (error) {
  // Error: Get providers failed: 401 Unauthorized. Invalid token
}
```

## Compliance Note

⚠️ **Critical**: Consents MUST include:
- `acceptedAt` (ISO 8601 timestamp)
- `disclosureId` (document ID)
- `version` (document version)
- `ipAddress` (client IP)
- `userAgent` (browser user agent)

## Documentation

- **Full API Reference**: `BANK_PRODUCTS.md`
- **Code Examples**: `src/examples.ts`
- **Implementation Details**: `IMPLEMENTATION_SUMMARY.md`
- **Type Definitions**: `src/types/bank-products.ts`
- **API Client Source**: `src/api/bank-products-client.ts`
