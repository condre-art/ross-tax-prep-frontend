# Ross Tax Prep & Bookkeeping - Data Encryption & Security

## Overview

This document outlines the encryption standards and security measures implemented to protect sensitive client data in the Ross Tax Prep & Bookkeeping platform.

---

## Encryption Standards

### Data at Rest

All sensitive data stored in the database is encrypted using **AES-256-GCM** (Advanced Encryption Standard with Galois/Counter Mode).

**Key Management:**
- Encryption keys are managed through a secure Key Management Service (KMS)
- Keys are rotated every 90 days
- Access to keys is restricted to authorized system processes only

### Data in Transit

All data transmitted between clients and servers is protected using **TLS 1.3** (Transport Layer Security).

**Configuration:**
- Minimum TLS version: 1.2 (1.3 preferred)
- Strong cipher suites only
- HTTP Strict Transport Security (HSTS) enabled
- Certificate pinning for mobile applications

---

## Encrypted Data Fields

The following sensitive data fields are encrypted before storage:

### Personal Identifiers

| Field | Encryption | Purpose |
|-------|------------|---------|
| Social Security Number (SSN) | AES-256-GCM | IRS identification |
| Spouse SSN | AES-256-GCM | Joint filing |
| Dependent SSN | AES-256-GCM | Dependent claims |
| IP PIN | AES-256-GCM | Identity Protection |
| ITIN | AES-256-GCM | Individual taxpayer ID |

### Financial Information

| Field | Encryption | Purpose |
|-------|------------|---------|
| Bank Account Number | AES-256-GCM | Direct deposit |
| Routing Number | AES-256-GCM | Bank identification |
| Credit Card Number | AES-256-GCM | Payment processing |
| EIN (Employer ID) | AES-256-GCM | Business identification |

### Identity Documents

| Field | Encryption | Purpose |
|-------|------------|---------|
| Driver's License Number | AES-256-GCM | ID verification |
| Passport Number | AES-256-GCM | ID verification |
| State ID Number | AES-256-GCM | ID verification |

---

## Encryption Implementation

### Client-Side Encryption

Before transmission, sensitive fields are encrypted using the public key:

```javascript
// Example: Encrypting SSN before sending to API
async function encryptSensitiveData(data, publicKey) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);
  
  const encryptedData = await window.crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    publicKey,
    encodedData
  );
  
  return btoa(String.fromCharCode(...new Uint8Array(encryptedData)));
}
```

### Server-Side Encryption

The server uses AES-256-GCM for storage:

```javascript
// Example: Server-side encryption
const crypto = require('crypto');

function encrypt(text, key) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  
  const authTag = cipher.getAuthTag();
  
  return {
    encrypted,
    iv: iv.toString('base64'),
    authTag: authTag.toString('base64')
  };
}
```

---

## API Request Format

When sending encrypted data to the API, use the following format:

### Request with Encrypted SSN

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "ssn": {
    "encrypted": "U2FsdGVkX1+abc123...",
    "iv": "def456...",
    "authTag": "ghi789..."
  },
  "dob": "1990-01-15",
  "filing_status": "single"
}
```

### Response with Masked Data

Sensitive data is never returned in plain text:

```json
{
  "id": "client_123",
  "first_name": "John",
  "last_name": "Doe",
  "ssn_masked": "***-**-1234",
  "dob": "1990-01-15",
  "filing_status": "single"
}
```

---

## Compliance Standards

### IRS Publication 1075

We comply with IRS Publication 1075 requirements for safeguarding Federal Tax Information (FTI):

- Access controls and authentication
- Encryption of FTI at rest and in transit
- Audit logging of all access to FTI
- Employee background checks
- Annual security awareness training

### SOC 2 Type II

Our infrastructure is SOC 2 Type II certified, covering:

- Security
- Availability
- Processing Integrity
- Confidentiality
- Privacy

### GLBA (Gramm-Leach-Bliley Act)

As a financial service provider, we comply with GLBA requirements:

- Written information security plan
- Employee training program
- Risk assessments
- Oversight of service providers

### HIPAA (where applicable)

For clients with health-related tax documents:

- Protected Health Information (PHI) encryption
- Access controls
- Audit trails

---

## Security Controls

### Access Controls

- Role-based access control (RBAC)
- Principle of least privilege
- Multi-factor authentication (MFA) required
- Session timeout after 30 minutes
- Account lockout after 5 failed attempts

### Audit Logging

All access to sensitive data is logged:

```json
{
  "timestamp": "2026-01-29T12:00:00Z",
  "user_id": "staff_456",
  "action": "view",
  "resource": "client_ssn",
  "client_id": "client_123",
  "ip_address": "192.168.1.1",
  "user_agent": "Mozilla/5.0...",
  "success": true
}
```

### Data Retention

| Data Type | Retention Period | After Retention |
|-----------|------------------|-----------------|
| Tax Returns | 7 years | Securely deleted |
| Client PII | 7 years after last activity | Anonymized |
| Audit Logs | 7 years | Archived |
| Payment Info | Per PCI-DSS requirements | Securely deleted |

### Secure Deletion

When data is deleted:

1. Encrypted data keys are destroyed
2. Database records are overwritten
3. Backups are cycled out within retention period
4. Audit log entry created

---

## Incident Response

### Data Breach Protocol

In the event of a suspected data breach:

1. Immediate containment
2. Impact assessment
3. Notification within 72 hours (per state laws)
4. IRS notification (if FTI involved)
5. Client notification
6. Remediation and post-incident review

### Contact for Security Issues

- Security Team: security@rosstaxprep.com
- Compliance: compliance@rosstaxprep.com

---

## Penetration Testing

- Annual third-party penetration testing
- Quarterly vulnerability assessments
- Continuous automated security scanning

---

## Employee Security

- Background checks for all employees
- Annual security training
- Signed confidentiality agreements
- Immediate access revocation upon termination

---

*Last Updated: January 2026*
*Ross Tax Prep & Bookkeeping LLC*
*EFIN: 748335 (Active)*
