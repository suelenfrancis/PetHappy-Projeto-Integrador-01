import Head from 'next/head';

import '../src/styles/reset.css';
import '../src/styles/global.css';
import PageHeader from '../src/components/PageHeader/PageHeader';
import PageFooter from '../src/components/PageFooter/PageFooter';


function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Pet Happy</title>
            </Head>
            <PageHeader />
            <Component { ...pageProps } />
            <PageFooter />
        </>
    );
}

export default App;