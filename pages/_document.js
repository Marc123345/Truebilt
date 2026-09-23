import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" id="#top">
            <Head>
                <link rel="icon" href="/assets/img/logo/favicon.svg" type="image/svg+xml" />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=dm-sans:400,400i,500,500i,700,700i|poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
