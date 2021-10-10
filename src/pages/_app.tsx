import Head from 'next/head';
import '../styles/main.scss';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>dev.finance</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}
