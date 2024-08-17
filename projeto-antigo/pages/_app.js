import { PrimeReactProvider } from 'primereact/api';

import '../src/styles/reset.css';
import '../src/styles/global.css';
import PageHeader from '../src/components/PageHeader/PageHeader';
import PageFooter from '../src/components/PageFooter/PageFooter';
import Head from 'next/head';



function App({ Component, pageProps }) {
    return (
        <PrimeReactProvider>
            <Head>
                <title>Pet Happy</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </Head>
            <PageHeader />
                <Component { ...pageProps } />
            <PageFooter />
        </PrimeReactProvider>
    );
}

export default App;