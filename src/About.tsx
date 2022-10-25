import Navbar from './generic/Navbar';
import Footer from './generic/Footer';
import HeroAbout from './about/HeroAbout';
import Team from './about/Team';
import Partner from './about/Partner';
import Subscribe from './about/Subscribe';

function About() : JSX.Element {
    return (
        <div>
            <Navbar />
            <HeroAbout />
            <Team />
            <Partner/>
            <Subscribe/>
            <Footer />
        </div>
    );
}

export default About;