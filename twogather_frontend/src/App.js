import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Navbar from './components/navbar/Navbar';
import Signup from './pages/signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/profile" element={<Signup/>} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
