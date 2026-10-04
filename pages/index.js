import Layout from "@/components/layout/Layout"

import Hero from "@/components/sections/Hero"
import Features1 from "@/components/sections/Features1"
import About1 from "@/components/sections/About1"
import Services1 from "@/components/sections/Services1"
import CoatingExplainer from "@/components/sections/CoatingExplainer"
import Counter1 from "@/components/sections/Counter1"
import Faq1 from "@/components/sections/Faq1"
import CtaBand from "@/components/sections/CtaBand"
import OurWork from "@/components/sections/OurWork"

export default function Home() {
    return (
        <>
            <Layout headerTop={true}>
                <Hero />
                <Features1 />
                <About1 />
                <Services1 />
                <OurWork />
                <CoatingExplainer />
                <Counter1 />
                <Faq1 />
                <CtaBand />
            </Layout>
        </>
    )
}
