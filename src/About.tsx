import Navbar from './generic/Navbar';
import Footer from './generic/Footer';
import HeroAbout from './about/HeroAbout';

function About() : JSX.Element {
    return (
        <div>
            <Navbar />
            <HeroAbout />
            <Footer />
        </div>
    );
}

export default About;