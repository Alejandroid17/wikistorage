import dynamic from "next/dynamic"
import { useEffect } from "react"

// const Progress = dynamic(import("../Progress/Progress"))
const Wiki = dynamic(() => import("../Wiki/Wiki"), { ssr: false })

// const messages = [
//   "Please, wait",
//   "Heroku app is sleeping",
//   "We are starting the application",
//   "We are getting the data",
// ].map((message, index) => (
//   <div key={index} size="md">
//     {message}
//   </div>
// ))

const WikiLibrary = ({ wikiList, isLoading }) => {
  useEffect(() => {}, [])

  return isLoading ? (
    <div className="flex">
      {/* <Progress items={messages} time={3000} /> */}
    </div>
  ) : wikiList.length > 0 ? (
    <div className="grid gap-5 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4">
      {wikiList.map((wiki, index) => (
        <Wiki key={index} id={wiki.id} url={wiki.url[0]} />
      ))}
    </div>
  ) : (
    <div className="flex justify-center">
      <span className="">Empty</span>
    </div>
  )
}

export default WikiLibrary
