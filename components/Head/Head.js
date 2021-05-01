import NextHead from "next/head"

const Head = ({ section }) => {
  return (
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Simple list of resources that could be useful."
      />
      <meta name="keywords" content="resources, utilities, projects" />
      <meta name="author" content="Alejandroid17" />
      <meta name="robots" content="index" />
      <title>{section ? `WikiStorage - ${section}` : "WikiStorage"}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
