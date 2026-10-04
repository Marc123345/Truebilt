/**
 * Inline icons.
 *
 * The template pulled in Font Awesome for thirteen glyphs: 57KB of CSS plus a
 * 76KB webfont, all of it blocking on every page load. These are the same
 * thirteen shapes drawn as a 24px stroke set — about 2KB inline, no extra
 * request, and a consistent weight across the site.
 *
 * Icons here are decorative: they sit next to text that already says the same
 * thing, so they carry aria-hidden. Pass a `title` only when an icon is the
 * sole content of a control.
 */
const P = {
    "phone-alt": <path d="M6.6 3h3l1.5 3.8-2 1.4a12 12 0 0 0 5.2 5.2l1.4-2 3.8 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z" />,
    envelope: <><rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
    "map-marker-alt": <><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></>,
    check: <path d="m4.5 12.5 5 5 10-11" />,
    "check-circle": <><circle cx="12" cy="12" r="9" /><path d="m7.8 12.4 2.9 2.9 5.5-6.1" /></>,
    "arrow-right": <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
    "arrow-left": <><path d="M20 12H5" /><path d="m11 6-6 6 6 6" /></>,
    bars: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    times: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    bolt: <path d="M13.5 2.5 5 13.5h6l-.5 8 8.5-11h-6l.5-8Z" />,
    "clipboard-check": <><rect x="5" y="4.5" width="14" height="16" rx="2" /><path d="M9 4.5V3.4A1.4 1.4 0 0 1 10.4 2h3.2A1.4 1.4 0 0 1 15 3.4v1.1" /><path d="m9 13 2.2 2.2L15.5 11" /></>,
    play: <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    minus: <path d="M5 12h14" />,
    "level-up-alt": <><path d="M12 20V6" /><path d="m6 11 6-6 6 6" /></>,
    facebook: <path d="M14 8.5V6.8c0-.8.4-1.3 1.4-1.3H17V2.6c-.4 0-1.4-.1-2.5-.1-2.5 0-4 1.5-4 4.1v1.9H8v3.2h2.5V21.5H14V11.7h2.6l.4-3.2H14Z" />,
}

export default function Icon({ name, className = "", title }) {
    const shape = P[name]
    if (!shape) return null
    const solid = name === "bolt" || name === "play"
    return (
        <svg
            className={`tb-icon ${className}`}
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill={solid ? "currentColor" : "none"}
            stroke={solid ? "none" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden={title ? undefined : "true"}
            role={title ? "img" : undefined}
            focusable="false"
        >
            {title ? <title>{title}</title> : null}
            {shape}
        </svg>
    )
}
