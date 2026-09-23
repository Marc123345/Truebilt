import DataBg from '../elements/DataBg'
import Reveal from '../elements/Reveal'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Header from './Header'
import PageHead from './PageHead'

export default function Layout({ headerCls, headerTop, headTitle, breadcrumbTitle, children }) {
    return (
        <>
            <PageHead headTitle={headTitle} />
            <DataBg />
            <Reveal />

            <a className="tb-skip" href="#main">Skip to main content</a>
            <Header headerCls={headerCls} headerTop={headerTop} />
            <main id="main">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {children}
            </main>
            < Footer />
        </>
    )
}
