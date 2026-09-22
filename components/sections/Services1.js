import Link from "next/link"
import { useState } from 'react'
import { services } from "@/data/site"

export default function Services1({ limit }) {
    const [isActive, setIsActive] = useState({ status: false, key: "" })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false })
        } else {
            setIsActive({ status: true, key })
        }
    }

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
                                <h2 className="title tg-element-title">Every Roofing Service, Listed Separately</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {list.map((s, i) => (
                            <div className="col-lg-4 col-md-6 col-sm-10" key={s.slug}>
                                <div
                                    className="services-item wow fadeInUp"
                                    data-wow-delay={`${((i % 3) + 1) * 0.2}s`}
                                    data-background={s.image}
                                    onMouseEnter={() => handleToggle(s.slug)}
                                    onMouseLeave={() => handleToggle(s.slug)}
                                >
                                    <div className="services-icon" style={{ display: `${isActive.key == s.slug ? "none" : "flex"}` }}>
                                        <img src={s.icon} alt="" />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title" style={{ display: `${isActive.key == s.slug ? "none" : "block"}` }}>
                                            <Link href={href(s)}>{s.title}</Link>
                                        </h2>
                                        <h2 className="number">{s.number}</h2>
                                    </div>
                                    <div className="services-overlay-content" style={{ display: `${isActive.key == s.slug ? "block" : "none"}` }}>
                                        <h2 className="title"><Link href={href(s)}>{s.title}</Link></h2>
                                        <p>{s.short}</p>
                                        <Link href={href(s)} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
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
