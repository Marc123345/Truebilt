import Link from "next/link"
import Layout from "@/components/layout/Layout"
import CoatingExplainer from "@/components/sections/CoatingExplainer"
import Faq1 from "@/components/sections/Faq1"
import CtaBand from "@/components/sections/CtaBand"
import Restorations from "@/components/sections/Restorations"
import VideoBlocks from "@/components/sections/VideoBlocks"
import { site, coatingImages } from "@/data/site"

const steps = [
    { n: "01", title: "Free inspection", text: "We get on the roof and find out whether the deck and structure underneath are sound. This is the question that decides everything else." },
    { n: "02", title: "Clean and prepare", text: "The surface is cleaned and prepared, rusted fasteners and failed flashing are dealt with, and any ponding areas get addressed." },
    { n: "03", title: "Base coat and fabric", text: "A base coat goes down, and seams, penetrations and detail work get fabric reinforcement embedded into it. This is where a coating system earns its money." },
    { n: "04", title: "Top coats", text: "Reflective top coats are applied to build the membrane to the specified thickness — the thickness is what the warranty is written against." },
    { n: "05", title: "Warranty", text: "You get a system warranty of up to 25 years, and at the end of the term the roof can be recoated rather than torn off." },
]

export default function RoofCoatings() {
    return (
        <>
            <Layout
                headerTop={true}
                breadcrumbTitle="Roof Coatings"
                headTitle="Conklin Roof Coatings & Restoration"
                description={`Conklin roof coating systems in ${site.serviceArea} — an industrial-grade, fabric-reinforced membrane that restores a sound roof instead of replacing it. Warranties up to 25 years.`}
            >
                <section className="tb-intro pt-120 pb-60">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9 text-center">
                                <span className="sub-title">The Short Version</span>
                                <h2 className="tb-intro__title">
                                    If the structure underneath is sound, you probably do not need to tear the roof off.
                                </h2>
                                <p className="tb-lede">
                                    A Conklin coating system restores the roof you already have. It costs less than a replacement, it goes on while your building keeps running, and it renews at the end of its term instead of going in a skip.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="tb-hero-shot wow fadeInUp" data-wow-delay=".3s">
                            <img src={coatingImages.spray} alt="A roofer spray-applying a white coating system across a commercial roof" />
                        </div>
                    </div>
                </section>

                <CoatingExplainer showCta={false} />

                <Restorations />

                <VideoBlocks />

                <section className="tb-steps pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">The Process</span>
                                    <h2 className="title tg-element-title">What Actually Happens on the Roof</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {steps.map((s, i) => (
                                <div className="col-lg-4 col-md-6" key={s.n}>
                                    <div className="tb-step wow fadeInUp" data-wow-delay={`${((i % 3) + 1) * 0.2}s`}>
                                        <span className="tb-step__n">{s.n}</span>
                                        <h4 className="tb-step__title">{s.title}</h4>
                                        <p>{s.text}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="col-lg-4 col-md-6">
                                <div className="tb-step tb-step--cta wow fadeInUp" data-wow-delay=".8s">
                                    <h4 className="tb-step__title">Not sure which one you need?</h4>
                                    <p>That is what the free inspection answers. If a coating is not right for your roof, we will tell you.</p>
                                    <Link href="/contact" className="btn">Book an inspection</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tb-white-roof">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="tb-white-roof__img">
                                    <img src={coatingImages.acrylic} alt="A crew rolling a reflective white acrylic coating across a large flat roof" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tb-white-roof__body">
                                    <span className="sub-title">White vs. Black</span>
                                    <h2 className="title">A dark roof absorbs the sun. A white one sends it back.</h2>
                                    <p>
                                        Every roof takes the same sun. A black roof soaks that heat up and passes it down into the building underneath. A bright, reflective white coating turns most of it away again.
                                    </p>
                                    <p>
                                        Across a large flat roof over a plant, a warehouse or a hotel, that is not a detail — it is a difference you can feel on the floor below.
                                    </p>
                                    <Link href="/contact" className="btn">See what your roof would take</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Faq1 title="Coatings, Answered" subtitle="Before You Compare Quotes" />
                <CtaBand />
            </Layout>
        </>
    )
}
