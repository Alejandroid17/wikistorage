import { faThList, faTh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const CompactSwitch = ({ className, size }) => {

    const [state, dispatch] = useContext(GlobalContext);

    return (
        <a onClick={() => dispatch({ type: 'TOGGLE_COMPACT' })} className={className}>
            {state.compact ? <FontAwesomeIcon icon={faTh} size={size} /> : <FontAwesomeIcon icon={faThList} size={size} />}
        </a>
    )
}

export default CompactSwitch;