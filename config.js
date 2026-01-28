/**
 * Environment Configuration
 * 
 * This file provides a centralized way to access environment variables.
 * When converting to Next.js, these will automatically be available via process.env
 * 
 * For static builds, you can use a build-time replacement tool or populate these
 * values during the build process.
 */

const config = {
  // Application Configuration
  appName: process.env.NEXT_PUBLIC_APP_NAME || 'Ross Tax and Bookkeeping',
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.yourdomain.com',
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'info@rosstaxprepandbookkeeping.com',
  
  // Feature Flags
  features: {
    bankProducts: process.env.NEXT_PUBLIC_FEATURE_BANK_PRODUCTS === 'true',
    savingsBonds: process.env.NEXT_PUBLIC_FEATURE_SAVINGS_BONDS === 'true',
  },
  
  // UI Defaults
  defaultProvider: process.env.NEXT_PUBLIC_DEFAULT_PROVIDER || 'SBTPG',
};

export default config;
