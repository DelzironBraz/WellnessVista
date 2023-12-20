import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Home from './pages/Home';
import Services from './pages/Services';

const App = () => {
  return (
    <main>
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

      <div id='doctors'>
        <Doctors />
      </div>
    </main>
  );
}

export default App;