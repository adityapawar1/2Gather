import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home.js";
import Profile from "./pages/profile/Profile.js";
import NavBar from "./components/navbar/NavBar.js";
import SearchBar from "./components/searchBar/SearchBar.js";
import Signup from "./pages/signup/Signup.js";
import Events from "./pages/events/Events.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat.tsx";
import UserContext from "./store";
import { SocketProvider } from "@ericlathrop/phoenix-js-react-hooks";
import Event from "./components/Events/Event";

function App() {
  const socketUrl = "ws://localhost:4000/socket";
  const socketOptions = {
    // logger: (kind, msg, data) => {
    //   console.log(`${kind}: ${msg}`, data);
    // },
    params: { token: "dasdsadasdasdasd" },
  };

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          user_name: "Some Person",
          user_email: "test@gmail.com",
          user_id: 5,
        }}
      >
        <SocketProvider url={socketUrl} options={socketOptions}>
          <Chat event_id={"dasjkldja"}></Chat>
        </SocketProvider>
        {/* <Router> */}
        {/* <NavBar/> */}
        {/* <Signup /> */}
        {/* <Routes> */}
        {/* <Route exact path="/home" element={<Home/>} />
        <Route exact path="/profile" element={<Events/>} /> */}
        {/* <Events /> */}
        {/* </Routes>
    </Router> */}
        {/* <SearchBar /> */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
