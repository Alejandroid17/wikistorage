// import { useContext } from "react"
// import { GlobalContext } from "../../contexts/GlobalContext"

const SearchInput = ({ onChange }) => {
  // const [state] = useContext(GlobalContext)

  return (
    <div className="w-full">
      <span className="absolute z-10 flex items-center justify-center h-full ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-400 dark:text-slate-300 icon icon-tabler icon-tabler-search"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="10" cy="10" r="7"></circle>
          <line x1="21" y1="21" x2="15" y2="15"></line>
        </svg>
      </span>
      <input
        type="text"
        placeholder={`Search`}
        className="relative w-full py-2 text-sm bg-white border rounded outline-none dark:bg-slate-500 dark:border-slate-600 placeholder:text-gray-400 dark:placeholder:text-slate-300 pl-9"
        onChange={onChange}
      />
    </div>
  )
}

export default SearchInput
