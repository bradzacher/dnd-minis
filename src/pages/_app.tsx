import '@/lib/stylex';

import type { AppProps } from 'next/app';
import { RelayEnvironmentProvider } from 'react-relay';

import { getCurrentEnvironment } from '@/lib/relay/get-current-environment';

export default function App({ Component, pageProps }: AppProps) {
  const environment = getCurrentEnvironment();
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}
