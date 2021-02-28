import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSwitch = ({className, size}) => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <a onClick={toggleTheme} className={className}>
            {theme === 'light' ? <FontAwesomeIcon icon={faMoon} size={size}/> : <FontAwesomeIcon icon={faSun} size={size}/>}
        </a>
    )
}

export default ThemeSwitch;