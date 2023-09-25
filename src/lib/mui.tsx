import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#56BA89',
      50: '#ebf7f1',
      100: '#cceadc',
      200: '#abddc4',
      300: '#89cfac',
      400: '#6fc49b',
      500: '#56BA89',
      600: '#4fb381',
      700: '#45ab76',
      800: '#3ca36c',
      900: '#2b9459',
      A100: '#d8ffe8',
      A200: '#a5ffca',
      A400: '#72ffac',
      A700: '#58ff9e',
    },
    secondary: {
      main: '#cfd8dc',
      50: '#f9fafb',
      100: '#f1f3f5',
      200: '#e7ecee',
      300: '#dde4e7',
      400: '#d6dee1',
      500: '#cfd8dc',
      600: '#cad4d8',
      700: '#c3ced3',
      800: '#bdc8ce',
      900: '#b2bfc5',
      A100: '#ffffff',
      A200: '#ffffff',
      A400: '#ffffff',
      A700: '#fcfeff',
    },
  },
});

export function MuiContext({ children }: React.PropsWithChildren) {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}
