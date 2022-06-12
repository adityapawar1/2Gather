import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home.js";
import Profile from "./pages/profile/profile.js";
import NavBar from "./components/navbar/NavBar.js";
import SearchBar from "./components/searchBar/SearchBar.js";
import Signup from "./pages/signup/Signup.js";
import Events from "./pages/events/Events.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat.tsx";
import UserContext from "./store";

function App() {
  return (
    <div className="App">
      <UserContext.Provider
        value={{
          user_name: "test1",
          user_email: "test@gmail.com",
          user_id: 5,
        }}
      >
        <Chat event_id={"dasjkldja"}></Chat>
        {/* <Router> */}
        {/* <NavBar/> */}
        {/* <Routes> */}
        {/* <Route exact path="/home" element={<Home/>} />
        <Route exact path="/profile" element={<Events/>} /> */}
        {/* <Events /> */}
        {/* </Routes>
    </Router> */}
        <SearchBar />
      </UserContext.Provider>
    </div>
  );
}

export default App;
