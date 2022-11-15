import Navbar from './generic/Navbar';
import Footer from './generic/Footer';
import HeroAbout from './about/HeroAbout';
import Team from './about/Team';
import Partner from './about/Partner';
import Subscribe from './generic/Subscribe';

function About() : JSX.Element {

    function toTheTop () : void {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    return (
        <div onLoad={toTheTop}>
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