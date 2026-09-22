import { trustPoints } from "@/data/site"

export default function Features1() {
    return (
        <>
            <section className="features-area pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        {trustPoints.map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={item.title}>
                                <div className="features-item wow fadeInUp" data-wow-delay={`${(i + 1) * 0.2}s`}>
                                    <div className="features-item-inner">
                                        <div className="features-content">
                                            <h4 className="title">{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                        <div className="features-icon">
                                            <img src={item.icon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
