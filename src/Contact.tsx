import Navbar from "./generic/Navbar";
import Footer from "./generic/Footer";
import ContactSection from "./contact/ContactSection";

function Contact() : JSX.Element {
    return (
        <section>
            <Navbar />
            <ContactSection />
            <Footer />
        </section>
    );
}

export default Contact;