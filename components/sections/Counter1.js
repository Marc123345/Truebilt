import CountUp from "../elements/CountUp"
import { counters } from "@/data/site"

export default function Counter1() {
    return (
        <>
            <section className="counter-area">
                <div className="container">
                    <div className="counter-inner-wrap">
                        <div className="row justify-content-center">
                            {counters.map((c, i) => (
                                <div className="col-lg-3 col-sm-6" key={c.label}>
                                    <div className="counter-item wow fadeInUp" data-wow-delay={`${(i + 1) * 0.2}s`}>
                                        <div className="icon">
                                            <img src={c.icon} alt="" />
                                        </div>
                                        <div className="content">
                                            <h2 className="count"><CountUp end={c.count} duration={40} />{c.suffix}</h2>
                                            <p>{c.label}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
