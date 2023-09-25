import { Container } from '@mui/material';
import type { AppProps } from 'next/app';
import { RelayEnvironmentProvider } from 'react-relay';

import { MuiContext } from '@/lib/mui';
import { getCurrentEnvironment } from '@/lib/relay/get-current-environment';

export default function App({ Component, pageProps }: AppProps) {
  const environment = getCurrentEnvironment();
  return (
    <RelayEnvironmentProvider environment={environment}>
      <MuiContext>
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </MuiContext>
    </RelayEnvironmentProvider>
  );
}
