import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';

const App = () => {
  return (
    <>
      <Navbar />
      <div id='home'>
        <Home />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='services'>
        <Services />
      </div>
    </>
  );
}

export default App;