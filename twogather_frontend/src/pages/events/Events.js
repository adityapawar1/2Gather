import React from "react";
import "./events.css";
import EventInfo from "../../components/EventInfo/EventInfo";
import EventScroller from "../../components/EventScroller/EventScroller";
// git pls
const Events = () => {
  return (
    <div>
      <div id="wrapper">
        <div id="div1">
          <EventInfo />
        </div>
        <div id="div2">
          <EventScroller />
        </div>
      </div>
    </div>
  );
};

export default Events;
