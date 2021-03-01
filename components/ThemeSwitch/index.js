import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ThemeSwitch = ({ className, size }) => {

    const [state, dispatch] = useContext(GlobalContext);

    return (
        <a onClick={() => dispatch({ type: 'TOGGLE_THEME' })} className={className}>
            {state.theme === 'light' ? <FontAwesomeIcon icon={faMoon} size={size} /> : <FontAwesomeIcon icon={faSun} size={size} />}
        </a>
    )
}

export default ThemeSwitch;