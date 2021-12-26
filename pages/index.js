import dynamic from "next/dynamic"
import { useContext, useEffect, useState } from "react"
import FirebaseClient from "../clients/firebase"
import { GlobalContext } from "../contexts/GlobalContext"
import { cacheable } from "../helpers/decorators/cache"

const BaseMain = dynamic(import("../components/Main/BaseMain/BaseMain"))
const MainFooter = dynamic(import("../components/Footer/MainFooter/MainFooter"))
const Head = dynamic(import("../components/Head/Head"))
const MainHeader = dynamic(import("../components/Header/MainHeader/MainHeader"))
const WikiLibrary = dynamic(import("../components/WikiLibrary/WikiLibrary"))

export async function getStaticProps() {
  const client = new FirebaseClient("wiki")
  const wikiList = await cacheable(() => client.fetchWikis(), {
    key: "wikilist",
    time: 60 * 60 * 10,
  })

  return {
    props: {
      wikiList,
    },
  }
}

export default function Home(props) {
  const [, dispatch] = useContext(GlobalContext)
  const [wikiList] = useState(props.wikiList)
  const [isLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    dispatch({ type: "SET_TOTAL_NUMBER_ELEMENTS", value: wikiList.length })
  }, [props.wikiList.length])

  const onSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const search = () => {
    return searchValue.length > 2
      ? wikiList.filter((item) =>
          item.hashtags.find((hashtag) => hashtag.includes(searchValue)),
        )
      : wikiList
  }

  const list = search()

  return (
    <>
      <Head />
      <MainHeader onSearch={onSearch} />
      <BaseMain>
        <WikiLibrary wikiList={list} isLoading={isLoading} />
      </BaseMain>
      <MainFooter />
    </>
  )
}
