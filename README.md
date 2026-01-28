# Ross Tax Prep — Frontend

**Client portal frontend for tax + bookkeeping workflow with bank products**

## ✅ Features

- **Client Portal** — Secure dashboard for clients to manage their tax preparation
- **Bank Products** — Full refund transfer and advance application system
  - ✅ Provider selection (SBTPG / EPS / Refund Advantage)
  - ✅ Advance decisions with reasons (approved/pending/denied + reason codes/messages)
  - ✅ Payout methods (Direct Deposit / Check / Card)
- **Refund Allocation** — Split refunds between accounts and purchase U.S. Savings Bonds
- **Modern UI** — Built with Next.js 14 App Router + TailwindCSS

---

## 📁 Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **TailwindCSS** — Utility-first CSS framework
- **React Hook Form** + **Zod** — Form handling and validation
- **TanStack Query** — API state management (ready for integration)

---

## 📂 Project Structure

```
ross-tax-prep-frontend/
├── app/
│   ├── app/                      # Authenticated portal routes
│   │   ├── dashboard/           # Client dashboard
│   │   ├── bank-products/       # Bank products selection
│   │   │   └── advance/         # Refund advance application
│   │   └── refund-allocation/   # Refund splitting & savings bonds
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page
│   └── globals.css              # Global styles
├── components/
│   ├── bank-products/           # Bank product components
│   │   ├── ProviderSelection.tsx
│   │   ├── PayoutMethodSelector.tsx
│   │   └── AdvanceDecisionDisplay.tsx
│   ├── allocation/              # Allocation components
│   │   └── AllocationForm.tsx
│   └── shared/                  # Shared components
├── types/
│   └── bank-products.ts         # TypeScript definitions
└── lib/
    ├── api/                     # API client utilities
    ├── validators/              # Zod schemas
    └── formatters/              # Data formatters
```

---

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
npm start
```

---

## 📋 Available Routes

### Public Routes
- `/` — Landing page
- `/app/dashboard` — Client dashboard (to be auth-protected)

### Bank Products Routes
- `/app/bank-products` — Select provider and payout method
- `/app/bank-products/advance` — Apply for refund advance

### Refund Management
- `/app/refund-allocation` — Split refund and purchase savings bonds

---

## 🏦 Bank Products Features

### Provider Selection
Clients can choose from three IRS-approved providers:
- **SBTPG** (Santa Barbara Tax Products Group)
- **EPS Financial**
- **Refund Advantage**

Each provider displays:
- Description
- Key features
- Selection interface

### Refund Advance
- Apply for advance amounts ($500 - $3,500)
- View decision status (approved/pending/denied)
- Display reason codes and messages
- Show approval amounts and terms

### Payout Methods
Three options for receiving refunds:
- **Direct Deposit** — Bank account transfer
- **Paper Check** — Mailed to address
- **Prepaid Card** — Loaded onto card

### Refund Allocation
- Split refunds between multiple destinations
- Purchase U.S. Savings Bonds (Series I or EE)
- Track allocated vs. remaining amounts
- Support for up to 3 allocations

---

## 🔧 Configuration

### Theme Colors
Defined in `tailwind.config.js`:
- Navy: `#0F2A44`
- Gold: `#C9A24D`
- Off-white: `#F4F6F8`

---

## 📌 Future Enhancements

- [ ] Add authentication (NextAuth)
- [ ] Integrate with backend API
- [ ] Add form validation with Zod schemas
- [ ] Implement TanStack Query for API calls
- [ ] Add consent/audit tracking
- [ ] Mobile-responsive improvements
- [ ] Add admin dashboard routes

---

## 👥 Contributors

- **condre-art** — Lead Developer

---

## 📃 License

MIT — free to use, modify, and share.
ross-tax-prep-frontend/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
├── README.md
└── package.json (optional for future use)
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ross Tax Prep Portal</title>
    <link rel="stylesheet" href="styles/main.css" />
  </head>
  <body>
    <header>
      <h1>Ross Tax Prep</h1>
      <p>Client Portal & Staff Dashboard</p>
    </header>

    <main>
      <section id="client-portal">
        <h2>Client Portal</h2>
        <p>Upload tax documents, check status, and more.</p>
      </section>

      <section id="staff-dashboard">
        <h2>Staff Dashboard</h2>
        <p>Manage clients and workflow.</p>
      </section>
    </main>

    <script src="scripts/main.js"></script>
  </body>
</html>
/* Basic styling */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 2rem;
  background-color: #f6f6f6;
  color: #222;
}

header {
  background-color: #004080;
  color: white;
  padding: 1rem;
  border-radius: 8px;
}

main section {
  background: white;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
// Placeholder JS file
console.log("Ross Tax Prep frontend loaded.");

// Future: Add login logic, form handlers, etc.
{
  "name": "ross-tax-prep-frontend",
  "version": "1.0.0",
  "description": "Frontend portal for Ross Tax Prep clients and staff",
  "scripts": {},
  "author": "condre-art",
  "license": "MIT"
}
{
"name": "ross-tax-prep-frontend",
"version": "1.0.0",
"private": true,
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start"
},
"dependencies": {
"next": "latest",
"react": "latest",
"react-dom": "latest"
}
}


// --- File: pages/index.js ---
export default function Home() {
return (
<div className="p-6">
<h1 className="text-2xl font-bold">Ross Tax Prep</h1>
<p>Choose your dashboard:</p>
<ul className="list-disc ml-6">
<li><a href="/client/dashboard" className="text-blue-500 underline">Client Portal</a></li>
<li><a href="/staff/dashboard" className="text-blue-500 underline">Staff Dashboard</a></li>
</ul>
</div>
);
}


// --- File: pages/client/dashboard.js ---
export default function ClientDashboard() {
return (
<div className="p-6">
<h2 className="text-xl font-semibold">Client Dashboard</h2>
<p>Upload your tax docs and track your return.</p>
</div>
);
}


// --- File: pages/staff/dashboard.js ---
export default function StaffDashboard() {
return (
<div className="p-6">
<h2 className="text-xl font-semibold">Staff Dashboard</h2>
<p>Manage client workflows and documentation.</p>
</div>
);
}


// --- File: pages/api/clients.js ---
export default function handler(req, res) {
if (req.method === 'GET') {
return res.status(200).json([
{ id: 1, name: 'John Doe', status: 'Submitted' },
{ id: 2, name: 'Jane Smith', status: 'In Progress' },
]);
}
res.status(405).json({ message: 'Method Not Allowed' });
}


// --- File: components/Navbar.js ---
export default function Navbar({ user }) {
return (
<nav className="bg-blue-800 text-white px-4 py-2 flex justify-between">
<div>Ross Tax Prep</div>
<div>{user?.email || 'Guest'}</div>
</nav>
);
}


// --- File: components/Layout.js ---
import Navbar from './Navbar';
export default function Layout({ children, user }) {
return (
<div>
<Navbar user={user} />
<main className="p-4">{children}</main>
</div>
);
}

