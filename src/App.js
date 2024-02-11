import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css';
import About from './About';
import Home from './Home';

function App() {
  return (
    <>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
