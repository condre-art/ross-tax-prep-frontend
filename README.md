# Ross CloudBase Pro Web — Frontend

Client portal frontend for Ross Tax and Bookkeeping:
- Bank products: Off-Bank, Refund Transfer (RT), Refund Advance (+ RT)
- Provider selection visible: SBTPG, EPS Financial, Refund Advantage
- Advance decision reasons visible (Approved/Pending/Denied + reasons)
- Payout methods: Direct Deposit + Check + Prepaid Card
- Refund allocation: Savings Bonds + deposit splits

## Stack
- Next.js (App Router) + TypeScript
- TailwindCSS
- React Hook Form + Zod validation
- TanStack Query (API caching)

## Setup
1. Install deps
   ```bash
   npm i
   ```
2. Create env file
   ```bash
   cp .env.example .env.local
   ```
3. Run dev server
   ```bash
   npm run dev
   ```

## Environment variables
See `.env.example`.

Required variables:
- `NEXT_PUBLIC_API_BASE_URL` - Backend API base URL (default: http://localhost:3001)
- `NODE_ENV` - Environment (development, staging, production)

## Routes

### Public:
- `/` - Marketing homepage
- `/portal/login` - Client portal login

### Authenticated:
- `/app/dashboard` - Main client dashboard
- `/app/bank-products` - Bank product selection (Off-Bank, RT, RA)
- `/app/bank-products/advance` - Refund advance details & decision reasons
- `/app/refund-allocation` - Savings bonds & deposit splits
- `/app/esign` - Electronic signature for tax documents
- `/app/status` - Tax return and refund status tracking

## Features

### Bank Products
- **Off-Bank**: Traditional refund without bank product fees
- **Refund Transfer (RT)**: Refund processing with multiple payout options
- **Refund Advance (RA)**: Early refund with instant approval/denial/pending decisions

### Provider Selection
- SBTPG (Santa Barbara Tax Products Group)
- EPS Financial (Electronic Payment Services)
- Refund Advantage

### Payout Methods
- Direct Deposit (with routing/account numbers)
- Paper Check (mailed to address)
- Prepaid Card

### Refund Allocation
- Purchase U.S. Savings Bonds (Series I or EE)
- Split refund across up to 3 bank accounts
- Configure amounts and account types

### Compliance
All consents are tracked with:
- `disclosureId` - Unique disclosure identifier
- `version` - Disclosure version (if provided)
- `acceptedAt` - ISO timestamp of acceptance
- `clientId` - Client identifier
- `userAgent` - Browser user agent string
- `ipAddress` - IP address (derived server-side)

## API Contract (frontend calls backend only)

### Providers
- `GET /api/providers` - Get list of available providers

### Bank Products
- `GET /api/bank-products/config` - Get bank product configurations
- `GET /api/bank-products/offers?clientId=...` - Get offers for client
- `GET /api/bank-products/disclosures?provider=...&product=...` - Get disclosures
- `POST /api/bank-products/consents` - Submit consent (with compliance tracking)
- `POST /api/bank-products/applications` - Submit bank product application
- `GET /api/bank-products/applications/:id` - Get application status
- `POST /api/bank-products/selection` - Submit final product selection

### Refund Allocation
- `POST /api/refund-allocation` - Submit refund allocation (bonds/splits)
- `GET /api/refund-allocation/:clientId` - Get saved allocation

## Project Structure

```
ross-tax-prep-frontend/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Marketing homepage (/)
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── portal/
│   │   └── login/
│   │       └── page.tsx         # Login page
│   └── app/                     # Authenticated routes
│       ├── dashboard/           # Main dashboard
│       ├── bank-products/       # Bank product selection
│       │   └── advance/         # Refund advance details
│       ├── refund-allocation/   # Savings bonds & splits
│       ├── esign/               # Electronic signatures
│       └── status/              # Status tracking
├── components/
│   └── AppLayout.tsx            # Authenticated app layout with nav
├── lib/
│   ├── api-client.ts            # Axios client with interceptors
│   └── api.ts                   # API function wrappers
├── types/
│   └── index.ts                 # TypeScript type definitions
├── public/                      # Static assets
├── .env.example                 # Environment variables template
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # TailwindCSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies & scripts
```

## Development

### Running the dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Building for production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Design System

### Colors
- Navy: `#0F2A44` - Primary brand color
- Gold: `#C9A24D` - Accent color
- Off-white: `#F4F6F8` - Background
- Text Dark: `#1B1B1B` - Text color

### Components
- `btn-primary` - Gold button for primary actions
- `btn-secondary` - Navy button for secondary actions
- `card` - White card with padding and shadow
- `input-field` - Styled form input
- `label` - Form label

## License
MIT — free to use, modify, and share.

## Contributors
- **condre-art** — Lead Developer
