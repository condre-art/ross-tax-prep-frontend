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

```
ross-tax-prep-frontend/
├── index.html
├── .env.example
├── .env.local
├── .gitignore
├── README.md
└── package.json
```

---

## ⚙️ Environment Variables

This application uses environment variables for configuration. To get started:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update the values in `.env.local` for your environment.

### Available Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_APP_NAME` | Application name displayed in the UI | `"Ross Tax and Bookkeeping"` |
| `NEXT_PUBLIC_API_BASE_URL` | Base URL for API endpoints | `"https://api.yourdomain.com"` |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Support email for contact forms | `"info@rosstaxprepandbookkeeping.com"` |
| `NEXT_PUBLIC_FEATURE_BANK_PRODUCTS` | Enable/disable bank products feature | `true` or `false` |
| `NEXT_PUBLIC_FEATURE_SAVINGS_BONDS` | Enable/disable savings bonds feature | `true` or `false` |
| `NEXT_PUBLIC_DEFAULT_PROVIDER` | Default tax service provider | `"SBTPG"` |

**Note:** All variables prefixed with `NEXT_PUBLIC_` are exposed to the browser and can be accessed in client-side code.

---

## 🚀 Deployment

This app is designed to be deployed on **Cloudflare Pages**.

### ✅ Default settings:
- **Framework preset**: None
- **Build command**: _(leave blank)_
- **Output directory**: `./`

Once deployed, your site will be publicly accessible.

### Environment Variables in Production

When deploying to Cloudflare Pages or other hosting platforms, make sure to set the environment variables in your platform's dashboard:

1. Navigate to your project settings
2. Find the "Environment Variables" section
3. Add each variable from `.env.example`
4. Update the values for your production environment

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
