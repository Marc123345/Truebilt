import { useEffect } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/animate.min.css"
import "../public/assets/css/magnific-popup.css"
import "../public/assets/css/fontawesome-all.min.css"
import "../public/assets/css/odometer.css"
import "../public/assets/css/tg-cursor.css"
import "../public/assets/css/default.css"
import "../public/assets/css/jarallax.css"
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

    return <Component {...pageProps} />
}

export default MyApp
