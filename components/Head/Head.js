import { default as NextHead } from 'next/head';

const Head = ({ section }) => {
    return <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{section ? `WikiStorage - ${section}` : 'WikiStorage'}</title>
    </NextHead>
}

export default Head;
