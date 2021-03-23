import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import BaseFooter from "../components/Footer/BaseFooter/BaseFooter.theme"
import BaseHeader from "../components/Header/BaseHeader/BaseHeader.theme"
import Progress from "../components/Progress/Progress.theme"


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const styles = {
  global: (props) => ({
    "html": {
      bgGradient: `radial-gradient(#0049ff4d 1px, ${mode('#fdfdfd', 'gray.800')(props)} 2px)`,
      bgPosition: '0 0, 27px 27px',
      bgSize: '50px 50px',
      height: '100%',
      overflowY: 'hidden',
    },
    "body": {
      bg: 'transparent',
      overflowY: 'auto',
    },
    '#__next': {
      height: '100vh',
    },
    '.react_tinylink_card': {
      borderRadius: '10px',
      borderWidth: '0 !important',
    }
  })
}

const theme = {
  config: config,
  styles,
  components: {
    BaseHeader,
    BaseFooter,
    Progress
  }
}

export default extendTheme(theme);