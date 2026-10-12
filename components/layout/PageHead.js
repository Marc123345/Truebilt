import Head from 'next/head'
import { useRouter } from 'next/router'
import { site } from "@/data/site"

const PageHead = ({ headTitle, description }) => {
    // Canonical on the live domain, so the truebilt-roofing.vercel.app copy never competes.
    const { asPath } = useRouter()
    const path = asPath.split(/[?#]/)[0] || '/'
    const url = `${site.url}${path}`
    const title = headTitle
        ? `${headTitle} | ${site.shortName} Roofing`
        : `Roofing Contractor in Lancaster, York & Delaware Counties PA | ${site.name}`
    const desc = description
        ? description
        : `${site.name} — GAF shingle roofing, roof replacement, repair, metal, flat commercial roofing, Conklin roof coating systems and painting across Lancaster, York and Delaware counties, PA. Free inspections and warranties up to 40 years.`
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <link rel="canonical" href={url} />
            </Head>
        </>
    )
}

export default PageHead
