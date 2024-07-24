import Head from 'next/head';
import { PrimeReactProvider } from 'primereact/api';

import '../src/styles/reset.css';
import '../src/styles/global.css';
import PageHeader from '../src/components/PageHeader/PageHeader';
import PageFooter from '../src/components/PageFooter/PageFooter';


function App({ Component, pageProps }) {
    return (
        <PrimeReactProvider>
            <Head>
                <title>Pet Happy</title>
            </Head>
            <PageHeader />
            <Component { ...pageProps } />
            <PageFooter />
        </PrimeReactProvider>
    );
}

export default App;