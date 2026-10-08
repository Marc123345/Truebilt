import Link from "next/link"
import { services } from "@/data/site"
import Icon from "../elements/Icon"

export default function Services1({ limit }) {
    const list = limit ? services.slice(0, limit) : services
    const href = (s) => (s.slug === "roof-coatings" ? "/roof-coatings" : "/services")

    return (
        <>
            <section className="services-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">What We Do</span>
                                <h2 className="title tg-element-title">Every Service, Listed Separately</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {list.map((s, i) => (
                            <div className="col-lg-4 col-md-6 col-sm-10" key={s.slug}>
                                {/* Every card shows its summary and link at all times. The
                                    template hid them until hover, which left an empty middle
                                    on desktop and no description at all on touch screens. */}
                                <div
                                    className="services-item tb-service-card wow fadeInUp"
                                    data-wow-delay={`${((i % 3) + 1) * 0.2}s`}
                                    style={{ "--tb-card-img": `url(${s.image})` }}
                                >
                                    <div className="services-icon">
                                        <img src={s.icon} alt="" />
                                    </div>
                                    <div className="services-content">
                                        <span className="number" aria-hidden="true">{s.number}</span>
                                        <h3 className="title">
                                            <Link href={href(s)}>{s.title}</Link>
                                        </h3>
                                        <p className="tb-service-card__text">{s.short}</p>
                                        <Link href={href(s)} className="read-more">
                                            Read more<span className="sr-only"> about {s.title}</span> <Icon name="arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
