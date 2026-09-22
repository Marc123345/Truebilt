import Link from "next/link"
import { site, nav, services } from "@/data/site"

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-area footer-bg" data-background="/assets/img/bg/footer_bg.jpg">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="footer-widget">
                                        <div className="fw-logo mb-20">
                                            <Link href="/" className="tb-logo tb-logo--light"><img src="/assets/img/logo/truebilt-mark-light.svg" alt="" width="44" height="44" /><span className="tb-logo__word">True <b>Bilt</b></span></Link>
                                        </div>
                                        <div className="footer-content">
                                            <p>Roof replacement, repair and Conklin coating systems for homes and commercial buildings across south-central Pennsylvania. {site.licenceLine}.</p>
                                            <ul className="list-wrap tb-footer-contact">
                                                <li><i className="fas fa-phone-alt" /><Link href={site.phoneHref}>{site.phone}</Link></li>
                                                <li><i className="fas fa-envelope" /><Link href={`mailto:${site.email}`}>{site.email}</Link></li>
                                                <li><i className="fas fa-map-marker-alt" />{site.serviceArea}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Services</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                {services.slice(0, 6).map((s) => (
                                                    <li key={s.slug}>
                                                        <Link href={s.slug === "roof-coatings" ? "/roof-coatings" : "/services"}>{s.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Company</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                {nav.map((item) => (
                                                    <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Areas We Cover</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                {site.counties.map((c) => (
                                                    <li key={c}><span className="tb-area">{c}, PA</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Link href="/contact" className="btn mt-20">Book a free inspection</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className="copyright-text text-center">
                                        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
