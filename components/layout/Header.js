import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from 'react'
import Sidebar from "./Sidebar"
import { site, nav } from "@/data/site"
import Icon from "../elements/Icon"

export default function Header({ headerCls, headerTop }) {
    const [scroll, setScroll] = useState(0)

    const router = useRouter()
    const [isToggled, setToggled] = useState(false)

    // The template only toggled the menu from the hamburger and the X. The
    // header stays mounted across page changes, so picking a page left the
    // menu open over the new one. It now closes on navigation, on a tap on
    // the backdrop, and on Escape.
    const setMenu = useCallback((open) => {
        setToggled(open)
        document.body.classList.toggle("mobile-menu-visible", open)
    }, [])
    const handleToggled = () => setMenu(!isToggled)
    const closeMenu = useCallback(() => setMenu(false), [setMenu])

    useEffect(() => {
        router.events.on("routeChangeStart", closeMenu)
        const onKey = (e) => { if (e.key === "Escape") closeMenu() }
        document.addEventListener("keydown", onKey)
        return () => {
            router.events.off("routeChangeStart", closeMenu)
            document.removeEventListener("keydown", onKey)
            document.body.classList.remove("mobile-menu-visible")
        }
    }, [router.events, closeMenu])

    // One listener, removed on unmount (the template added a new one on
    // every render and never removed any).
    useEffect(() => {
        const onScroll = () => setScroll(window.scrollY > 100)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return (
        <>

            {headerTop &&
                <div className="header-top-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-9">
                                <div className="header-top-left">
                                    <ul className="list-wrap">
                                        <li>{site.licenceLine} &mdash; {site.serviceArea}</li>
                                        <li><Icon name="phone-alt" /><Link href={site.phoneHref}>{site.phone}</Link></li>
                                        <li><Icon name="envelope" /><Link href={`mailto:${site.email}`}>{site.email}</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3">
                                <div className="header-top-right">
                                    <div className="tb-top-cta">
                                        <Icon name="clipboard-check" /> Free inspections
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <header>
                <div id="sticky-header" className={`menu-area  ${scroll ? "sticky-menu" : ""} ${headerCls ? headerCls : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <button type="button" className="mobile-nav-toggler" onClick={handleToggled} aria-label="Open menu" aria-expanded={isToggled} aria-controls="tb-mobile-menu"><Icon name="bars" /></button>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo different-logo">
                                            <Link href="/" className="tb-logo"><img src="/assets/img/logo/truebilt-logo.png" alt="True Bilt LLC" width="640" height="325" /></Link>
                                        </div>
                                        <div className="logo d-none">
                                            <Link href="/" className="tb-logo"><img src="/assets/img/logo/truebilt-logo.png" alt="True Bilt LLC" width="640" height="325" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                {nav.map((item) => (
                                                    <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul className="list-wrap">
                                                <li className="header-btn">
                                                    <Link href={site.phoneHref} className="btn">
                                                        <Icon name="phone-alt" /> {site.phone}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu" id="tb-mobile-menu">
                                    <nav className="menu-box" aria-label="Mobile">
                                        <button type="button" className="close-btn" onClick={closeMenu} aria-label="Close menu"><Icon name="times" /></button>
                                        <div className="nav-logo">
                                            <Link href="/" className="tb-logo tb-logo--light" onClick={closeMenu}><img src="/assets/img/logo/truebilt-logo-light.png" alt="True Bilt LLC" width="640" height="325" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <Sidebar onNavigate={closeMenu} />
                                        </div>
                                        <div className="tb-mobile-contact">
                                            <Link href={site.phoneHref} onClick={closeMenu}><Icon name="phone-alt" /> {site.phone}</Link>
                                            <Link href={`mailto:${site.email}`} onClick={closeMenu}><Icon name="envelope" /> Email us</Link>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" onClick={closeMenu} aria-hidden="true" />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
