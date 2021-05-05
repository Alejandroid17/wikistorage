import { Box, Heading, HStack, useBreakpointValue } from "@chakra-ui/react"
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { GlobalContext } from "../../../contexts/GlobalContext"

const TitleHeader = () => {
  const [, dispatch] = useContext(GlobalContext)
  const showTitle = useBreakpointValue({ sm: false, md: false, lg: true })

  return (
    <HStack
      onClick={() => dispatch({ type: "TOGGLE_DRAWER" })}
      cursor={"pointer"}
    >
      <Box w="40px">
        <FontAwesomeIcon icon={faBoxOpen} />
      </Box>
      {showTitle && (
        <Box>
          <Heading as="h1" size="lg">
            WikiStorage
          </Heading>
        </Box>
      )}
    </HStack>
  )
}

export default TitleHeader
