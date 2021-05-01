import { Flex, Heading, SimpleGrid } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import { useEffect } from "react"

const Progress = dynamic(import("../Progress/Progress"))
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
  useEffect(() => {}, [])

  return isLoading ? (
    <Flex w="100%" align="center" justify="center" mt={"5rem"}>
      <Progress items={messages} time={3000} />
    </Flex>
  ) : wikiList.length > 0 ? (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      justifyItems={"center"}
    >
      {wikiList.map((item, index) => {
        return <Wiki key={index} url={item.url[0]} />
      })}
    </SimpleGrid>
  ) : (
    <Heading size="md" align="center">
      Empty
    </Heading>
  )
}

export default WikiLibrary
