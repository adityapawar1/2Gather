import React, { useState, useContext, useEffect, ReactNode } from "react";
import { UserContext } from "../../UserContext";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import Event from "./Event.tsx";
import "./event.css";

type EventType = {
  id?: number;
  title: string;
  description: string;
  tags: string[];
  location: {
    lat: string;
    lng: string;
    address?: string;
  };
  time: {
    start: string;
    end: string;
  };
  participants?: number;
};

type EventListProps = {
  tag: string;
  events: EventType[];
};

const EventList = ({ tag, events }: EventListProps) => {
  //call api for getting event
  if (typeof events === "undefined" || events.length === 0) {
    console.error(`Tag: ${tag} has no events`);
    return;
  }

  const slideLeft = () => {
    let slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <div className="list-header">
        <div className="tag-title ml-4">{tag}</div>
        <div className="slide-bar mr-4">
          <ArrowBackIosRoundedIcon
            onClick={slideLeft}
            width="10"
            height="30"
            className="m-0"
          />
          <ArrowForwardIosRoundedIcon
            onClick={slideRight}
            width="30"
            height="30"
            className="ml-4"
          />
        </div>
      </div>
      {/* map data */}
      <div id="slider" className="event-list pl-3">
        {events.map((event: EventType): ReactNode => {
          return (
            <div className="event-card">
              <Event
                start_time={event.time.start}
                end_time={event.time.end}
                participants={event.participants}
                address={event.location.address}
                title={event.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventList;
