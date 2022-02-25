import { GlobalContext } from "../../contexts/GlobalContext"
import { useContext } from "react"

const WikiImage = ({ url, title }) => {
  const [contextState] = useContext(GlobalContext)

  return contextState.compact ? (
    <div className={`block h-auto relative overflow-hidden flex-[0_0_125px]`}>
      <img
        src={url}
        className="object-cover h-full"
        alt={`${title} image`}
        loading="lazy"
        onError={(event) => {
          event.target.onerror = null
          event.target.src = "/images/no-data.svg"
        }}
      />
    </div>
  ) : (
    <img
      src={url}
      className="mx-auto"
      alt={`${title} image`}
      loading="lazy"
      onError={(event) => {
        event.target.onerror = null
        event.target.src = "/images/no-data.svg"
      }}
    />
  )
}

export default WikiImage
