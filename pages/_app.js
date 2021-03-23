import GlobalContextProvider from '../contexts/GlobalContext';
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../styles/theme'


function MyApp({ Component, pageProps }) {

  return <ChakraProvider theme={theme}>
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  </ChakraProvider>
}

export default MyApp
