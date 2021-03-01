import 'bulma/css/bulma.min.css';
import GlobalContextProvider from '../contexts/GlobalContext';


function MyApp({ Component, pageProps }) {

  return <GlobalContextProvider>
    <Component {...pageProps} />
  </GlobalContextProvider>
}

export default MyApp
