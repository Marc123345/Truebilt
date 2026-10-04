import { useEffect } from "react"

/**
 * Scroll-reveal for the template's `.wow` elements.
 *
 * Replaces wow.js, which had two problems: it is another dependency, and it
 * works by setting `visibility: hidden` inline the moment it initialises. If
 * its scroll handler then failed to fire — which happened repeatedly here —
 * the content stayed invisible for good. Cards on the home page were simply
 * missing.
 *
 * This inverts that. Nothing is hidden until this effect runs, and only
 * elements below the fold are ever hidden, so:
 *   - with no JavaScript, everything is visible;
 *   - if this never runs, everything is visible;
 *   - anything already on screen is never hidden, so there is no flash.
 */
export default function Reveal() {
    useEffect(() => {
        const nodes = [...document.querySelectorAll(".wow")]
        if (!nodes.length) return

        // Honour the OS setting: no motion, no hiding.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

        const below = nodes.filter((n) => n.getBoundingClientRect().top > window.innerHeight * 0.9)
        below.forEach((n) => n.classList.add("tb-pre"))

        if (typeof IntersectionObserver === "undefined") {
            below.forEach((n) => n.classList.remove("tb-pre"))
            return
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (!e.isIntersecting) return
                    e.target.classList.add("tb-in")
                    io.unobserve(e.target)
                })
            },
            // Fire a quarter-screen *before* the element arrives, so scrolling at a
            // normal speed never shows an empty, not-yet-revealed section.
            { rootMargin: "0px 0px 25% 0px", threshold: 0 }
        )
        below.forEach((n) => io.observe(n))

        // Failsafe: whatever happens, nothing stays hidden.
        const failsafe = setTimeout(() => below.forEach((n) => n.classList.add("tb-in")), 2500)

        return () => {
            io.disconnect()
            clearTimeout(failsafe)
        }
    }, [])

    return null
}
