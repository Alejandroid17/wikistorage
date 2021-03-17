import { chakra } from '@chakra-ui/react';

const BaseHeader = ({ children }) => {

    const headerProps = {
        pos: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: 'full',
        height: '3.5rem',
        shadow: 'md',
        bg: 'white',
        zIndex: 999
    }

    return <chakra.header {...headerProps}>
        {children}
    </chakra.header>
}

export default BaseHeader;