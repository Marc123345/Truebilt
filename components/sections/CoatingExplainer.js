import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { coatingFacts } from "@/data/site"
import Icon from "../elements/Icon"

/**
 * The four Conklin points, as a slider.
 *
 * Built on CSS scroll-snap rather than a carousel library: the slides are real
 * scrollable content, so they work with no JavaScript at all, they are
 * keyboard and screen-reader navigable for free, and there is no extra bundle.
 * The arrows and dots are progressive enhancement on top.
 */
export default function CoatingExplainer({ showCta = true }) {
    const track = useRef(null)
    const [active, setActive] = useState(0)
    const [atStart, setAtStart] = useState(true)
    const [atEnd, setAtEnd] = useState(false)

    const sync = useCallback(() => {
        const el = track.current
        if (!el) return
        const slide = el.firstElementChild
        if (!slide) return
        const step = slide.getBoundingClientRect().width + 26
        setActive(Math.round(el.scrollLeft / step))
        setAtStart(el.scrollLeft <= 4)
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
    }, [])

    useEffect(() => {
        const el = track.current
        if (!el) return
        sync()
        el.addEventListener("scroll", sync, { passive: true })
        window.addEventListener("resize", sync)
        return () => {
            el.removeEventListener("scroll", sync)
            window.removeEventListener("resize", sync)
        }
    }, [sync])

    const go = (dir) => {
        const el = track.current
        if (!el) return
        const slide = el.firstElementChild
        if (!slide) return
        el.scrollBy({ left: dir * (slide.getBoundingClientRect().width + 26), behavior: "smooth" })
    }

    const toSlide = (i) => {
        const el = track.current
        if (!el) return
        const slide = el.children[i]
        if (slide) el.scrollTo({ left: slide.offsetLeft - el.offsetLeft, behavior: "smooth" })
    }

    return (
        <>
            <section className="tb-coating-area" aria-labelledby="tb-coating-title">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Conklin Roof Systems</span>
                                <h2 className="title tg-element-title" id="tb-coating-title">We Are Not Painting Your Roof</h2>
                                <p className="tb-lede">
                                    This is the part worth understanding before you compare quotes, because it is the difference between a finish and a roof.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="tb-slider">
                        <button
                            type="button"
                            className="tb-slider__arrow tb-slider__arrow--prev"
                            onClick={() => go(-1)}
                            disabled={atStart}
                            aria-label="Previous point"
                        >
                            <Icon name="arrow-left" />
                        </button>

                        <ul
                            className="tb-slider__track"
                            ref={track}
                            tabIndex={0}
                            role="group"
                            aria-label="Four things to know about roof coating systems. Scrollable."
                        >
                            {coatingFacts.map((f, i) => (
                                <li className="tb-slider__slide" key={f.title}>
                                    <article className="tb-fact">
                                        <span className="tb-fact__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                                        <h3 className="tb-fact__title">{f.title}</h3>
                                        <p>{f.text}</p>
                                    </article>
                                </li>
                            ))}
                        </ul>

                        <button
                            type="button"
                            className="tb-slider__arrow tb-slider__arrow--next"
                            onClick={() => go(1)}
                            disabled={atEnd}
                            aria-label="Next point"
                        >
                            <Icon name="arrow-right" />
                        </button>
                    </div>

                    <div className="tb-slider__dots">
                        {coatingFacts.map((f, i) => (
                            <button
                                type="button"
                                key={f.title}
                                className={`tb-slider__dot ${i === active ? "is-active" : ""}`}
                                onClick={() => toSlide(i)}
                                aria-label={`Go to point ${i + 1}: ${f.title}`}
                                aria-current={i === active ? "true" : undefined}
                            />
                        ))}
                    </div>

                    {showCta && (
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <Link href="/roof-coatings" className="btn mt-30">How roof coatings work</Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
