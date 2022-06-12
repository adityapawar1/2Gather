import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home.js';
import Profile from './pages/profile/Profile.js';
import NavBar from './components/navbar/NavBar.js';
import Signup from './pages/signup/Signup.js';
import Events from './pages/events/Events.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <NavBar/>
      {/* <Routes> */}
        {/* <Route exact path="/home" element={<Home/>} />
        <Route exact path="/profile" element={<Events/>} /> */}
        {/* <Events /> */}
      {/* </Routes>
    </Router> */}
    </div>
  );
}

export default App;
