import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" id="#top">
            <Head>
                <link rel="icon" href="/assets/img/logo/truebilt-mark-192.png" type="image/png" />
                <link rel="apple-touch-icon" href="/assets/img/logo/truebilt-mark-512.png" />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link rel="preconnect" href="https://fonts.bunny.net" crossOrigin="anonymous" />
                <link rel="preload" as="image" href="/assets/img/tb/spray.jpg" fetchPriority="high" />
                {/* Was 6 DM Sans weights and 18 Poppins weights, most of them unused.
                    Trimmed to the five the site actually renders, and display=swap
                    so text paints in a fallback instead of staying invisible. */}
                <link
                    href="https://fonts.bunny.net/css?family=dm-sans:400,500,700|poppins:600,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
