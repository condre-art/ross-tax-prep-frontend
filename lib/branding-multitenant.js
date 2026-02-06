// Multi-tenant branding config loader
// This file provides a function to get branding config for a given tenant (ERO/software purchaser)

// Example: Store configs for each tenant by unique key (e.g., subdomain, tenantId, or email domain)
const BRANDING_CONFIGS = {
  'ross': {
    businessName: 'Ross Tax & Bookkeeping',
    logoUrl: '/assets/ross-logo.webp',
    supportEmail: 'support@rosstaxprepandbookkeeping.com',
    supportPhone: '1-800-555-ROSS',
    themeColor: '#0F2A44',
    privacyPolicyUrl: '/privacy.html',
    termsUrl: '/terms.html'
  },
  'acme': {
    businessName: 'Acme Tax Pros',
    logoUrl: '/assets/acme-logo.png',
    supportEmail: 'help@acmetaxpros.com',
    supportPhone: '1-800-555-ACME',
    themeColor: '#1A237E',
    privacyPolicyUrl: '/acme-privacy.html',
    termsUrl: '/acme-terms.html'
  }
  // Add more tenants as needed
};

/**
 * Get branding config for a tenant.
 * @param {string} tenantKey - Unique key for the tenant (e.g., subdomain, tenantId)
 * @returns {object} Branding config object
 */
export function getBrandingConfig(tenantKey) {
  // Fallback to 'ross' if not found
  return BRANDING_CONFIGS[tenantKey] || BRANDING_CONFIGS['ross'];
}

// Optionally, export all configs for admin UI
export { BRANDING_CONFIGS };
