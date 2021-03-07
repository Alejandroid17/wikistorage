import { IconButton } from '@chakra-ui/react';
import { faTh, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const CompactSwitch = ({ className, size }) => {

    const [state, dispatch] = useContext(GlobalContext);

    const icon = state.compact
        ? <FontAwesomeIcon icon={faTh} size={size} />
        : <FontAwesomeIcon icon={faThList} size={size} />

    return (
        <IconButton
            variant="ghost"
            ml={{ base: "0", md: "3" }}
            onClick={() => dispatch({ type: 'TOGGLE_COMPACT' })}
            icon={icon}
        />
    )
}

export default CompactSwitch;