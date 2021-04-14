import { Box } from "@chakra-ui/react"

const BaseMain = ({ children }) => {
  return (
    <Box as="main" pt={"5rem"} pb={"3rem"} px={"1.5rem"} minH={"94vh"}>
      {children}
    </Box>
  )
}

export default BaseMain
