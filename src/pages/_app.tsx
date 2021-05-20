import Head from 'next/head';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>dev.finance</title>
                <link rel="shortcut icon" href="/icons/favicon.svg" type="image/x-icon" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
