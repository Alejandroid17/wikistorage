// import { useContext } from "react"
// import { GlobalContext } from "../../../contexts/GlobalContext"

const TitleHeader = () => {
  // const [, dispatch] = useContext(GlobalContext)

  return (
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mb-1 icon icon-tabler icon-tabler-book dark:text-slate-300"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
        <line x1="3" y1="6" x2="3" y2="19"></line>
        <line x1="12" y1="6" x2="12" y2="19"></line>
        <line x1="21" y1="6" x2="21" y2="19"></line>
      </svg>
      <div className="hidden text-xl sm:inline dark:text-slate-400">
        WikiStorage
      </div>
    </div>
  )
}

export default TitleHeader
