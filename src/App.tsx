import './App.css';
import Navbar from './generic/Navbar';
import Hero from './home/Hero';
import About from './home/About';
import Footer from './generic/Footer';

function App() : JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
