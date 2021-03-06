import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
                   
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/favicon.svg" />
                    <meta name="theme-color" content="#f0f1f5" />
                </Head>
                
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}