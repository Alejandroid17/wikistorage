import { Flex, Text } from "@chakra-ui/react"
import GitHubLink from "../../Link/GitHubLink"
import BaseFooter from "../BaseFooter/BaseFooter"

const MainFooter = () => {
  return (
    <BaseFooter>
      <Flex w="100%" h="100%" align="center" justify="center">
        <Text fontSize={"sm"} mr={1}>
          <strong>WikiStorage</strong> by{" "}
          <GitHubLink showIcon={false} linkText={"Alejandroid17"} />
        </Text>
      </Flex>
    </BaseFooter>
  )
}

export default MainFooter
