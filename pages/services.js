import Link from "next/link"
import Layout from "@/components/layout/Layout"
import CtaBand from "@/components/sections/CtaBand"
import { services, site } from "@/data/site"

export default function Services() {
    return (
        <>
            <Layout
                headerTop={true}
                breadcrumbTitle="Our Services"
                headTitle="Roofing Services"
                description={`Roof replacement, repair, coatings, storm damage restoration, metal, shingle and flat commercial roofing across ${site.serviceArea}.`}
            >
                <section className="tb-servicelist pt-120 pb-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">Residential &amp; Commercial</span>
                                    <h2 className="title tg-element-title">Seven Things We Do, and How We Do Them</h2>
                                    <p className="tb-lede">
                                        Every job starts the same way — a free inspection, then a straight answer about what the roof needs. Nothing gets sold that the roof does not need.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {services.map((s, i) => (
                            <div className={`tb-service-row ${i % 2 === 1 ? "tb-service-row--flip" : ""}`} key={s.slug} id={s.slug}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tb-service-row__img wow fadeInUp" data-wow-delay=".2s">
                                            <img src={s.image} alt={s.title} />
                                            <span className="tb-service-row__num">{s.number}</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tb-service-row__body wow fadeInUp" data-wow-delay=".3s">
                                            <div className="tb-service-row__icon">
                                                <img src={s.icon} alt="" />
                                            </div>
                                            <h3 className="tb-service-row__title">{s.title}</h3>
                                            <p className="tb-service-row__short">{s.short}</p>
                                            <p>{s.text}</p>
                                            {s.slug === "roof-coatings" ? (
                                                <Link href="/roof-coatings" className="link-btn">
                                                    <i className="fas fa-arrow-right" /> How coating systems work
                                                </Link>
                                            ) : (
                                                <Link href="/contact" className="link-btn">
                                                    <i className="fas fa-arrow-right" /> Book a free inspection
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <CtaBand />
            </Layout>
        </>
    )
}
