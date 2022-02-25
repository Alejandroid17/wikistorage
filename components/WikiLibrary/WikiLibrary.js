import dynamic from "next/dynamic"
import { useEffect, useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

const Wiki = dynamic(() => import("../Wiki/Wiki"), { ssr: false })

const WikiLibrary = ({ wikiList, isLoading }) => {
  useEffect(() => {}, [])
  const [contextState] = useContext(GlobalContext)

  return isLoading ? (
    <div className="flex">
      {/* <Progress items={messages} time={3000} /> */}
    </div>
  ) : wikiList.length > 0 ? (
    <div
      className={`${
        contextState.compact
          ? "grid gap-5 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4"
          : "grid gap-5 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      }`}
    >
      {wikiList.map((wiki, index) => (
        <Wiki
          key={index}
          id={wiki.id}
          url={wiki.url[0]}
          hashtags={wiki.hashtags}
        />
      ))}
    </div>
  ) : (
    <div className="flex justify-center">
      <span className="">Empty</span>
    </div>
  )
}

export default WikiLibrary
