import { AuditLogEntry, DisclosureAcceptance } from '@/lib/types/bank-products'

/**
 * Logs an audit entry for compliance tracking
 */
export async function logAuditEntry(entry: Omit<AuditLogEntry, 'timestamp' | 'userAgent'>): Promise<void> {
  const auditLog: AuditLogEntry = {
    ...entry,
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
  }

  // In production, this would send to backend API
  console.log('[AUDIT]', auditLog)
  
  // Store locally for development
  if (typeof window !== 'undefined') {
    const logs = JSON.parse(localStorage.getItem('auditLogs') || '[]')
    logs.push(auditLog)
    localStorage.setItem('auditLogs', JSON.stringify(logs))
  }
}

/**
 * Logs disclosure acceptance for compliance
 */
export async function logDisclosureAcceptance(
  disclosureId: string,
  version: string,
  clientId: string
): Promise<void> {
  const acceptance: DisclosureAcceptance = {
    disclosureId,
    version,
    acceptedAt: new Date().toISOString(),
    clientId,
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
  }

  // In production, this would POST to backend API
  console.log('[DISCLOSURE_ACCEPTANCE]', acceptance)
  
  await logAuditEntry({
    action: 'DISCLOSURE_ACCEPTED',
    userId: clientId,
    details: { disclosureId, version },
  })
}

/**
 * Key actions that should be logged
 */
export const AUDIT_ACTIONS = {
  PROVIDER_SELECTED: 'PROVIDER_SELECTED',
  PRODUCT_SELECTED: 'PRODUCT_SELECTED',
  PAYOUT_METHOD_SELECTED: 'PAYOUT_METHOD_SELECTED',
  APPLICATION_SUBMITTED: 'APPLICATION_SUBMITTED',
  ADVANCE_DECISION_VIEWED: 'ADVANCE_DECISION_VIEWED',
  ADVANCE_OFFER_ACCEPTED: 'ADVANCE_OFFER_ACCEPTED',
  ALLOCATION_SAVED: 'ALLOCATION_SAVED',
} as const
