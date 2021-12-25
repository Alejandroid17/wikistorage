import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

const CompactSwitch = ({ iconClassName }) => {
  const [state, dispatch] = useContext(GlobalContext)

  return (
    <button onClick={() => dispatch({ type: "TOGGLE_COMPACT" })}>
      {state.compact ? (
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`icon icon-tabler icon-tabler-layout-grid ${iconClassName}`}
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
            <rect x="4" y="4" width="6" height="6" rx="1"></rect>
            <rect x="14" y="4" width="6" height="6" rx="1"></rect>
            <rect x="4" y="14" width="6" height="6" rx="1"></rect>
            <rect x="14" y="14" width="6" height="6" rx="1"></rect>
          </svg>
          <span>Layout grid</span>
        </div>
      ) : (
        <div className="flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`icon icon-tabler icon-tabler-layout-list ${iconClassName}`}
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
            <rect x="4" y="4" width="16" height="6" rx="2"></rect>
            <rect x="4" y="14" width="16" height="6" rx="2"></rect>
          </svg>
          <span> Layout list</span>
        </div>
      )}
    </button>
  )
}

export default CompactSwitch
