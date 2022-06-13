import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./event.css";


function Event(props) {
  //Add Icon for Participants maybe

  console.log("Event Props: " + props);
  return (
    <div className="m-2 event p-1">
      <div className={`event-banner m-0 p-0 ${props.tag === "hackathon" ? "bg-blue" : "bg-green"}`}></div>
      <div className="text-left p-3">
        <div className="event-title">{props.title}</div>
        <div className="text-muted text-wrap">
          <div>
            {props.start_time} to {props.end_time} · {props.address}
          </div>
          <div>
            {props.participants} Participants
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
