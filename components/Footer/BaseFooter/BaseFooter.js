import { Box } from "@chakra-ui/react";


const BaseFooter = ({ children }) => {

    const footerProps = {
        bg: 'white',
        borderTop: '1px solid',
        borderTopColor: 'gray.100',
        bottom: 0,
        height: '3.3rem',
        position: 'relative',
        width: 'full',
        zIndex: 999,
    }

    return <Box as='footer' {...footerProps}>
        {children}
    </Box>
}

export default BaseFooter;