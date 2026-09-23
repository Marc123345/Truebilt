import Link from "next/link"
import { site, heroImage } from "@/data/site"

export default function Banner1() {
    return (
        <>
            <section className="banner-area">
                <div className="banner-shape" />
                <div className="banner-bg" data-background={heroImage}>
                    <div className="container">
                        <div className="banner-content">
                        <span className="tb-eyebrow wow fadeInDown" data-wow-delay=".1s">{site.serviceArea}</span>
                        <h2 className="title wow fadeInDown" data-wow-delay=".2s">Roofs Built to Outlast the Weather</h2>
                        <p className="wow fadeInUp" data-wow-delay=".2s">
                            Replacement, repair and Conklin restoration systems for homes, plants and commercial buildings across Lancaster, York and Delaware counties. Free inspections, and warranties up to 25 years.
                        </p>
                        <div className="tb-banner-actions wow fadeInUp" data-wow-delay=".4s">
                            <Link href="/contact" className="btn">Get a free inspection</Link>
                            <Link href={site.phoneHref} className="tb-call-link">
                                <i className="fas fa-phone-alt" /> {site.phone}
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
