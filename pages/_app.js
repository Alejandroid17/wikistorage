import GlobalContextProvider from '../contexts/GlobalContext';
import { ChakraProvider } from "@chakra-ui/react"


function MyApp({ Component, pageProps }) {

  return <ChakraProvider>
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  </ChakraProvider>
}

export default MyApp
