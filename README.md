# Ross Tax Prep — Frontend

**Frontend web app for Ross Tax Prep**, built to support:

- ✅ Client Portal — where clients can register, upload documents, and track progress.
- ✅ Staff Dashboard — where staff can manage clients, files, and workflow.

---

## 📁 Tech Stack

- **Next.js 15** — React framework with App Router
- **React 18** — Modern React with TypeScript
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first CSS framework
- **TanStack Query** — Powerful data fetching and caching
- **React Hook Form** — Performant form handling
- **Zod** — TypeScript-first schema validation

---

## 📂 Project Structure

```
ross-tax-prep-frontend/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── package.json          # Dependencies and scripts
└── README.md
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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

---

## 🚀 Deployment

This app can be deployed on **Cloudflare Pages**, **Vercel**, or any platform that supports Next.js.

### For Cloudflare Pages:

- **Framework preset**: Next.js
- **Build command**: `npm run build`
- **Output directory**: `.next`

Once deployed, your site will be publicly accessible.

---

## 📌 Roadmap

Planned future improvements:

- [x] Convert to React or Next.js
- [ ] Add secure login for clients/staff
- [ ] Build admin analytics dashboard
- [ ] Mobile-first responsive design

---

## 👥 Contributors

- **condre-art** — Lead Developer

---

## 📃 License

MIT — free to use, modify, and share.
