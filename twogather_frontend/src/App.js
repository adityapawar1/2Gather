import React, {useState} from 'react';

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
import {UserProvider} from "./UserContext";
// import { SocketProvider } from "./SocketContext";
import Event from "./components/Events/Event";
import EventList from './components/Events/EventList';

function App() {
  const socketUrl = "ws://localhost:4000/socket";
  const socketOptions = { params: { token: "" } };

  return (
    <UserProvider>
      <div className="App">
          {/* <SocketProvider url={socketUrl} options={socketOptions}>
            <Chat event_id={"dasjkldja"}></Chat>
          </SocketProvider> */}
          {/* <Route exact path="/home" element={<Home/>} />
          <Route exact path="/profile" element={<Events/>} /> */}
          <EventList/>
      </div>
    </UserProvider>

  );
}

export default App;
