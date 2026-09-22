import { videos } from "@/data/site"

function Clip({ clip, autoLoop }) {
    return (
        <div className="tb-clip">
            <video
                className="tb-clip__video"
                src={clip.src}
                poster={clip.poster}
                controls
                playsInline
                preload="none"
                muted={autoLoop}
                autoPlay={autoLoop}
                loop={autoLoop}
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
                            <Clip clip={videos.application} autoLoop />
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
