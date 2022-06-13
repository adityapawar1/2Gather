import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
// import Home from "./pages/home/Home.tsx";
import Home from "./pages/home/Home";

import Profile from "./pages/profile/Profile.js";
import NavBar from "./components/navbar/NavBar.js";
import SearchBar from "./components/searchBar/SearchBar.js";
import Signup from "./pages/signup/Signup.js";
import Events from "./pages/events/Events.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat.tsx";
import { SocketProvider } from "@ericlathrop/phoenix-js-react-hooks";
import { UserProvider } from "./UserContext";
// import { SocketProvider } from "./SocketContext";
import Event from "./components/Events/Event.js";
import EventList from "./components/Events/EventList.js";
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
    <div className="App">
      <UserProvider
        value={{
          user_name: "Some Person",
          user_email: "test@gmail.com",
          user_id: 5,
          jwt_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTUwOTA2NzYsImlhdCI6MTY1NTA2MTg3NiwiaWQiOjMzLCJpc3MiOiIyZ2F0aGVyLWF1dGgiLCJqdGkiOiIycnJ2YzBmaWZmOThsZ3ZsMDgwMDAwbzQiLCJuYmYiOjE2NTUwNjE4NzZ9.iFPg9uyG2jwasj_RuIXBd_TApiIE6ohkTU4onObZIRc",
        }}
      >
        <Home/>
      </UserProvider>
    </div>
  );
}

export default App;
