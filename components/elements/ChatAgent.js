import { useEffect } from "react"

/**
 * Jotform AI agent ("Bob").
 *
 * Jotform's own embed.js hardcodes a chat background of #F28C28 with white
 * text. That is 2.45:1 and fails WCAG AA — the same pairing that had to be
 * fixed on the site's buttons. Those colours live in the agent's saved
 * settings, so they cannot be overridden from the page once their embed has
 * initialised; the SDK is therefore initialised here with accessible ones:
 * white on the brand navy is 16.3:1, and the launcher bubble becomes brand
 * orange with a navy icon (6.6:1).
 *
 * The SDK URL is pinned, so if Jotform ever rotates it this falls back to
 * their canonical embed.js. The widget is then un-styled but never missing.
 *
 * The durable fix is to change the chat background in the Jotform agent
 * builder, after which this override can be deleted.
 */
const AGENT_ID = "01a0cd36ece07000820699ee4c55f53e9633"
const CONTEXT_ID = "01a0cd4ada707000931cd2fa79bb6e919830"
const SDK = "https://www.jotform.com/s/umd/16919ffa103/for-embedded-agent.js"
const FALLBACK = `https://cdn.jotfor.ms/agent/embedjs/${AGENT_ID}/embed.js`

export default function ChatAgent() {
    useEffect(() => {
        if (document.getElementById("tb-chat-agent")) return

        const loadFallback = () => {
            if (document.getElementById("tb-chat-agent-fallback")) return
            const s = document.createElement("script")
            s.id = "tb-chat-agent-fallback"
            s.src = FALLBACK
            s.async = true
            document.body.appendChild(s)
        }

        const script = document.createElement("script")
        script.id = "tb-chat-agent"
        script.src = SDK
        script.async = true

        script.onload = () => {
            if (typeof window.AgentInitializer?.init !== "function") {
                loadFallback()
                return
            }
            try {
                window.AgentInitializer.init({
                    agentRenderURL: `https://www.jotform.com/agent/${AGENT_ID}`,
                    rootId: `JotformAgent-${AGENT_ID}`,
                    formID: AGENT_ID,
                    contextID: CONTEXT_ID,
                    initialContext: "",
                    queryParams: ["skipWelcome=1", "maximizable=1"],
                    domain: "https://www.jotform.com",
                    isDraggable: false,
                    // Matches the home hero: deep navy into logo navy.
                    background: "linear-gradient(180deg, #0B2238 0%, #034984 100%)",
                    // Deep navy from the logo palette; white text on it is 15:1.
                    chatBackgroundColor: "#0B2238",
                    // Gold launcher with a navy icon, like the hero's primary
                    // button (7.2:1).
                    buttonBackgroundColor: "#C9A961",
                    buttonIconColor: "#0B2238",
                    inputTextColor: "#ffffff",
                    variant: false,
                    customizations: {
                        // The greeting bubble opened over the bottom-right of every page.
                        greeting: "No",
                        greetingMessage: "Need a roof looked at? Ask me anything.",
                        openByDefault: "No",
                        pulse: "Yes",
                        position: "right",
                        autoOpenChatIn: "0",
                        layout: "extended",
                        size: "md",
                        placeholder: "Ask about your roof",
                        chatbotLayoutControls: "No",
                        chatbotLayoutType: "overlay",
                        selectedPosition: "right-bottom",
                    },
                    isVoice: false,
                    isVoiceWebCallEnabled: true,
                })
            } catch (e) {
                loadFallback()
            }
        }
        script.onerror = loadFallback
        document.body.appendChild(script)
    }, [])

    return null
}
