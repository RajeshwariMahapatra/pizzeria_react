import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/Menu' exact Component={Menu}/>
          <Route path='/About' exact Component={About}/>
          <Route path='/Contact' exact Component={Contact}/>
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
