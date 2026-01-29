# Ross Tax Prep & Bookkeeping - API Routes & Endpoints

## Overview

This document outlines all API routes and endpoints for the Ross Tax Prep & Bookkeeping platform. All endpoints require authentication unless otherwise specified. All sensitive data is encrypted using AES-256 encryption.

## Base URL

- Production: `https://api.rosstaxprepandbookkeeping.com`
- Development: `http://localhost:8787`

## Authentication

All authenticated endpoints require a Bearer token in the Authorization header:

```
Authorization: Bearer <token>
```

---

## Client Portal Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Client login |
| POST | `/api/auth/register` | Client registration |
| POST | `/api/auth/logout` | Client logout |
| POST | `/api/auth/forgot-password` | Password reset request |
| POST | `/api/auth/reset-password` | Password reset confirmation |
| POST | `/api/auth/mfa/enroll` | Enroll MFA |
| POST | `/api/auth/mfa/verify` | Verify MFA code |
| GET | `/api/me` | Get current user info |

### Client Demographics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/client/demographics` | Get client demographics |
| POST | `/api/client/demographics` | Create/update demographics |
| GET | `/api/client/dependents` | List dependents |
| POST | `/api/client/dependents` | Add dependent |
| PUT | `/api/client/dependents/:id` | Update dependent |
| DELETE | `/api/client/dependents/:id` | Remove dependent |

### Documents & Uploads

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/upload` | List uploaded documents |
| POST | `/api/upload` | Upload document |
| GET | `/api/upload/:id` | Get document details |
| DELETE | `/api/upload/:id` | Delete document |
| GET | `/api/upload/:id/download` | Download document |

### Income Documents (W-2s, 1099s)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/client/w2` | List W-2 forms |
| POST | `/api/client/w2` | Add W-2 form |
| PUT | `/api/client/w2/:id` | Update W-2 form |
| DELETE | `/api/client/w2/:id` | Delete W-2 form |
| GET | `/api/client/1099` | List 1099 forms |
| POST | `/api/client/1099` | Add 1099 form |
| PUT | `/api/client/1099/:id` | Update 1099 form |
| DELETE | `/api/client/1099/:id` | Delete 1099 form |

### Address & Verification

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/client/address` | Get client address |
| POST | `/api/client/address` | Save client address |
| POST | `/api/client/address/proof` | Upload proof of address |
| GET | `/api/client/identification` | Get ID documents |
| POST | `/api/client/identification` | Upload ID documents |
| POST | `/api/client/idme/verify` | Initiate ID.me verification |
| GET | `/api/client/idme/status` | Check ID.me verification status |

### Tax Returns

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/returns` | List client returns |
| POST | `/api/returns` | Create new return |
| GET | `/api/returns/:id` | Get return details |
| PUT | `/api/returns/:id` | Update return |
| DELETE | `/api/returns/:id` | Delete draft return |
| GET | `/api/returns/:id/status` | Get return status |

### Refunds

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/client/refunds` | Get refund status |
| GET | `/api/client/refunds/:id` | Get specific refund details |

### Messages

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/client/messages` | List messages |
| POST | `/api/client/messages` | Send message |
| GET | `/api/client/messages/:id` | Get message details |
| PUT | `/api/client/messages/:id/read` | Mark as read |

### Payments

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payments/intent` | Create payment intent |
| GET | `/api/payments/history` | Get payment history |
| POST | `/api/payments/confirm` | Confirm payment |

### Signatures

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/signature/request` | Request e-signature |
| GET | `/api/signature/status` | Get signature status |
| POST | `/api/signature/sign` | Sign document |

---

## E-File Endpoints

### Transmission

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/efile/transmit` | Transmit return to IRS |
| GET | `/api/efile/status/:id` | Get transmission status |
| GET | `/api/efile/status/latest` | Get latest transmission status |
| PATCH | `/api/efile/transmit/:id` | Update transmission details |
| GET | `/api/efile/ack/:id` | Get IRS acknowledgment |

### Bank Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/efile/bank-products` | List available bank products |
| POST | `/api/efile/bank-products/select` | Select bank product |
| GET | `/api/efile/payment-methods` | List payment methods |

### Refund Tracking

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/efile/refund/:id` | Get refund details |
| PATCH | `/api/efile/refund/:id` | Update refund status |

---

## Admin Endpoints

### Dashboard

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/dashboard` | Get dashboard metrics |
| GET | `/api/admin/clients` | List all clients |
| GET | `/api/admin/returns` | List all returns |
| GET | `/api/admin/efiles` | List all e-files |
| GET | `/api/admin/refunds` | List all refunds |

### Staff Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/staff` | List staff members |
| POST | `/api/admin/staff` | Add staff member |
| PUT | `/api/admin/staff/:id` | Update staff member |
| DELETE | `/api/admin/staff/:id` | Remove staff member |
| POST | `/api/admin/staff/:id/role` | Assign role |

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | List tasks |
| POST | `/api/tasks` | Create task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

### Certificates

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/certificates` | List certificates |
| GET | `/api/certificates/types` | Get certificate types |
| POST | `/api/certificates/issue` | Issue certificate |
| GET | `/api/certificates/:id/download` | Download certificate |
| POST | `/api/certificates/:id/revoke` | Revoke certificate |

### Analytics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/analytics` | Get analytics data |
| POST | `/api/admin/analytics/engagement` | Log engagement |

---

## Bank Product Integration Endpoints

### Santa Barbara Tax Products Group (TPG)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bank/tpg/enroll` | Enroll in TPG products |
| GET | `/api/bank/tpg/status` | Get enrollment status |
| POST | `/api/bank/tpg/advance` | Request refund advance |

### Refund Advantage

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bank/ra/enroll` | Enroll in Refund Advantage |
| GET | `/api/bank/ra/status` | Get enrollment status |
| POST | `/api/bank/ra/advance` | Request Easy Advance |

### EPS Financial

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bank/eps/enroll` | Enroll in EPS products |
| GET | `/api/bank/eps/status` | Get enrollment status |
| POST | `/api/bank/eps/transfer` | Initiate refund transfer |

---

## Social/Marketing Endpoints

### X (Twitter) Integration

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/x/post` | Post to X |
| POST | `/api/x/dm-campaign` | Trigger DM campaign |
| GET | `/api/x/analytics` | Get X analytics |

---

## Encryption & Security

All sensitive data fields are encrypted using **AES-256-GCM** encryption:

### Encrypted Fields

- Social Security Numbers (SSN)
- Employer Identification Numbers (EIN)
- Bank account numbers
- Routing numbers
- IP PINs
- ID numbers (Driver's license, Passport, etc.)
- Credit card information

### Data in Transit

All API communications use **TLS 1.3** encryption.

### Request Example with Encrypted Data

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "ssn_encrypted": "U2FsdGVkX1+...", // AES-256 encrypted
  "dob": "1990-01-15",
  "filing_status": "single"
}
```

---

## Rate Limiting

| Endpoint Type | Rate Limit |
|---------------|------------|
| Authentication | 10 requests/minute |
| File Upload | 20 requests/minute |
| General API | 100 requests/minute |
| Admin API | 200 requests/minute |

---

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Invalid or missing token |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 429 | Too Many Requests - Rate limited |
| 500 | Internal Server Error |

---

## EFIN & Credentials

- **EFIN:** 748335 (Active)
- **Software Development:** Approved
- **E-File Provider:** Approved
- **IRS Software ID:** Contact admin for details

---

*Last Updated: January 2026*
*Ross Tax Prep & Bookkeeping LLC*
