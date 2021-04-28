import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import CorsAnywhere from "../clients/cors_anywhere"
import FirebaseClient from "../clients/firebase"

const BaseMain = dynamic(import("../components/Main/BaseMain/BaseMain"))
const MainFooter = dynamic(import("../components/Footer/MainFooter/MainFooter"))
const Head = dynamic(import("../components/Head/Head"))
const MainDrawer = dynamic(import("../components/Drawer/MainDrawer/MainDrawer"))
const MainHeader = dynamic(import("../components/Header/MainHeader/MainHeader"))
const WikiLibrary = dynamic(import("../components/WikiLibrary/WikiLibrary"))

export default function Home() {
  let client = null
  const [wikiList, setWikiList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    if (isLoading) {
      client = new FirebaseClient("wiki")
      client.fetchWikis((wikiList) => {
        setWikiList(wikiList)
        CorsAnywhere.up(() => {
          setIsLoading(false)
        })
      })
    }
  }, [])

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
        <MainDrawer />
      </BaseMain>
      <MainFooter />
    </>
  )
}
