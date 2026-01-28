# Ross Tax Prep — Frontend

**Frontend web app for Ross Tax Prep**, built to support:

- ✅ Client Portal — where clients can register, upload documents, and track progress.
- ✅ Staff Dashboard — where staff can manage clients, files, and workflow.

---

## 📁 Tech Stack

- **HTML5 / CSS3 / JavaScript**
- Designed for static hosting (Cloudflare Pages)
- Future-ready for React / Next.js (modular folder structure encouraged)

---

## 📂 Project Structure

---

## 🚀 Deployment

This app is designed to be deployed on **Cloudflare Pages**.

### ✅ Default settings:

- **Framework preset**: None
- **Build command**: _(leave blank)_
- **Output directory**: `./`

Once deployed, your site will be publicly accessible at:

---

## 📌 Roadmap

Planned future improvements:

- [ ] Convert to React or Next.js
- [ ] Add secure login for clients/staff
- [ ] Build admin analytics dashboard
- [ ] Mobile-first responsive design

---

## 👥 Contributors

- **condre-art** — Lead Developer

---

## 📃 License

MIT — free to use, modify, and share.
ross-tax-prep-frontend/
├── index.html
├── styles/
│ └── main.css
├── scripts/
│ └── main.js
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
