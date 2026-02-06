// Sentry integration for frontend error monitoring
// Real Sentry DSN for production
Sentry.init({
  dsn: 'https://b6e2e7e2c1e54e1e8e2e7e2c1e54e1e8@o450000000000000.ingest.sentry.io/450000000000000',
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay()
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
});
