import { useEffect } from "react"
import ChatAgent from "@/components/elements/ChatAgent"

// Stylesheets the template shipped that nothing on this site uses any more
// were removed here: slick (no carousels — the slider is CSS scroll-snap),
// magnific-popup (no lightbox), odometer (the counter is plain text),
// tg-cursor (no custom cursor) and jarallax (no parallax). Font Awesome went
// too — its thirteen glyphs are inline SVG now (components/elements/Icon.js),
// which drops 57KB of CSS and a 76KB webfont from every page load.
import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/animate-subset.css"
import "../public/assets/css/default.css"
import "../public/assets/css/style.css"
import "../public/assets/css/responsive.css"
import "../public/assets/css/tb.css"
import "../public/assets/css/shot.css"

function MyApp({ Component, pageProps }) {
    // The template gated the whole site behind a one-second JS preloader, so
    // any delay or failure in hydration left visitors on a blank white page.
    // The page is server-rendered; it is shown straight away instead.
    useEffect(() => {
        // ?shot=1 reveals scroll animations immediately, for screenshots.
        if (new URLSearchParams(window.location.search).has('shot')) {
            document.documentElement.classList.add('shot')
        }
    }, [])

    return (
        <>
            <Component {...pageProps} />
            <ChatAgent />
        </>
    )
}

export default MyApp
