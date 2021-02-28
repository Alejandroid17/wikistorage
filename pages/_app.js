import 'bulma/css/bulma.min.css'
import ThemeContextProvider from '../context/ThemeContext'

function MyApp({ Component, pageProps }) {

  return <ThemeContextProvider>
    <Component {...pageProps} />
  </ThemeContextProvider>
}

export default MyApp
