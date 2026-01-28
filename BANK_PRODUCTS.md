# Bank Products API - TypeScript Implementation

This module provides TypeScript types and API client for bank products integration in the Ross Tax Prep frontend.

## Overview

The bank products system is **provider-agnostic** - the frontend communicates only with the Ross Tax Prep backend, which handles integration with multiple providers (SBTPG, EPS, RefundAdvantage).

## Installation

```bash
npm install
npm run build
```

## Usage

### 1. Initialize the API Client

```typescript
import { BankProductsApiClient } from './src';

const client = new BankProductsApiClient({
  baseUrl: 'https://api.rosstaxprep.com',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  }
});
```

### 2. Get Available Providers

```typescript
const providers = await client.getProviders();
// Returns: Provider[]
// Example: [{ id: 'SBTPG', displayName: 'Santa Barbara TPG', enabled: true, supportedProducts: ['REFUND_TRANSFER', 'REFUND_ADVANCE'] }]
```

### 3. Get Office Configuration

```typescript
const config = await client.getConfig();
// Returns: BankProductConfig
// Contains allowedProviders, allowedProducts, allowedPayoutMethods, etc.
```

### 4. Check Eligibility & Get Offers

```typescript
const offers = await client.getOffers('client-123');
// Returns: RefundAdvanceOffer[]
// Each offer includes decision (APPROVED/DENIED/PENDING), approved amount, and reasons
```

### 5. Get Disclosure Documents

```typescript
const disclosures = await client.getDisclosures('SBTPG', 'REFUND_ADVANCE');
// Returns: DisclosureRef[]
// Each disclosure has id, title, url, required flag, and version
```

### 6. Save Consent (Critical for Compliance)

```typescript
const consent = await client.saveConsent({
  clientId: 'client-123',
  disclosureId: 'disclosure-xyz',
  disclosureVersion: '1.0',
  acceptedAt: new Date().toISOString(),
  ipAddress: '192.168.1.1',
  userAgent: navigator.userAgent
});
// ✅ Stores auditable consent record with timestamp, IP, and user agent
```

### 7. Submit Application

```typescript
const application = await client.submitApplication({
  clientId: 'client-123',
  provider: 'SBTPG',
  product: 'REFUND_ADVANCE',
  offerId: 'offer-456'
});
// Returns: BankProductApplication with id and status
```

### 8. Poll Application Status

```typescript
const status = await client.getApplicationStatus('app-789');
// Returns: BankProductApplication
// status: 'APPROVED' | 'PENDING' | 'DENIED'
```

### 9. Save Bank Product Selection

```typescript
const selection = await client.saveSelection({
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

### 10. Save Refund Allocation

```typescript
const allocation = await client.saveRefundAllocation({
  clientId: 'client-123',
  savingsBonds: {
    amountCents: 50000, // $500.00
    bondType: 'Series I'
  },
  splits: [
    {
      accountName: 'Checking',
      routingNumber: '123456789',
      accountNumber: '987654321',
      accountType: 'CHECKING',
      amountCents: 100000 // $1000.00
    }
  ]
});
```

### 11. Load Existing Allocation

```typescript
const allocation = await client.getRefundAllocation('client-123');
// Returns saved allocation for editing/continuing
```

## Type Definitions

### Core Types

```typescript
type ProviderId = "SBTPG" | "EPS" | "REFUND_ADVANTAGE";
type BankProductType = "OFF_BANK" | "REFUND_TRANSFER" | "REFUND_ADVANCE";
type PayoutMethod = "DIRECT_DEPOSIT" | "CHECK" | "PREPAID_CARD";
type OfferDecision = "APPROVED" | "PENDING" | "DENIED" | "NOT_ELIGIBLE";
type BankAccountType = "CHECKING" | "SAVINGS";
```

### Interfaces

See `src/types/bank-products.ts` for complete interface definitions:
- `Provider` - Provider information
- `BankProductConfig` - Office configuration
- `DisclosureRef` - Disclosure document reference
- `RefundAdvanceOffer` - Advance offer with decision
- `DirectDepositDetails` - Bank account info
- `BankProductSelection` - Client's selection
- `ConsentRecord` - Auditable consent (compliance)
- `BankProductApplication` - Application with status
- `RefundAllocation` - Refund split/bond allocation

## API Endpoints

All endpoints are relative to the configured `baseUrl`:

| Purpose | Method | Endpoint | Notes |
|---------|--------|----------|-------|
| Providers list | GET | `/api/providers` | Returns enabled providers with supported products |
| Office config | GET | `/api/bank-products/config` | Returns allowed providers, products, payout methods |
| Offers/eligibility | GET | `/api/bank-products/offers?clientId=` | Returns advance decision + reasons |
| Disclosures | GET | `/api/bank-products/disclosures?provider=&product=` | Returns disclosure docs list |
| Save consent | POST | `/api/bank-products/consents` | Must store timestamp + IP + UA ✅ |
| Submit application | POST | `/api/bank-products/applications` | Creates RT / Advance app |
| Poll status | GET | `/api/bank-products/applications/:id` | Returns approved/pending/denied |
| Save selection | POST | `/api/bank-products/selection` | Saves provider + product + payout |
| Refund allocation | POST | `/api/refund-allocation` | Saves bonds + splits |
| Load allocation | GET | `/api/refund-allocation/:clientId` | For edit/continue |

## Compliance Requirements

### Critical: Auditable Consents ✅

All consents MUST be auditable with:
- `acceptedAt` - ISO 8601 timestamp
- `disclosureId` - Document identifier
- `version` - Document version
- `ipAddress` - Client IP address
- `userAgent` - Browser user agent string

Example:
```typescript
{
  clientId: 'client-123',
  disclosureId: 'sbtpg-rt-disclosure-2024',
  disclosureVersion: '2.1',
  acceptedAt: '2026-01-28T22:00:00.000Z',
  ipAddress: '192.168.1.100',
  userAgent: 'Mozilla/5.0...'
}
```

## Development

### Build TypeScript

```bash
npm run build
```

### Watch Mode

```bash
npm run watch
```

### Clean Build

```bash
npm run clean
npm run build
```

## Architecture

### Provider-Agnostic Design

The frontend never directly calls SBTPG, EPS, or RefundAdvantage APIs. All provider-specific logic is handled by the backend:

```
Frontend → Backend API → Provider APIs (SBTPG/EPS/RefundAdvantage)
```

This design:
- ✅ Simplifies frontend code
- ✅ Centralizes provider logic in backend
- ✅ Makes it easy to add new providers
- ✅ Ensures consistent compliance handling
- ✅ Provides a single point of authentication/authorization

## Notes

- All monetary amounts are in cents (e.g., 50000 = $500.00)
- All timestamps are ISO 8601 format
- Provider selection is optional in `BankProductSelection` for client visibility
- Direct deposit details are optional (only required if `payoutMethod` is `DIRECT_DEPOSIT`)
- Savings bonds configuration is controlled by `showSavingsBonds` in office config

## Support

For questions or issues, contact the development team.
