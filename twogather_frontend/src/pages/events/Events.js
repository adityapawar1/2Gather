import React from "react";
import "./events.css";
import EventInfo from "../../components/EventInfo/EventInfo.js";
import EventScroller from "../../components/EventScroller/EventScroller.js";
// git pls
const Events = () => {
  return (
    <div>
      <div className="p-3" id="wrapper">
        <div id="div1">
          <EventInfo />
        </div>
        <div className="p-3" id="div2">
          <EventScroller />
        </div>
      </div>
    </div>
  );
};

export default Events;
