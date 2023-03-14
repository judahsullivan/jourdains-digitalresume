import { ChakraProvider, } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '@/utils/theme'
import AppLayout from '@/shared/appLayout'
import Meta from '@/components/meta'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Meta />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  )
}