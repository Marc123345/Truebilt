import Link from "next/link"
import { site, heroImage, heroSrcSet, heroSizes } from "@/data/site"
import Icon from "../elements/Icon"

export default function CtaBand() {
    return (
        <>
            <section className="tb-cta">
                <img className="tb-hero-img" src={heroImage} srcSet={heroSrcSet} sizes={heroSizes} alt="" decoding="async" loading="lazy" fetchPriority="low" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="tb-cta__content">
                                <h2 className="title">Find out what your roof actually needs.</h2>
                                <p>The inspection is free, and so is the honest answer about whether you need a new roof or a restored one.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="tb-cta__actions">
                                <Link href={site.phoneHref} className="btn">
                                    <Icon name="phone-alt" /> {site.phone}
                                </Link>
                                <Link href="/contact" className="tb-cta__alt">Or send us a message</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
