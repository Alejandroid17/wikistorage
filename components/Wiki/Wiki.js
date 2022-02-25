import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import useScraper from "use-scraper"
import useScraperConfig from "../../clients/use-scraper-config"
import WikiTitle from "./WikiTitle"
import WikiDescription from "./WikiDescription"
import WikiHostName from "./WikiHostName"
import WikiHashtags from "./WikiHashtags"
import WikiImage from "./WikiImage"

const Wiki = ({ id, url, hashtags }) => {
  const [contextState] = useContext(GlobalContext)

  const { data } = useScraper({
    url,
    ...useScraperConfig,
  })

  const getImage = () => {
    const image = data["og:image"] || data["twitter:image"]
    if (image) {
      try {
        return new URL(image)
      } catch (error) {
        return error instanceof TypeError ? new URL(url).origin + image : null
      }
    }

    return "/images/no-data.svg"
  }

  const image = getImage()
  const description = data.description
  const title = data.title || data["twitter:title"] || data["og:title"]

  return contextState.compact ? (
    <a
      data-id={id}
      href={url}
      className="relative flex flex-row overflow-hidden max-w-[640px] h-[127px] rounded shadow-lg border dark:border-slate-800 dark:bg-slate-800"
    >
      <WikiImage url={image} title={title} />
      <div className="flex flex-col justify-around min-w-0 px-3 py-2">
        <WikiTitle title={title} />
        <WikiDescription description={description} />
        <WikiHostName url={url} />
      </div>
    </a>
  ) : (
    <a
      data-id={id}
      href={url}
      className="max-w-sm overflow-hidden rounded shadow-lg dark:bg-slate-800"
      title={description}
    >
      <WikiImage url={image} title={title} />
      <div className="px-6 py-4">
        <WikiTitle title={title} className="mb-2 text-xl font-bold" />
        <WikiDescription description={description} />
        <WikiHostName url={url} className="pt-2 text-sm" />
      </div>
      <div className="px-6 pt-1 pb-2">
        <WikiHashtags hashtags={hashtags} />
      </div>
    </a>
  )
}

export default Wiki
