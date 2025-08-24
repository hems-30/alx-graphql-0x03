import type { AppProps } from 'next/app';
import ErrorBoundary from '@/components/ErrorBoundary';

// Sentry init (simple, app-level). Avoid re-init during HMR in dev:
import * as Sentry from '@sentry/nextjs';
if (!Sentry.getCurrentHub().getClient()) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1.0, // keep default for demo; tune in real apps
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;