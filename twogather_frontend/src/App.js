import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home.js';
import Profile from './pages/profile/profile.js';
import Navbar from './components/navbar/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/profile" element={<Profile/>} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
