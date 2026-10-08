import Head from 'next/head'
import { site } from "@/data/site"

const PageHead = ({ headTitle, description }) => {
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
            </Head>
        </>
    )
}

export default PageHead
