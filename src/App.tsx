import './App.css';
import Navbar from './generic/Navbar';
import Hero from './home/Hero';
import About from './home/About';
import Services from './home/Services';
import Statistics from './home/Statistics';
import News from './home/News';
import Footer from './generic/Footer';
function App() : JSX.Element {

  function toTheTop () : void {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

  return (
    <div onLoad={toTheTop} className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Statistics/>
      <News />
      <Footer />
    </div>
  );
}

export default App;
