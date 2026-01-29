# Ross Tax Prep & Bookkeeping - User Roles & Permissions

## Overview

This document defines all user roles, their permissions, and access levels within the Ross Tax Prep & Bookkeeping platform.

---

## Role Hierarchy

```
Super Admin
    └── Admin
        └── Manager
            └── Senior Preparer
                └── Tax Preparer
                    └── Support Staff
                        └── Client
```

---

## Role Definitions

### 1. Super Admin

**Description:** Highest level of access. Full control over all system functions, settings, and data.

**Permissions:**
- All Admin permissions
- System configuration
- EFIN/PTIN management
- IRS credential management
- Delete any data
- Access audit logs
- Manage encryption keys
- Database management

**Access Level:** Full System Access

---

### 2. Admin

**Description:** Administrative access to manage staff, clients, and business operations.

**Permissions:**
- All Manager permissions
- Add/remove staff members
- Assign roles to staff
- View all client data
- Access all returns
- Issue/revoke certificates
- Configure bank products
- View analytics dashboard
- Manage compliance documents
- Access financial reports

**Access Level:** Administrative

---

### 3. Manager

**Description:** Oversees tax preparation operations and staff performance.

**Permissions:**
- All Senior Preparer permissions
- Review and approve returns
- Assign returns to preparers
- View team performance metrics
- Access refund tracking
- Handle escalations
- Quality control review
- Staff scheduling

**Access Level:** Management

---

### 4. Senior Preparer

**Description:** Experienced tax preparer with review capabilities.

**Permissions:**
- All Tax Preparer permissions
- Review other preparers' returns
- Final review before e-file
- Access complex return types
- Mentor junior preparers
- Handle amended returns

**Access Level:** Senior

---

### 5. Tax Preparer

**Description:** Prepares tax returns for clients.

**Permissions:**
- View assigned clients
- Create/edit tax returns
- Upload documents for clients
- Communicate with clients
- Submit returns for review
- View own performance metrics
- Access tax law library

**Access Level:** Standard

---

### 6. Support Staff

**Description:** Handles administrative and support tasks.

**Permissions:**
- View client contact info
- Schedule appointments
- Send messages to clients
- Upload/download documents
- Basic data entry
- Phone/email support

**Access Level:** Limited

---

### 7. Client

**Description:** End user who files taxes through the platform.

**Permissions:**
- View own profile
- Upload documents
- View own returns
- Check refund status
- Message preparer
- Make payments
- E-sign documents
- Download tax documents

**Access Level:** Client Only

---

## Permission Matrix

| Feature | Super Admin | Admin | Manager | Sr. Preparer | Preparer | Support | Client |
|---------|-------------|-------|---------|--------------|----------|---------|--------|
| System Config | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Staff | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Assign Roles | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| View All Clients | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Approve Returns | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Create Returns | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| View Own Returns | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| E-File Returns | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Access Analytics | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| Bank Products | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Issue Certificates | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Upload Documents | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Messages | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Payments | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ |
| Tax Law Library | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## Role Assignment API

### Get User Role

```http
GET /api/admin/staff/:id/role
```

**Response:**
```json
{
  "user_id": "123",
  "role": "tax_preparer",
  "permissions": ["view_assigned_clients", "create_returns", "upload_documents"]
}
```

### Assign Role

```http
POST /api/admin/staff/:id/role
Content-Type: application/json

{
  "role": "senior_preparer"
}
```

---

## Role Codes

| Role | Code | Level |
|------|------|-------|
| Super Admin | `super_admin` | 100 |
| Admin | `admin` | 90 |
| Manager | `manager` | 70 |
| Senior Preparer | `senior_preparer` | 50 |
| Tax Preparer | `tax_preparer` | 40 |
| Support Staff | `support` | 20 |
| Client | `client` | 10 |

---

## Special Access Flags

### IRS E-File Access

Only users with the following roles can transmit e-files to the IRS:
- Super Admin
- Admin
- Manager
- Senior Preparer (with approval)

### Bank Product Access

Users who can configure bank products:
- Super Admin
- Admin

### Audit Log Access

Only Super Admin can access complete audit logs.

---

## Session & Security

- All roles require MFA for login (configurable per role)
- Session timeout: 30 minutes of inactivity
- Maximum concurrent sessions: 3 per user
- Password requirements: 12+ characters, mixed case, numbers, symbols

---

*Last Updated: January 2026*
*Ross Tax Prep & Bookkeeping LLC*
