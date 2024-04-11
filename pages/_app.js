import Head from 'next/head';
import styles from '../src/styles/styles.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Pet Happy</title>
            </Head>
            <Component { ...pageProps } />
        </>
    )
}

export default MyApp;