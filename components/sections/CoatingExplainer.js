import Link from "next/link"
import { coatingFacts } from "@/data/site"

export default function CoatingExplainer({ showCta = true }) {
    return (
        <>
            <section className="tb-coating-area pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Conklin Roof Systems</span>
                                <h2 className="title tg-element-title">We Are Not Painting Your Roof</h2>
                                <p className="tb-lede">
                                    This is the part worth understanding before you compare quotes, because it is the difference between a finish and a roof.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {coatingFacts.map((f, i) => (
                            <div className="col-lg-6" key={f.title}>
                                <div className="tb-fact wow fadeInUp" data-wow-delay={`${((i % 2) + 1) * 0.2}s`}>
                                    <span className="tb-fact__num">{String(i + 1).padStart(2, "0")}</span>
                                    <h4 className="tb-fact__title">{f.title}</h4>
                                    <p>{f.text}</p>
                                </div>
                            </div>
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
