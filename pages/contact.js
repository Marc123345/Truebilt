import Link from "next/link"
import Layout from "@/components/layout/Layout"
import JotformEmbed from "@/components/sections/JotformEmbed"
import { site, privacyNotice } from "@/data/site"
import Icon from "@/components/elements/Icon"

export default function Contact() {
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
                                            <div className="icon"><Icon name="phone-alt" /></div>
                                            <div className="content">
                                                <h6>Call or text</h6>
                                                <Link href={site.phoneHref}>{site.phone}</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><Icon name="envelope" /></div>
                                            <div className="content">
                                                <h6>Email</h6>
                                                <Link href={`mailto:${site.email}`}>{site.email}</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon"><Icon name="map-marker-alt" /></div>
                                            <div className="content">
                                                <h6>Service area</h6>
                                                <p>{site.serviceArea}</p>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="tb-contact__note">
                                        <Icon name="bolt" />
                                        <p><strong>Got a leak?</strong> Say so in the message and we will move it up the list — repairs get fast turnaround.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="tb-contact__formwrap">
                                    <JotformEmbed
                                        formId={site.jotformId}
                                        title="True Bilt free roof inspection request"
                                    />
                                    <p className="tb-privacy">{privacyNotice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
