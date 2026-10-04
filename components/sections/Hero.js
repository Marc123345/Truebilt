import Link from "next/link"
import { site, heroImage, heroSrcSet, jobs } from "@/data/site"
import Icon from "../elements/Icon"

/**
 * Home hero.
 *
 * Replaces the template banner (a full-bleed photo under a grey gradient).
 * Visual interest comes from contrast and layering rather than more copy:
 *   - deep-navy field with a faint roofline pattern, gold used as the accent;
 *   - a split layout — message left, framed photo right — so the eye has a
 *     clear path: headline → buttons → proof;
 *   - two floating cards over the photo: the Conklin credential, and one of
 *     David's own jobs, which links down to the gallery;
 *   - a chevron edge at the bottom that echoes the roofline in the logo.
 */
export default function Hero() {
    const job = jobs[0]
    const proof = [
        { value: `${site.yearsInBusiness} yrs`, label: "Roofing in south-central PA" },
        { value: "25-yr", label: "Warranties available" },
        { value: "$0", label: "Roof inspections" },
    ]

    return (
        <section className="tb-hero" aria-labelledby="tb-hero-title">
            <div className="tb-hero__pattern" aria-hidden="true" />
            <div className="container">
                <div className="tb-hero__grid">
                    <div className="tb-hero__copy">
                        <span className="tb-hero__eyebrow">
                            <span className="tb-hero__dot" aria-hidden="true" />
                            {site.serviceArea}
                        </span>
                        <h1 className="tb-hero__title" id="tb-hero-title">
                            Roofs Built to <span className="tb-hero__accent">Outlast</span> the Weather
                        </h1>
                        <p className="tb-hero__lede">
                            Replacement, repair and Conklin restoration systems for homes, plants and
                            commercial buildings across Lancaster, York and Delaware counties.
                        </p>
                        <div className="tb-hero__actions">
                            <Link href="/contact" className="btn tb-hero__cta">Get a free inspection</Link>
                            <Link href={site.phoneHref} className="tb-hero__call">
                                <span className="tb-hero__call-icon"><Icon name="phone-alt" /></span>
                                <span>
                                    <small>Call or text David</small>
                                    {site.phone}
                                </span>
                            </Link>
                        </div>
                        <ul className="tb-hero__proof">
                            {proof.map((p) => (
                                <li key={p.label}>
                                    <strong>{p.value}</strong>
                                    <span>{p.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="tb-hero__visual">
                        <div className="tb-hero__frame">
                            <img
                                src={heroImage}
                                srcSet={heroSrcSet}
                                sizes="(max-width: 991px) 100vw, 46vw"
                                alt="A roofer spray-applying a white coating system across a flat roof"
                                fetchPriority="high"
                                decoding="async"
                            />
                        </div>

                        <div className="tb-hero__badge">
                            <span className="tb-hero__badge-icon"><Icon name="check-circle" /></span>
                            <span>
                                <strong>Conklin</strong>
                                <small>Certified roof systems</small>
                            </span>
                        </div>

                        <Link href="/#our-work" className="tb-hero__job">
                            <img src={job.src.replace("-1200", "-640")} alt="" loading="lazy" />
                            <span>
                                <small>Recent True Bilt job</small>
                                <strong>{job.title}</strong>
                                <em>See our work <Icon name="arrow-right" /></em>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <svg className="tb-hero__edge" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 80 L720 18 L1440 80 Z" fill="#fff" />
                <path d="M0 62 L720 0 L1440 62" fill="none" stroke="var(--tb-gold)" strokeWidth="3" />
            </svg>
        </section>
    )
}
