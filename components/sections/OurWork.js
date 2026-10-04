import { jobs, site } from "@/data/site"
import Icon from "../elements/Icon"

// David's own jobs — the only photos on the site captioned as True Bilt work.
export default function OurWork() {
    return (
        <section className="tb-work" id="our-work">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center tg-heading-subheading animation-style3">
                            <span className="sub-title tg-element-title">Our Work</span>
                            <h2 className="title tg-element-title">Recent True Bilt Jobs</h2>
                            <p className="tb-lede">
                                Metal restoration, TPO and metal roofing &mdash; photographed on our own job sites.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="tb-work__grid">
                    {jobs.map((j, i) => (
                        <figure className="tb-work__item wow fadeInUp" data-wow-delay={`${((i % 4) + 1) * 0.1}s`} key={j.title}>
                            <div className="tb-work__img">
                                <img
                                    src={j.src}
                                    srcSet={j.srcSet}
                                    sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 25vw"
                                    alt={j.alt}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <figcaption className="tb-work__body">
                                <span className="tb-work__tag">{j.tag}</span>
                                <h3 className="tb-work__title">{j.title}</h3>
                                <p>{j.text}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                {site.facebook && (
                    <p className="tb-work__more">
                        <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                            <Icon name="facebook" /> See more of our work on Facebook
                        </a>
                    </p>
                )}
            </div>
        </section>
    )
}
