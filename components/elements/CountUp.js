/**
 * Renders a counter value.
 *
 * This was an animated count-up and it was broken twice over. The template's
 * original started its interval on mount and cleared it as soon as the value
 * reached the target — for anything below the fold that happened before it was
 * ever scrolled to, and the observer callback then reset it to 0 with no
 * interval left, so every counter sat at 0 permanently. Driving it from an
 * IntersectionObserver instead did not hold either, because these counters sit
 * inside `.wow` elements that WOW.js keeps at `visibility: hidden` until it
 * reveals them.
 *
 * The values are 5, 25, 7 and 3. An animation was never worth a number that
 * can silently render as zero, so it just renders the number — which also
 * means it is correct with JavaScript disabled.
 */
export default function CountUp({ end }) {
    return <span className="count">{end}</span>
}
