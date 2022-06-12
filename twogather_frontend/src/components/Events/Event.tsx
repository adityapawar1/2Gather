import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./event.css";

type EventProps = {
  start_time: string;
  end_time: string;
  participants: number;
  address: string;
  title: string;
};

function Event({
  start_time,
  end_time,
  participants = 0,
  address,
  title,
}: EventProps) {
  //Add Icon for Participants maybe
  return (
    <div className="m-2 event p-1">
      <div className="event-banner m-0 p-0"></div>
      <div className="text-left p-3">
        <div className="event-title">{title}</div>
        <div className="text-muted text-wrap">
          <div>
            {start_time} to {end_time} · {address}
          </div>
          <div>
            {participants} Participant{participants == 1 ? "" : "s"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
