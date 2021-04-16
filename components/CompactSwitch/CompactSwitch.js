import { IconButton } from "@chakra-ui/react"
import { faTh, faThList } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

const CompactSwitch = ({ size }) => {
  const [state, dispatch] = useContext(GlobalContext)

  const icon = (
    <FontAwesomeIcon icon={state.compact ? faTh : faThList} size={size} />
  )

  return (
    <IconButton
      w="100%"
      variant="ghost"
      onClick={() => dispatch({ type: "TOGGLE_COMPACT" })}
      icon={icon}
    />
  )
}

export default CompactSwitch
