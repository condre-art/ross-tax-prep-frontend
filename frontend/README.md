# Frontend Directory Structure

This directory contains the frontend application for Ross Tax Prep, organized using a Next.js App Router architecture.

## 📁 Directory Overview

```
frontend/
├── app/                          # Next.js App Router directory
│   ├── (public)/                # Public route group (no auth required)
│   ├── (auth)/                  # Auth-protected route group
│   └── app/                     # Main application features
│       ├── bank-products/       # Bank product selection & management
│       ├── refund-allocation/   # Refund allocation interface
│       ├── esign/               # Electronic signature flows
│       └── status/              # Application status tracking
│
├── components/                   # React components organized by feature
│   ├── bank-products/           # Bank product specific components
│   ├── allocation/              # Allocation/distribution components
│   └── shared/                  # Shared/reusable components
│
├── lib/                         # Utility libraries and helpers
│   ├── api/                    # API client and request utilities
│   ├── auth/                   # Authentication utilities
│   ├── validators/             # Input validation schemas
│   └── formatters/             # Data formatting utilities
│
├── types/                       # TypeScript type definitions
├── styles/                      # Global styles and CSS modules
├── public/                      # Static assets (images, fonts, etc.)
└── tests/                       # Test files and test utilities
```

## 🎯 Architecture Principles

### Route Organization
- **(public)**: Routes accessible without authentication (landing, login, signup)
- **(auth)**: Routes requiring authentication (dashboard, profile)
- **app/**: Main application features with specific business logic

### Component Organization
- **Feature-based**: Components are organized by the feature they support
- **Shared**: Common components used across multiple features
- **Colocation**: Keep components close to where they're used when possible

### Library Organization
- **api/**: Centralized API client, request/response handling
- **auth/**: Authentication logic, token management, session handling
- **validators/**: Form validation, data validation schemas (e.g., Zod)
- **formatters/**: Currency, date, SSN formatting utilities

## 🚀 Getting Started

Each subdirectory contains its own README.md with specific documentation for that area of the codebase.

## 📝 Notes

- This structure follows Next.js 13+ App Router conventions
- Route groups (parentheses) don't affect URL structure
- Feature routes under `app/app/` will be at `/app/*` URLs
