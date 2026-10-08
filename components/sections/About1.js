import Link from "next/link"
import { site } from "@/data/site"
import Icon from "../elements/Icon"

export default function About1() {
    return (
        <>
            <section className="about-area pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                            <div className="about-img-wrap">
                                <img src="/assets/img/images/about_img01.jpg" alt="" className="wow fadeInRight" data-wow-delay=".4s" />
                                <img src="/assets/img/images/about_img02.jpg" alt="" className="wow fadeInRight" data-wow-delay=".2s" />
                                <div className="about-experiences-wrap">
                                    <div className="experiences-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/counter_icon01.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">{site.yearsInBusiness} years roofing in south-central PA</h6>
                                        </div>
                                    </div>
                                    <div className="experiences-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/about_icon02.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Certified Conklin roof systems</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">About True Bilt</span>
                                    <h2 className="title tg-element-title">We Would Rather Do It Once, Properly</h2>
                                </div>
                                <p>
                                    True Bilt is a {site.state} roofing company. For {site.yearsInBusiness} years we have worked on homes, manufacturing plants, food facilities and hotels across Lancaster, York and Delaware counties — and the approach has not changed: look at the roof honestly, explain what it actually needs, and install a system that holds.
                                </p>
                                <div className="about-list">
                                    <ul className="list-wrap">
                                        <li><Icon name="check" />{site.licenceLine}</li>
                                        <li><Icon name="check" />Residential and commercial work</li>
                                        <li><Icon name="check" />Free inspections before any quote</li>
                                    </ul>
                                </div>
                                <Link href="/about" className="btn">More about us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
