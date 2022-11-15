import Navbar from "./generic/Navbar";
import Footer from "./generic/Footer";
import Service from "./services/Service";

function Services() : JSX.Element {

    function toTheTop () : void {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <section onLoad={toTheTop}>
            <Navbar />
            <Service />
            <Footer />
        </section>
    );
}

export default Services;