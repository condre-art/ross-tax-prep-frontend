import "./globals.css";
import { getBrandingConfig } from "../lib/branding-multitenant";

// D&C logo asset
const DC_LOGO_URL = "/assets/dc-taxation-logo.png";
const DC_WATERMARK_TEXT = "D&C TAXATION LLC";

export const metadata = {
  title: "ROSS Tax & Bookkeeping",
  description: "Professional Tax Preparation & Bookkeeping Services",
};

export default function RootLayout({ children }) {
  // Example: get tenantKey from subdomain, session, or context
  let tenantKey = 'ross';
  if (typeof window !== 'undefined') {
    tenantKey = window.location.hostname.split('.')[0] || 'ross';
  }
  const brandingConfig = getBrandingConfig(tenantKey);
  return (
    <html lang="en">
      <head>
        <title>{brandingConfig.businessName}</title>
        <link rel="icon" href={DC_LOGO_URL} />
        <meta name="theme-color" content={brandingConfig.themeColor} />
      </head>
      <body className="min-h-screen" style={{background: 'var(--kimbe-dark-bg)', color: 'var(--kimbe-dark-text)'}}>
        <header className="site-header">
          <img src={DC_LOGO_URL} alt="D&C Taxation Logo" className="site-logo" />
          <h1 style={{color: 'var(--kimbe-dark-accent)', fontFamily: 'Montserrat, sans-serif', fontWeight: 900, marginBottom: '8px'}}>D&C TAXATION LLC</h1>
        </header>
        <main style={{margin: '0 auto', maxWidth: '900px', padding: '32px 16px'}}>
          {children}
        </main>
        <footer className="footer">
          <a href={brandingConfig.privacyPolicyUrl} style={{color:'var(--kimbe-dark-accent)', textDecoration:'underline', fontSize:'0.98em', marginRight:'8px'}}>Privacy Policy</a>
          <a href={brandingConfig.termsUrl} style={{color:'var(--kimbe-dark-accent)', textDecoration:'underline', fontSize:'0.98em'}}>Terms</a>
          <div>Contact: {brandingConfig.supportEmail} | {brandingConfig.supportPhone}</div>
        </footer>
        {/* D&C Watermark */}
        <div className="dc-watermark">{DC_WATERMARK_TEXT}</div>
      </body>
    </html>
  );
}
