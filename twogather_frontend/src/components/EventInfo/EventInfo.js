import React, { useEffect, useState } from "react";
import "./EventInfo.css";
import Home from "../eventMap/EventMap";
import EventInfoTabs from "../eventInfoTabs/EventInfoTabs";
import Tags from "../UneditableTags/Tags";
import events from "./events.json";

export default function EventInfo(props) {
  const [event, setEvent] = useState({});
  const [text, setText] = useState("Register");

  useEffect(() => {}, []);

  const handleClick = (event) => {
    event.target.style.backgroundColor = "#3fd963";
  };

  const changeText = (text) => {
    setText(text);
  };

  return (
    <div>
      <div id="top">
        <div id="name">{event.title}</div>
        <div id="host">Organized by: {event.organizer}</div>
        <button
          onClick={(event) => {
            changeText("Registered!");
            handleClick(event);
          }}
          className="button"
          id="register"
        >
          {text}
        </button>
      </div>
      <div id="map" className="map">
        <Home />
      </div>
      <div id="bottom">
        <div className="tabs">
          <EventInfoTabs />
        </div>
        <div className="tags">
          <div className="tagName">Tags</div>
          <Tags />
        </div>
        <div className="desc">
          <div className="descName">Description</div>
          <p className="descInfo">{event.description}</p>
        </div>
      </div>
    </div>
  );
}
