import { useState } from "react"
import { faqs } from "@/data/site"

export default function Faq1({ title = "Questions We Get Asked", subtitle = "Straight Answers" }) {
    const [open, setOpen] = useState(0)

    return (
        <>
            <section className="faq-area pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">{subtitle}</span>
                                <h2 className="title tg-element-title">{title}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="accordion tb-accordion" id="tbFaq">
                                {faqs.map((f, i) => (
                                    <div className={`tb-accordion__item ${open === i ? "is-open" : ""}`} key={f.q}>
                                        <button
                                            type="button"
                                            className="tb-accordion__q"
                                            aria-expanded={open === i}
                                            onClick={() => setOpen(open === i ? -1 : i)}
                                        >
                                            <span>{f.q}</span>
                                            <i className={`fas ${open === i ? "fa-minus" : "fa-plus"}`} />
                                        </button>
                                        {open === i && (
                                            <div className="tb-accordion__a">
                                                <p>{f.a}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
