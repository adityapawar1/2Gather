import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Home from './pages/home/Home.js';
import Profile from './pages/profile/Profile.js';
import NavBar from './components/navbar/NavBar.js';
import SearchBar from './components/searchBar/SearchBar.js';
import Signup from './pages/signup/Signup.js';
import Events from './pages/events/Events.js';
=======
import Home from './pages/home/home.js';
import Profile from './pages/profile/profile.js';
import NavBar from './components/navbar/Navbar.js';
import Signup from './pages/signup/signup.js';
import Events from './pages/events/events.js';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 646730cf32db4fea4113a21a5fa27176a9c28823
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
