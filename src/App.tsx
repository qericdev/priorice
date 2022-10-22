import './App.css';
import Navbar from './generic/Navbar';
import Home from './Home';
import Footer from './generic/Footer';

function App() : JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
