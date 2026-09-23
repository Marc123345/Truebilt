import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Counter1 from "@/components/sections/Counter1"
import CtaBand from "@/components/sections/CtaBand"
import { site, trustPoints } from "@/data/site"
import Icon from "@/components/elements/Icon"

export default function About() {
    return (
        <>
            <Layout
                headerTop={true}
                breadcrumbTitle="About Us"
                headTitle="About True Bilt"
                description={`True Bilt LLC is a ${site.state} roofing company run by ${site.owner}, working across ${site.serviceArea} for ${site.yearsInBusiness} years.`}
            >
                <section className="about-area pt-120 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                                <div className="about-img-wrap">
                                    <img src="/assets/img/images/about_img01.jpg" alt="" className="wow fadeInRight" data-wow-delay=".4s" />
                                    <img src="/assets/img/images/about_img02.jpg" alt="" className="wow fadeInRight" data-wow-delay=".2s" />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="about-content">
                                    <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                        <span className="sub-title tg-element-title">Who We Are</span>
                                        <h2 className="title tg-element-title">{site.yearsInBusiness} Years of Roofs That Hold</h2>
                                    </div>
                                    <p>
                                        True Bilt LLC is run by {site.owner}. For {site.yearsInBusiness} years we have been roofing homes and commercial buildings across Lancaster, York and Delaware counties — manufacturing plants, food facilities, hotels and houses.
                                    </p>
                                    <p>
                                        We are a Conklin contractor. Those systems cost more than most of what you will be quoted, and we would rather explain why than quietly install something thinner. The free inspection is where that conversation starts.
                                    </p>
                                    <div className="about-list">
                                        <ul className="list-wrap">
                                            <li><Icon name="check" />{site.licenceLine}</li>
                                            <li><Icon name="check" />Residential and commercial</li>
                                            <li><Icon name="check" />Warranties up to 25 years</li>
                                        </ul>
                                    </div>
                                    <Link href="/contact" className="btn">Talk to {site.owner.split(" ")[1] ? "David" : site.owner}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tb-values pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">How We Work</span>
                                    <h2 className="title tg-element-title">The Part That Does Not Change</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            {trustPoints.map((t, i) => (
                                <div className="col-lg-4 col-md-6" key={t.title}>
                                    <div className="tb-value wow fadeInUp" data-wow-delay={`${(i + 1) * 0.2}s`}>
                                        <div className="tb-value__icon"><img src={t.icon} alt="" /></div>
                                        <h4 className="tb-value__title">{t.title}</h4>
                                        <p>{t.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Counter1 />

                <section className="tb-areas pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <span className="sub-title">Where We Work</span>
                                <h2 className="tb-intro__title">{site.serviceArea}</h2>
                                <p className="tb-lede">
                                    We cover three counties properly rather than half a state badly. If you are inside them, we can be on your roof.
                                </p>
                                <div className="tb-area-chips">
                                    {site.counties.map((c) => (
                                        <span className="tb-chip" key={c}>{c}, PA</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CtaBand />
            </Layout>
        </>
    )
}
