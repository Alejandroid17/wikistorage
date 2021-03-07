import { IconButton } from '@chakra-ui/react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const ThemeSwitch = ({ className, size }) => {

    const [state, dispatch] = useContext(GlobalContext);

    const icon = (state.theme === 'light')
        ? <FontAwesomeIcon icon={faMoon} size={size} />
        : <FontAwesomeIcon icon={faSun} size={size} />

    return <IconButton
        variant="ghost"
        ml={{ base: "0", md: "3" }}
        onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
        icon={icon}
    />
}

export default ThemeSwitch;