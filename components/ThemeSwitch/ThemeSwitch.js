import { IconButton, useColorMode } from '@chakra-ui/react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ThemeSwitch = ({ size }) => {

    const { colorMode, toggleColorMode } = useColorMode()

    const icon = (colorMode === 'light')
        ? <FontAwesomeIcon icon={faMoon} size={size} />
        : <FontAwesomeIcon icon={faSun} size={size} />

    return <IconButton
        variant="ghost"
        ml={{ base: "0", md: "3" }}
        onClick={toggleColorMode}
        icon={icon}
    />
}

export default ThemeSwitch;