# Contributing to Ross Tax Prep Frontend

Thank you for your interest in contributing to Ross Tax Prep! This document provides guidelines and instructions for contributing.

---

## 🤝 Code of Conduct

By participating in this project, you agree to maintain a respectful and collaborative environment.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git
- Basic knowledge of React, Next.js, and TypeScript

### Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/ross-tax-prep-frontend.git
   cd ross-tax-prep-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a branch**
   ```bash
   git checkout -b your-branch-name
   ```

---

## 📋 Branch Naming Convention

Use descriptive branch names that follow this pattern:

```
<type>/<short-description>
```

### Types

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or modifications
- `chore/` - Maintenance tasks

### Examples

- `feature/add-payout-method-selector`
- `fix/routing-number-validation`
- `docs/update-api-endpoints`
- `refactor/simplify-audit-logging`
- `test/add-allocation-validation-tests`

---

## 💻 Development Workflow

### 1. Make Your Changes

- Write clean, readable code
- Follow existing code style and patterns
- Add comments for complex logic
- Update TypeScript types as needed

### 2. Test Your Changes

```bash
# Run the development server
npm run dev

# Run type checking
npm run type-check

# Run linting
npm run lint
```

### 3. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add direct deposit validation"
```

#### Commit Message Format

```
<type>: <subject>

[optional body]

[optional footer]
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Formatting, missing semicolons, etc.
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance

**Examples:**
- `feat: add savings bonds allocation UI`
- `fix: correct routing number validation regex`
- `docs: update README with deployment instructions`
- `refactor: simplify audit logging function`

---

## 📤 Pull Request Requirements

### Before Submitting

- [ ] Code builds without errors (`npm run build`)
- [ ] All linting passes (`npm run lint`)
- [ ] Type checking passes (`npm run type-check`)
- [ ] You've tested your changes locally
- [ ] Documentation is updated (if needed)
- [ ] Commit messages follow conventions

### PR Description

Use the PR template and include:

1. **Clear description** of what changed and why
2. **Related issue** number(s)
3. **Screenshots** for UI changes
4. **Testing notes** for reviewers
5. **Breaking changes** (if any)

### PR Title Format

```
[TYPE] Brief description
```

Examples:
- `[FEATURE] Add refund advance decision UI`
- `[FIX] Correct allocation validation logic`
- `[DOCS] Update API contract table`

---

## 🧪 Testing Guidelines

### Manual Testing

1. Test the happy path
2. Test edge cases
3. Test error scenarios
4. Test on multiple browsers (Chrome, Safari, Firefox)
5. Test responsive design (mobile, tablet, desktop)

### Writing Tests

```typescript
// Example test structure
describe('validateRoutingNumber', () => {
  it('should return true for valid 9-digit routing number', () => {
    expect(validateRoutingNumber('123456789')).toBe(true)
  })
  
  it('should return false for invalid routing number', () => {
    expect(validateRoutingNumber('12345')).toBe(false)
  })
})
```

---

## 🎨 Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type
- Use meaningful variable and function names

### React Components

- Use functional components
- Use TypeScript for props
- Keep components focused and reusable
- Extract complex logic to custom hooks or utilities

```typescript
// Good example
interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

export default function Button({ label, onClick, disabled = false }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}
```

### File Organization

```
component-name/
├── ComponentName.tsx       # Main component
├── ComponentName.test.tsx  # Tests
└── index.ts               # Exports
```

### Naming Conventions

- **Components:** PascalCase (`BankProductSelector`)
- **Files:** PascalCase for components (`BankProductSelector.tsx`)
- **Functions:** camelCase (`validateRoutingNumber`)
- **Constants:** UPPER_SNAKE_CASE (`AUDIT_ACTIONS`)
- **Types/Interfaces:** PascalCase (`BankProvider`, `ProviderOption`)

---

## 📚 Documentation

### Code Comments

- Add JSDoc comments for functions
- Explain "why" not "what"
- Document complex algorithms

```typescript
/**
 * Validates that allocation total doesn't exceed refund amount
 * @param refundAmount - Total refund available
 * @param allocations - Array of allocation amounts
 * @returns Validation result with optional error message
 */
export function validateAllocationTotal(
  refundAmount: number,
  allocations: number[]
): { valid: boolean; message?: string }
```

### README Updates

- Update README.md for new features
- Add examples for new utilities
- Document new environment variables
- Update route map for new pages

---

## 🔒 Security Guidelines

### Never Commit

- API keys or secrets
- Passwords or tokens
- Personal information
- `.env` files with real credentials

### Always

- Use environment variables for configuration
- Validate user input
- Sanitize data before rendering
- Log security-relevant actions
- Follow OWASP best practices

---

## 🐛 Bug Reports

### Before Submitting

1. Search existing issues
2. Try to reproduce on latest version
3. Check if it's already fixed in `main`

### Include in Bug Report

- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Environment details (browser, OS, etc.)
- Screenshots or video (if applicable)
- Console errors (if any)

---

## ✨ Feature Requests

### Guidelines

- Explain the use case clearly
- Describe the problem it solves
- Suggest a solution (optional)
- Consider alternatives
- Be open to discussion

---

## 🔍 Code Review Process

### For Authors

- Respond to feedback promptly
- Be open to suggestions
- Update PR based on review comments
- Mark conversations as resolved when addressed

### For Reviewers

- Be constructive and respectful
- Explain the "why" behind suggestions
- Approve when ready
- Request changes if needed

---

## 📦 Release Process

1. All PRs merged to `main`
2. Version bump in `package.json`
3. Update CHANGELOG.md
4. Create release tag
5. Deploy to production

---

## 💬 Communication

- **Issues:** Technical discussions, bug reports, feature requests
- **Pull Requests:** Code review and implementation details
- **Discussions:** General questions and ideas

---

## 🎯 Priority Labels

- **P0 - Critical:** Security issues, data loss, system down
- **P1 - High:** Major features, serious bugs
- **P2 - Medium:** Regular features, minor bugs
- **P3 - Low:** Nice-to-have features, cosmetic issues

---

## ✅ Review Checklist

Before requesting review, verify:

- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] No console errors or warnings
- [ ] Commits are clean and well-described
- [ ] PR description is complete
- [ ] Screenshots are included (for UI changes)
- [ ] No security vulnerabilities introduced

---

## 🙏 Thank You!

Your contributions make Ross Tax Prep better for everyone. We appreciate your time and effort!

For questions, reach out via:
- GitHub Issues
- Email: support@rosstaxprep.com

---

**Happy Coding! 🚀**
