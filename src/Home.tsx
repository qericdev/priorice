import Hero from './home/Hero';
import About from './home/About';
import Services from './home/Services';
import Statistics from './home/Statistics';
import News from './home/News';

function Home() : JSX.Element {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Statistics/>
            <News />
        </div>
    );
}

export default Home;