import { IconButton, useColorMode } from "@chakra-ui/react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const icon = <FontAwesomeIcon icon={colorMode === "light" ? faMoon : faSun} />

  return (
    <IconButton variant="ghost" onClick={toggleColorMode} icon={icon} p={1.5} />
  )
}

export default ThemeSwitch
