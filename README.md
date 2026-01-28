# Ross Tax Prep — Frontend

**Professional tax preparation frontend** built with Next.js 14, supporting:

- ✅ **Client Portal** — Client intake, document upload, return tracking, e-signature
- ✅ **Bank Products** — Refund Transfer, Refund Advance, Savings Bonds allocation
- ✅ **Staff Dashboard** — Client management, application tracking, provider settings
- ✅ **IRS Compliance** — Form 8879 e-signature, Form 8888 refund allocation, ECOA adverse action

---

## 📁 Tech Stack

- **Framework**: Next.js 14.1.0 (App Router)
- **Language**: TypeScript 5.3.3
- **Styling**: CSS-in-JS with CSS variables
- **Build**: Production-optimized standalone output
- **Deployment**: Vercel, Cloudflare Pages, or any Node.js platform

---

## 📂 Project Structure

```
ross-tax-prep-frontend/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── globals.css                   # Global styles
│   ├── page.tsx                      # Landing page
│   ├── pricing/                      # Pricing page
│   ├── services/                     # Service pages
│   │   ├── tax/
│   │   └── bookkeeping/
│   ├── portal/login/                 # Login page
│   ├── app/                          # Client portal
│   │   ├── dashboard/
│   │   ├── intake/
│   │   ├── documents/
│   │   ├── bank-products/            # Main bank products flow
│   │   │   └── advance/              # Refund advance application
│   │   ├── refund-allocation/        # Form 8888 allocation
│   │   ├── return-summary/
│   │   ├── esign/
│   │   ├── status/
│   │   └── support/
│   └── admin/                        # Admin portal
│       ├── clients/
│       ├── applications/
│       └── settings/
│           ├── providers/
│           └── fees/
├── public/                           # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── .eslintrc.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit http://localhost:3000

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

---

## 🎯 Key Features

### Product Taxonomy
- **Off-Bank Products**: Direct deposit, paper check, prepaid debit card
- **Refund Transfer (RT)**: Partner bank routing with fee deduction
- **Refund Advance**: $250-$4,000 pre-season advances with decisioning
- **Savings Bonds**: Form 8888-style allocation to bonds and multiple accounts

### User Flows
1. **Payment Method Selection**: Guided product selection with disclosures
2. **Refund Advance Application**: Complete intake with approved/pending/denied outcomes
3. **Refund Allocation**: Real-time validation for bonds and multi-account splits

### Admin Features
- Client management with search and status filtering
- Bank product application tracking
- Provider and fee configuration
- Application status monitoring

### Compliance
- IRS Form 8879 (e-file signature authorization)
- IRS Form 8888 (refund allocation)
- ECOA-compliant adverse action notices
- Complete fee disclosures

---

## 📸 Screenshots

See the PR description for complete screenshots of all major features.

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Cloudflare Pages
- **Framework preset**: Next.js
- **Build command**: `npm run build`
- **Output directory**: `.next`

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

## 🔒 Security Considerations

- All sensitive data should be transmitted over HTTPS
- Implement authentication before production deployment
- Validate all user inputs server-side
- Follow OWASP security guidelines
- Regular security audits recommended

---

## 📌 Roadmap

Future enhancements:
- [ ] Backend API integration
- [ ] OAuth authentication
- [ ] Real underwriting system integration
- [ ] IRS e-file system connection
- [ ] PDF generation for returns
- [ ] Document OCR for W-2/1099s
- [ ] Multi-language support

---

## 👥 Contributors

- **condre-art** — Lead Developer

---

## 📃 License

MIT — free to use, modify, and share.
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

