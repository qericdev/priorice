import Navbar from "./generic/Navbar";
import Footer from "./generic/Footer";
import Service from "./services/Service";

function Services() : JSX.Element {
    return (
        <section>
            <Navbar />
            <Service />
            <Footer />
        </section>
    );
}

export default Services;