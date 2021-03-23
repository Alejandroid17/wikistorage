import { mode } from "@chakra-ui/theme-tools"

const BaseHeader = {
    baseStyle: (props) => ({
        pos: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: 'full',
        shadow: mode('md', '0 4px 6px -1px rgb(66 153 225 / 28%), 0 2px 4px -1px rgba(0, 0, 0, 0.06)')(props),
        zIndex: 999,
        height: '3.5rem',
        bg: mode('white', 'gray.800')(props)
    })
}

export default BaseHeader;