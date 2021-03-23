import { chakra, useStyleConfig } from '@chakra-ui/react';

const BaseHeader = ({ children }) => {

    const styles = useStyleConfig("BaseHeader")

    return <chakra.header sx={styles}>
        {children}
    </chakra.header>
}

export default BaseHeader;