import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home.js';
import Profile from './pages/profile/profile.js';
import NavBar from './components/navbar/Navbar.js';
import SearchBar from './components/searchBar/SearchBar.js';
import Signup from './pages/signup/signup.js';
import Events from './pages/events/events.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/* <NavBar/> */}
      {/* <Routes> */}
        {/* <Route exact path="/home" element={<Home/>} />
        <Route exact path="/profile" element={<Events/>} /> */}
        <Events />
      {/* </Routes>
    </Router> */}
      <SearchBar/>
    </div>
  );
}

export default App;
