import React, {useState} from "react";
import { Col, Row, Container } from "react-bootstrap";
import './event.css'

function Event(props){
  
  // let eventDescription
  
  // if(props){
  //   eventDescription = props.eventDescription
  // }

  // let eventDescription = {
  //   startTime: ""

  // };

  //Add Icon for Participants maybe
  return (
    <div className= "m-2 event p-1">
      <div className="event-banner m-0 p-0"></div>
      <div className="text-left p-3">
        <div className="event-title">
          Event Title
        </div>
        <div className="text-muted text-wrap">
          <div>
            June 12 8pm to Jun 12 9pm · Central Park, CA
          </div>
          <div>
            5 Participants
          </div>
        </div>
      </div>
    </div>
  );

}

export default Event;
