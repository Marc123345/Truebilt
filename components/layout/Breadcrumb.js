import Link from "next/link"
import { heroImage } from "@/data/site"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg" data-background={heroImage}>
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content">
                                <h2 className="title">{breadcrumbTitle}</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{breadcrumbTitle}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
