import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home.js";
import Profile from "./pages/profile/Profile.js";
import NavBar from "./components/navbar/NavBar.js";
import SearchBar from "./components/searchBar/SearchBar.js";
// import Signup from "./pages/signup/Signup.js";
import Login from "./pages/signup/Login.js";
import SignUp from "./pages/signup/Signup.js";

import Events from "./pages/events/Events.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat.tsx";
import { SocketProvider } from "@ericlathrop/phoenix-js-react-hooks";
import { UserProvider } from "./UserContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { SocketProvider } from "./SocketContext";
import Event from "./components/Events/Event";
import EventList from "./components/Events/EventList";
import { Link } from "react-router-dom";

function RouterButton({ link }) {
  return <Link to={link}>{link}</Link>;
}

function App() {
  const socketUrl = "ws://localhost:4000/socket";
  const socketOptions = {
    // logger: (kind, msg, data) => {
    //   console.log(`${kind}: ${msg}`, data);
    // },
    params: { token: "dasdsadasdasdasd" },
  };

  return (
    <UserProvider
      value={{
        user_name: "Some Person",
        user_email: "test@gmail.com",
        user_id: 5,
      }}
    >
      <div className="App">
        {/* <SocketProvider url={socketUrl} options={socketOptions}> */}
          {/* <Router> */}
          <NavBar/>
          {/* <Login/> */}
          {/* <Signup /> */}
          {/* <Routes> */}
          {/* <Route exact path="/home" element={<Home/>} />
          <Route exact path="/profile" element={<Events/>} /> */}
        {/* <Home/> */}
        <Events/>
      </div>
    </UserProvider>
  );
}

export default App;
