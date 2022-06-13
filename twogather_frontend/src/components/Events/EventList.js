import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import Event from "./Event.js";
import "./event.css";
import data from './data';


const EventList = (props) => {
  //call api for getting event

  const slideLeft = () => {
    let slider= document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  Object.keys(data).forEach(function(key) {
    console.log('Key : ' + key + ', Value : ' + data[key])})

  console.log(JSON.stringify(data));
  return (
    <div>
      <div className="list-header">
        <div className="tag-title ml-4">{props.tag}</div>
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
      <div id="slider" className="event-list pl-3">
        {
          data[props.tag].map((event) => {
            return(
              <div className="event-card">
                <Event
                  tag={props.tag}
                  start_time={event.start_time}
                  end_time={event.end_time}
                  participants={event.participants}
                  address={event.address}
                  title={event.title}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default EventList;
