import Head from 'next/head'
import { site } from "@/data/site"

const PageHead = ({ headTitle, description }) => {
    const title = headTitle
        ? `${headTitle} | ${site.shortName} Roofing`
        : `Roofing Contractor in Lancaster, York & Delaware Counties PA | ${site.name}`
    const desc = description
        ? description
        : `${site.name} — roof replacement, repair, metal, shingle, flat commercial roofing and Conklin roof coating systems across Lancaster, York and Delaware counties, PA. Free inspections and warranties up to 25 years.`
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
