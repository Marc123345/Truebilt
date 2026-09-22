import Link from "next/link"
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import { site, services } from "@/data/site"

export default function Contact() {
    // No backend is wired up yet — see the TODO below.
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
    }

    return (
        <>
            <Layout
                headerTop={true}
                breadcrumbTitle="Contact Us"
                headTitle="Contact"
                description={`Call ${site.name} on ${site.phone} or send a message. Free roof inspections across ${site.serviceArea}.`}
            >
                <section className="tb-contact pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="tb-contact__aside">
                                    <span className="sub-title">Get In Touch</span>
                                    <h2 className="tb-contact__title">Book a free inspection</h2>
                                    <p>
                                        Call, text or send the form. Tell us roughly what is going on with the roof and we will arrange a time to come and look at it — no charge, and no obligation to book the work.
                                    </p>

                                    <ul className="list-wrap tb-contact__list">
                                        <li>
                                            <div className="icon"><i className="fas fa-phone-alt" /></div>
                                            <div className="content">
                                                <h6>Call or text</h6>
                                                <Link href={site.phoneHref}>{site.phone}</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="fas fa-envelope" /></div>
                                            <div className="content">
                                                <h6>Email</h6>
                                                <Link href={`mailto:${site.email}`}>{site.email}</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                                            <div className="content">
                                                <h6>Service area</h6>
                                                <p>{site.serviceArea}</p>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="tb-contact__note">
                                        <i className="fas fa-bolt" />
                                        <p><strong>Got a leak?</strong> Say so in the message and we will move it up the list — repairs get fast turnaround.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="tb-contact__formwrap">
                                    {sent ? (
                                        <div className="tb-contact__sent">
                                            <i className="fas fa-check-circle" />
                                            <h3>Thanks — that has not gone anywhere yet.</h3>
                                            <p>
                                                This form is not connected to an inbox at the moment. Until it is, please call or text{" "}
                                                <Link href={site.phoneHref}>{site.phone}</Link> or email{" "}
                                                <Link href={`mailto:${site.email}`}>{site.email}</Link>.
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="tb-form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor="tb-name">Your name</label>
                                                    <input id="tb-name" name="name" type="text" required placeholder="Jane Smith" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="tb-phone">Phone</label>
                                                    <input id="tb-phone" name="phone" type="tel" required placeholder="(717) 000-0000" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="tb-email">Email</label>
                                                    <input id="tb-email" name="email" type="email" placeholder="you@example.com" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="tb-county">County</label>
                                                    <select id="tb-county" name="county" defaultValue="">
                                                        <option value="" disabled>Choose one</option>
                                                        {site.counties.map((c) => (
                                                            <option key={c} value={c}>{c}, PA</option>
                                                        ))}
                                                        <option value="other">Somewhere else</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12">
                                                    <label htmlFor="tb-service">What do you need?</label>
                                                    <select id="tb-service" name="service" defaultValue="">
                                                        <option value="" disabled>Choose one</option>
                                                        {services.map((s) => (
                                                            <option key={s.slug} value={s.slug}>{s.title}</option>
                                                        ))}
                                                        <option value="not-sure">Not sure yet</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12">
                                                    <label htmlFor="tb-message">Tell us about the roof</label>
                                                    <textarea id="tb-message" name="message" rows={5} placeholder="Age of the roof, what you are seeing, whether it is leaking..." />
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn">Request my free inspection</button>
                                                    <p className="tb-form__alt">
                                                        Prefer to talk? Call or text <Link href={site.phoneHref}>{site.phone}</Link>.
                                                    </p>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

/*
 * ⚠ TODO — the form does not submit anywhere.
 *
 * It validates and shows a confirmation that tells the visitor to call
 * instead, so no lead is silently lost. Before launch, point it at whatever
 * Marc is using for the other sites (Jotform, or a POST handler that emails
 * dave.truebilt@gmail.com). David listed phone, contact form and text as his
 * three preferred contact methods, so this one matters.
 */
