import { Flex, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import BaseFooter from "../BaseFooter/BaseFooter"

const GitHubLink = dynamic(import("../../Link/GitHubLink"))

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
