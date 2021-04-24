import { useContext } from "react"
import { ReactTinyLink } from "react-tiny-link"
import { CorsAnywhereConfig } from "../../clients/cors_anywhere"
import { GlobalContext } from "../../contexts/GlobalContext"

const Wiki = ({ url }) => {
  const [contextState] = useContext(GlobalContext)

  return (
    <ReactTinyLink
      cardSize={contextState.compact ? "small" : "large"}
      showGraphic={true}
      maxLine={contextState.compact ? 2 : 3}
      minLine={1}
      url={url}
      proxyUrl={CorsAnywhereConfig.url}
    />
  )
}

export default Wiki
