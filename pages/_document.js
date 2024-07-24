import { Html, Head, Main, NextScript } from 'next/document'
 
function Document() {
    return (
        <Html lang='pt-br'>
            <Head>
                <title>Pet Happy</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
  )
}

export default Document;