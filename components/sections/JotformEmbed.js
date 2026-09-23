import { useEffect, useState } from "react"

const HANDLER_SRC = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"

/**
 * Jotform embed.
 *
 * Jotform's own jsform/<id> script uses document.write, which the browser
 * ignores once the page has loaded, so the iframe is built by hand. Jotform
 * only starts posting its `setHeight` messages once its embed handler is
 * attached, so that script is loaded too — without it the iframe stays at
 * whatever height it was given and the bottom of the form is cut off.
 */
export default function JotformEmbed({ formId, title }) {
    // Tall enough to show the whole form if the resize script never runs,
    // and the iframe scrolls as a last resort rather than clipping the submit
    // button out of reach.
    const [height, setHeight] = useState(1500)

    useEffect(() => {
        const selector = `iframe[id='JotFormIFrame-${formId}']`

        const attach = () => {
            if (typeof window.jotformEmbedHandler === "function") {
                window.jotformEmbedHandler(selector, "https://form.jotform.com/")
            }
        }

        let script = document.querySelector(`script[src="${HANDLER_SRC}"]`)
        if (script) {
            attach()
        } else {
            script = document.createElement("script")
            script.src = HANDLER_SRC
            script.async = true
            script.onload = attach
            document.body.appendChild(script)
        }

        // Belt and braces: resize from the raw message too, in case the
        // handler script is blocked.
        const onMessage = (e) => {
            if (typeof e.data !== "string" || e.origin.indexOf("jotform") === -1) return
            const parts = e.data.split(":")
            if (parts[0] !== "setHeight") return
            if (parts[2] && parts[2] !== formId) return
            const h = parseInt(parts[1], 10)
            // Jotform reports ~0 while it is still laying out on small screens.
            if (h > 300) setHeight(h)
        }
        window.addEventListener("message", onMessage)
        return () => window.removeEventListener("message", onMessage)
    }, [formId])

    return (
        <div className="tb-jotform">
            <iframe
                id={`JotFormIFrame-${formId}`}
                title={title}
                src={`https://form.jotform.com/${formId}`}
                allow="geolocation; microphone; camera; fullscreen"
                style={{ width: "100%", height: `${height}px`, border: 0, display: "block" }}
                scrolling="auto"
            />
        </div>
    )
}
