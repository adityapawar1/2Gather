import React, { useState } from "react";

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
import { SocketProvider } from "@ericlathrop/phoenix-js-react-hooks";
import { UserProvider } from "./UserContext";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { SocketProvider } from "./SocketContext";
import Event from "./components/Events/Event";
import EventList from "./components/Events/EventList";

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
      <UserProvider
        value={{
          user_name: "Some Person",
          user_email: "test@gmail.com",
          user_id: 5,
        }}
      >
        <SocketProvider url={socketUrl} options={socketOptions}>
          {/* <Router> */}
          {/* <NavBar/> */}
          {/* <Signup /> */}
          {/* <Routes> */}
          {/* <Route exact path="/home" element={<Home/>} />
        <Route exact path="/profile" element={<Events/>} /> */}
          {/* <Events /> */}
          <Route exact path="/profile" element={<Chat event_id={"jdksa"} />} />
          {/* </Routes>
    </Router> */}
          {/* <SearchBar /> */}
        </SocketProvider>
      </UserProvider>
    </div>
  );
}

export default App;
