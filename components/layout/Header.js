import Link from "next/link"
import { useEffect, useState } from 'react'
import Sidebar from "./Sidebar"
import { site, nav } from "@/data/site"

export default function Header({ headerCls, headerTop }) {
    const [scroll, setScroll] = useState(0)

    const [isToggled, setToggled] = useState(false)
    const handleToggled = () => {
        setToggled(!isToggled)
        !isToggled ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
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
                                        <li><i className="fas fa-phone-alt" /><Link href={site.phoneHref}>{site.phone}</Link></li>
                                        <li><i className="fas fa-envelope" /><Link href={`mailto:${site.email}`}>{site.email}</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3">
                                <div className="header-top-right">
                                    <div className="tb-top-cta">
                                        <i className="fas fa-clipboard-check" /> Free inspections
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
                                <div className="mobile-nav-toggler" onClick={handleToggled}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo different-logo">
                                            <Link href="/" className="tb-logo">True <span>Bilt</span></Link>
                                        </div>
                                        <div className="logo d-none">
                                            <Link href="/" className="tb-logo">True <span>Bilt</span></Link>
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
                                                        <i className="fas fa-phone-alt" /> {site.phone}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleToggled}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/" className="tb-logo">True <span>Bilt</span></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <Sidebar />
                                        </div>
                                        <div className="tb-mobile-contact">
                                            <Link href={site.phoneHref}><i className="fas fa-phone-alt" /> {site.phone}</Link>
                                            <Link href={`mailto:${site.email}`}><i className="fas fa-envelope" /> Email us</Link>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
