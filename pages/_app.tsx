import { useEffect } from 'react';
import '../styles/global.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { theme } from 'themes/default'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
