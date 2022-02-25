const useScraperConfig = {
  proxyURL: "https://nextjs-proxy-cors.vercel.app/api?url=",
  config: {
    selectors: {
      title: { query: "title", attr: "content" },
      description: { query: "meta[name='description']" },
      icon: { query: "link[rel='icon']", attr: "href" },
      "og:url": { query: "meta[property='og:url']" },
      "og:image": { query: "meta[property='og:image']" },
      "og:title": { query: "meta[property='og:title']" },
      "twitter:image": { query: "meta[name='twitter:image']" },
      "twitter:title": { query: "meta[name='twitter:title']" },
    },
  },
}

export default useScraperConfig
