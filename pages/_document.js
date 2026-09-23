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
                {/* Jotform AI agent chat widget. Deliberately a plain script
                    in the document rather than next/script: it then ships in
                    the HTML and does not wait on React hydration. `defer`
                    keeps it from blocking the page. */}
                <script
                    src="https://cdn.jotfor.ms/agent/embedjs/01a0cd36ece07000820699ee4c55f53e9633/embed.js"
                    defer
                />
            </body>
        </Html>
    )
}
