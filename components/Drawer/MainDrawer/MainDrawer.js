import { Box, HStack } from "@chakra-ui/react"
import { useContext } from "react"
import { GlobalContext } from "../../../contexts/GlobalContext"
import CompactSwitch from "../../CompactSwitch/CompactSwitch"
import ThemeSwitch from "../../ThemeSwitch/ThemeSwitch"
import BaseDrawer from "../BaseDrawer/BaseDrawer"

const MainDrawer = () => {
  const [state, dispatch] = useContext(GlobalContext)
  return (
    <BaseDrawer
      isOpen={state.drawer.isOpen}
      onClose={() => dispatch({ type: "TOGGLE_DRAWER" })}
      header={"WikiStorage"}
    >
      <HStack spacing={4} justify={"center"}>
        <Box w="40px" h="40px">
          <CompactSwitch />
        </Box>
        <Box w="40px" h="40px">
          <ThemeSwitch />
        </Box>
      </HStack>
    </BaseDrawer>
  )
}

export default MainDrawer
