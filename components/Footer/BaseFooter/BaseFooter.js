import { Box, useStyleConfig } from "@chakra-ui/react";


const BaseFooter = ({ children }) => {

    const styles = useStyleConfig("BaseFooter")

    return <Box as='footer' sx={styles}>
        {children}
    </Box>
}

export default BaseFooter;