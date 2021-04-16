import { IconButton, useColorMode } from "@chakra-ui/react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ThemeSwitch = ({ size }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const icon = (
    <FontAwesomeIcon
      icon={colorMode === "light" ? faMoon : faSun}
      size={size}
    />
  )

  return (
    <IconButton
      w="100%"
      variant="ghost"
      onClick={toggleColorMode}
      icon={icon}
    />
  )
}

export default ThemeSwitch
