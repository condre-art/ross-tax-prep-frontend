/**
 * TypeScript type definitions for Ross Tax Prep
 */

// ============================
// Environment / Bindings
// ============================

export interface Env {
  // D1 Database
  DB: D1Database;

  // KV Namespaces
  SESSIONS: KVNamespace;
  CACHE: KVNamespace;

  // R2 Buckets
  TAX_DOCUMENTS: R2Bucket;
  CLIENT_UPLOADS: R2Bucket;
  IRS_SUBMISSIONS: R2Bucket;

  // Secrets
  JWT_SECRET: string;
  ENCRYPTION_KEY: string;
  DB_ENCRYPTION_KEY: string;
  TOTP_SECRET: string;
  IRS_EFIN: string;
  IRS_ETIN: string;
  IRS_CERTIFICATE: string;
  IRS_PRIVATE_KEY: string;

  // Configuration
  ENVIRONMENT: string;
  IRS_MEF_ENDPOINT: string;
  IRS_TEST_MODE: string;
}

// ============================
// User & Authentication
// ============================

export type UserRole = 'admin' | 'ero' | 'client' | 'demo';
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'pending';

export interface User {
  id: string;
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  phone?: string;
  ssn_encrypted?: string;
  date_of_birth?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  role: UserRole;
  status: UserStatus;
  mfa_enabled: number; // 0 or 1
  mfa_secret?: string;
  last_login_at?: string;
  password_reset_token?: string;
  password_reset_expires?: string;
  email_verified: number; // 0 or 1
  email_verification_token?: string;
  created_at: string;
  updated_at: string;
}

export interface Session {
  id: string;
  user_id: string;
  token: string;
  ip_address?: string;
  user_agent?: string;
  expires_at: string;
  created_at: string;
}

export interface JWTPayload {
  userId: string;
  email: string;
  role: UserRole;
  sessionId: string;
  iat: number;
  exp: number;
}

// ============================
// Tax Returns
// ============================

export type TaxReturnStatus =
  | 'draft'
  | 'in_progress'
  | 'ready'
  | 'submitted'
  | 'accepted'
  | 'rejected'
  | 'amended';

export type FilingStatus =
  | 'Single'
  | 'MarriedFilingJointly'
  | 'MarriedFilingSeparately'
  | 'HeadOfHousehold'
  | 'QualifyingWidow';

export interface TaxReturn {
  id: string;
  user_id: string;
  tax_year: number;
  filing_status: FilingStatus;
  return_type: string; // '1040', '1040-SR', etc.
  status: TaxReturnStatus;
  data_encrypted?: string;
  irs_submission_id?: string;
  irs_ack_code?: string;
  irs_ack_message?: string;
  submitted_at?: string;
  accepted_at?: string;
  ero_id?: string;
  efin?: string;
  preparer_ptin?: string;
  created_at: string;
  updated_at: string;
}

// ============================
// Documents
// ============================

export type DocumentType =
  | 'w2'
  | '1099'
  | 'id'
  | 'supporting'
  | 'signature'
  | 'other';

export interface Document {
  id: string;
  user_id: string;
  return_id?: string;
  file_name: string;
  file_type: string;
  file_size: number;
  r2_key: string;
  bucket_name: string;
  document_type: DocumentType;
  encrypted: number; // 0 or 1
  uploaded_by: string;
  uploaded_at: string;
  virus_scanned: number; // 0 or 1
  virus_scan_result?: string;
  metadata?: string; // JSON
}

// ============================
// IRS Transmission
// ============================

export type TransmissionStatus =
  | 'pending'
  | 'transmitted'
  | 'acknowledged'
  | 'rejected'
  | 'error';

export interface IRSTransmission {
  id: string;
  return_id: string;
  transmission_id: string;
  submission_id: string;
  test_indicator: 'T' | 'P'; // T=Test, P=Production
  mef_version: string;
  xml_data: string;
  checksum: string;
  checksum_algorithm: string;
  status: TransmissionStatus;
  ack_code?: string;
  ack_message?: string;
  ack_timestamp?: string;
  transmitted_at?: string;
  created_at: string;
}

// ============================
// Audit Logging
// ============================

export type AuditSeverity = 'info' | 'warning' | 'error' | 'critical';

export interface AuditLog {
  id: string;
  user_id?: string;
  action: string;
  resource_type: string;
  resource_id?: string;
  ip_address?: string;
  user_agent?: string;
  details?: string; // JSON
  severity: AuditSeverity;
  created_at: string;
}

// ============================
// Notifications
// ============================

export type NotificationType = 'email' | 'sms' | 'in_app';
export type NotificationPriority = 'low' | 'normal' | 'high' | 'urgent';

export interface Notification {
  id: string;
  user_id: string;
  type: NotificationType;
  title: string;
  message: string;
  read: number; // 0 or 1
  priority: NotificationPriority;
  metadata?: string; // JSON
  sent_at?: string;
  created_at: string;
}

// ============================
// Refund Allocation
// ============================

export type RefundAllocationType =
  | 'direct_deposit'
  | 'check'
  | 'split'
  | 'savings_bonds';

export type RefundAllocationStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'completed';

export interface RefundAllocation {
  id: string;
  return_id: string;
  allocation_type: RefundAllocationType;
  account_type?: 'checking' | 'savings';
  routing_number_encrypted?: string;
  account_number_encrypted?: string;
  amount?: number;
  bank_name?: string;
  status: RefundAllocationStatus;
  metadata?: string; // JSON
  created_at: string;
  updated_at: string;
}

// ============================
// Bank Products
// ============================

export type BankProductType = 'refund_transfer' | 'refund_advance' | 'other';
export type BankProductStatus = 'pending' | 'approved' | 'denied' | 'completed';

export interface BankProduct {
  id: string;
  return_id: string;
  provider: string;
  product_name: string;
  product_type: BankProductType;
  payout_method?: string;
  amount?: number;
  fee?: number;
  status: BankProductStatus;
  application_data?: string; // JSON
  decision_code?: string;
  decision_message?: string;
  approved_at?: string;
  created_at: string;
  updated_at: string;
}

// ============================
// API Request/Response Types
// ============================

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role?: UserRole;
}

export interface RegisterResponse {
  success: boolean;
  userId: string;
  message: string;
  verificationToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  mfaCode?: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
  };
}

export interface MFARequiredResponse {
  mfa_required: boolean;
  message: string;
}

export interface ErrorResponse {
  error: string;
  details?: string;
}

export interface SuccessResponse {
  success: boolean;
  message: string;
}

// ============================
// Permission System
// ============================

export type Permission =
  | '*' // All permissions
  | 'returns.create'
  | 'returns.read'
  | 'returns.update'
  | 'returns.delete'
  | 'returns.submit'
  | 'clients.create'
  | 'clients.read'
  | 'clients.update'
  | 'clients.delete'
  | 'documents.upload'
  | 'documents.read'
  | 'documents.delete'
  | 'irs.transmit'
  | 'admin.settings'
  | 'notifications.read'
  | 'notifications.send';

export interface Role {
  id: string;
  name: string;
  description?: string;
  permissions: string; // JSON array of Permission[]
  created_at: string;
  updated_at: string;
}

export type RolePermissions = Record<UserRole, Permission[]>;
