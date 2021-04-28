import dynamic from "next/dynamic"

import { Flex, HStack } from "@chakra-ui/react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBoxOpen, faSearch } from "@fortawesome/free-solid-svg-icons"

const CompactSwitch = dynamic(import("../../CompactSwitch/CompactSwitch"))
const GitHubLink = dynamic(import("../../Link/GitHubLink"))
const SearchInput = dynamic(import("../../SearchInput"))
const ThemeSwitch = dynamic(import("../../ThemeSwitch/ThemeSwitch"))
const BaseHeader = dynamic(import("../BaseHeader/BaseHeader"))
const TitleHeader = dynamic(import("../TitleHeader/TitleHeader"))

library.add(faBoxOpen, faSearch, faGithub)

const MainHeader = ({ onSearch }) => {
  return (
    <BaseHeader>
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
        <Flex width="25%" justify="flex-start">
          <TitleHeader />
        </Flex>
        <Flex width="50%" justify="center">
          <SearchInput onChange={onSearch} />
          <HStack spacing={1} px={2} display={{ base: "none", md: "flex" }}>
            <CompactSwitch size={"lg"} />
            <ThemeSwitch size={"lg"} />
          </HStack>
        </Flex>
        <Flex width="25%" justify="flex-end">
          <GitHubLink />
        </Flex>
      </Flex>
    </BaseHeader>
  )
}

export default MainHeader
