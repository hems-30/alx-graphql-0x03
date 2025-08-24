# alx-graphql-0x03 — Error Boundary & Monitoring

This project adds an **Error Boundary** and integrates **Sentry** error monitoring into the Rick and Morty Next.js app.

---

## Key Features
- `components/ErrorBoundary.tsx`: Catches errors, shows fallback UI, logs to console & Sentry.
- `pages/_app.tsx`: Wraps the whole app with `ErrorBoundary`.
- `components/ErrorProneComponent.tsx`: Test component that always throws.
- `pages/index.tsx`: Renders the error-prone component for testing.
- Sentry initialized in `_app.tsx` with DSN from `.env.local`.

---

## Usage
1. Install deps:
   ```bash
   npm install
Add .env.local:

ini
NEXT_PUBLIC_SENTRY_DSN=YOUR_SENTRY_DSN_HERE
Run:
npm run dev
Open http://localhost:3000.

Test
Visit / → Error UI appears.

Error logs to Sentry dashboard.
