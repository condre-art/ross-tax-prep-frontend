# Security Policy

## Supported Versions

We are currently using Next.js 15.5.10 which addresses the critical DoS vulnerabilities related to HTTP request deserialization with React Server Components.

| Version | Supported          | Status |
| ------- | ------------------ | ------ |
| 15.5.10 | :white_check_mark: | Current |

## Known Vulnerabilities

### Resolved ✅
- **Next.js HTTP request deserialization DoS** - Fixed by upgrading to 15.5.10

### Outstanding (Low Risk)
- **Next.js Unbounded Memory Consumption via PPR Resume Endpoint (CVE-XXXX)** 
  - **Severity:** Moderate
  - **Affected Versions:** 15.0.0-canary.0 - 15.6.0-canary.60
  - **Status:** This vulnerability only affects applications using Partial Prerendering (PPR), which is an experimental feature
  - **Mitigation:** We are NOT using PPR in this application. PPR is disabled by default.
  - **Fix Available:** Upgrade to Next.js 16.1.6 (breaking changes)
  - **Plan:** Will upgrade to Next.js 16.x in the next major version update

- **glob CLI Command Injection (GHSA-5j98-mcp5-4vw2)**
  - **Severity:** High
  - **Affected Component:** eslint-config-next dependency
  - **Status:** Only affects CLI usage of glob, not runtime
  - **Risk:** Low - only affects development environment, not production
  - **Plan:** Will be resolved when Next.js updates their ESLint dependencies

## Security Measures

### Current Implementation
- ✅ Input validation on all forms
- ✅ Routing and account number validation
- ✅ No user-supplied data in SQL queries (backend responsibility)
- ✅ Environment variables for sensitive configuration
- ✅ No secrets committed to repository
- ✅ Audit logging for compliance tracking

### Recommended Additional Measures
- [ ] Add authentication and authorization
- [ ] Implement rate limiting
- [ ] Add CSRF protection
- [ ] Set up Content Security Policy (CSP)
- [ ] Regular security audits
- [ ] Dependency scanning in CI/CD
- [ ] Enable Dependabot for automatic security updates

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please:

1. **Do NOT open a public issue**
2. Email security concerns to: security@rosstaxprep.com
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

We will respond within 48 hours and work with you to address the issue.

## Compliance

This application is designed for IRS e-file compliance and includes:
- Audit logging of all compliance-critical actions
- Disclosure acceptance tracking
- User action timestamps and metadata

## Updates

**Last Updated:** 2026-01-28  
**Next Review:** 2026-02-28

---

For more information about our security practices, see:
- CONTRIBUTING.md - Security guidelines
- README.md - Environment variable configuration
- IMPLEMENTATION_SUMMARY.md - Technical details
