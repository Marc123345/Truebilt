import { videos } from "@/data/site"

function Clip({ clip }) {
    return (
        <div className="tb-clip">
            {/* The application clip used to autoplay on loop. Between the two
                files that is nearly 3MB pulled on every visit, most of it on
                phones that never scrolled this far. Both are now poster image
                plus a play control, and nothing downloads until asked. */}
            <video
                className="tb-clip__video"
                src={clip.src}
                poster={clip.poster}
                controls
                playsInline
                preload="none"
                aria-label={clip.title}
            />
            <div className="tb-clip__body">
                <h4 className="tb-clip__title">{clip.title}</h4>
                <p>{clip.text}</p>
            </div>
        </div>
    )
}

export default function VideoBlocks() {
    return (
        <>
            <section className="tb-clips">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">On The Roof</span>
                                <h2 className="title tg-element-title">See It Being Done</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Clip clip={videos.application} />
                        </div>
                        <div className="col-lg-6">
                            <Clip clip={videos.inspection} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
