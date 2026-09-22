import { restorations } from "@/data/site"

export default function Restorations() {
    return (
        <>
            <section className="tb-restore">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Before &amp; After</span>
                                <h2 className="title tg-element-title">What Restoration Looks Like</h2>
                                <p className="tb-lede">
                                    Rusted, streaked, weathered metal and flat roofs &mdash; and the same roofs once a coating system went over them. Nothing was torn off in any of these.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tb-restore__grid">
                        {restorations.map((r, i) => (
                            <figure className="tb-restore__item wow fadeInUp" data-wow-delay={`${((i % 3) + 1) * 0.15}s`} key={r.file}>
                                <img src={r.src} alt={r.alt} loading="lazy" />
                            </figure>
                        ))}
                    </div>
                    <p className="tb-restore__note">
                        Reference photography of coating-system restorations.
                    </p>
                </div>
            </section>
        </>
    )
}
