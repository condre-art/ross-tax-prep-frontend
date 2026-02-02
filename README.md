# Ross Tax Prep — Frontend

Client-facing flows for bank products, refund advance, payout methods, and refund allocation.

## Setup

```bash
npm install
npm run dev
```

### Env vars

None required for local static preview. For MCP logging, set `MCP_SERVER_URL` if backend is present.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Entry page linking to flows |
| `/app/bank-products` | Provider/product selection, payout method, disclosures |
| `/app/bank-products/advance` | Refund advance decision screen |
| `/app/refund-allocation` | Savings bonds + split deposits |

## API Contract (frontend expectations)

| Event | Payload |
| --- | --- |
| compliance acceptance | `disclosureId`, `version`, `acceptedAt (ISO)`, `clientId`, `ipAddress (backend)`, `userAgent` |
| audit actions | `provider selected`, `product selected`, `payout method selected`, `application submitted` |

## Feature Flags

None; flows are static for demo.

## Lint/Test Commands

None configured. Run `npm run dev` for local preview.

## Deployment Notes

Designed for static export via Next.js (`next export`). Cloudflare Pages can deploy with `npm run build` output in `out/`.
