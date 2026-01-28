# Ross Tax Prep - Feature Backlog

This document tracks planned features and enhancements based on the original requirements.

## ✅ Completed Features

### Bank Products
- ✅ Provider picker UI (Santa Barbara TPG, EPS Financial, Refund Advantage)
- ✅ Product selector cards (Off-Bank / RT / Refund Advance)
- ✅ Refund Advance decision screen with approval/pending/denied states
- ✅ Decision reasons display

### Refund Allocation
- ✅ Savings bonds allocation UI with toggle
- ✅ Split deposits UI with multiple account support
- ✅ Validation for routing numbers (9 digits)
- ✅ Validation for account numbers (4-17 digits)
- ✅ Allocation total validation
- ✅ Summary display with remaining amount

### Compliance & Audit
- ✅ Audit logging utilities
- ✅ User action tracking (provider/product selection, etc.)
- ✅ Disclosure acceptance tracking infrastructure

### Documentation
- ✅ Comprehensive README.md
- ✅ CONTRIBUTING.md
- ✅ GitHub issue templates (bug report, feature request)
- ✅ Pull request template

---

## 🚧 In Progress / Next Sprint

### Payout Method Selection
- [ ] Create payout method selector component
  - [ ] Direct Deposit option with form
  - [ ] Check option
  - [ ] Prepaid Card option
- [ ] Embed in bank products flow
- [ ] Add validation message: "Please double-check your routing and account number"

### Disclosures Modal
- [ ] Create modal component for disclosures
- [ ] Display provider-specific disclosures
- [ ] Required checklist UI:
  - [ ] Provider disclosure 1 checkbox
  - [ ] Provider disclosure 2 checkbox
  - [ ] Fee schedule checkbox
  - [ ] Consent to apply/proceed checkbox
- [ ] Gate "I Agree & Continue" button until all checked
- [ ] POST disclosure acceptance to backend
- [ ] Show receipt/confirmation view

### Application Submission
- [ ] Create application submission endpoint integration
- [ ] Poll status endpoint for updates
- [ ] Show submission confirmation
- [ ] Handle errors gracefully

---

## 📋 Backlog Items

### Bank Products - Additional Features
- [ ] Provider logo images
- [ ] Product icons/illustrations
- [ ] Fee schedule display
- [ ] Provider comparison table
- [ ] Save progress and resume later
- [ ] Print/PDF summary of selections

### Refund Allocation - Enhancements
- [ ] Backend constraints for bond amounts (min/max/steps)
- [ ] Visual allocation pie chart
- [ ] Pre-fill with saved allocation
- [ ] Validate split minimums per provider
- [ ] Support for international accounts (future)

### Client Dashboard
- [ ] Login/authentication
- [ ] Document upload
- [ ] Status tracking
- [ ] Message center with preparer
- [ ] Tax return review
- [ ] Payment history

### Staff Dashboard
- [ ] Client management
- [ ] Workflow stages
- [ ] Document review
- [ ] Bank product application management
- [ ] Reporting and analytics

---

## 🔮 Future Enhancements

### Mobile Experience
- [ ] React Native mobile app
- [ ] Progressive Web App (PWA) support
- [ ] Touch-optimized UI
- [ ] Offline mode

### Integrations
- [ ] E-signature integration (DocuSign, Adobe Sign)
- [ ] IRS e-file submission
- [ ] Bank account verification (Plaid)
- [ ] Identity verification (ID.me)
- [ ] SMS notifications

### Advanced Features
- [ ] Multi-language support (Spanish priority)
- [ ] Real-time status updates via WebSocket
- [ ] AI-powered tax optimization suggestions
- [ ] Tax planning tools
- [ ] Prior year return import

### Analytics & Reporting
- [ ] Client analytics dashboard
- [ ] Provider performance metrics
- [ ] Conversion funnel analysis
- [ ] A/B testing framework

---

## 🐛 Known Issues

- None currently tracked

---

## 📌 Technical Debt

- [ ] Add comprehensive unit tests
- [ ] Add integration tests
- [ ] Add E2E tests with Playwright
- [ ] Set up CI/CD pipeline
- [ ] Add error boundary components
- [ ] Implement proper error logging service
- [ ] Add performance monitoring
- [ ] Optimize bundle size
- [ ] Add service worker for offline support

---

## 💡 Ideas for Consideration

- Gamification: Progress badges for completing steps
- Social proof: "X people used this provider this month"
- Chatbot assistant for common questions
- Video tutorials for complex features
- Accessibility improvements (WCAG 2.1 AAA)

---

**Last Updated:** 2026-01-28
