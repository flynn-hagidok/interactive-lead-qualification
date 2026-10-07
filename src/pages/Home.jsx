import About from "../sections/About";
import Contact from "../sections/Contact";
import CTA from "../sections/CTA";
import Hero from "../sections/Hero";
import HowItWork from "../sections/HowItWork";
import Services from "../sections/Services";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <HowItWork />
            <Services />
            <Contact />
            <CTA />
        </div>
    )
};

export default Home;