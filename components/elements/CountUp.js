import { useEffect, useRef, useState } from 'react'

/**
 * Counts up to `end` when the element first scrolls into view.
 *
 * The template's original version started its interval on mount and cleared it
 * as soon as the value reached `end` — which, for anything below the fold,
 * happened before the observer fired. The observer's callback then reset the
 * value to 0 with no interval left running, so every counter sat at 0 forever.
 * This version does not start until the element is actually visible.
 */
export default function CountUp({ end, duration = 1400 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const run = () => {
            if (started.current) return
            started.current = true
            const from = performance.now()
            const tick = (now) => {
                const p = Math.min((now - from) / duration, 1)
                // ease-out so it settles rather than stopping dead
                setCount(Math.round(end * (1 - Math.pow(1 - p, 3))))
                if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
        }

        // No IntersectionObserver (or reduced motion): just show the number.
        if (typeof IntersectionObserver === 'undefined') {
            setCount(end)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    run()
                    observer.disconnect()
                }
            },
            { threshold: 0.25 }
        )
        observer.observe(node)
        return () => observer.disconnect()
    }, [end, duration])

    return <span ref={ref} className="count odometer">{count}</span>
}
