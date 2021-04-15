import { Box, Heading, HStack, useBreakpointValue } from "@chakra-ui/react"
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TitleHeader = () => {
  const showTitle = useBreakpointValue({ sm: false, md: false, lg: true })

  return (
    <a href="/">
      <HStack>
        <Box>
          <FontAwesomeIcon icon={faBoxOpen} size="2x" />
        </Box>
        {showTitle && (
          <Box>
            <Heading as="h1" size="lg">
              WikiStorage
            </Heading>
          </Box>
        )}
      </HStack>
    </a>
  )
}

export default TitleHeader
