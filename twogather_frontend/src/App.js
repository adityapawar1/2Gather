import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home.js';
import Profile from './pages/profile/Profile';
import NavBar from './components/navbar/NavBar';
import Signup from './pages/signup/Signup';
import Events from './pages/events/Events';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/profile" element={<Events/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
