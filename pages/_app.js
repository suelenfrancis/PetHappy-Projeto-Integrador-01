import Head from 'next/head';

import '../src/styles/reset.css';
import '../src/styles/global.css';

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Pet Happy</title>
            </Head>
            <Component { ...pageProps } />
        </>
    );
}

export default App;