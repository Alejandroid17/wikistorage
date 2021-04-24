import { Flex, SimpleGrid, Heading } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import Progress from "../Progress/Progress"

const Wiki = dynamic(() => import("../Wiki/Wiki"), { ssr: false })

const messages = [
  "Please, wait",
  "Heroku app is sleeping",
  "We are starting the application",
  "We are getting the data",
].map((message, index) => (
  <Heading key={index} size="md">
    {message}
  </Heading>
))

const WikiLibrary = ({ wikiList, isLoading }) => {
  return isLoading ? (
    <Flex w="100%" align="center" justify="center" mt={"5rem"}>
      <Progress items={messages} time={3000} />
    </Flex>
  ) : (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      justifyItems={"center"}
    >
      {wikiList.length > 0 ? (
        wikiList.map((item, index) => {
          return <Wiki key={index} url={item.url[0]} />
        })
      ) : (
        <div>Empty</div>
      )}
    </SimpleGrid>
  )
}

export default WikiLibrary
