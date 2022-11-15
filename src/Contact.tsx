import Navbar from "./generic/Navbar";
import Footer from "./generic/Footer";
import ContactSection from "./contact/ContactSection";

function Contact() : JSX.Element {

    function toTheTop () : void {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <section onLoad={toTheTop}>
            <Navbar />
            <ContactSection />
            <Footer />
        </section>
    );
}

export default Contact;